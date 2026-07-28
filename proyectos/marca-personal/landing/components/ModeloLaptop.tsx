"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { DISENO, dibujarFlujo } from "@/lib/flujo";
import { dibujarAgentes } from "@/lib/agentes";
import { usarMovimientoReducido } from "@/lib/movimiento";
import { usarPunteroFino, usarVisibilidad } from "@/lib/visibilidad";
import { usarPuntero } from "@/lib/puntero";

// Que se ve en la pantalla del laptop. Las dos escenas comparten espacio de
// diseno, asi que son intercambiables sin tocar el mapeo UV ni la geometria.
export type Escena = "flujo" | "agentes";

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
const FPS_TEXTURA = 10;

const PANTALLA_UV = { uMin: 0.038, uMax: 0.466, vMin: 0.522, vMax: 0.826 };

function usarTexturaPantalla(escena: Escena, quieto: boolean) {
  const { gl } = useThree();
  const canvas = useMemo(() => {
    const c = document.createElement("canvas");
    // La malla solo muestrea el 13% del atlas (PANTALLA_UV), asi que el
    // resto son pixeles de bisel que no cambian nunca pero que se resubian
    // enteros en cada actualizacion. A 3072x1920 eran 23,6 MB por redibujado
    // (354 MB/s a 15 Hz) para refrescar un rectangulo negro constante.
    // A 2048x1280 son 10,5 MB y quedan ~876x389 texeles utiles para la
    // pantalla, que sigue siendo mas del doble de los ~300 px CSS que ocupa
    // en cuadro.
    c.width = 2048;
    c.height = 1280;
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
    const t = quieto ? 0 : state.clock.getElapsedTime();
    if (quieto && ultimoDibujo.current > 0) return;
    // La subida de la textura es lo unico que produce PICOS: ocurre dentro
    // del mismo frame, asi que cada vez que toca, ese frame absorbe los
    // 10,5 MB de golpe. Bajar la frecuencia no reduce el pico pero si cuantas
    // veces por segundo aparece. A 12 Hz el contenido sigue leyendose fluido
    // (son transiciones lentas) y el 3D no se ve afectado: el render de la
    // escena es independiente de este redibujado y sigue a la tasa del
    // monitor.
    if (t - ultimoDibujo.current < 1 / FPS_TEXTURA) return;
    ultimoDibujo.current = t;
    const W = canvas.width;
    const H = canvas.height;

    if (!biselPintado.current) {
      ctx.fillStyle = "#08090B"; // bisel
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

    if (escena === "agentes") dibujarAgentes(ctx, t);
    else dibujarFlujo(ctx, t);

    ctx.restore();

    textura.needsUpdate = true;
  });

  return textura;
}

// El modelo no nace mirando a la camara: la tapa queda de costado respecto
// al eje sobre el que ubicamos la camara. Este giro sobre Y lo endereza para
// que la pantalla se vea casi de frente, con un angulo leve.
const GIRO_Y = -0.58;

function Laptop({ escena, quieto }: { escena: Escena; quieto: boolean }) {
  const { scene } = useGLTF("/modelos-3d/macbook.glb");
  const pantallaRef = useRef<THREE.Mesh | null>(null);
  const textura = usarTexturaPantalla(escena, quieto);

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
        // toneMapped:false, igual que en PantallaFlotante. Sin esto la
        // pantalla pasa por el tone mapping ACES del renderer y el mismo
        // dibujo sale con colores distintos en cada superficie: el fondo
        // #0D1117 se aplasta casi a negro y el blanco tope baja a #E2E2E2.
        const nuevoMaterial = new THREE.MeshBasicMaterial({
          map: textura,
          toneMapped: false,
        });
        mesh.material = nuevoMaterial;

      }
    });
  }, [scene, textura]);

  return <primitive object={scene} rotation={[0, GIRO_Y, 0]} />;
}

