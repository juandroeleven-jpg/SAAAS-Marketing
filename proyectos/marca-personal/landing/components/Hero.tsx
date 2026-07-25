"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-12">
      {/* Fondo animado — gradientes flotantes, sin dependencias externas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-cf-accent/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-cf-accent2/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#ffffff08_1px,_transparent_0)] bg-[size:32px_32px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-cf-accent2">
            Codeflow
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-cf-text sm:text-6xl">
            Sistemas de IA que{" "}
            <span className="bg-gradient-to-r from-cf-accent to-cf-accent2 bg-clip-text text-transparent">
              ya funcionan
            </span>
            , no promesas
          </h1>
          <p className="mt-6 max-w-lg text-lg text-cf-muted">
            Automatización y agentes de IA aplicados a operaciones reales —
            multi-agente, forecasting, pricing dinámico, integración de
            sistemas. Evidencia verificable, no mockups.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#logros"
              className="rounded-xl bg-cf-accent px-6 py-3 font-semibold text-cf-text transition hover:brightness-110"
            >
              Ver resultados reales
            </a>
            <a
              href="#cv"
              className="rounded-xl border border-cf-border px-6 py-3 font-semibold text-cf-text transition hover:border-cf-muted"
            >
              Trayectoria
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <TiltCard className="mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-cf-border bg-cf-surface/80 p-8 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                Ecosistema entregado
              </p>
              <p className="mt-3 text-5xl font-bold text-cf-accent2">15</p>
              <p className="mt-1 text-sm text-cf-muted">
                sistemas de IA y automatización interconectados
              </p>
              <div className="mt-6 h-px bg-cf-border" />
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-2xl font-bold text-cf-text">97%</p>
                  <p className="text-cf-muted">ahorro de tiempo, nómina</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cf-text">95-98%</p>
                  <p className="text-cf-muted">precisión, EDGE Helmet</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
