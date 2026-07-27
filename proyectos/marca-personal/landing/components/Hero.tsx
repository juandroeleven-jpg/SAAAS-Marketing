"use client";

import { motion } from "framer-motion";
import TarjetasFlotantes from "./TarjetasFlotantes";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-12 sm:py-28">
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-cf-accent">
            Codeflow
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-cf-text sm:text-6xl">
            Sistemas de IA que{" "}
            <span className="text-cf-accent">ya funcionan</span>, no
            promesas
          </h1>
          <p className="mt-6 max-w-lg text-lg text-cf-muted">
            Automatización y agentes de IA aplicados a operaciones reales —
            multi-agente, forecasting, pricing dinámico, integración de
            sistemas. Evidencia verificable, no mockups.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#logros"
              className="rounded-xl bg-cf-accent px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              Ver resultados reales
            </a>
            <a
              href="#cv"
              className="rounded-xl border border-cf-border px-6 py-3 font-semibold text-cf-text transition hover:border-cf-accent"
            >
              Trayectoria
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <TarjetasFlotantes />
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 grid w-full max-w-6xl grid-cols-2 gap-4 border-t border-cf-border pt-8 sm:grid-cols-4 sm:gap-6">
        <div>
          <p className="text-2xl font-bold text-cf-accent">15</p>
          <p className="text-xs text-cf-muted">sistemas interconectados</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-cf-text">97%</p>
          <p className="text-xs text-cf-muted">ahorro de tiempo, nómina</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-cf-text">95-98%</p>
          <p className="text-xs text-cf-muted">precisión, EDGE Helmet</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-cf-text">Multi-país</p>
          <p className="text-xs text-cf-muted">multi-moneda, un solo panel</p>
        </div>
      </div>
    </section>
  );
}
