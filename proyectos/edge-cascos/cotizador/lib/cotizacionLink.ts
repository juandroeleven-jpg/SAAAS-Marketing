import { SeleccionCotizador } from "./types";

// Fase actual: el estado va codificado en el propio link (sin base de datos).
// Cuando exista persistencia real, solo cambia el CUERPO de estas dos
// funciones — el resto del proyecto (rutas, componentes) no cambia.
// Ver investigación 23/07/2026 (opcion A recomendada).

export function encodeCotizacion(seleccion: SeleccionCotizador): string {
  const json = JSON.stringify(seleccion);
  return Buffer.from(json, "utf-8").toString("base64url");
}

// Hoy: decodifica el id directamente. Mañana: reemplazar el cuerpo por
// `await prisma.cotizacion.findUnique({ where: { id } })` sin tocar
// quién llama a esta función.
export function getCotizacion(id: string): SeleccionCotizador | null {
  try {
    const json = Buffer.from(id, "base64url").toString("utf-8");
    const data = JSON.parse(json);
    if (
      typeof data === "object" &&
      data !== null &&
      "modeloId" in data &&
      "colorwayId" in data &&
      "talle" in data &&
      "cantidad" in data
    ) {
      return data as SeleccionCotizador;
    }
    return null;
  } catch {
    return null;
  }
}
