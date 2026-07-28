"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import {
  CICLO,
  CONEXIONES,
  ESCALA,
  NODOS,
  PROGRAMA_NODO,
  ETIQUETA,
  RADIO,
  TEX_ETIQUETA,
  TEX_ONDA,
  buscar,
  dibujarEtiqueta,
  dibujarOnda,
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

// Los agentes del hero: esferas de energia sueltas en el espacio, conectadas
// entre si. Sin monitor, sin marco y sin barra de ventana.
//
// Por que esto es MAS BARATO que la version anterior, no mas caro: antes
// habia un canvas de 2048x1152 que se redibujaba y se subia a la GPU quince
// veces por segundo (~10 MB por subida), y era con diferencia lo mas caro de
// la seccion. Aqui hay DOS texturas compartidas por los siete agentes (la
// onda y el degradado del halo) mas una etiqueta por agente, todas dibujadas
// una sola vez. Lo que se anima son posiciones, escalas, opacidades y el
// desplazamiento de la textura de onda: nada de eso cuesta subidas.

// --- Texturas -------------------------------------------------------------

function usarTexturasEtiqueta() {
  return useMemo(() => {
    const mapa = new Map<string, THREE.CanvasTexture>();
    NODOS.forEach((n) => {
      const c = document.createElement("canvas");
      c.width = TEX_ETIQUETA.w;
      c.height = TEX_ETIQUETA.h;
      const ctx = c.getContext("2d");
      if (ctx) dibujarEtiqueta(ctx, n);
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

// La onda de voz, UNA sola textura para los siete agentes. Se repite en
// horizontal para poder desplazarla sin costura.
function usarTexturaOnda() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = TEX_ONDA.w;
    c.height = TEX_ONDA.h;
    const ctx = c.getContext("2d");
    if (ctx) dibujarOnda(ctx);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = THREE.RepeatWrapping;
    t.generateMipmaps = false;
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    return t;
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

// Mezcla el color del agente hacia el azul oscuro del fondo, para el nucleo
// de la esfera. Un nucleo del color puro sale pastel; oscurecido, el borde
// encendido tiene contra que destacar.
function oscuro(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const m = (c: number, f: number) => Math.round(c * f);
  return `rgb(${m((n >> 16) & 255, 0.5)}, ${m((n >> 8) & 255, 0.5)}, ${m(n & 255, 0.62)})`;
}

// --- Un agente -----------------------------------------------------------

// Cuanto se desplaza la onda dentro de la esfera, en anchos de textura por
// segundo. Lento: es un agente pensando, no un ecualizador de musica.
const VELOCIDAD_ONDA = 0.075;

function Agente({
  nodo,
  etiqueta,
  onda,
  halo,
  quieto,
  indice,
}: {
  nodo: Nodo;
  etiqueta: THREE.Texture;
  onda: THREE.Texture;
  halo: THREE.Texture;
  quieto: boolean;
  indice: number;
}) {
  const grupo = useRef<THREE.Group>(null);
  const luz = useRef<THREE.Mesh>(null);
  const esfera = useRef<THREE.Mesh>(null);
  const borde = useRef<THREE.Mesh>(null);
  const voz = useRef<THREE.Mesh>(null);
  const base = useMemo(() => posicion(nodo), [nodo]);

  // La onda se comparte entre los siete agentes, asi que el desplazamiento no
  // puede vivir en la textura: cada agente lleva su propio material con su
  // propia copia del mapa, que comparte la imagen subida a la GPU pero tiene
  // offset independiente.
  const mapaPropio = useMemo(() => {
    const t = onda.clone();
    t.needsUpdate = false;
    t.offset.x = indice * 0.17;
    return t;
  }, [onda, indice]);
  useEffect(() => () => mapaPropio.dispose(), [mapaPropio]);

  useFrame(() => {
    if (!grupo.current || !luz.current || !esfera.current || !voz.current) return;
    if (!borde.current) return;
    const t = quieto ? 0 : ahora();
    const enc = pulso(t % CICLO, PROGRAMA_NODO[nodo.id]);
    const desfase = indice * 1.37;

    // Flotacion desfasada: si todos subieran a la vez se leerian como una
    // sola pieza rigida en vez de como siete agentes independientes.
    const flot = quieto ? 0 : Math.sin(t * 0.6 + desfase) * 0.022;
    grupo.current.position.set(base[0], base[1] + flot, base[2] + enc * 0.09);

    // Halo: apagado en reposo, encendido mientras el agente ejecuta.
    const ml = luz.current.material as THREE.MeshBasicMaterial;
    ml.opacity = 0.38 + enc * 0.62;
    const sl = 1 + enc * 0.3;
    luz.current.scale.set(sl, sl, 1);

    // La esfera respira, y al ejecutarse se hincha un poco.
    const resp = quieto ? 1 : 1 + Math.sin(t * 1.1 + desfase) * 0.018;
    const se = resp + enc * 0.07;
    esfera.current.scale.setScalar(se);
    borde.current.scale.setScalar(se);
    const mb = borde.current.material as THREE.MeshBasicMaterial;
    mb.opacity = 0.5 + enc * 0.5;

    // La onda: se desplaza siempre (el agente esta vivo) y sube de amplitud
    // cuando le toca trabajar. Mover el offset es gratis; redibujarla no.
    if (!quieto) mapaPropio.offset.x = (indice * 0.17 + t * VELOCIDAD_ONDA) % 1;
    const amp = 0.52 + enc * 0.48 + (quieto ? 0 : Math.sin(t * 3.1 + desfase) * 0.06);
    voz.current.scale.set(se, se * amp, 1);
    const mv = voz.current.material as THREE.MeshBasicMaterial;
    mv.opacity = 0.75 + enc * 0.25;
  });

  return (
    <group ref={grupo}>
      {/* Resplandor exterior. Aditivo y sin escritura de profundidad para que
          se funda con el fondo en vez de recortarse contra el. */}
      <mesh ref={luz} position={[0, 0, -0.05]}>
        <planeGeometry args={[RADIO * 5.2, RADIO * 5.2]} />
        <meshBasicMaterial
          map={halo}
          color={nodo.color}
          transparent
          opacity={0.38}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* La esfera, en dos capas.
          El nucleo va OSCURO a proposito: un orbe de energia se lee por
          contraste contra su propio borde. Pintado del color entero salia
          pastel y chato.
          El borde es la misma esfera dibujada por dentro (BackSide) y en
          aditivo: de frente apenas se acumula una capa y en la silueta se
          acumulan muchas, asi que el brillo cae solo en el canto. Es el
          efecto Fresnel sin escribir un shader. */}
      <mesh ref={esfera}>
        <sphereGeometry args={[RADIO * 0.965, 24, 18]} />
        <meshBasicMaterial color={oscuro(nodo.color)} transparent opacity={0.88} />
      </mesh>
      <mesh ref={borde}>
        <sphereGeometry args={[RADIO * 1.16, 32, 24]} />
        <meshBasicMaterial
          color={nodo.color}
          transparent
          opacity={0.5}
          side={THREE.BackSide}
          depthWrite={false}
          depthTest={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* La onda de voz, por delante del centro de la esfera. Aditiva: es
          luz atravesando el volumen. */}
      <mesh ref={voz} position={[0, 0, RADIO * 1.05]} renderOrder={3}>
        <planeGeometry args={[RADIO * 2.25, RADIO * 1.7]} />
        <meshBasicMaterial
          map={mapaPropio}
          transparent
          opacity={0.75}
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Nombre y funcion, debajo. */}
      <mesh position={[0, -RADIO - ETIQUETA.h * 0.62, 0]}>
        <planeGeometry args={[ETIQUETA.w, ETIQUETA.h]} />
        <meshBasicMaterial map={etiqueta} transparent toneMapped={false} depthWrite={false} />
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
            <tubeGeometry args={[cv.c, 22, 0.007, 6, false]} />
            {/* Azul claro y translucido, no gris oscuro: sobre el fondo azul
                del hero un tono oscuro se leia como un cable negro grueso. */}
            <meshBasicMaterial
              color="#8FB6E8"
              transparent
              opacity={0.5}
              depthWrite={false}
              toneMapped={false}
            />
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

// El grafo mide 3.02 de ancho y, contando la etiqueta que cuelga bajo la
// ultima esfera, 1.81 de alto. Con fov 30 el alto visible a distancia d es
// 0.536*d, asi que a 4.0 entran 2.14: queda margen para la flotacion
// (+-0.022), el adelanto al ejecutarse (0.09) y la inclinacion hacia el raton.
const DISTANCIA = 4.0;
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
  const etiquetas = usarTexturasEtiqueta();
  const onda = usarTexturaOnda();
  const halo = usarTexturaHalo();

  useEffect(() => {
    return () => {
      etiquetas.forEach((t) => t.dispose());
      onda.dispose();
      halo.dispose();
    };
  }, [etiquetas, onda, halo]);

  return (
    <Conjunto quieto={quieto}>
      <Conexiones halo={halo} quieto={quieto} />
      {NODOS.map((n, i) => (
        <Agente
          key={n.id}
          nodo={n}
          indice={i}
          etiqueta={etiquetas.get(n.id)!}
          onda={onda}
          halo={halo}
          quieto={quieto}
        />
      ))}
    </Conjunto>
  );
}
