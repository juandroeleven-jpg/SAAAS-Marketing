"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CascoCapasProps {
  colorHex: string | null;
  premium: boolean;
  nombreModelo: string | null;
  nombreColorway: string | null;
}

// Ilustración propia (SVG, no depende de fotos de terceros) que actúa como
// mecanismo de capas: shell (color del colorway) + visor + gráfico (si premium).
// Reemplazable por fotos reales sin cambiar el mecanismo — ver Fase 1.5 en
// simulacion-5-cotizador.md.
export default function CascoCapas({
  colorHex,
  premium,
  nombreModelo,
  nombreColorway,
}: CascoCapasProps) {
  const shellColor = colorHex ?? "#262B33";

  return (
    <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl border border-edge-border bg-edge-surface shadow-xl">
      <AnimatePresence mode="wait">
        {!colorHex ? (
          <motion.div
            key="vacio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 px-8 text-center"
          >
            <span className="text-sm font-medium text-edge-muted">
              Elegí un modelo y colorway para ver tu casco
            </span>
          </motion.div>
        ) : (
          <motion.div
            key={`${colorHex}-${premium}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex w-full flex-col items-center gap-3 p-8"
          >
            <svg
              viewBox="0 0 240 220"
              className="h-auto w-full max-w-xs drop-shadow-2xl"
            >
              {/* Capa 1: shell — color del colorway */}
              <motion.path
                d="M40 140 C40 70 80 20 120 20 C160 20 200 70 200 140 C200 165 185 180 160 185 L80 185 C55 180 40 165 40 140 Z"
                fill={shellColor}
                stroke="#00000033"
                strokeWidth="1.5"
                animate={{ fill: shellColor }}
                transition={{ duration: 0.35 }}
              />

              {/* Capa 2: visor — siempre igual, independiente del color */}
              <path
                d="M55 120 C55 95 85 80 120 80 C155 80 185 95 185 120 C185 138 160 148 120 148 C80 148 55 138 55 120 Z"
                fill="#0B0D10"
                opacity="0.85"
              />
              <path
                d="M65 115 C65 100 90 90 120 90 C150 90 175 100 175 115"
                fill="none"
                stroke="#3A4048"
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Capa 3: gráfico/decal — solo si el colorway es premium */}
              {premium && (
                <g>
                  <path
                    d="M110 30 L130 30 L140 55 L100 55 Z"
                    fill="#FF3D2E"
                    opacity="0.9"
                  />
                  <text
                    x="120"
                    y="50"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#F5F6F7"
                    fontWeight="700"
                  >
                    LTD
                  </text>
                </g>
              )}
            </svg>

            <div className="text-center">
              <p className="text-sm font-semibold text-edge-text">
                {nombreModelo}
              </p>
              <p className="text-xs text-edge-muted">{nombreColorway}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
