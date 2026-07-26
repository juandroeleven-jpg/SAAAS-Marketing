"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Modelo real: "MacBook Laptop" por Issac Ghazanfar, licencia CC Attribution
// (uso comercial permitido con credito) — https://sketchfab.com
// Reemplaza la textura SOLO del nodo "Ecran" (pantalla) por un canvas 2D
// animado con el mismo grafo de apps/agentes, sin tocar el resto del
// material compartido (cuerpo/bisagra usan la misma textura base).
// La malla de la pantalla ("Object_6", hijo de "Ecran_6") solo usa la
// mitad izquierda del atlas UV compartido: u[0.004-0.5] v[0.004-0.861]
// (medido con un debug de bounding box de UV). Las coordenadas de los
// nodos son fracciones 0-1 DENTRO de ese rectangulo, no del canvas completo.
// Medido con una grilla de calibracion 10x10 renderizada sobre la malla: la
// malla "Object_6" cubre la tapa ENTERA (cara trasera incluida), y la
// pantalla frontal ocupa todo el ancho del rango UV pero solo la MITAD
// INFERIOR en V -- v por encima de ~0.43 cae en la parte de atras de la
// tapa. Los valores de abajo son esa region frontal con un margen adentro
// que hace de bisel.
const PANTALLA_UV = { uMin: 0.038, uMax: 0.466, vMin: 0.522, vMax: 0.826 };

// Espacio de diseno en el que se dibuja la UI de la pantalla, en 16:10 como
// una pantalla real. Se "aplasta" al meterlo en el rectangulo UV (que es mas
// alto que ancho): la GPU lo vuelve a estirar al mapearlo sobre la tapa, asi
// que las proporciones salen correctas en el render final.
const DISENO = { w: 1600, h: 1000 };
const BARRA_H = 74;

// Grafo tipo canvas de automatizacion real (fan-in / fan-out sobre un nodo
// central), no circulos sueltos con etiquetas. Coordenadas = centro de cada
// tarjeta, en espacio de diseno.
// Al acercar la camara, el encuadre recorta los bordes de la pantalla: solo
// queda visible aproximadamente x[360, 1575] del espacio de diseno. Por eso
// el grafo se mantiene compactado dentro de ese rango -- con las posiciones
// anteriores (columna de entrada en x=250) Webhook y Discord quedaban fuera
// de cuadro y el flujo perdia su origen.
const TARJETA = { w: 290, h: 86 };
const NODOS = [
  { id: "webhook", label: "Webhook", sub: "Disparador", x: 625, y: 300, color: "#F43F5E" },
  { id: "discord", label: "Discord", sub: "Mensajes", x: 625, y: 730, color: "#5865F2" },
  { id: "gpt", label: "ChatGPT", sub: "Agente", x: 1010, y: 515, color: "#10B981" },
  { id: "slack", label: "Slack", sub: "Notifica", x: 1380, y: 250, color: "#36C5F0" },
  { id: "drive", label: "Drive", sub: "Archiva", x: 1380, y: 430, color: "#FBBC04" },
  { id: "notion", label: "Notion", sub: "Registra", x: 1380, y: 610, color: "#E5E7EB" },
  { id: "canva", label: "Canva", sub: "Publica", x: 1380, y: 790, color: "#8B5CF6" },
];
const CONEXIONES: [string, string][] = [
  ["webhook", "gpt"],
  ["discord", "gpt"],
  ["gpt", "slack"],
  ["gpt", "drive"],
  ["gpt", "notion"],
  ["gpt", "canva"],
];
function nodo(id: string) {
  return NODOS.find((n) => n.id === id)!;
}

// Curva entre el borde derecho de la tarjeta origen y el izquierdo de la
// destino, con tiradores horizontales -- el mismo trazo que usan n8n/Zapier.
function curva(a: (typeof NODOS)[number], b: (typeof NODOS)[number]) {
  const x0 = a.x + TARJETA.w / 2;
  const y0 = a.y;
  const x1 = b.x - TARJETA.w / 2;
  const y1 = b.y;
  const dx = Math.max(60, (x1 - x0) * 0.5);
  return { x0, y0, cx0: x0 + dx, cy0: y0, cx1: x1 - dx, cy1: y1, x1, y1 };
}

function puntoEnCurva(c: ReturnType<typeof curva>, t: number): [number, number] {
  const u = 1 - t;
  const x =
    u * u * u * c.x0 + 3 * u * u * t * c.cx0 + 3 * u * t * t * c.cx1 + t * t * t * c.x1;
  const y =
    u * u * u * c.y0 + 3 * u * u * t * c.cy0 + 3 * u * t * t * c.cy1 + t * t * t * c.y1;
  return [x, y];
}

