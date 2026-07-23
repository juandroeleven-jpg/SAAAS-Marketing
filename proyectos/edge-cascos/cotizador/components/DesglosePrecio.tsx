"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { DesgloseCotizacion } from "@/lib/types";

interface DesglosePrecioProps {
  desglose: DesgloseCotizacion | null;
}

function formatoMoneda(valor: number): string {
  return `$${valor.toFixed(2)}`;
}

function LineaValor({ id, valor }: { id: string; valor: string }) {
  return (
    <span className="relative inline-block overflow-hidden text-right tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={id + valor}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="inline-block"
        >
          {valor}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function DesglosePrecio({ desglose }: DesglosePrecioProps) {
  if (!desglose) {
    return (
      <div className="rounded-2xl border border-edge-border bg-edge-surface p-6 text-center">
        <p className="text-sm text-edge-muted">Tu cotización aparecerá aquí</p>
      </div>
    );
  }

  const {
    precioUnitario,
    subtotal,
    porcentajeDescuento,
    montoDescuento,
    costoEnvio,
    total,
  } = desglose;

  return (
    <motion.div
      layout
      className="rounded-2xl border border-edge-border bg-edge-surface p-6"
    >
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-edge-muted">
        Desglose de precio
      </h3>

      <dl className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm">
          <dt className="text-edge-muted">Precio unitario</dt>
          <dd className="text-edge-text">
            <LineaValor id="precioUnitario" valor={formatoMoneda(precioUnitario)} />
          </dd>
        </div>

        <div className="flex items-center justify-between text-sm">
          <dt className="text-edge-muted">Subtotal</dt>
          <dd className="text-edge-text">
            <LineaValor id="subtotal" valor={formatoMoneda(subtotal)} />
          </dd>
        </div>

        {porcentajeDescuento > 0 && (
          <div className="flex items-center justify-between text-sm">
            <dt className="text-edge-muted">
              Descuento ({(porcentajeDescuento * 100).toFixed(0)}%)
            </dt>
            <dd className="text-edge-accent">
              <LineaValor id="montoDescuento" valor={`-${formatoMoneda(montoDescuento)}`} />
            </dd>
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <dt className="text-edge-muted">Costo de envío</dt>
          <dd className="text-edge-text">
            <LineaValor id="costoEnvio" valor={formatoMoneda(costoEnvio)} />
          </dd>
        </div>
      </dl>

      <div className="my-4 h-px bg-edge-border" />

      <div className="flex items-center justify-between">
        <span className="text-base font-semibold text-edge-text">Total</span>
        <span className="text-2xl font-bold text-edge-accent">
          <LineaValor id="total" valor={formatoMoneda(total)} />
        </span>
      </div>

      <p className="mt-5 text-center text-xs text-edge-muted">
        Precios de referencia, sujetos a confirmación
      </p>
    </motion.div>
  );
}