// Entrada: al cargar, el laptop llega desde el lateral derecho y se acomoda
// en su sitio, con un giro que se endereza al llegar (no aparece "puesto",
// llega). Despues queda flotando: sube y baja con un seno lento y se inclina
// apenas, para que se lea suspendido en el aire y no apoyado en el borde.
// Cuanto gira el laptop siguiendo al raton, en radianes en cada extremo de la
// ventana, con inercia para que no copie el temblor del puntero.
const SEGUIMIENTO_Y = 0.16;
const SEGUIMIENTO_X = 0.07;
const INERCIA = 0.06;

const DURACION_ENTRADA = 1.5; // segundos
const DESPLAZAMIENTO_ENTRADA = 2.6; // unidades hacia la derecha
const GIRO_ENTRADA = 0.4; // rad extra que se endereza al llegar

function Flotacion({
  children,
  quieto,
}: {
  children: React.ReactNode;
  quieto: boolean;
}) {
  const grupo = useRef<THREE.Group>(null);
  const inicio = useRef<number | null>(null);
  const puntero = usarPuntero();
  const giro = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!grupo.current) return;
    if (quieto) {
      grupo.current.position.set(0, 0, 0);
      grupo.current.rotation.set(0, 0, 0);
      return;
    }
    const t = state.clock.getElapsedTime();
    if (inicio.current === null) inicio.current = t;
    const transcurrido = t - inicio.current;

    // easeOutCubic: entra rapido y frena al final, que es lo que hace que
    // se sienta que "se acomoda" en vez de deslizarse a velocidad constante.
    const p = Math.min(1, transcurrido / DURACION_ENTRADA);
    const suave = 1 - Math.pow(1 - p, 3);
    const restante = 1 - suave;

    // La flotacion arranca recien cuando la entrada termina, asi los dos
    // movimientos no se pisan.
    const tFlot = Math.max(0, transcurrido - DURACION_ENTRADA);

    grupo.current.position.x = DESPLAZAMIENTO_ENTRADA * restante;
    // Movimiento lento a proposito: periodo ~8.7s (2*PI / 0.72). A 1.15 se
    // sentia inquieto; asi respira. La amplitud sube apenas para que, aun
    // siendo mas lento, se siga notando.
    // Objetivo de giro segun donde este el raton, con inercia: el objeto se
    // orienta hacia el puntero en vez de quedarse mirando siempre al frente.
    const raton = puntero.current;
    const objY = raton.activo ? raton.x * SEGUIMIENTO_Y : 0;
    const objX = raton.activo ? raton.y * SEGUIMIENTO_X : 0;
    giro.current.y += (objY - giro.current.y) * INERCIA;
    giro.current.x += (objX - giro.current.x) * INERCIA;

    grupo.current.position.y =
      Math.sin(tFlot * 0.72) * 0.06 + restante * 0.22;
    grupo.current.rotation.y = restante * GIRO_ENTRADA + giro.current.y;
    // Balanceo leve, con otro periodo para que no se sienta mecanico.
    grupo.current.rotation.z = Math.sin(tFlot * 0.46) * 0.022;
    grupo.current.rotation.x = Math.sin(tFlot * 0.36) * 0.016 + giro.current.x;
  });

  return <group ref={grupo}>{children}</group>;
}

