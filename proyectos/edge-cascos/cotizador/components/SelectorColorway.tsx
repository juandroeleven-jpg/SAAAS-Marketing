"use client";

import { motion } from "framer-motion";
import { Colorway } from "@/lib/types";

interface SelectorColorwayProps {
  colorways: Colorway[];
  colorwaySeleccionadoId: string | null;
  onSeleccionar: (colorwayId: string) => void;
}

export default function SelectorColorway({
  colorways,
  colorwaySeleccionadoId,
  onSeleccionar,
}: SelectorColorwayProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {colorways.map((colorway) => {
        const seleccionado = colorway.id === colorwaySeleccionadoId;

        return (
          <button
            key={colorway.id}
            type="button"
            onClick={() => onSeleccionar(colorway.id)}
            aria-pressed={seleccionado}
            aria-label={`Colorway ${colorway.nombre}${
              colorway.premium ? " (edición limitada)" : ""
            }`}
            className="flex flex-col items-center gap-2 focus:outline-none"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative flex h-12 w-12 items-center justify-center rounded-full"
              style={{
                backgroundColor: colorway.hex,
                boxShadow: seleccionado
                  ? "0 0 0 2px #15181D, 0 0 0 4px #FF3D2E"
                  : "0 0 0 1px #262B33",
              }}
            >
              {colorway.premium && (
                <span
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] leading-none text-edge-text"
                  style={{ backgroundColor: "#FF3D2E" }}
                  title="Edición limitada"
                >
                  ★
                </span>
              )}
            </motion.span>

            <span className="max-w-[5.5rem] text-center text-xs text-edge-muted">
              {colorway.nombre}
            </span>

            {colorway.premium && (
              <span className="rounded-full px-2 py-0.5 text-[10px] font-medium text-edge-accent">
                Edición limitada
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
