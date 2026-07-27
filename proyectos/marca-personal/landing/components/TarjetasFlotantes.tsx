"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// Colage de tarjetas superpuestas y rotadas (referencia: Cognify/Dribbble),
// no WebGL -- mas estable, sin bugs de camara/colision de etiquetas, y
// con unidades relativas (%, rem) en vez de alturas fijas en pixeles.
// Cada tarjeta representa un proyecto/sistema real, no UI generica.
//
// Animacion en dos capas independientes por tarjeta:
// 1) Ensamblaje al montar (una sola vez): entra desde mas abajo, con mas
//    rotacion y escala reducida, hasta su posicion final -- efecto de
//    "las piezas se acomodan". Escalonado por tarjeta via `delay`.
// 2) Float continuo (loop infinito) en un motion.div hijo separado, que
//    arranca justo cuando termina el ensamblaje de esa tarjeta (su propio
//    delay = duracion + delay del ensamblaje). Al ser un elemento anidado,
//    su transform se suma al de la capa de ensamblaje sin pisarla.
const ENSAMBLAJE_DURACION = 0.7;

export default function TarjetasFlotantes() {
  return (
    <div className="relative mx-auto aspect-[4/3.4] w-full max-w-xl">
      {/* Resplandor detrás — profundidad sin necesitar 3D real */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cf-accent/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-[45%] w-[45%] rounded-full bg-cf-accent2/30 blur-3xl" />
      </div>

      {/* Tarjeta 1 — Orquestador Copper/1HVAC, la principal */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: -18, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: -6, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut" }}
        className="absolute left-[4%] top-[8%] w-[62%]"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                Orquestador multi-agente
              </p>
              <p className="mt-2 text-3xl font-bold text-cf-text">15</p>
              <p className="text-sm text-cf-muted">
                sistemas de IA interconectados
              </p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-cf-surface2">
                <div className="h-1.5 w-[92%] rounded-full bg-cf-accent" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* Tarjeta 2 — EDGE Helmet, precisión */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 4, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut", delay: 0.12 }}
        className="absolute right-[2%] top-[2%] w-[52%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION + 0.12,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent2/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                EDGE Helmet
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <p className="text-3xl font-bold text-cf-accent">95-98%</p>
              </div>
              <p className="text-sm text-cf-muted">precisión de render IA</p>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* Tarjeta 3 — Cotizador EDGE */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: -14, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut", delay: 0.24 }}
        className="absolute bottom-[6%] left-[16%] w-[58%]"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION + 0.24,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                Cotizador EDGE
              </p>
              <p className="mt-2 text-sm font-medium text-cf-text">
                Precio en vivo · Fase 1.5
              </p>
              <div className="mt-3 flex gap-2">
                <span className="h-6 w-6 rounded-full bg-cf-accent" />
                <span className="h-6 w-6 rounded-full bg-cf-accent2" />
                <span className="h-6 w-6 rounded-full bg-cf-text/20" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* Tarjeta 4 — NóminaPro, ahorro de tiempo */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: 22, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 8, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut", delay: 0.36 }}
        className="absolute bottom-[2%] right-[8%] w-[42%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION + 0.36,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent2/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                NóminaPro
              </p>
              <p className="mt-2 text-2xl font-bold text-cf-text">97%</p>
              <p className="text-xs text-cf-muted">ahorro de tiempo</p>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
