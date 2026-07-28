"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Preload } from "@react-three/drei";
import * as THREE from "three";
import {
  CICLO,
  CONEXIONES,
  ESCALA,
  NODOS,
  PROGRAMA_NODO,
  TARJETA,
  TEX_TARJETA,
  buscar,
  dibujarTarjeta,
  entrada,
  posicion,
  progresoConexion,
  pulso,
  salida,
  type Nodo,
} from "@/lib/grafo";
import { usarMovimientoReducido } from "@/lib/movimiento";
import { usarVisibilidad } from "@/lib/visibilidad";
import { usarDesplazando } from "@/lib/desplazamiento";
import { usarPuntero } from "@/lib/puntero";
import { ahora } from "@/lib/reloj";

// Los agentes del hero, sueltos en el espacio: sin monitor, sin marco y sin
// barra de ventana.
//
// Por que esto es MAS BARATO que la version anterior, no mas caro: antes
// habia un canvas de 2048x1152 que se redibujaba y se subia a la GPU quince
// veces por segundo (~10 MB por subida), y era con diferencia lo mas caro de
// la seccion. Aqui cada tarjeta lleva una textura de 680x200 dibujada UNA vez
// -- 7 subidas en toda la sesion, ~3.8 MB en total -- y lo que se anima son
// posiciones, escalas y opacidades, que no cuestan subidas.

const GROSOR = 0.055;

// --- Texturas -------------------------------------------------------------

function usarTexturasTarjeta() {
  return useMemo(() => {
    const mapa = new Map<string, THREE.CanvasTexture>();
    NODOS.forEach((n) => {
      const c = document.createElement("canvas");
      c.width = TEX_TARJETA.w;
      c.height = TEX_TARJETA.h;
      const ctx = c.getContext("2d");
      if (ctx) dibujarTarjeta(ctx, n);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      // Se ve casi de frente y casi 1:1: la piramide de mipmaps no compraria
      // nitidez y si costaria memoria y una regeneracion por textura.
      t.generateMipmaps = false;
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      mapa.set(n.id, t);
    });
    return mapa;
  }, []);
}

// Un unico degradado radial blanco, compartido por los siete halos y por los
// paquetes. Cada uno lo tine con el color de su material, asi que siete
// objetos distintos cuestan UNA textura.
function usarTexturaHalo() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const ctx = c.getContext("2d");
    if (ctx) {
      const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.45, "rgba(255,255,255,0.35)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 128, 128);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
}

// --- Un nodo --------------------------------------------------------------

function Tarjeta({
  nodo,
  textura,
  halo,
  quieto,
  indice,
}: {
  nodo: Nodo;
  textura: THREE.Texture;
  halo: THREE.Texture;
  quieto: boolean;
  indice: number;
}) {
  const grupo = useRef<THREE.Group>(null);
  const luz = useRef<THREE.Mesh>(null);
  const base = useMemo(() => posicion(nodo), [nodo]);

  useFrame(() => {
    if (!grupo.current || !luz.current) return;
    const t = quieto ? 0 : ahora();
    const enc = pulso(t % CICLO, PROGRAMA_NODO[nodo.id]);

    // Flotacion propia de cada tarjeta, desfasada para que el conjunto no
    // suba y baje en bloque (que se leeria como una sola pieza rigida).
    const desfase = indice * 1.37;
    const flot = quieto ? 0 : Math.sin(t * 0.6 + desfase) * 0.022;
    // Al ejecutarse, la tarjeta se adelanta hacia la camara.
    grupo.current.position.set(base[0], base[1] + flot, base[2] + enc * 0.09);
    grupo.current.rotation.z = quieto ? 0 : Math.sin(t * 0.42 + desfase) * 0.012;

    const m = luz.current.material as THREE.MeshBasicMaterial;
    m.opacity = 0.15 + enc * 0.85;
    const s = 1 + enc * 0.22;
    luz.current.scale.set(s, s, 1);
  });

  return (
    <group ref={grupo}>
      {/* Halo detras: es lo que dice "este agente esta ejecutando ahora".
          Aditivo y sin escritura de profundidad para que se funda con el
          fondo en vez de recortarse contra el. */}
      <mesh ref={luz} position={[0, 0, -0.02]}>
        <planeGeometry args={[TARJETA.w * 1.75, TARJETA.h * 2.6]} />
        <meshBasicMaterial
          map={halo}
          color={nodo.color}
          transparent
          opacity={0.15}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Cuerpo con grosor real: es lo que hace que al girar con el raton se
          lea como un objeto y no como una calcomania. */}
      <RoundedBox args={[TARJETA.w, TARJETA.h, GROSOR]} radius={0.024} smoothness={4}>
        <meshStandardMaterial color="#141B25" metalness={0.35} roughness={0.55} />
      </RoundedBox>

      {/* Cara con el contenido. MeshBasic: la tarjeta se lee como superficie
          encendida, no debe apagarse segun donde este la luz. */}
      <mesh position={[0, 0, GROSOR / 2 + 0.001]}>
        <planeGeometry args={[TARJETA.w, TARJETA.h]} />
        <meshBasicMaterial map={textura} transparent toneMapped={false} />
      </mesh>
    </group>
  );
}

