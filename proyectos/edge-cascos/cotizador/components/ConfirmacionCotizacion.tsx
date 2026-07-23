"use client";

import { motion } from "framer-motion";
import { Colorway, DesgloseCotizacion, Modelo, TalleId } from "@/lib/types";

interface ConfirmacionCotizacionProps {
  modelo: Modelo;
  colorway: Colorway;
  talle: TalleId;
  cantidad: number;
  desglose: DesgloseCotizacion;
  onVolver: () => void;
}

function formatoMoneda(valor: number): string {
  return `$${valor.toFixed(2)}`;
}

// Placeholder — reemplazar por el número real de WhatsApp de EDGE antes de publicar.
const WHATSAPP_NUMERO_PLACEHOLDER = "50700000000";

export default function ConfirmacionCotizacion({
  modelo,
  colorway,
  talle,
  cantidad,
  desglose,
  onVolver,
}: ConfirmacionCotizacionProps) {
  const mensaje = encodeURIComponent(
    `Hola, quiero confirmar esta cotización EDGE:\n` +
      `Modelo: ${modelo.nombre}\n` +
      `Colorway: ${colorway.nombre}\n` +
      `Talle: ${talle}\n` +
      `Cantidad: ${cantidad}\n` +
      `Total estimado: ${formatoMoneda(desglose.total)} (precios de referencia, sujetos a confirmación)`
  );

  const linkWhatsapp = `https://wa.me/${WHATSAPP_NUMERO_PLACEHOLDER}?text=${mensaje}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-3xl border border-edge-border bg-edge-surface p-8 text-center"
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-edge-accent">
          Cotización lista
        </span>
        <h2 className="mt-2 text-2xl font-bold text-edge-text">
          {modelo.nombre} — {colorway.nombre}
        </h2>
        <p className="mt-1 text-sm text-edge-muted">
          Talle {talle} · Cantidad {cantidad}
        </p>
      </div>

      <div className="rounded-2xl border border-edge-border bg-edge-bg p-6 text-left">
        <dl className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-edge-muted">Precio unitario</dt>
            <dd className="text-edge-text">{formatoMoneda(desglose.precioUnitario)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-edge-muted">Subtotal</dt>
            <dd className="text-edge-text">{formatoMoneda(desglose.subtotal)}</dd>
          </div>
          {desglose.porcentajeDescuento > 0 && (
            <div className="flex justify-between">
              <dt className="text-edge-muted">
                Descuento ({(desglose.porcentajeDescuento * 100).toFixed(0)}%)
              </dt>
              <dd className="text-edge-accent">
                -{formatoMoneda(desglose.montoDescuento)}
              </dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt className="text-edge-muted">Envío</dt>
            <dd className="text-edge-text">{formatoMoneda(desglose.costoEnvio)}</dd>
          </div>
        </dl>
        <div className="my-4 h-px bg-edge-border" />
        <div className="flex justify-between">
          <span className="font-semibold text-edge-text">Total</span>
          <span className="text-xl font-bold text-edge-accent">
            {formatoMoneda(desglose.total)}
          </span>
        </div>
      </div>

      <a
        href={linkWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-xl bg-edge-accent px-6 py-3 text-center font-semibold text-edge-text transition hover:brightness-110"
      >
        Enviar cotización por WhatsApp
      </a>

      <button
        type="button"
        onClick={onVolver}
        className="text-sm text-edge-muted underline-offset-4 hover:text-edge-text hover:underline"
      >
        ← Volver a modificar
      </button>

      <p className="text-xs text-edge-muted">
        Precios de referencia, sujetos a confirmación.
      </p>
    </motion.div>
  );
}
