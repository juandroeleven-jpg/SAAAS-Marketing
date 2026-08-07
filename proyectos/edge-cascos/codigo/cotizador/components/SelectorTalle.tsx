"use client";

import { motion } from "framer-motion";
import type { TalleId } from "@/lib/types";

interface SelectorTalleProps {
  tallesDisponibles: TalleId[];
  talleSeleccionado: TalleId | null;
  onSeleccionar: (talle: TalleId) => void;
}

export default function SelectorTalle({
  tallesDisponibles,
  talleSeleccionado,
  onSeleccionar,
}: SelectorTalleProps) {
  return (
    <div className="flex flex-row flex-wrap gap-3" role="group" aria-label="Selector de talle">
      {tallesDisponibles.map((talle) => {
        const seleccionado = talle === talleSeleccionado;

        return (
          <motion.button
            key={talle}
            type="button"
            onClick={() => onSeleccionar(talle)}
            aria-pressed={seleccionado}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`min-w-[3rem] rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              seleccionado
                ? "border-edge-accent bg-edge-accent text-edge-text"
                : "border-edge-border bg-edge-surface text-edge-muted hover:text-edge-text"
            }`}
          >
            {talle}
          </motion.button>
        );
      })}
    </div>
  );
}
