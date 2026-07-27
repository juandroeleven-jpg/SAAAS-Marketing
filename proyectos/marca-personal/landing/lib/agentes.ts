// Segunda escena de pantalla: en vez del grafo de nodos que se dispara
// (lib/flujo.ts), aqui se ve a un AGENTE razonando -- encadena pasos de
// pensamiento y recien cuando termina se conecta a las apps.
//
// Comparte el espacio de diseno con la otra escena, asi que las dos son
// intercambiables sobre la misma superficie sin tocar nada de la geometria
// 3D ni del mapeo UV.
import { DISENO } from "./flujo";

const BARRA_H = 74;
const FONDO = "#0D1117";

/** Ciclo completo: despertar -> pensar -> ejecutar -> reposo. */
export const CICLO_AGENTES = 9.2;

// --- Agentes -----------------------------------------------------------
// El principal razona; los dos secundarios laten en su propio ritmo para
// que se lea que hay VARIOS agentes vivos y no uno solo.
const AGENTE = { x: 300, y: 540, r: 86, color: "#38BDF8" };
const SECUNDARIOS = [
  { x: 300, y: 288, r: 40, color: "#A78BFA", desfase: 1.4 },
  { x: 300, y: 792, r: 40, color: "#34D399", desfase: 3.1 },
];

// --- Pasos de pensamiento ---------------------------------------------
const PASO = { x: 570, w: 520, h: 92, gap: 24 };
// Textos cortos: a 40px en el espacio de diseno, una linea larga se sale de
// su tarjeta y se mete en la columna de apps. Ademas del texto corto, abajo
// se recorta el dibujo al rectangulo de la tarjeta, para que un cambio futuro
// no pueda volver a romper el layout sin que se note.
const PASOS = [
  { texto: "Lee el pedido", inicio: 0.7 },
  { texto: "Consulta inventario", inicio: 1.9 },
  { texto: "Calcula el precio", inicio: 3.1 },
  { texto: "Redacta respuesta", inicio: 4.3 },
];
const DUR_PASO = 1.05;
const PASOS_Y0 = 236;

// --- Apps de salida ----------------------------------------------------
const APP = { x: 1230, w: 320, h: 100 };
const APPS = [
  { id: "slack", label: "Slack", color: "#36C5F0", y: 250, inicio: 6.0 },
  { id: "drive", label: "Drive", color: "#FBBC04", y: 392, inicio: 6.2 },
  { id: "notion", label: "Notion", color: "#E5E7EB", y: 534, inicio: 6.4 },
  { id: "canva", label: "Canva", color: "#8B5CF6", y: 676, inicio: 6.6 },
];
const DUR_ENVIO = 0.9;

