"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { DISENO, dibujarFlujo } from "@/lib/flujo";
import { usarMovimientoReducido } from "@/lib/movimiento";
import { usarPunteroFino, usarVisibilidad } from "@/lib/visibilidad";
import { usarPuntero } from "@/lib/puntero";

// Pantalla suelta (sin teclado ni cuerpo) para el hero.
//
// Por que NO se reusa el GLB del laptop ocultandole la base: esa malla cubre
// la tapa entera y solo muestrea un sub-rectangulo del atlas UV, asi que de
// un canvas de 3072x1920 solo ~1315x584 texeles caen sobre la pantalla --
// el 13% del presupuesto de textura -- y cada redibujado sube 23 MB a la GPU.
// Con geometria propia el mapeo es 1:1: TODOS los texeles del canvas son
// pantalla. A 2048x1280 eso da 3.4 veces mas resolucion util que el GLB y
// ademas baja la subida a ~10 MB por redibujado. Mas nitido y mas barato.
// La pantalla es 16:9, mas ancha y mas baja que el espacio de diseno, que es
// 16:10. La diferencia NO se resuelve aplastando el dibujo (deformaria el
// texto) sino recortandolo, y el recorte va ENTERO ABAJO, no repartido:
// a 16:9 se ven 900 de las 1000 unidades de alto del diseno, y en esas 100
// que sobran no hay nada (la barra de ventana esta en y 0-74 y el grafo
// termina en y=840). Centrar el recorte cortaria la barra por arriba.
const ANCHO = 3.2; // unidades de escena
const ALTO = (ANCHO * 9) / 16;
const GROSOR = 0.085;
const MARCO = 0.075; // cuanto asoma el bisel por fuera de la imagen

const TEX = { w: 2048, h: 1152 }; // 16:9

// El redibujado del canvas 2D es lo unico caro de la escena. 15 veces por
// segundo alcanza para que el flujo se lea fluido (son transiciones lentas,
// no accion rapida) y deja el render 3D corriendo a la tasa del monitor.
const FPS_TEXTURA = 15;

function usarTexturaPantalla(quieto: boolean) {
  const canvas = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = TEX.w;
    c.height = TEX.h;
    return c;
  }, []);

  const textura = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    // SIN mipmaps, al reves que en ModeloLaptop, y no es un descuido:
    //
    // three.js regenera la piramide de mipmaps ENTERA en cada needsUpdate. A
    // 15 redibujados por segundo sobre 2048x1280 eso es trabajo de GPU
    // constante que aqui no compra nada: los mipmaps solo ayudan cuando la
    // textura se MINIFICA mucho, y este plano se ve casi de frente y a escala
    // casi 1:1 (a 1440 de viewport el panel mide ~740 px CSS, ~1480 de
    // dispositivo con dpr 2, contra 2048 texeles: factor 1.38).
    //
    // ModeloLaptop si los necesita: alli la pantalla es una porcion pequena y
    // oblicua de la tapa del GLB, con minificacion fuerte, que es justo el
    // caso que sin mipmaps produce moire.
    t.generateMipmaps = false;
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    // anisotropy solo actua sobre el muestreo de mipmaps: sin piramide no
    // hace nada, asi que no se toca.
    return t;
  }, [canvas]);

  const ultimoDibujo = useRef(-1);

  useFrame((state) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const t = quieto ? 0 : state.clock.getElapsedTime();
    // Con movimiento reducido se pinta el primer fotograma y se para: el
    // contenido queda legible y deja de haber animacion (y de subirse 10 MB
    // de textura quince veces por segundo).
    if (quieto && ultimoDibujo.current >= 0) return;
    if (ultimoDibujo.current >= 0 && t - ultimoDibujo.current < 1 / FPS_TEXTURA) {
      return;
    }
    ultimoDibujo.current = t;

    ctx.save();
    // Escala UNIFORME (la del ancho): el dibujo no se deforma y lo que no
    // entra se pierde por abajo, que es donde no hay nada.
    const escala = TEX.w / DISENO.w;
    ctx.scale(escala, escala);
    dibujarFlujo(ctx, t);

    // Reflejo diagonal muy tenue: es lo que hace leer la superficie como
    // vidrio y no como una imagen pegada. Va en la textura y no como una
    // malla aparte para no pagar otro draw call ni otra transparencia.
    const brillo = ctx.createLinearGradient(0, 0, DISENO.w * 0.75, DISENO.h);
    brillo.addColorStop(0, "rgba(255, 255, 255, 0.07)");
    brillo.addColorStop(0.35, "rgba(255, 255, 255, 0.02)");
    brillo.addColorStop(0.6, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = brillo;
    ctx.fillRect(0, 0, DISENO.w, DISENO.h);
    ctx.restore();

    textura.needsUpdate = true;
  });

  return textura;
}