// La suma anterior (0.9 + 1.4 + 0.5) saturaba el aluminio del cuerpo: la
// base y el teclado se iban casi a blanco y se perdia el detalle de las
// teclas. Con menos intensidad vuelve el gris del aluminio y las teclas
// recuperan contraste. Esto NO afecta la pantalla, que usa MeshBasicMaterial
// (sin iluminacion) justamente para que se vea igual pase lo que pase.
function Iluminacion() {
  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight position={[3, 5, 4]} intensity={0.85} />
      <directionalLight position={[-4, 2, -3]} intensity={0.28} />
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
// El objeto mide ~1.04 unidades de alto ya escalado. Con fov 36 el alto
// visible a distancia d es 2*d*tan(18deg) = 0.65*d, o sea 0.9909*ACERCAMIENTO.
// A 1.20 el alto visible es 1.189 y sobran (1.189-1.04)/2 = 0.0745 por lado.
// Por eso la flotacion baja a +-0.06: con la amplitud anterior el teclado se
// saldria del cuadro en el punto bajo del ciclo. Acercar la camara y bajar la
// amplitud van juntos, no son dos ajustes independientes. Margen real que
// queda: 0.0145 unidades. A 1.28 la distancia era
// 1.94 y el alto visible 1.26: sobraban 0.11 arriba y abajo, que la
// flotacion de +-0.12 se comia -- en el punto bajo del ciclo el teclado se
// salia del cuadro. A 1.45 la distancia es 2.20 y el alto visible 1.43, o
// sea 0.075 de margen POR ENCIMA de la flotacion. Pantalla y teclado quedan
// siempre completos.
const ACERCAMIENTO = 1.20;
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

// En contenedores angostos (movil) el ancho visible se achica pero el fov
// vertical es el mismo, asi que el laptop se sale por los costados. Se aleja
// la camara sobre la MISMA linea de vision -- se conserva el angulo, solo
// cambia cuanto entra en cuadro.
function CamaraFija() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspecto = size.width / size.height;
    const factor = aspecto >= 1.25 ? 1 : 1 + (1.25 - aspecto) * 0.9;
    camera.position.copy(POSICION_CAMARA).multiplyScalar(factor);
    camera.lookAt(0, 0, 0);
  }, [camera, size.width, size.height]);
  return null;
}

export default function ModeloLaptop({
  escena = "flujo",
}: {
  escena?: Escena;
}) {
  const quieto = usarMovimientoReducido();
  const fino = usarPunteroFino();
  const [ref, visible] = usarVisibilidad<HTMLDivElement>();

  return (
    // Contenedor grande y con aire: el objeto entra completo y flota dentro,
    // sin recortarse contra los bordes. Sigue sangrando un poco fuera de su
    // columna en desktop para ganar tamano sin obligar a acercar la camara.
    <div
      ref={ref}
      className="relative aspect-[5/3.9] w-full lg:-mr-[14vw] lg:w-[calc(100%+14vw)]"
      role="img"
      aria-label={
        escena === "agentes"
          ? "Portátil mostrando un agente de IA que encadena cuatro pasos de razonamiento y después se conecta a Slack, Drive, Notion y Canva."
          : "Portátil mostrando un flujo de automatización: un webhook y mensajes de Discord disparan un agente de ChatGPT, que notifica en Slack, archiva en Drive, registra en Notion y publica en Canva."
      }
    >
      {/* Sombra difusa debajo: es lo que vende el efecto de estar suspendido */}
      <div className="sombra-flotante pointer-events-none absolute inset-x-[18%] bottom-[8%] h-[10%] rounded-[50%] bg-cf-text/25 blur-2xl" />
      <div className="sombra-flotante pointer-events-none absolute inset-x-[10%] bottom-[4%] h-[18%] rounded-[50%] bg-cf-accent/25 blur-3xl" />
      <Canvas
        // Apagado fuera de pantalla: rAF no se detiene por scroll.
        frameloop={visible ? "always" : "never"}
        camera={{ fov: 36, position: POSICION_CAMARA.toArray() }}
        // dpr tope 2, no 3: en un movil de dpr 3 se rasterizarian 2,25 veces
        // mas pixeles por un detalle que no se percibe a esa densidad.
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <CamaraFija />
        <Iluminacion />
        <Flotacion quieto={quieto}>
          <Center scale={2.9}>
            <Laptop escena={escena} quieto={quieto} />
          </Center>
        </Flotacion>
        {/* Orbita acotada, y solo con raton/trackpad: OrbitControls pone
            touch-action:none en el canvas, asi que en un telefono el dedo
            haria girar el objeto en vez de desplazar la pagina.
            enableZoom={false} es critico: con la rueda activa el canvas se
            comeria el scroll al pasar el cursor. */}
        {fino && (
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
        )}
      </Canvas>
    </div>
  );
}

useGLTF.preload("/modelos-3d/macbook.glb");
