"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// El objeto 3D solo en cliente: monta WebGL, no tiene nada que renderizar en
// el servidor. Con ssr:false el HTML inicial llega sin el canvas y el resto
// del hero (titulo, copy, CTAs) pinta de una, sin esperar al modelo.
const ModeloLaptop = dynamic(() => import("./ModeloLaptop"), { ssr: false });

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

        {/* Sin scale ni y en la transicion de entrada: el modelo ya trae su
            propia entrada lateral en 3D (ModeloLaptop/Flotacion). Animar
            tambien el contenedor obligaria al navegador a recomponer el
            canvas WebGL en cada frame -- eso es justo lo que se ve
            "laggeado". Aca solo se desvanece la opacidad, que es una
            propiedad compuesta y no toca el canvas. */}
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <ModeloLaptop />
          <p className="relative z-10 mt-4 text-center text-xs text-cf-muted">
            Modelo 3D &ldquo;MacBook Laptop&rdquo; por Issac Ghazanfar,
            licencia Creative Commons Attribution
          </p>
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
