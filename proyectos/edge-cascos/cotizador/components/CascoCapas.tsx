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
              <defs>
                <linearGradient id="shellShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
                  <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.28" />
                </linearGradient>
                <radialGradient id="visorShine" cx="35%" cy="25%" r="75%">
                  <stop offset="0%" stopColor="#7FA8C9" stopOpacity="0.55" />
                  <stop offset="55%" stopColor="#0B0D10" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0B0D10" stopOpacity="0.95" />
                </radialGradient>
              </defs>

              {/* Capa 1: shell — color del colorway, silueta tipo casco jet */}
              <motion.path
                d="M32 138 C30 82 66 24 121 22 C176 22 214 78 210 136
                   C208 158 198 172 176 180
                   L170 150 C168 138 158 130 145 130
                   L96 130 C83 130 73 138 71 150
                   L65 180
                   C46 172 34 158 32 138 Z"
                fill={shellColor}
                stroke="#00000040"
                strokeWidth="1.5"
                animate={{ fill: shellColor }}
                transition={{ duration: 0.35 }}
              />
              {/* Sombreado sutil para dar volumen, sin depender del color elegido */}
              <path
                d="M32 138 C30 82 66 24 121 22 C176 22 214 78 210 136
                   C208 158 198 172 176 180
                   L170 150 C168 138 158 130 145 130
                   L96 130 C83 130 73 138 71 150
                   L65 180
                   C46 172 34 158 32 138 Z"
                fill="url(#shellShade)"
              />

              {/* Ranura de ventilación superior — detalle fijo */}
              <rect x="112" y="34" width="16" height="7" rx="2" fill="#00000055" />

              {/* Capa 2: visor — forma tipo casco jet, siempre igual */}
              <path
                d="M48 132 C46 104 70 88 121 88 C170 88 194 104 192 132
                   C191 146 182 156 168 160
                   L60 160 C50 156 49 146 48 132 Z"
                fill="url(#visorShine)"
              />
              <path
                d="M48 132 C46 104 70 88 121 88 C170 88 194 104 192 132"
                fill="none"
                stroke="#3A4048"
                strokeWidth="2"
                opacity="0.7"
              />
              {/* Línea de mentonera */}
              <path
                d="M65 180 L71 150 M176 180 L170 150"
                stroke="#00000055"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Capa 3: gráfico/decal — solo si el colorway es premium */}
              {premium && (
                <g>
                  <path
                    d="M104 34 L138 34 L148 58 L94 58 Z"
                    fill="#FF3D2E"
                    opacity="0.92"
                  />
                  <text
                    x="121"
                    y="52"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#F5F6F7"
                    fontWeight="700"
                    letterSpacing="1"
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
