"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RANURAS_VISOR,
  VISOR_VARIANTES,
  poligonoACss,
} from "@/lib/visorSlots";

// Prototipo funcional: demuestra el mecanismo de "ranura calibrada" sobre
// fotos REALES (Simulacion 6a/6b). El tinte de visor es un overlay de color
// recortado (clip-path) sobre la posicion exacta del visor de cada foto —
// mismo principio que aplicaria con una foto de visor real en vez de color.
export default function PrototipoVisorSwap() {
  const [ranuraIdx, setRanuraIdx] = useState(0);
  const [visorId, setVisorId] = useState(VISOR_VARIANTES[0].id);

  const ranura = RANURAS_VISOR[ranuraIdx];
  const visor = VISOR_VARIANTES.find((v) => v.id === visorId) ?? VISOR_VARIANTES[0];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="relative aspect-[1135/928] w-full overflow-hidden rounded-3xl border border-edge-border bg-edge-surface">
        <AnimatePresence mode="wait">
          <motion.img
            key={ranura.fotoBase}
            src={ranura.fotoBase}
            alt={ranura.nombreLicencia}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Capa de tinte de visor — recortada exactamente a la ranura calibrada */}
        <motion.div
          key={visor.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: visor.opacidad }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: visor.colorOverlay,
            clipPath: poligonoACss(ranura.poligonoVisor),
            mixBlendMode: "multiply",
          }}
        />

        {/* Debug: contorno de la ranura calibrada, para ver el mecanismo */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          <polygon
            points={ranura.poligonoVisor
              .map(([x, y]) => `${x}%,${y}%`)
              .join(" ")}
            fill="none"
            stroke="#FF3D2E"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-edge-muted">
            Casco con licencia (foto base fija)
          </p>
          <div className="flex flex-wrap gap-2">
            {RANURAS_VISOR.map((r, idx) => (
              <button
                key={r.fotoBase}
                onClick={() => setRanuraIdx(idx)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  idx === ranuraIdx
                    ? "border-edge-accent bg-edge-accent text-edge-text"
                    : "border-edge-border bg-edge-surface text-edge-muted hover:text-edge-text"
                }`}
              >
                {r.nombreLicencia}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-edge-muted">
            Tipo de visor (capa intercambiable)
          </p>
          <div className="flex flex-wrap gap-2">
            {VISOR_VARIANTES.map((v) => (
              <button
                key={v.id}
                onClick={() => setVisorId(v.id)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  v.id === visorId
                    ? "border-edge-accent bg-edge-accent text-edge-text"
                    : "border-edge-border bg-edge-surface text-edge-muted hover:text-edge-text"
                }`}
              >
                {v.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-edge-muted">
        Prototipo: el tinte de color demuestra el mecanismo de posicionamiento
        (clip-path calibrado por foto). Con visores reales generados por
        Nano Banana (mismo tamaño/forma, distinto color/tipo) se reemplaza
        el overlay de color por la imagen real del visor, sin cambiar la
        lógica de capas.
      </p>
    </div>
  );
}
