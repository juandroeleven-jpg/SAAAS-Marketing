// Motor de dibujo de la automatizacion: un grafo tipo n8n/Zapier que se
// EJECUTA en bucle (se disparan las entradas, viajan los paquetes iluminando
// su linea, el agente procesa y recien despues salen los paquetes a las
// salidas, que se encienden al recibir).
//
// Vive aparte de cualquier componente a proposito: lo consumen dos superficies
// distintas y tienen que mostrar exactamente la misma animacion.
//   - ModeloLaptop: lo dibuja dentro de un sub-rectangulo del atlas UV del GLB,
//     con una transformacion previa (escala no uniforme + rotacion de 180).
//   - PantallaFlotante: lo dibuja 1:1 sobre una textura propia.
// Por eso `dibujarFlujo` NO toca la transformacion del contexto ni limpia el
// canvas: asume que quien llama ya dejo el contexto en el espacio de diseno
// DISENO (1600x1000) y se limita a pintar ahi dentro.

/** Espacio de diseno de la pantalla, 16:10 como una pantalla real. */
export const DISENO = { w: 1600, h: 1000 };
const BARRA_H = 74;

/** Fondo de la "app" que se ve en la pantalla. */
export const FONDO_PANTALLA = "#0D1117";

const TARJETA = { w: 340, h: 100 };

