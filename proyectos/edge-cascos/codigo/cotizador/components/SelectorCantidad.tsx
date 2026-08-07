"use client";

import { AnimatePresence, motion } from "framer-motion";
import { UMBRALES_DESCUENTO_MAYORISTA } from "@/lib/types";

interface SelectorCantidadProps {
  cantidad: number;
  onCambiar: (nuevaCantidad: number) => void;
}

const CANTIDAD_MINIMA = 1;

function obtenerDescuentoMayorista(cantidad: number): number {
  const umbral = UMBRALES_DESCUENTO_MAYORISTA.find(
    (u) => cantidad >= u.minCantidad
  );
  return umbral?.porcentaje ?? 0;
}

export default function SelectorCantidad({
  cantidad,
  onCambiar,
}: SelectorCantidadProps) {
  const enMinimo = cantidad <= CANTIDAD_MINIMA;
  const descuento = obtenerDescuentoMayorista(cantidad);

  const decrementar = () => {
    if (cantidad > CANTIDAD_MINIMA) {
      onCambiar(cantidad - 1);
    }
  };

  const incrementar = () => {
    onCambiar(cantidad + 1);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-3 rounded-lg border border-edge-border bg-edge-surface px-2 py-2">
        <button
          type="button"
          onClick={decrementar}
          disabled={enMinimo}
          aria-label="Disminuir cantidad"
          className="flex h-8 w-8 items-center justify-center rounded-md text-edge-text transition-colors enabled:hover:bg-edge-border disabled:cursor-not-allowed disabled:text-edge-muted disabled:opacity-40"
        >
          <span className="text-lg leading-none">−</span>
        </button>

        <div className="flex w-8 items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={cantidad}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.15 }}
              className="text-base font-medium text-edge-text tabular-nums"
            >
              {cantidad}
            </motion.span>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={incrementar}
          aria-label="Aumentar cantidad"
          className="flex h-8 w-8 items-center justify-center rounded-md text-edge-text transition-colors hover:bg-edge-border"
        >
          <span className="text-lg leading-none">+</span>
        </button>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {descuento > 0 && (
          <motion.p
            key={descuento}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="text-xs font-medium text-edge-accent"
          >
            {Math.round(descuento * 100)}% de descuento mayorista aplicado
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