// --- Conexiones -----------------------------------------------------------

function curva(a: Nodo, b: Nodo) {
  const p0 = new THREE.Vector3(...salida(a));
  const p1 = new THREE.Vector3(...entrada(b));
  const dx = Math.max(60 * ESCALA, (p1.x - p0.x) * 0.5);
  return new THREE.CubicBezierCurve3(
    p0,
    new THREE.Vector3(p0.x + dx, p0.y, p0.z),
    new THREE.Vector3(p1.x - dx, p1.y, p1.z),
    p1
  );
}

function Conexiones({
  halo,
  quieto,
}: {
  halo: THREE.Texture;
  quieto: boolean;
}) {
  const curvas = useMemo(
    () => CONEXIONES.map(([a, b]) => ({ id: a + ">" + b, c: curva(buscar(a), buscar(b)) })),
    []
  );
  const paquetes = useRef<(THREE.Group | null)[]>([]);

  useFrame(() => {
    const t = quieto ? 0 : ahora();
    const fase = t % CICLO;
    curvas.forEach((cv, i) => {
      const g = paquetes.current[i];
      if (!g) return;
      const p = progresoConexion(fase, cv.id);
      if (p < 0) {
        g.visible = false;
        return;
      }
      g.visible = true;
      const punto = cv.c.getPoint(p);
      g.position.copy(punto);
      // Se desvanece al llegar, para que no "aterrice" de golpe.
      const s = 1 - Math.pow(Math.max(0, p - 0.75) / 0.25, 2) * 0.6;
      g.scale.setScalar(s);
    });
  });

  return (
    <group>
      {curvas.map((cv, i) => (
        <group key={cv.id}>
          {/* La linea en reposo. Un tubo y no una linea de 1 px: a esta
              escala una linea fina desaparece en pantallas densas. */}
          <mesh>
            <tubeGeometry args={[cv.c, 22, 0.011, 6, false]} />
            <meshBasicMaterial color="#2C3B50" toneMapped={false} />
          </mesh>

          {/* El paquete que viaja: nucleo solido + resplandor aditivo. */}
          <group
            ref={(el) => {
              paquetes.current[i] = el;
            }}
            visible={false}
          >
            <mesh>
              <sphereGeometry args={[0.028, 12, 12]} />
              <meshBasicMaterial color="#DBEAFE" toneMapped={false} />
            </mesh>
            <mesh>
              <planeGeometry args={[0.26, 0.26]} />
              <meshBasicMaterial
                map={halo}
                color="#93C5FD"
                transparent
                opacity={0.85}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}

// --- Escena ---------------------------------------------------------------

const DURACION_ENTRADA = 1.8;
const DESPLAZAMIENTO_ENTRADA = 1.9;
const SEGUIMIENTO_Y = 0.3;
const SEGUIMIENTO_X = 0.13;
const INERCIA = 0.06;

// El conjunto entero sigue al raton: es lo que produce el paralaje entre
// nodos que estan a distinta profundidad.
function Conjunto({ children, quieto }: { children: React.ReactNode; quieto: boolean }) {
  const grupo = useRef<THREE.Group>(null);
  const inicio = useRef<number | null>(null);
  const puntero = usarPuntero();
  const giro = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!grupo.current) return;
    if (quieto) {
      grupo.current.position.set(0, 0, 0);
      grupo.current.rotation.set(0, 0, 0);
      return;
    }
    const t = ahora();
    if (inicio.current === null) inicio.current = t;
    const transcurrido = t - inicio.current;
    const p = Math.min(1, transcurrido / DURACION_ENTRADA);
    const restante = 1 - (1 - Math.pow(1 - p, 3));

    const raton = puntero.current;
    const objY = raton.activo ? raton.x * SEGUIMIENTO_Y : 0;
    const objX = raton.activo ? raton.y * SEGUIMIENTO_X : 0;
    giro.current.y += (objY - giro.current.y) * INERCIA;
    giro.current.x += (objX - giro.current.x) * INERCIA;

    grupo.current.position.y = -DESPLAZAMIENTO_ENTRADA * restante;
    grupo.current.rotation.y = giro.current.y;
    grupo.current.rotation.x = giro.current.x;
  });

  return <group ref={grupo}>{children}</group>;
}

function AvisaListo({ onListo }: { onListo?: () => void }) {
  const n = useRef(0);
  useFrame(() => {
    if (n.current < 0) return;
    n.current += 1;
    if (n.current >= 3) {
      n.current = -1;
      onListo?.();
    }
  });
  return null;
}

// El grafo mide 3.02 x 1.66 unidades. Con fov 30, el alto visible a distancia
// d es 0.536*d, asi que a 3.8 entran 2.04 contra 1.66 del contenido: queda
// margen para la flotacion (+-0.022), el adelanto al ejecutarse (0.09) y la
// inclinacion hacia el raton.
const DISTANCIA = 3.8;
const ANCHO_GRAFO = 3.02;

function CamaraResponsiva() {
  const { camera, size } = useThree();
  useEffect(() => {
    const aspecto = size.width / size.height;
    const necesario = ANCHO_GRAFO * 1.08;
    const visible = 0.536 * DISTANCIA * aspecto;
    const factor = visible >= necesario ? 1 : necesario / visible;
    camera.position.set(0, 0, DISTANCIA * factor);
    camera.lookAt(0, 0, 0);
  }, [camera, size.width, size.height]);
  return null;
}

export default function FlujoFlotante({ onListo }: { onListo?: () => void }) {
  const quieto = usarMovimientoReducido();
  const [ref, visible] = usarVisibilidad<HTMLDivElement>();
  const desplazando = usarDesplazando();

  return (
    <div
      ref={ref}
      className="absolute inset-0"
      role="img"
      aria-label="Flujo de automatización en ejecución: un webhook y mensajes de Discord disparan un agente de ChatGPT, que notifica en Slack, archiva en Drive, registra en Notion y publica en Canva."
    >
      {/* OrbitControls fuera a proposito: el giro ya lo da el seguimiento del
          raton, y OrbitControls pone touch-action:none en el canvas, con lo
          que en un telefono el dedo dejaria de desplazar la pagina. */}
      <Canvas
        className="relative"
        // El tiempo de la animacion NO sale de state.clock: react-three-fiber
        // lo reinicia en cada cambio de frameloop, y aqui cambia con cada
        // scroll. Ver lib/reloj.ts.
        frameloop={visible && !desplazando ? "always" : "never"}
        camera={{ fov: 30, position: [0, 0, DISTANCIA] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <AvisaListo onListo={onListo} />
        <CamaraResponsiva />
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={0.9} />
        <directionalLight position={[-4, 1, 2]} intensity={0.3} />
        <Contenido quieto={quieto} />
        <Preload all />
      </Canvas>
    </div>
  );
}

function Contenido({ quieto }: { quieto: boolean }) {
  const texturas = usarTexturasTarjeta();
  const halo = usarTexturaHalo();

  useEffect(() => {
    return () => {
      texturas.forEach((t) => t.dispose());
      halo.dispose();
    };
  }, [texturas, halo]);

  return (
    <Conjunto quieto={quieto}>
      <Conexiones halo={halo} quieto={quieto} />
      {NODOS.map((n, i) => (
        <Tarjeta
          key={n.id}
          nodo={n}
          indice={i}
          textura={texturas.get(n.id)!}
          halo={halo}
          quieto={quieto}
        />
      ))}
    </Conjunto>
  );
}