const NODOS = [
  { id: "webhook", label: "Webhook", sub: "Disparador", x: 390, y: 300, color: "#F43F5E" },
  { id: "discord", label: "Discord", sub: "Mensajes", x: 390, y: 730, color: "#5865F2" },
  { id: "gpt", label: "ChatGPT", sub: "Agente", x: 800, y: 515, color: "#10B981" },
  { id: "slack", label: "Slack", sub: "Notifica", x: 1210, y: 250, color: "#36C5F0" },
  { id: "drive", label: "Drive", sub: "Archiva", x: 1210, y: 430, color: "#FBBC04" },
  { id: "notion", label: "Notion", sub: "Registra", x: 1210, y: 610, color: "#E5E7EB" },
  { id: "canva", label: "Canva", sub: "Publica", x: 1210, y: 790, color: "#8B5CF6" },
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

/** Duracion del ciclo completo de ejecucion, en segundos. */
export const CICLO = 6.4;

const PROGRAMA_CONEXION: Record<string, { inicio: number; dur: number }> = {
  "webhook>gpt": { inicio: 0.55, dur: 1.15 },
  "discord>gpt": { inicio: 0.75, dur: 1.15 },
  "gpt>slack": { inicio: 2.55, dur: 1.0 },
  "gpt>drive": { inicio: 2.7, dur: 1.0 },
  "gpt>notion": { inicio: 2.85, dur: 1.0 },
  "gpt>canva": { inicio: 3.0, dur: 1.0 },
};

const PROGRAMA_NODO: Record<string, number> = {
  webhook: 0.25,
  discord: 0.45,
  gpt: 1.95,
  slack: 3.55,
  drive: 3.7,
  notion: 3.85,
  canva: 4.0,
};

// Sube rapido y decae lento: es lo que hace que se lea como un "disparo" y
// no como un parpadeo simetrico.
const SUBIDA = 0.18;
const CAIDA = 1.05;

function pulso(fase: number, inicio: number): number {
  let d = fase - inicio;
  if (d < 0) d += CICLO;
  if (d > SUBIDA + CAIDA) return 0;
  return d < SUBIDA ? d / SUBIDA : 1 - (d - SUBIDA) / CAIDA;
}

function progresoConexion(fase: number, id: string): number {
  const p = PROGRAMA_CONEXION[id];
  if (!p) return -1;
  const d = fase - p.inicio;
  if (d < 0 || d > p.dur) return -1;
  return d / p.dur;
}

function conAlfa(hex: string, alfa: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alfa})`;
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

/**
 * Pinta el estado del flujo en el segundo `t` sobre el contexto dado.
 * Quien llama es responsable de haber dejado el contexto en el espacio de
 * diseno (0,0)-(DISENO.w, DISENO.h) y de recortarlo si hace falta.
 */
export function dibujarFlujo(ctx: CanvasRenderingContext2D, t: number) {
  // Fondo de la app (oscuro: es una pantalla encendida, no una hoja)
  ctx.fillStyle = FONDO_PANTALLA;
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
    ctx.arc(58 + i * 48, BARRA_H / 2, 14, 0, Math.PI * 2);
    ctx.fillStyle = c;
    ctx.fill();
  });
  ctx.fillStyle = "#A9B7CA";
  ctx.font = "600 30px system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Codeflow — Orquestador", 210, BARRA_H / 2 + 11);
  // Indicador "en ejecucion", parpadeo lento
  const vivo = 0.55 + Math.sin(t * 2.4) * 0.45;
  ctx.beginPath();
  ctx.arc(DISENO.w - 180, BARRA_H / 2, 9, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(52, 211, 153, ${vivo})`;
  ctx.fill();
  ctx.fillStyle = "#5D6B7E";
  ctx.font = "500 26px system-ui, sans-serif";
  ctx.fillText("activo", DISENO.w - 158, BARRA_H / 2 + 9);

  const fase = t % CICLO;

  // Conexiones en reposo (por debajo de las tarjetas)
  ctx.lineCap = "round";
  CONEXIONES.forEach(([a, b]) => {
    const c = curva(nodo(a), nodo(b));
    ctx.beginPath();
    ctx.moveTo(c.x0, c.y0);
    ctx.bezierCurveTo(c.cx0, c.cy0, c.cx1, c.cy1, c.x1, c.y1);
    ctx.strokeStyle = "#2C3B50";
    ctx.lineWidth = 8;
    ctx.stroke();
  });

  // Conexion activa: se ilumina el tramo ya recorrido y viaja el paquete.
  // Iluminar solo lo recorrido (y no la linea entera) es lo que hace ver
  // POR DONDE va el dato ahora mismo.
  CONEXIONES.forEach(([a, b]) => {
    const p = progresoConexion(fase, a + ">" + b);
    if (p < 0) return;
    const c = curva(nodo(a), nodo(b));

    ctx.beginPath();
    const pasos = 26;
    for (let i = 0; i <= pasos; i++) {
      const [sx, sy] = puntoEnCurva(c, (i / pasos) * p);
      if (i === 0) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.strokeStyle = "#5B9BFF";
    ctx.lineWidth = 9;
    ctx.stroke();

    const [px, py] = puntoEnCurva(c, p);
    ctx.beginPath();
    ctx.arc(px, py, 30, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(147, 197, 253, 0.2)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px, py, 12, 0, Math.PI * 2);
    ctx.fillStyle = "#DBEAFE";
    ctx.fill();
  });

  // Tarjetas de nodo
  NODOS.forEach((n) => {
    const x = n.x - TARJETA.w / 2;
    const y = n.y - TARJETA.h / 2;
    const enc = pulso(fase, PROGRAMA_NODO[n.id]);

    // Onda que se expande al dispararse el nodo
    if (enc > 0.02) {
      const r = 1 - enc;
      rectRedondeado(
        ctx,
        x - 16 * r,
        y - 16 * r,
        TARJETA.w + 32 * r,
        TARJETA.h + 32 * r,
        22 + 16 * r
      );
      ctx.strokeStyle = conAlfa(n.color, 0.45 * enc);
      ctx.lineWidth = 5;
      ctx.stroke();
    }

    ctx.save();
    if (enc > 0) {
      ctx.shadowColor = n.color;
      ctx.shadowBlur = 42 * enc;
    }
    rectRedondeado(ctx, x, y, TARJETA.w, TARJETA.h, 22);
    ctx.fillStyle = "#19212D";
    ctx.fill();
    ctx.restore();

    if (enc > 0) {
      rectRedondeado(ctx, x, y, TARJETA.w, TARJETA.h, 22);
      ctx.fillStyle = conAlfa(n.color, 0.16 * enc);
      ctx.fill();
    }

    rectRedondeado(ctx, x, y, TARJETA.w, TARJETA.h, 22);
    ctx.strokeStyle = enc > 0 ? conAlfa(n.color, 0.35 + 0.65 * enc) : "#3A4B62";
    ctx.lineWidth = 4 + 3 * enc;
    ctx.stroke();

    // Cuadrito de color del servicio, crece un poco al activarse
    const cr = 56 + 6 * enc;
    rectRedondeado(ctx, x + 22 - 3 * enc, y + 23 - 3 * enc, cr, cr, 15);
    ctx.fillStyle = n.color;
    ctx.fill();

    ctx.textAlign = "left";
    ctx.fillStyle = enc > 0.3 ? "#FFFFFF" : "#E6EDF7";
    ctx.font = "600 36px system-ui, sans-serif";
    ctx.fillText(n.label, x + 96, y + 46);
    ctx.fillStyle = "#77869B";
    ctx.font = "500 28px system-ui, sans-serif";
    ctx.fillText(n.sub, x + 96, y + 81);

    // Punto de estado: verde apagado en reposo, encendido al ejecutarse
    ctx.beginPath();
    ctx.arc(x + TARJETA.w - 28, y + TARJETA.h / 2, 8 + 2 * enc, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(52, 211, 153, ${0.28 + 0.72 * enc})`;
    ctx.fill();
  });
}
