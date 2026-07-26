"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
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
const PANTALLA_UV = { uMin: 0.09, uMax: 0.41, vMin: 0.13, vMax: 0.72 };

const NODOS = [
  { id: "webhook", label: "Webhook", x: 0.15, y: 0.78, color: "#F43F5E" },
  { id: "slack", label: "Slack", x: 0.62, y: 0.85, color: "#22C55E" },
  { id: "gpt", label: "ChatGPT", x: 0.42, y: 0.58, color: "#10B981" },
  { id: "drive", label: "Drive", x: 0.16, y: 0.4, color: "#2563EB" },
  { id: "canva", label: "Canva", x: 0.68, y: 0.5, color: "#8B5CF6" },
  { id: "notion", label: "Notion", x: 0.82, y: 0.3, color: "#0F1B2D" },
  { id: "discord", label: "Discord", x: 0.32, y: 0.18, color: "#5865F2" },
];
const CONEXIONES: [string, string][] = [
  ["webhook", "slack"],
  ["slack", "gpt"],
  ["gpt", "drive"],
  ["gpt", "canva"],
  ["canva", "notion"],
  ["drive", "discord"],
];
function nodo(id: string) {
  return NODOS.find((n) => n.id === id)!;
}

function usarTexturaPantalla() {
  const canvas = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 1024;
    c.height = 640;
    return c;
  }, []);
  const textura = useMemo(() => {
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    // El modelo se ve pequeno en pantalla (laptop chica dentro de la
    // escena) -- sin esto, el mipmapping difumina circulos/texto chicos
    // hasta volverlos casi invisibles al minificarse tanto.
    t.generateMipmaps = false;
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
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
  }, [canvas]);

  // NOTA DE DISENO: esta es la version "estatica" (intento 4 ganador) --
  // se dibuja el contenido UNA sola vez (sin useFrame), por lo que se
  // pierde la animacion de los puntos viajando por las conexiones y el
  // pulso de los nodos. Se eligio esta opcion sobre trocia-three-text
  // (intento 2, preserva la animacion) porque troika requiere resolver 3
  // bugs adicionales (mesh equivocada por ancestro duplicado, fetch de
  // fuente sin red disponible en este entorno, orientacion de texto vs.
  // normal de la cara) que no se pueden verificar de forma solida sin
  // acceso a red para la carga de la fuente en este pipeline. La textura
  // estatica es la opcion que se puede validar completamente end-to-end
  // aqui: menos piezas moviles, mismo fix de espejado, sin animacion.
  useEffect(() => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const t = 0.6; // instante fijo: fase agradable de nodos/puntos, sin reloj
    const W = canvas.width;
    const H = canvas.height;

    // Convierte una coordenada fraccional (0-1 dentro de "la pantalla")
    // a pixeles del canvas, ubicandola dentro del rectangulo UV real que
    // usa esta malla, y compensando el flipY por defecto de las texturas
    // en three.js (fila 0 del canvas = V alto, no V bajo).
    function mapear(nx: number, ny: number): [number, number] {
      const u = PANTALLA_UV.uMin + nx * (PANTALLA_UV.uMax - PANTALLA_UV.uMin);
      const v = PANTALLA_UV.vMin + ny * (PANTALLA_UV.vMax - PANTALLA_UV.vMin);
      return [u * W, (1 - v) * H];
    }

    ctx.fillStyle = "#E8ECF5";
    ctx.fillRect(0, 0, W, H);
    const [rx0, ry0] = mapear(0, 0);
    const [rx1, ry1] = mapear(1, 1);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(Math.min(rx0, rx1), Math.min(ry0, ry1), Math.abs(rx1 - rx0), Math.abs(ry1 - ry0));

    // Fix "texto espejado": rota 180 grados TODO lo que se dibuje de aca
    // en adelante (lineas, puntos, nodos y texto), pero solo alrededor del
    // centro del rectangulo PANTALLA_UV real -- no del canvas completo --
    // para no desplazar el contenido fuera del area que la malla muestrea.
    const centroX = (rx0 + rx1) / 2;
    const centroY = (ry0 + ry1) / 2;
    ctx.save();
    ctx.translate(centroX, centroY);
    ctx.rotate(Math.PI);
    ctx.translate(-centroX, -centroY);

    // Líneas
    ctx.strokeStyle = "#94A3B8";
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 8]);
    CONEXIONES.forEach(([a, b]) => {
      const na = nodo(a);
      const nb = nodo(b);
      const [ax, ay] = mapear(na.x, na.y);
      const [bx, by] = mapear(nb.x, nb.y);
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // Puntos viajando
    CONEXIONES.forEach(([a, b], i) => {
      const na = nodo(a);
      const nb = nodo(b);
      const dur = 2.4 + (i % 3) * 0.6;
      const p = ((t + i * 0.4) % dur) / dur;
      const [ax, ay] = mapear(na.x, na.y);
      const [bx, by] = mapear(nb.x, nb.y);
      const px = ax + (bx - ax) * p;
      const py = ay + (by - ay) * p;
      ctx.beginPath();
      ctx.arc(px, py, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#2563EB";
      ctx.fill();
    });

    // Nodos, con leve pulso
    NODOS.forEach((n, i) => {
      const pulso = 1 + Math.sin(t * 2 + i) * 0.08;
      const r = 22 * pulso;
      const [nx, ny] = mapear(n.x, n.y);
      ctx.beginPath();
      ctx.arc(nx, ny, r, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = n.color;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(nx, ny, r * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.fill();

      ctx.fillStyle = "#1E293B";
      ctx.font = "700 26px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(n.label, nx, ny + r + 30);
    });

    ctx.restore();

    textura.needsUpdate = true;
  }, [canvas, textura]);

  return textura;
}

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

  return <primitive object={scene} />;
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

function CamaraFija() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(-0.35, 0.4, -1.4);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

export default function ModeloLaptop() {
  return (
    <div className="relative aspect-[4/3.2] w-full max-w-xl">
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[0%] h-[16%] rounded-[50%] bg-cf-accent/30 blur-2xl" />
      <Canvas
        camera={{ fov: 36 }}
        dpr={Math.min(3, typeof window !== "undefined" ? window.devicePixelRatio : 1)}
      >
        <CamaraFija />
        <Iluminacion />
        <Center scale={2.6}>
          <Laptop />
        </Center>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/modelos-3d/macbook.glb");
