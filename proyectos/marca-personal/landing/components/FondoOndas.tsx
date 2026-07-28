"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { usarMovimientoReducido } from "@/lib/movimiento";
import { usarVisibilidad } from "@/lib/visibilidad";
import { usarDesplazando } from "@/lib/desplazamiento";
import { ahora } from "@/lib/reloj";

// Fondo 3D: un campo de ondas de energia que se pierde en el horizonte, con
// la retícula de una red por encima. Cumple el mismo papel que el terreno
// rocoso de la referencia -- dar profundidad real detras del vidrio -- pero
// en el lenguaje del producto: ondas y conexiones, no piedras.
//
// Coste acotado a proposito:
//   - Una sola geometria. Por frame solo se reescribe el eje Y de sus
//     vertices; indices, normales y colores no se tocan.
//   - La altura es una suma de tres senos, no una simulacion de fluidos.
//   - dpr fijo en 1 y sin antialias: es una capa difusa detras de todo.
// La malla baja de 128x96 a 96x72: de 12.513 vertices a 7.081 (-43%). A la
// distancia y el desenfoque a los que se ve, la diferencia de densidad de
// retícula no se percibe, pero el trabajo por frame casi se parte a la mitad.
const FILAS = 72; // profundidad (hacia el horizonte)
const COLS = 96; // ancho

// Las ondas se recalculan 30 veces por segundo, no en cada frame. Es un
// movimiento lento: a 30 Hz se ve igual de fluido y en un monitor de 120 Hz
// se hace la cuarta parte del trabajo.
const HZ_OLAS = 30;
const ANCHO = 46;
const FONDO = 34;

// Amplitud y forma de las ondas. Tres frecuencias distintas y no multiplos
// entre si: si lo fueran, el patron se repetiria de forma evidente.
const ONDAS = [
  { amp: 0.62, kx: 0.28, kz: 0.16, vel: 0.55 },
  { amp: 0.36, kx: 0.13, kz: 0.41, vel: -0.38 },
  { amp: 0.2, kx: 0.53, kz: 0.29, vel: 0.77 },
];

function altura(x: number, z: number, t: number): number {
  let y = 0;
  for (const o of ONDAS) y += Math.sin(x * o.kx + z * o.kz + t * o.vel) * o.amp;
  // Las crestas crecen hacia el frente y se aplanan en el horizonte: es lo
  // que da la lectura de distancia sin necesitar niebla fuerte.
  return y * (0.35 + 0.65 * (1 - Math.min(1, Math.abs(z) / FONDO)));
}

// Marcapasos del fondo. Con frameloop="demand" la escena solo se dibuja
// cuando se llama a invalidate(): antes se limitaba el CALCULO de las olas a
// 30 Hz, pero el render de la escena seguia ocurriendo en cada frame del
// monitor. Y ese render es justo lo que invalida el backdrop-filter del panel
// de vidrio que tiene delante, obligando al navegador a rehacer el desenfoque.
// Pasando el render a 30 Hz, esa invalidacion ocurre la mitad de veces en un
// monitor de 60 Hz y la cuarta parte en uno de 120.
function Marcapasos({ quieto }: { quieto: boolean }) {
  const invalidar = useThree((s) => s.invalidate);
  useEffect(() => {
    if (quieto) {
      invalidar();
      return;
    }
    const id = setInterval(invalidar, 1000 / HZ_OLAS);
    return () => clearInterval(id);
  }, [invalidar, quieto]);
  return null;
}

function Ondas({ quieto }: { quieto: boolean }) {
  const malla = useRef<THREE.Mesh>(null);
  const puntos = useRef<THREE.Points>(null);

  // Retícula: PlaneGeometry subdividida, tumbada para que sea suelo.
  const geometria = useMemo(() => {
    const g = new THREE.PlaneGeometry(ANCHO, FONDO * 2, COLS, FILAS);
    g.rotateX(-Math.PI / 2);
    return g;
  }, []);

  // Puntos brillantes en la interseccion de la retícula: son los que hacen
  // que el campo lea como una red y no como una tela.
  const geometriaPuntos = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      geometria.getAttribute("position").clone() as THREE.BufferAttribute
    );
    return g;
  }, [geometria]);

  const sprite = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(125,211,252,0.7)");
    g.addColorStop(1, "rgba(56,189,248,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);

  // Con movimiento reducido la malla se escribe UNA vez y despues se sale
  // temprano. Antes se recalculaban los ~37.500 senos y se resubian los dos
  // buffers en cada frame para producir exactamente los mismos valores.
  const yaCongelado = useRef(false);

  useFrame(() => {
    if (quieto) {
      if (yaCongelado.current) return;
      yaCongelado.current = true;
    } else {
      yaCongelado.current = false;
    }
    const t = quieto ? 0 : ahora();

    const pos = geometria.getAttribute("position") as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 1] = altura(arr[i], arr[i + 2], t);
    }
    pos.needsUpdate = true;

    const posP = geometriaPuntos.getAttribute("position") as THREE.BufferAttribute;
    (posP.array as Float32Array).set(arr);
    posP.needsUpdate = true;
  });

  return (
    <group position={[0, -3.4, -6]} rotation={[0.06, 0, 0]}>
      <mesh ref={malla} geometry={geometria} frustumCulled={false}>
        {/* Wireframe aditivo: donde se juntan muchas lineas el color se suma
            solo y aparecen crestas mas brillantes, que es lo que se lee como
            energia. depthWrite off para que las capas no se recorten. */}
        <meshBasicMaterial
          color="#2E7DF7"
          wireframe
          transparent
          opacity={0.24}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <points ref={puntos} geometry={geometriaPuntos} frustumCulled={false}>
        <pointsMaterial
          map={sprite}
          size={0.42}
          sizeAttenuation
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function FondoOndas() {
  const quieto = usarMovimientoReducido();
  const [ref, visible] = usarVisibilidad<HTMLDivElement>();
  const desplazando = usarDesplazando();

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <Canvas
        // Fuera de pantalla se apaga el bucle: rAF no se detiene solo al
        // hacer scroll, asi que sin esto la escena seguiria trabajando
        // mientras el usuario lee secciones que estan mucho mas abajo.
        // Durante el scroll la escena no se dibuja: cada frame suyo obliga
        // ademas a rehacer el desenfoque del panel que tiene delante.
        frameloop={visible && !desplazando ? "demand" : "never"}
        camera={{ fov: 48, position: [0, 1.6, 12] }}
        // dpr 1 y sin antialias: capa difusa de fondo. Subirla no cambia lo
        // que se percibe y multiplica los pixeles a rasterizar.
        dpr={1}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Niebla del color del fondo: funde las ondas lejanas con el
            degradado CSS y evita el corte duro del borde de la geometria. */}
        <fog attach="fog" args={["#071634", 14, 34]} />
        <Marcapasos quieto={quieto} />
        <Ondas quieto={quieto} />
      </Canvas>
    </div>
  );
}
