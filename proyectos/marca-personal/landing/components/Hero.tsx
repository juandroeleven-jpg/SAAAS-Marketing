"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Escena 3D real (React Three Fiber) — solo cliente, evita problemas de
// hidratacion con WebGL en el render de servidor.
const Orquestador3D = dynamic(() => import("./Orquestador3D"), {
  ssr: false,
});

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
          className="relative"
        >
          <div className="relative h-[380px] w-full sm:h-[440px]">
            <Orquestador3D />
          </div>
          <div className="flex justify-center">
            <div className="rounded-full border border-cf-border bg-cf-surface/80 px-4 py-1.5 text-xs text-cf-muted backdrop-blur">
              15 sistemas orquestándose en tiempo real — no es decoración, es el producto
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 gap-6 border-t border-cf-border pt-8 sm:grid-cols-4">
        <div>
          <p className="text-2xl font-bold text-cf-accent2">15</p>
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
