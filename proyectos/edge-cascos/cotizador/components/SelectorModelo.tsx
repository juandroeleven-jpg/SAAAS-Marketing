"use client";

import { motion } from "framer-motion";
import { Modelo } from "@/lib/types";

interface SelectorModeloProps {
  modelos: Modelo[];
  modeloSeleccionadoId: string | null;
  onSeleccionar: (modeloId: string) => void;
}

function formatearPrecio(precio: number): string {
  return `$${precio.toLocaleString("en-US")}`;
}

export default function SelectorModelo({
  modelos,
  modeloSeleccionadoId,
  onSeleccionar,
}: SelectorModeloProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {modelos.map((modelo) => {
        const seleccionado = modelo.id === modeloSeleccionadoId;

        return (
          <motion.button
            key={modelo.id}
            type="button"
            onClick={() => onSeleccionar(modelo.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-pressed={seleccionado}
            className={`text-left rounded-2xl border bg-edge-surface p-5 shadow-lg shadow-black/20 transition-colors duration-200 ${
              seleccionado
                ? "border-edge-accent ring-1 ring-edge-accent"
                : "border-edge-border hover:border-edge-muted"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-edge-text">
                {modelo.nombre}
              </h3>
              {seleccionado && (
                <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-edge-accent" />
              )}
            </div>

            <p className="mt-2 text-2xl font-bold text-edge-text">
              {formatearPrecio(modelo.precioBase)}
            </p>

            <p className="mt-1 text-sm text-edge-muted">
              {modelo.colorways.length}{" "}
              {modelo.colorways.length === 1 ? "colorway" : "colorways"} ·{" "}
              {modelo.tallesDisponibles.join(" / ")}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
}