// Reflejos de entorno generados en memoria (RoomEnvironment de three), no un
// HDRI descargado: sin peticiones de red, sin archivos que licenciar, y el
// marco deja de verse como plastico plano porque tiene algo real que reflejar.
function EntornoDeEstudio() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const entorno = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = entorno.texture;
    return () => {
      scene.environment = null;
      entorno.texture.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

const DURACION_ENTRADA = 1.8;
// Sube desde abajo, no entra de lado: la pantalla esta apoyada en el borde
// inferior del panel de vidrio y tiene que leerse como que EMERGE de ahi.
const DESPLAZAMIENTO_ENTRADA = 1.9; // unidades hacia abajo
const GIRO_ENTRADA = 0.14; // inclinacion que se endereza al llegar

// Cuanto gira el objeto siguiendo al raton, en radianes en cada extremo de la
// ventana. Deliberadamente pequeno: es un guino de profundidad, no un control.
// Si fuera grande, mover el raton por la pagina haria bailar el objeto y
// competiria con la lectura del texto.
const SEGUIMIENTO_Y = 0.16;
const SEGUIMIENTO_X = 0.08;
// El giro no salta a su destino: se acerca un 6% por frame. Sin esta inercia
// el objeto copiaria el temblor del raton.
const INERCIA = 0.06;
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
    // Con menos movimiento pedido: sin entrada lateral ni flotacion. La
    // pantalla se queda en su sitio y solo sigue corriendo el flujo, que es
    // el contenido y no un adorno.
    if (quieto) {
      grupo.current.position.set(0, 0, 0);
      grupo.current.rotation.set(0, 0, 0);
      return;
    }
    const t = state.clock.getElapsedTime();
    if (inicio.current === null) inicio.current = t;
    const transcurrido = t - inicio.current;

    const p = Math.min(1, transcurrido / DURACION_ENTRADA);
    const suave = 1 - Math.pow(1 - p, 3); // easeOutCubic
    const restante = 1 - suave;
    const tFlot = Math.max(0, transcurrido - DURACION_ENTRADA);

    // Objetivo de giro segun donde este el raton, con inercia.
    const raton = puntero.current;
    const objY = raton.activo ? raton.x * SEGUIMIENTO_Y : 0;
    const objX = raton.activo ? raton.y * SEGUIMIENTO_X : 0;
    giro.current.y += (objY - giro.current.y) * INERCIA;
    giro.current.x += (objX - giro.current.x) * INERCIA;

    grupo.current.position.x = 0;
    grupo.current.position.y =
      Math.sin(tFlot * 0.72) * 0.07 - DESPLAZAMIENTO_ENTRADA * restante;
    grupo.current.rotation.y = Math.sin(tFlot * 0.4) * 0.02 + giro.current.y;
    grupo.current.rotation.z = Math.sin(tFlot * 0.46) * 0.016;
    grupo.current.rotation.x =
      restante * GIRO_ENTRADA + Math.sin(tFlot * 0.36) * 0.012 + giro.current.x;
  });

  return <group ref={grupo}>{children}</group>;
}

function Panel({ quieto }: { quieto: boolean }) {
  const textura = usarTexturaPantalla(quieto);

  return (
    <group>
      {/* Marco: caja con cantos redondeados y material metalico. El bisel
          real (y no un borde dibujado en la textura) es lo que le da grosor
          y hace que se lea como un objeto y no como un cartel. */}
      {/* radius NO puede superar GROSOR/2 (0.0425): RoundedBox construye una
          ExtrudeGeometry con depth = GROSOR - 2*radius, asi que con 0.055 esa
          profundidad salia NEGATIVA y la caja quedaba degenerada. A 0.04 el
          depth es +0.005 y los biseles no se solapan.
          castShadow fuera: no hay ninguna luz con shadow map ni receptor, era
          codigo muerto. */}
      <RoundedBox
        args={[ANCHO + MARCO * 2, ALTO + MARCO * 2, GROSOR]}
        radius={0.04}
        smoothness={6}
      >
        <meshStandardMaterial
          color="#1A1E26"
          metalness={0.82}
          roughness={0.26}
          envMapIntensity={0.9}
        />
      </RoundedBox>

      {/* Imagen: plano justo por delante de la cara frontal del marco.
          MeshBasicMaterial a proposito -- una pantalla emite su propia luz,
          asi que no debe reaccionar a la iluminacion de la escena. */}
      <mesh position={[0, 0, GROSOR / 2 + 0.001]}>
        <planeGeometry args={[ANCHO, ALTO]} />
        <meshBasicMaterial map={textura} toneMapped={false} />
      </mesh>

    </group>
  );
}

