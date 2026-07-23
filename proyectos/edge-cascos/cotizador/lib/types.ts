// Contrato de datos — deriva 1 a 1 de simulacion-5-cotizador.md (Pasos 1-3)
// Todos los precios son placeholders ficticios (ver nota del documento fuente).

export type TalleId = "S" | "M" | "L" | "XL";

export interface Colorway {
  id: string;
  nombre: string;
  hex: string; // color representativo del swatch
  premium: boolean; // true = colorway premium/edición limitada, aplica recargo
  imagenUrl: string; // Fase 1: imagen estática por modelo+colorway
}

export interface Modelo {
  id: string;
  nombre: string;
  precioBase: number; // precio_base_modelo (placeholder)
  colorways: Colorway[];
  tallesDisponibles: TalleId[];
}

export interface SeleccionCotizador {
  modeloId: string | null;
  colorwayId: string | null;
  talle: TalleId | null;
  cantidad: number;
}

export interface DesgloseCotizacion {
  precioUnitario: number;
  subtotal: number;
  porcentajeDescuento: number;
  montoDescuento: number;
  costoEnvio: number;
  total: number;
}

export const RECARGO_COLORWAY_PREMIUM = 15; // placeholder, ver linea 33 del doc fuente

export const UMBRALES_DESCUENTO_MAYORISTA = [
  { minCantidad: 10, porcentaje: 0.15 },
  { minCantidad: 5, porcentaje: 0.08 },
  { minCantidad: 1, porcentaje: 0 },
] as const;

export const COSTO_ENVIO_PLACEHOLDER = 12; // placeholder, pendiente definir por destino (linea 35 doc fuente)