function conAlfa(hex: string, alfa: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alfa})`;
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

/** 0 antes de empezar, 0..1 mientras dura, 1 despues. */
function avance(fase: number, inicio: number, dur: number): number {
  if (fase < inicio) return 0;
  if (fase > inicio + dur) return 1;
  return (fase - inicio) / dur;
}

// Avatar de energia: nucleo brillante, halo que respira y particulas en
// orbita. Es lo que representa al agente -- no un icono ni una cara, algo
// que se lee como "esto esta procesando".
function avatar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color: string,
  t: number,
  actividad: number
) {
  const latido = 0.5 + 0.5 * Math.sin(t * 2.1);
  const intensidad = 0.35 + 0.65 * actividad;

  // Halo
  const halo = ctx.createRadialGradient(x, y, r * 0.2, x, y, r * (1.9 + 0.15 * latido));
  halo.addColorStop(0, conAlfa(color, 0.55 * intensidad));
  halo.addColorStop(0.5, conAlfa(color, 0.16 * intensidad));
  halo.addColorStop(1, conAlfa(color, 0));
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(x, y, r * 2.1, 0, Math.PI * 2);
  ctx.fill();

  // Nucleo
  const nucleo = ctx.createRadialGradient(
    x - r * 0.25,
    y - r * 0.25,
    r * 0.1,
    x,
    y,
    r
  );
  nucleo.addColorStop(0, "#FFFFFF");
  nucleo.addColorStop(0.45, color);
  nucleo.addColorStop(1, conAlfa(color, 0.25));
  ctx.fillStyle = nucleo;
  ctx.beginPath();
  ctx.arc(x, y, r * (0.92 + 0.06 * latido), 0, Math.PI * 2);
  ctx.fill();

  // Anillo de orbita, inclinado, para que se lea volumen
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(t * 0.5);
  ctx.scale(1, 0.36);
  ctx.beginPath();
  ctx.arc(0, 0, r * 1.5, 0, Math.PI * 2);
  ctx.strokeStyle = conAlfa(color, 0.4 * intensidad);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.restore();

  // Particulas en orbita
  const n = 5;
  for (let i = 0; i < n; i++) {
    const a = t * 1.1 + (i / n) * Math.PI * 2;
    const px = x + Math.cos(a) * r * 1.5;
    const py = y + Math.sin(a) * r * 1.5 * 0.36;
    ctx.beginPath();
    ctx.arc(px, py, 6 + 3 * intensidad, 0, Math.PI * 2);
    ctx.fillStyle = conAlfa("#FFFFFF", 0.75 * intensidad);
    ctx.fill();
  }
}

// Curva con tiradores horizontales, el mismo trazo de la otra escena.
function curva(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  hasta: number,
  color: string,
  grosor: number
) {
  const dx = Math.max(60, (x1 - x0) * 0.5);
  const cx0 = x0 + dx;
  const cx1 = x1 - dx;
  const pasos = 24;
  ctx.beginPath();
  for (let i = 0; i <= pasos; i++) {
    const tt = (i / pasos) * hasta;
    const u = 1 - tt;
    const px =
      u * u * u * x0 + 3 * u * u * tt * cx0 + 3 * u * tt * tt * cx1 + tt * tt * tt * x1;
    const py =
      u * u * u * y0 + 3 * u * u * tt * y0 + 3 * u * tt * tt * y1 + tt * tt * tt * y1;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = grosor;
  ctx.lineCap = "round";
  ctx.stroke();
}

/**
 * Pinta la escena de agentes en el segundo `t`. Igual que `dibujarFlujo`,
 * asume que el contexto ya esta en el espacio de diseno y no lo transforma.
 */
export function dibujarAgentes(ctx: CanvasRenderingContext2D, t: number) {
  const fase = t % CICLO_AGENTES;

  ctx.fillStyle = FONDO;
  ctx.fillRect(0, 0, DISENO.w, DISENO.h);

  // Retícula de puntos
  ctx.fillStyle = "#1B2331";
  for (let gx = 40; gx < DISENO.w; gx += 46) {
    for (let gy = BARRA_H + 30; gy < DISENO.h; gy += 46) {
      ctx.beginPath();
      ctx.arc(gx, gy, 2.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Barra de ventana
  ctx.fillStyle = "#212C3B";
  ctx.fillRect(0, 0, DISENO.w, BARRA_H);
  ctx.fillStyle = "#33425A";
  ctx.fillRect(0, BARRA_H - 3, DISENO.w, 3);
  ["#FF5F57", "#FEBC2E", "#28C840"].forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(58 + i * 48, BARRA_H / 2, 14, 0, Math.PI * 2);
    ctx.fillStyle = c;
    ctx.fill();
  });
  ctx.fillStyle = "#A9B7CA";
  ctx.font = "600 30px system-ui, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Codeflow — Agentes", 210, BARRA_H / 2 + 11);
  const vivo = 0.55 + Math.sin(t * 2.4) * 0.45;
  ctx.beginPath();
  ctx.arc(DISENO.w - 210, BARRA_H / 2, 9, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(52, 211, 153, ${vivo})`;
  ctx.fill();
  ctx.fillStyle = "#5D6B7E";
  ctx.font = "500 26px system-ui, sans-serif";
  ctx.fillText("razonando", DISENO.w - 188, BARRA_H / 2 + 9);

  // Cuanto esta trabajando el agente principal: alto mientras piensa y
  // mientras envia, bajo en reposo.
  const trabajando =
    fase > 0.4 && fase < 7.6
      ? 1
      : Math.max(0, 1 - Math.abs(fase - (fase < 1 ? 0.4 : 7.6)) * 1.6);

  // --- Conexiones agente -> pasos --------------------------------------
  PASOS.forEach((p, i) => {
    const y = PASOS_Y0 + i * (PASO.h + PASO.gap) + PASO.h / 2;
    const a = avance(fase, p.inicio, DUR_PASO);
    curva(ctx, AGENTE.x + AGENTE.r, AGENTE.y, PASO.x, y, 1, "#2C3B50", 6);
    if (a > 0) {
      curva(
        ctx,
        AGENTE.x + AGENTE.r,
        AGENTE.y,
        PASO.x,
        y,
        a,
        conAlfa(AGENTE.color, 0.9),
        7
      );
    }
  });

  // --- Pasos de pensamiento --------------------------------------------
  PASOS.forEach((p, i) => {
    const y = PASOS_Y0 + i * (PASO.h + PASO.gap);
    const a = avance(fase, p.inicio, DUR_PASO);
    const hecho = a >= 1;

    rectRedondeado(ctx, PASO.x, y, PASO.w, PASO.h, 20);
    ctx.fillStyle = "#19212D";
    ctx.fill();
    ctx.strokeStyle = hecho
      ? conAlfa("#34D399", 0.7)
      : a > 0
        ? conAlfa(AGENTE.color, 0.75)
        : "#3A4B62";
    ctx.lineWidth = a > 0 ? 4 : 3;
    ctx.stroke();

    // Barra de progreso del propio paso: es lo que hace ver que el agente
    // esta EN eso ahora mismo y no que la tarjeta simplemente se encendio.
    if (a > 0 && !hecho) {
      ctx.save();
      rectRedondeado(ctx, PASO.x, y, PASO.w, PASO.h, 20);
      ctx.clip();
      ctx.fillStyle = conAlfa(AGENTE.color, 0.16);
      ctx.fillRect(PASO.x, y, PASO.w * a, PASO.h);
      ctx.restore();
    }

    // Marca de completado
    const cx = PASO.x + 40;
    const cy = y + PASO.h / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 17, 0, Math.PI * 2);
    ctx.fillStyle = hecho ? "#34D399" : a > 0 ? conAlfa(AGENTE.color, 0.85) : "#2C3B50";
    ctx.fill();
    if (hecho) {
      ctx.beginPath();
      ctx.moveTo(cx - 7, cy);
      ctx.lineTo(cx - 2, cy + 6);
      ctx.lineTo(cx + 8, cy - 6);
      ctx.strokeStyle = "#0D1117";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }

    ctx.save();
    rectRedondeado(ctx, PASO.x, y, PASO.w, PASO.h, 20);
    ctx.clip();
    ctx.textAlign = "left";
    ctx.fillStyle = a > 0 ? "#FFFFFF" : "#8A98AC";
    ctx.font = "600 40px system-ui, sans-serif";
    ctx.fillText(p.texto, PASO.x + 80, y + PASO.h / 2 + 14);
    ctx.restore();
  });

  // --- Conexiones ultimo paso -> apps ----------------------------------
  const yUltimo =
    PASOS_Y0 + (PASOS.length - 1) * (PASO.h + PASO.gap) + PASO.h / 2;
  APPS.forEach((app) => {
    const y = app.y + APP.h / 2;
    const a = avance(fase, app.inicio, DUR_ENVIO);
    curva(ctx, PASO.x + PASO.w, yUltimo, APP.x, y, 1, "#2C3B50", 6);
    if (a > 0) {
      curva(ctx, PASO.x + PASO.w, yUltimo, APP.x, y, a, conAlfa(app.color, 0.9), 7);
    }
  });

  // --- Apps -------------------------------------------------------------
  APPS.forEach((app) => {
    const a = avance(fase, app.inicio, DUR_ENVIO);
    const enc = a >= 1 ? 1 : a;

    ctx.save();
    if (enc > 0) {
      ctx.shadowColor = app.color;
      ctx.shadowBlur = 38 * enc;
    }
    rectRedondeado(ctx, APP.x, app.y, APP.w, APP.h, 20);
    ctx.fillStyle = "#19212D";
    ctx.fill();
    ctx.restore();

    rectRedondeado(ctx, APP.x, app.y, APP.w, APP.h, 20);
    ctx.strokeStyle = enc > 0 ? conAlfa(app.color, 0.4 + 0.6 * enc) : "#3A4B62";
    ctx.lineWidth = 3 + 3 * enc;
    ctx.stroke();

    rectRedondeado(ctx, APP.x + 22, app.y + 24, 56, 56, 15);
    ctx.fillStyle = app.color;
    ctx.fill();

    ctx.textAlign = "left";
    ctx.fillStyle = enc > 0.3 ? "#FFFFFF" : "#C6D0DE";
    ctx.font = "600 42px system-ui, sans-serif";
    ctx.fillText(app.label, APP.x + 96, app.y + APP.h / 2 + 15);
  });

  // --- Agentes ----------------------------------------------------------
  SECUNDARIOS.forEach((s) => {
    const act = 0.35 + 0.4 * (0.5 + 0.5 * Math.sin(t * 1.3 + s.desfase));
    avatar(ctx, s.x, s.y, s.r, s.color, t + s.desfase, act);
  });
  avatar(ctx, AGENTE.x, AGENTE.y, AGENTE.r, AGENTE.color, t, trabajando);

  // Etiqueta del agente principal
  ctx.textAlign = "center";
  ctx.fillStyle = "#E6EDF7";
  ctx.font = "700 38px system-ui, sans-serif";
  ctx.fillText("Agente", AGENTE.x, AGENTE.y + AGENTE.r + 62);
  ctx.fillStyle = "#77869B";
  ctx.font = "500 30px system-ui, sans-serif";
  ctx.fillText(
    fase < 5.6 ? "razonando…" : fase < 7.6 ? "ejecutando" : "en espera",
    AGENTE.x,
    AGENTE.y + AGENTE.r + 94
  );
  ctx.textAlign = "left";
}
