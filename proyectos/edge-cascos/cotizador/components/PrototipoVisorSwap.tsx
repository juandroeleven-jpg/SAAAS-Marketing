"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RANURAS_VISOR,
  VISOR_VARIANTES,
  poligonoACss,
} from "@/lib/visorSlots";

// Prototipo funcional: demuestra que el MISMO MOLDE de casco puede llevar
// distintas caratulas/licencias intercambiables (Bob Esponja <-> Godfather),
// con la ranura del visor calibrada para que quede en la misma posicion
// entre licencias -- es el mecanismo real de negocio (una sola forma
// fisica, muchas licencias vendibles encima), no solo un cambio de color.
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
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute left-4 top-4 rounded-full bg-edge-bg/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-edge-accent backdrop-blur">
          Mismo molde · carátula {ranura.nombreLicencia}
        </div>

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
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-edge-accent">
            1. Carátula / licencia — el molde físico es el mismo, esto es lo que el cliente compra
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
            2. Tipo de visor — capa secundaria, misma ranura calibrada en ambas carátulas
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
        Prototipo: cambiar de carátula demuestra el mecanismo real de negocio
        — un solo molde de casco, múltiples licencias vendibles encima, con
        el visor calibrado en la misma posición en cada foto. El tinte de
        visor es secundario: mismo principio (clip-path calibrado), aplicado
        a una capa distinta.
      </p>
    </div>
  );
}
