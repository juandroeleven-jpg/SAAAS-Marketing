import {
  Modelo,
  DesgloseCotizacion,
  RECARGO_COLORWAY_PREMIUM,
  UMBRALES_DESCUENTO_MAYORISTA,
  COSTO_ENVIO_PLACEHOLDER,
} from "./types";

// Fórmula exacta del Paso 3 de simulacion-5-cotizador.md:
// precio_unitario = precio_base_modelo + recargo_colorway_especial
// subtotal = precio_unitario × cantidad
// descuento = subtotal × descuento_por_cantidad
// total = subtotal − descuento + costo_envio
export function calcularPrecio(
  modelo: Modelo,
  colorwayId: string,
  cantidad: number
): DesgloseCotizacion {
  const colorway = modelo.colorways.find((c) => c.id === colorwayId);
  const recargo = colorway?.premium ? RECARGO_COLORWAY_PREMIUM : 0;

  const precioUnitario = modelo.precioBase + recargo;
  const subtotal = precioUnitario * cantidad;

  const umbral = UMBRALES_DESCUENTO_MAYORISTA.find(
    (u) => cantidad >= u.minCantidad
  );
  const porcentajeDescuento = umbral?.porcentaje ?? 0;
  const montoDescuento = subtotal * porcentajeDescuento;

  const costoEnvio = COSTO_ENVIO_PLACEHOLDER;
  const total = subtotal - montoDescuento + costoEnvio;

  return {
    precioUnitario,
    subtotal,
    porcentajeDescuento,
    montoDescuento,
    costoEnvio,
    total,
  };
}