// Camara frontal. El objeto mide ALTO + 2*MARCO = 2.15 de alto; con fov 30 el
// alto visible a distancia d es 2*d*tan(15) = 0.536*d, asi que a d = 4.0 entran
// 2.144 unidades contra 1.95 del objeto (1.8 de pantalla + 0.15 de marco):
// quedan 0.097 arriba y abajo, por encima de la flotacion de +-0.07.
const DISTANCIA = 4.0;
const POSICION_CAMARA = new THREE.Vector3(0, 0.18, DISTANCIA);

// En contenedores angostos el fov vertical no cambia pero el ancho visible se
// achica, asi que el panel se saldria por los costados: se aleja la camara
// sobre la misma linea de vision, conservando el angulo frontal.
function CamaraResponsiva() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspecto = size.width / size.height;
    const necesario = (ANCHO + MARCO * 2) * 1.12;
    const visible = 0.536 * DISTANCIA * aspecto;
    const factor = visible >= necesario ? 1 : necesario / visible;
    camera.position.copy(POSICION_CAMARA).multiplyScalar(factor);
    camera.lookAt(0, 0, 0);
  }, [camera, size.width, size.height]);
  return null;
}

export default function PantallaFlotante() {
  const quieto = usarMovimientoReducido();
  const fino = usarPunteroFino();
  const [ref, visible] = usarVisibilidad<HTMLDivElement>();

  return (
    <div
      ref={ref}
      // El contenedor sigue la proporcion del objeto: 16/9. Con el objeto ya
      // en 16:9 no hay aire vertical que desperdiciar, y la seccion baja de
      // altura sin que la pantalla pierda ancho.
      className="relative aspect-[16/9] w-full"
      // El canvas es decorativo para quien no lo ve: describe lo mismo que
      // el texto de al lado, pero un lector de pantalla no puede leer pixeles.
      role="img"
      aria-label="Pantalla mostrando un flujo de automatización: un webhook y mensajes de Discord disparan un agente de ChatGPT, que notifica en Slack, archiva en Drive, registra en Notion y publica en Canva."
    >
      {/* Resplandor de la pantalla encendida. Va en CSS y no como una malla
          mas en la escena: un plano 3D transparente se recorta con bordes
          duros contra el marco y se lee como un rectangulo oscuro pegado
          atras. Un div con blur cae de forma suave y ademas no cuesta ni un
          draw call. Es `filter`, no `backdrop-filter`: se desenfoca a si
          mismo, no lo que tiene detras, asi que no obliga a recalcular nada
          cuando el canvas de arriba se anima. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-sky-400/25 blur-[70px]"
      />
      <div
        aria-hidden
        className="sombra-flotante pointer-events-none absolute inset-x-[16%] bottom-[6%] h-[7%] rounded-[50%] bg-[#020817]/55 blur-2xl"
      />
      <Canvas
        className="relative"
        // Apagado fuera de pantalla: rAF no se detiene por scroll.
        frameloop={visible ? "always" : "never"}
        camera={{ fov: 30, position: POSICION_CAMARA.toArray() }}
        // Rango en vez de un valor fijo: en pantallas retina sube a 2 para que
        // el texto no se vea blando, pero R3F puede bajarlo si el equipo no da.
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <CamaraResponsiva />
        <EntornoDeEstudio />
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />
        <directionalLight position={[-4, 1, 2]} intensity={0.35} />
        <Flotacion quieto={quieto}>
          <Panel quieto={quieto} />
        </Flotacion>
        {/* Solo con raton/trackpad. OrbitControls pone touch-action:none en
            el canvas, asi que en un telefono el dedo hace girar el objeto en
            vez de desplazar la pagina: el hero se convierte en una trampa de
            scroll. */}
        {fino && (
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.35}
          minPolarAngle={Math.PI / 2 - 0.22}
          maxPolarAngle={Math.PI / 2 + 0.16}
          minAzimuthAngle={-0.26}
          maxAzimuthAngle={0.26}
        />
        )}
      </Canvas>
    </div>
  );
}
