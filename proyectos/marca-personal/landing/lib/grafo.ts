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

// Mismas etiquetas y disposicion que la version en pantalla: lo unico que se
// va es el monitor.
//
// Colores: paleta curada de tonos joya, todos con saturacion y luminosidad
// parecidas (no los colores de marca crudos de cada herramienta). El azul
// monocromo anterior resolvia el choque con el amarillo de Drive y el morado
// de Canva, pero se paso de plano -- sin variedad de tono la pagina se leia
// sin vida. Aqui hay variedad de HUE pero todos en el mismo registro (600 de
// Tailwind, mas o menos), asi que conviven sin que ninguno grite por encima
// de los demas. ChatGPT es la excepcion: se queda en el azul de marca porque
// pasa a ser el orbe de cristal central, no una insignia mas.
export const NODOS: Nodo[] = [
  { id: "webhook", label: "Webhook", sub: "Disparador", x: 390, y: 300, color: "#E11D48", z: -0.12 },
  { id: "discord", label: "Discord", sub: "Mensajes", x: 390, y: 730, color: "#7C3AED", z: -0.12 },
  { id: "gpt", label: "ChatGPT", sub: "Agente", x: 800, y: 515, color: "#0EA5E9", z: 0.24 },
  { id: "slack", label: "Slack", sub: "Notifica", x: 1210, y: 250, color: "#0891B2", z: -0.02 },
  { id: "drive", label: "Drive", sub: "Archiva", x: 1210, y: 430, color: "#D97706", z: -0.02 },
  { id: "notion", label: "Notion", sub: "Registra", x: 1210, y: 610, color: "#475569", z: -0.02 },
  { id: "canva", label: "Canva", sub: "Publica", x: 1210, y: 790, color: "#DB2777", z: -0.02 },
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
// 549 y no 520: la etiqueta cuelga por debajo de cada esfera, asi que el
// conjunto pesa hacia abajo y hay que subirlo para que quede centrado.
const CENTRO = { x: 800, y: 549 };

// El radio lo fija el hueco disponible, no el gusto: la columna de salidas
// tiene cuatro agentes separados 180 unidades de diseno, o sea 0.468 de
// escena. Cada uno ocupa 2*RADIO de esfera mas la etiqueta mas un respiro:
// 0.26 + 0.15 + 0.02 = 0.43, que entra en 0.468. Con un radio mayor las
// etiquetas se montarian sobre la esfera de abajo.
export const RADIO = 0.13;
// El orbe central es un objeto distinto, no una insignia mas grande: mide
// mas del doble para que se lea como el nucleo del sistema. El hueco que
// deja libre (0.559 en horizontal entre su centro y el de una entrada, 0.86
// en vertical) sobra de sobra frente a RADIO_ORBE + RADIO.
export const RADIO_ORBE = 0.3;
/** Bloque de texto bajo la esfera o insignia. */
export const ETIQUETA = { w: 0.7, h: 0.15 };

/** Radio real de cada nodo: el orbe central es distinto del resto. */
export function radioDe(n: Nodo): number {
  return n.id === "gpt" ? RADIO_ORBE : RADIO;
}

/**
 * Disposicion vertical, para un hueco en retrato (el que ocupa el movil en la
 * referencia). Es el mismo grafo girado 90 grados: las entradas arriba, el
 * agente en medio y las salidas abajo, que ademas es como se lee un flujo
 * cuando el espacio es mas alto que ancho.
 *
 * La escala es mayor que en horizontal porque el reparto cambia: en vertical
 * las cuatro salidas se separan a lo ANCHO, y con 0.0026 sus etiquetas se
 * montaban unas sobre otras.
 */
export const ESCALA_V = 0.004;

export function posicion(n: Nodo, vertical = false): [number, number, number] {
  if (vertical) {
    return [(n.y - CENTRO.y) * ESCALA_V, (CENTRO.x - n.x) * ESCALA_V, n.z];
  }
  return [(n.x - CENTRO.x) * ESCALA, (CENTRO.y - n.y) * ESCALA, n.z];
}

/**
 * La conexion sale y entra por el BORDE de la esfera, no por su centro.
 * En vertical sale por abajo y entra por arriba, siguiendo el giro del grafo.
 */
export function salida(n: Nodo, vertical = false): [number, number, number] {
  const p = posicion(n, vertical);
  const r = radioDe(n);
  return vertical ? [p[0], p[1] - r, p[2]] : [p[0] + r, p[1], p[2]];
}
export function entrada(n: Nodo, vertical = false): [number, number, number] {
  const p = posicion(n, vertical);
  const r = radioDe(n);
  return vertical ? [p[0], p[1] + r, p[2]] : [p[0] - r, p[1], p[2]];
}

export function buscar(id: string): Nodo {
  return NODOS.find((n) => n.id === id)!;
}

// --- Texturas ------------------------------------------------------------

export const TEX_ETIQUETA = { w: 512, h: 110 };
export const TEX_ONDA = { w: 512, h: 128 };
export const TEX_INSIGNIA = { w: 256, h: 256 };

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
 * Insignia plana de una herramienta: un cuadrado redondeado de color solido
 * con su inicial, sobre canvas transparente.
 *
 * Reemplaza a la esfera con onda interior para las seis herramientas: son
 * iconos, no agentes pensando, asi que se leen mejor como un objeto plano y
 * simple que como otra bola de energia compitiendo con el orbe central.
 * Se dibuja UNA vez, igual que la etiqueta: no cambia nunca.
 */
export function dibujarInsignia(ctx: CanvasRenderingContext2D, n: Nodo) {
  const { w, h } = TEX_INSIGNIA;
  const m = 14;
  ctx.clearRect(0, 0, w, h);

  rectRedondeado(ctx, m, m, w - m * 2, h - m * 2, 46);
  ctx.fillStyle = n.color;
  ctx.fill();

  // Un brillo diagonal muy tenue, para que se lea como superficie y no como
  // un cuadrado de color plano pegado en el aire.
  const brillo = ctx.createLinearGradient(m, m, w - m, h - m);
  brillo.addColorStop(0, "rgba(255,255,255,0.32)");
  brillo.addColorStop(0.5, "rgba(255,255,255,0.04)");
  brillo.addColorStop(1, "rgba(255,255,255,0)");
  rectRedondeado(ctx, m, m, w - m * 2, h - m * 2, 46);
  ctx.fillStyle = brillo;
  ctx.fill();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "700 128px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(n.label[0], w / 2, h / 2 + 6);
}

/**
 * Nombre y funcion del agente, centrados, sobre canvas transparente.
 * Se dibuja una sola vez por agente: no cambia nunca.
 */
export function dibujarEtiqueta(
  ctx: CanvasRenderingContext2D,
  n: Nodo,
  color = "#FFFFFF"
) {
  const { w, h } = TEX_ETIQUETA;
  ctx.clearRect(0, 0, w, h);
  ctx.textAlign = "center";

  // Solo el nombre: con la esfera ocupando el alto disponible no entra una
  // segunda linea sin que las etiquetas se monten unas sobre otras.
  ctx.fillStyle = color;
  ctx.font = "600 64px system-ui, sans-serif";
  ctx.fillText(n.label, w / 2, 74);
}

/**
 * La onda de voz que vive dentro de la esfera.
 *
 * Se dibuja UNA vez y despues se anima moviendo `offset.x` de la textura y
 * escalando el plano: las dos cosas son gratis, mientras que redibujar la
 * onda en cada frame obligaria a subirla a la GPU sesenta veces por segundo.
 * Por eso es CICLICA en horizontal (todas las frecuencias son enteras): al
 * desplazarse no se ve la costura.
 */
export function dibujarOnda(ctx: CanvasRenderingContext2D) {
  const { w, h } = TEX_ONDA;
  ctx.clearRect(0, 0, w, h);

  // Envolvente: fuerte en el centro y apagada en los extremos, como en un
  // medidor de voz real.
  const envolvente = (x: number) => Math.pow(Math.sin((x / w) * Math.PI), 1.6);

  for (const capa of [
    { amp: 0.42, grosor: 7, alfa: 0.95, f: [3, 7, 11] },
    { amp: 0.26, grosor: 4, alfa: 0.55, f: [5, 9, 17] },
  ]) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const u = (x / w) * Math.PI * 2;
      const v =
        Math.sin(u * capa.f[0]) * 0.5 +
        Math.sin(u * capa.f[1]) * 0.32 +
        Math.sin(u * capa.f[2]) * 0.18;
      const y = h / 2 + v * capa.amp * h * envolvente(x);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(255, 255, 255, ${capa.alfa})`;
    ctx.lineWidth = capa.grosor;
    ctx.lineCap = "round";
    ctx.stroke();
  }

  // Nucleo horizontal encendido: es lo que hace que la onda se lea como luz
  // y no como un trazo dibujado.
  const g = ctx.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, "rgba(255,255,255,0)");
  g.addColorStop(0.5, "rgba(255,255,255,0.9)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, h / 2 - 2, w, 4);
}
