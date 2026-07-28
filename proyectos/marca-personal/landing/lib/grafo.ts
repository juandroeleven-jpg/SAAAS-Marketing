// Datos y calendario de la automatizacion, para la version en 3D REAL del
// hero: cada nodo es un objeto suelto en la escena, no un dibujo dentro de
// una pantalla.
//
// Que cambia respecto de lib/flujo.ts (que sigue en uso para la pantalla del
// laptop de la seccion 2): alli TODO se redibuja en un canvas 15 veces por
// segundo y se sube a la GPU. Aqui la textura de cada tarjeta se dibuja UNA
// sola vez y no se vuelve a subir nunca; la animacion son posiciones,
// escalas y opacidades, que no cuestan subidas de textura.

export const CICLO = 6.4;

export type Nodo = {
  id: string;
  label: string;
  sub: string;
  color: string;
  /** Coordenadas en el mismo espacio de diseno que lib/flujo.ts. */
  x: number;
  y: number;
  /** Profundidad, en unidades de escena. Es lo que da el paralaje. */
  z: number;
};

// Mismas etiquetas, colores y disposicion que la version en pantalla: lo
// unico que se va es el monitor.
export const NODOS: Nodo[] = [
  { id: "webhook", label: "Webhook", sub: "Disparador", x: 390, y: 300, color: "#F43F5E", z: -0.12 },
  { id: "discord", label: "Discord", sub: "Mensajes", x: 390, y: 730, color: "#5865F2", z: -0.12 },
  { id: "gpt", label: "ChatGPT", sub: "Agente", x: 800, y: 515, color: "#10B981", z: 0.24 },
  { id: "slack", label: "Slack", sub: "Notifica", x: 1210, y: 250, color: "#36C5F0", z: -0.02 },
  { id: "drive", label: "Drive", sub: "Archiva", x: 1210, y: 430, color: "#FBBC04", z: -0.02 },
  { id: "notion", label: "Notion", sub: "Registra", x: 1210, y: 610, color: "#E5E7EB", z: -0.02 },
  { id: "canva", label: "Canva", sub: "Publica", x: 1210, y: 790, color: "#8B5CF6", z: -0.02 },
];

export const CONEXIONES: [string, string][] = [
  ["webhook", "gpt"],
  ["discord", "gpt"],
  ["gpt", "slack"],
  ["gpt", "drive"],
  ["gpt", "notion"],
  ["gpt", "canva"],
];

export const PROGRAMA_CONEXION: Record<string, { inicio: number; dur: number }> = {
  "webhook>gpt": { inicio: 0.55, dur: 1.15 },
  "discord>gpt": { inicio: 0.75, dur: 1.15 },
  "gpt>slack": { inicio: 2.55, dur: 1.0 },
  "gpt>drive": { inicio: 2.7, dur: 1.0 },
  "gpt>notion": { inicio: 2.85, dur: 1.0 },
  "gpt>canva": { inicio: 3.0, dur: 1.0 },
};

export const PROGRAMA_NODO: Record<string, number> = {
  webhook: 0.25,
  discord: 0.45,
  gpt: 1.95,
  slack: 3.55,
  drive: 3.7,
  notion: 3.85,
  canva: 4.0,
};

// Sube rapido y decae lento: se lee como un disparo, no como un parpadeo.
const SUBIDA = 0.18;
const CAIDA = 1.05;

/** Cuanto esta "encendido" un nodo en la fase dada, de 0 a 1. */
export function pulso(fase: number, inicio: number): number {
  let d = fase - inicio;
  if (d < 0) d += CICLO;
  if (d > SUBIDA + CAIDA) return 0;
  return d < SUBIDA ? d / SUBIDA : 1 - (d - SUBIDA) / CAIDA;
}

/** Avance del paquete por una conexion, de 0 a 1, o -1 si no esta viajando. */
export function progresoConexion(fase: number, id: string): number {
  const p = PROGRAMA_CONEXION[id];
  if (!p) return -1;
  const d = fase - p.inicio;
  if (d < 0 || d > p.dur) return -1;
  return d / p.dur;
}

// --- Paso del espacio de diseno a la escena -------------------------------

/** Unidades de escena por unidad de diseno. */
export const ESCALA = 0.0026;
// El centro vertical del grafo es 520 (entre 250 y 790), no 500: centrar en
// 500 dejaria el conjunto descolgado hacia arriba.
const CENTRO = { x: 800, y: 520 };

export const TARJETA = { w: 340 * ESCALA, h: 100 * ESCALA };

export function posicion(n: Nodo): [number, number, number] {
  return [(n.x - CENTRO.x) * ESCALA, (CENTRO.y - n.y) * ESCALA, n.z];
}

/** Punto de salida (borde derecho) y de entrada (borde izquierdo). */
export function salida(n: Nodo): [number, number, number] {
  const p = posicion(n);
  return [p[0] + TARJETA.w / 2, p[1], p[2]];
}
export function entrada(n: Nodo): [number, number, number] {
  const p = posicion(n);
  return [p[0] - TARJETA.w / 2, p[1], p[2]];
}

export function buscar(id: string): Nodo {
  return NODOS.find((n) => n.id === id)!;
}

// --- Textura de una tarjeta ----------------------------------------------

// Se dibuja a 2x del espacio de diseno de la tarjeta (340x100), que es la
// resolucion a la que se ve en un portatil con dpr 2 y el panel al 82% de
// 1280 px de ancho. Mas seria pagar memoria por nada.
export const TEX_TARJETA = { w: 680, h: 200 };

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

/**
 * Dibuja UNA tarjeta en su estado de reposo, sobre un canvas transparente.
 *
 * El estado "ejecutandose" NO va aqui: se consigue con el halo que la rodea y
 * con el desplazamiento del objeto, para que esta textura se suba a la GPU
 * una sola vez en toda la sesion.
 */
export function dibujarTarjeta(ctx: CanvasRenderingContext2D, n: Nodo) {
  const { w, h } = TEX_TARJETA;
  const m = 8; // margen para que el trazo del borde no se corte
  ctx.clearRect(0, 0, w, h);

  rectRedondeado(ctx, m, m, w - m * 2, h - m * 2, 44);
  ctx.fillStyle = "#19212D";
  ctx.fill();
  ctx.strokeStyle = "#3A4B62";
  ctx.lineWidth = 8;
  ctx.stroke();

  // Cuadrito de color del servicio
  rectRedondeado(ctx, m + 36, m + 38, 112, 112, 30);
  ctx.fillStyle = n.color;
  ctx.fill();

  ctx.textAlign = "left";
  ctx.fillStyle = "#E6EDF7";
  ctx.font = "600 72px system-ui, sans-serif";
  ctx.fillText(n.label, m + 184, m + 84);
  ctx.fillStyle = "#77869B";
  ctx.font = "500 56px system-ui, sans-serif";
  ctx.fillText(n.sub, m + 184, m + 154);

  // Punto de estado, apagado en reposo
  ctx.beginPath();
  ctx.arc(w - m - 48, h / 2, 16, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(52, 211, 153, 0.28)";
  ctx.fill();
}
