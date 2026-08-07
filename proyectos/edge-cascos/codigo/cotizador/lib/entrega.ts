import { SeleccionCotizador, Colorway } from "./types";

// Modelo de reglas simple (no inventario real todavía) — placeholders ficticios.
// Base + sumandos por complejidad, cantidad y disponibilidad.
const DIAS_BASE = 3;
const DIAS_EXTRA_PREMIUM = 3; // edición limitada / diseño custom a mano
const DIAS_EXTRA_CANTIDAD_ALTA = 2; // cantidad > umbral
const UMBRAL_CANTIDAD_ALTA = 3;

const DIAS_ES = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
const MESES_ES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function calcularDiasHabiles(
  colorway: Colorway,
  cantidad: number
): number {
  let dias = DIAS_BASE;
  if (colorway.premium) dias += DIAS_EXTRA_PREMIUM;
  if (cantidad > UMBRAL_CANTIDAD_ALTA) dias += DIAS_EXTRA_CANTIDAD_ALTA;
  return dias;
}

function sumarDiasHabiles(fecha: Date, diasHabiles: number): Date {
  const resultado = new Date(fecha);
  let restantes = diasHabiles;
  while (restantes > 0) {
    resultado.setDate(resultado.getDate() + 1);
    const diaSemana = resultado.getDay();
    if (diaSemana !== 0 && diaSemana !== 6) {
      restantes -= 1;
    }
  }
  return resultado;
}

export function formatearFechaEntrega(fecha: Date): string {
  const diaSemana = DIAS_ES[fecha.getDay()];
  const mes = MESES_ES[fecha.getMonth()];
  return `${diaSemana} ${fecha.getDate()} de ${mes}`;
}

// Recibe la fecha de referencia (hoy) explícitamente — no usa Date.now()
// internamente para que el llamador controle el punto de partida.
export function estimarFechaEntrega(
  colorway: Colorway,
  seleccion: Pick<SeleccionCotizador, "cantidad">,
  fechaReferencia: Date
): { fechaTexto: string; diasHabiles: number } {
  const diasHabiles = calcularDiasHabiles(colorway, seleccion.cantidad);
  const fechaEstimada = sumarDiasHabiles(fechaReferencia, diasHabiles);
  return {
    fechaTexto: formatearFechaEntrega(fechaEstimada),
    diasHabiles,
  };
}