function rectRedondeado(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function usarTexturaPantalla() {
  const { gl } = useThree();
  const canvas = useMemo(() => {
    const c = document.createElement("canvas");
    // La malla solo muestrea una fraccion del atlas: el rectangulo de
    // pantalla se queda con ~0.43 x 0.30 del canvas. A 3072x1920 eso da
    // ~1320x580 texeles reales para la pantalla, que es lo que hace falta
    // para que no se vea pixelada al agrandar el objeto.
    c.width = 3072;
    c.height = 1920;
    return c;
  }, []);
  const textura = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    // El modelo se ve pequeno en pantalla (laptop chica dentro de la
    // escena) -- sin esto, el mipmapping difumina circulos/texto chicos
    // hasta volverlos casi invisibles al minificarse tanto.
    // La pantalla se ve en angulo oblicuo, que es justo el caso que degrada
    // mas una textura: sin mipmaps + anisotropia el muestreo se rompe y se
    // percibe "pixelado"/con moire. Con anisotropia al maximo que soporte la
    // GPU, el texto y las lineas finas se mantienen nitidos en diagonal.
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.anisotropy = gl.capabilities.getMaxAnisotropy();
    // Fix "texto espejado" (ganador experimento 4/5, intento 4): la malla
    // "Object_6" usa un UV horizontalmente invertido para este atlas, lo
    // que hace que cualquier texto dibujado normal en el canvas salga en
    // espejo sobre la pantalla del laptop. IMPORTANTE: la rotacion no se
    // aplica via THREE.Texture.rotation/center -- esas propiedades operan
    // sobre el espacio UV COMPLETO (0-1) de la textura, pero esta malla
    // solo muestrea el sub-rectangulo PANTALLA_UV (u 0.04-0.46, v 0.06-0.8)
    // de un atlas compartido con el resto del cuerpo del laptop. Rotar la
    // textura completa mueve el contenido fuera de ese sub-rectangulo y
    // deja la pantalla en blanco (se detecto exactamente asi al probar).
    // La rotacion de 180 grados se aplica en cambio DENTRO del canvas 2D,
    // alrededor del centro del propio rectangulo PANTALLA_UV, en el
    // useEffect de dibujo de abajo.
    return t;
  }, [canvas, gl]);

  // El bisel negro no cambia nunca: se pinta una sola vez sobre TODO el
  // canvas y despues cada frame solo se redibuja el rectangulo de pantalla.
  // (La malla cubre la tapa entera, cara trasera incluida, asi que este
  // negro tambien deja la parte de atras oscura como en el modelo original.)
  const biselPintado = useRef(false);
  const ultimoDibujo = useRef(0);

  useFrame((state) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const t = state.clock.getElapsedTime();
    // Subir una textura de 3072x1920 a la GPU en cada frame es caro. A 24
    // por segundo la animacion se sigue viendo fluida y el coste baja a
    // menos de la mitad.
    if (t - ultimoDibujo.current < 1 / 24) return;
    ultimoDibujo.current = t;
    const W = canvas.width;
    const H = canvas.height;

    if (!biselPintado.current) {
      ctx.fillStyle = "#08090B";
      ctx.fillRect(0, 0, W, H);
      biselPintado.current = true;
    }

    // Rectangulo real de "pantalla" dentro del atlas UV compartido. El eje V
    // va invertido respecto a las filas del canvas (flipY por defecto de las
    // texturas en three.js), por eso vMax define el borde superior.
    const x0 = PANTALLA_UV.uMin * W;
    const x1 = PANTALLA_UV.uMax * W;
    const y0 = (1 - PANTALLA_UV.vMax) * H;
    const y1 = (1 - PANTALLA_UV.vMin) * H;
    const anchoRect = x1 - x0;
    const altoRect = y1 - y0;

    ctx.save();
    // Fix "texto espejado": la malla muestrea este sub-rectangulo con el UV
    // rotado 180 grados, asi que se rota todo el dibujo alrededor del centro
    // del propio rectangulo (no del canvas) para compensarlo.
    ctx.translate((x0 + x1) / 2, (y0 + y1) / 2);
    ctx.rotate(Math.PI);
    ctx.translate(-(x0 + x1) / 2, -(y0 + y1) / 2);
    // A partir de aca se dibuja en el espacio de diseno 16:10; la escala no
    // uniforme lo aplasta dentro del rectangulo UV y la GPU lo re-estira al
    // proyectarlo sobre la tapa, devolviendo las proporciones correctas.
    ctx.translate(x0, y0);
    ctx.scale(anchoRect / DISENO.w, altoRect / DISENO.h);
    ctx.beginPath();
    ctx.rect(0, 0, DISENO.w, DISENO.h);
    ctx.clip();

    // Fondo de la app (oscuro: es una pantalla encendida, no una hoja)
    ctx.fillStyle = "#0D1117";
    ctx.fillRect(0, 0, DISENO.w, DISENO.h);


    // Retícula de puntos del lienzo
    ctx.fillStyle = "#1B2331";
    for (let gx = 40; gx < DISENO.w; gx += 46) {
      for (let gy = BARRA_H + 30; gy < DISENO.h; gy += 46) {
        ctx.beginPath();
        ctx.arc(gx, gy, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Barra superior de ventana
    ctx.fillStyle = "#212C3B";
    ctx.fillRect(0, 0, DISENO.w, BARRA_H);
    ctx.fillStyle = "#33425A";
    ctx.fillRect(0, BARRA_H - 3, DISENO.w, 3);
    const semaforo = ["#FF5F57", "#FEBC2E", "#28C840"];
    semaforo.forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(660 + i * 46, BARRA_H / 2, 14, 0, Math.PI * 2);
      ctx.fillStyle = c;
      ctx.fill();
    });
    ctx.fillStyle = "#A9B7CA";
    ctx.font = "600 30px system-ui, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Codeflow — Orquestador", 812, BARRA_H / 2 + 11);
    // Indicador "en ejecucion", parpadeo lento
    const vivo = 0.55 + Math.sin(t * 2.4) * 0.45;
    ctx.beginPath();
    ctx.arc(DISENO.w - 180, BARRA_H / 2, 9, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(52, 211, 153, ${vivo})`;
    ctx.fill();
    ctx.fillStyle = "#5D6B7E";
    ctx.font = "500 26px system-ui, sans-serif";
    ctx.fillText("activo", DISENO.w - 158, BARRA_H / 2 + 9);

    // Conexiones (curvas, por debajo de las tarjetas)
    ctx.lineCap = "round";
    CONEXIONES.forEach(([a, b]) => {
      const c = curva(nodo(a), nodo(b));
      ctx.beginPath();
      ctx.moveTo(c.x0, c.y0);
      ctx.bezierCurveTo(c.cx0, c.cy0, c.cx1, c.cy1, c.x1, c.y1);
      ctx.strokeStyle = "#2B3A4F";
      ctx.lineWidth = 5;
      ctx.stroke();
    });

    // Paquetes viajando por cada conexion
    CONEXIONES.forEach(([a, b], i) => {
      const c = curva(nodo(a), nodo(b));
      const dur = 2.6 + (i % 3) * 0.5;
      const p = ((t + i * 0.45) % dur) / dur;
      const [px, py] = puntoEnCurva(c, p);
      const desvanece = Math.sin(p * Math.PI); // entra y sale sin cortes
      ctx.beginPath();
      ctx.arc(px, py, 20, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${0.16 * desvanece})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(147, 197, 253, ${desvanece})`;
      ctx.fill();
    });

    // Tarjetas de nodo
    NODOS.forEach((n, i) => {
      const x = n.x - TARJETA.w / 2;
      const y = n.y - TARJETA.h / 2;

      rectRedondeado(ctx, x, y, TARJETA.w, TARJETA.h, 18);
      ctx.fillStyle = "#19212D";
      ctx.fill();
      ctx.strokeStyle = "#2C3A4D";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Cuadrito de color del servicio
      rectRedondeado(ctx, x + 18, y + 19, 48, 48, 13);
      ctx.fillStyle = n.color;
      ctx.fill();

      ctx.textAlign = "left";
      ctx.fillStyle = "#E6EDF7";
      ctx.font = "600 30px system-ui, sans-serif";
      ctx.fillText(n.label, x + 82, y + 40);
      ctx.fillStyle = "#77869B";
      ctx.font = "500 24px system-ui, sans-serif";
      ctx.fillText(n.sub, x + 82, y + 70);

      // Punto de estado, desfasado por nodo
      ctx.beginPath();
      ctx.arc(x + TARJETA.w - 26, y + TARJETA.h / 2, 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(52, 211, 153, ${0.35 + Math.abs(Math.sin(t * 1.6 + i)) * 0.65})`;
      ctx.fill();
    });

    ctx.restore();

    textura.needsUpdate = true;
  });

  return textura;
}

// El modelo no nace mirando a la camara: la tapa queda de costado respecto
// al eje sobre el que ubicamos la camara. Este giro sobre Y lo endereza para
// que la pantalla se vea casi de frente, con un angulo leve.
const GIRO_Y = -0.58;

function Laptop() {
  const { scene } = useGLTF("/modelos-3d/macbook.glb");
  const pantallaRef = useRef<THREE.Mesh | null>(null);
  const textura = usarTexturaPantalla();

  useEffect(() => {
    // "Ecran_6" es un nodo contenedor vacio; la malla real es su hijo
    // ("Object_6"). Buscamos por ancestro, no por nombre propio del mesh.
    function tieneAncestroEcran(obj: THREE.Object3D): boolean {
      let actual: THREE.Object3D | null = obj;
      while (actual) {
        if (actual.name.toLowerCase().includes("ecran")) return true;
        actual = actual.parent;
      }
      return false;
    }

    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh && tieneAncestroEcran(obj)) {
        const mesh = obj as THREE.Mesh;
        pantallaRef.current = mesh;
        // Material nuevo desde cero (no clonado) para que ningun mapa de
        // normal/rugosidad/metalico original siga afectando el resultado
        // -- eso era lo que lavaba los colores contra la iluminacion de
        // la escena. Emissive puro = se ve igual sin importar la luz,
        // como una pantalla real que emite su propia imagen.
        const nuevoMaterial = new THREE.MeshBasicMaterial({
          map: textura,
        });
        mesh.material = nuevoMaterial;

      }
    });
  }, [scene, textura]);

  return <primitive object={scene} rotation={[0, GIRO_Y, 0]} />;
}

// Flotacion: el objeto sube y baja suavemente, y se inclina apenas, para que
// se lea como suspendido en el aire y no apoyado en el borde del contenedor.
function Flotacion({ children }: { children: React.ReactNode }) {
  const grupo = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!grupo.current) return;
    const t = state.clock.getElapsedTime();
    grupo.current.position.y = Math.sin(t * 0.7) * 0.035;
    grupo.current.rotation.z = Math.sin(t * 0.5) * 0.012;
  });
  return <group ref={grupo}>{children}</group>;
}

function Iluminacion() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} />
    </>
  );
}

// Angulo aprobado por el usuario: frontal a la pantalla, con poco
// desplazamiento lateral y poca altura. Ademas de mostrar mas de frente el
// contenido, reduce lo oblicuo del muestreo de la textura.
// Para acercar la camara se ESCALA este vector (misma direccion de vista,
// menor magnitud) — no se cambia su direccion.
const DIRECCION_CAMARA = new THREE.Vector3(-0.16, 0.22, -1.5);
// Se aleja respecto al encuadre "recortado" anterior: ahora el objeto entra
// completo, con aire alrededor, para que se lea flotando en vez de cortado.
const ACERCAMIENTO = 1.28;
const POSICION_CAMARA = DIRECCION_CAMARA.clone().multiplyScalar(ACERCAMIENTO);

// Angulos esfericos del encuadre inicial, usados para acotar la orbita.
const RADIO_INICIAL = POSICION_CAMARA.length();
const POLAR_INICIAL = Math.acos(POSICION_CAMARA.y / RADIO_INICIAL);
const AZIMUT_INICIAL = Math.atan2(POSICION_CAMARA.x, POSICION_CAMARA.z);
// Margen de giro: suficiente para que se sienta interactivo, pero sin llegar
// nunca a ver la tapa trasera ni el laptop desde abajo.
const MARGEN_AZIMUT = 0.2;
const MARGEN_POLAR_ARRIBA = 0.18;
const MARGEN_POLAR_ABAJO = 0.14;

function CamaraFija() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.copy(POSICION_CAMARA);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

export default function ModeloLaptop() {
  return (
    // Contenedor grande y con aire: el objeto entra completo y flota dentro,
    // sin recortarse contra los bordes. Sigue sangrando un poco fuera de su
    // columna en desktop para ganar tamano sin obligar a acercar la camara.
    <div className="relative aspect-[5/4.4] w-full lg:-mr-[4vw] lg:w-[calc(100%+4vw)]">
      {/* Sombra difusa debajo: es lo que vende el efecto de estar suspendido */}
      <div className="pointer-events-none absolute inset-x-[18%] bottom-[8%] h-[10%] rounded-[50%] bg-cf-text/25 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[4%] h-[18%] rounded-[50%] bg-cf-accent/25 blur-3xl" />
      <Canvas
        camera={{ fov: 36, position: POSICION_CAMARA.toArray() }}
        dpr={Math.min(3, typeof window !== "undefined" ? window.devicePixelRatio : 1)}
      >
        <CamaraFija />
        <Iluminacion />
        <Flotacion>
          <Center scale={2.9}>
            <Laptop />
          </Center>
        </Flotacion>
        {/* Orbita acotada. enableZoom={false} es critico: con la rueda activa
            el canvas se comeria el scroll de la pagina al pasar el cursor. */}
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.45}
          minPolarAngle={POLAR_INICIAL - MARGEN_POLAR_ARRIBA}
          maxPolarAngle={POLAR_INICIAL + MARGEN_POLAR_ABAJO}
          minAzimuthAngle={AZIMUT_INICIAL - MARGEN_AZIMUT}
          maxAzimuthAngle={AZIMUT_INICIAL + MARGEN_AZIMUT}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/modelos-3d/macbook.glb");
