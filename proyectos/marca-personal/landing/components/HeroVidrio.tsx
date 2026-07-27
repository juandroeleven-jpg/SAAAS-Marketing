"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

// El 3D solo en cliente: monta WebGL y no tiene nada que renderizar en el
// servidor. El texto del hero llega en el HTML inicial y pinta de una.
const PantallaFlotante = dynamic(() => import("./PantallaFlotante"), {
  ssr: false,
});

const METRICAS = [
  { valor: "15", texto: "sistemas interconectados" },
  { valor: "97%", texto: "ahorro de tiempo, nómina" },
  { valor: "95-98%", texto: "precisión, EDGE Helmet" },
  { valor: "Multi-país", texto: "multi-moneda, un panel" },
];

export default function HeroVidrio() {
  return (
    <section className="fondo-azul relative isolate overflow-hidden px-4 py-10 sm:px-8 sm:py-16">
      {/* Halo difuso DETRAS del panel. Cumple una funcion medible: el titular
          es blanco y el fondo azul varia mucho de zona a zona, asi que sin una
          mancha oscura debajo el contraste caeria por debajo del minimo en la
          parte mas clara del degradado. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[18%] -z-10 h-[55%] w-[45%] rounded-full bg-[#020817] opacity-60 blur-[110px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="vidrio mx-auto w-full max-w-6xl rounded-[28px] px-6 py-12 sm:px-10 sm:py-14 lg:px-14"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-200">
              Codeflow
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Agentes de IA que ya operan{" "}
              <span className="text-sky-300">procesos reales</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-200/90">
              15 sistemas conectados y corriendo — multi-agente, forecasting,
              pricing dinámico, integración de herramientas. Evidencia
              verificable, no mockups.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/plataforma"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-[#071634] transition hover:bg-sky-100"
              >
                Ver la plataforma
              </Link>
              <Link
                href="#logros"
                className="rounded-xl border border-white/35 px-6 py-3 font-semibold text-white transition hover:border-white/70 hover:bg-white/10"
              >
                Resultados reales
              </Link>
            </div>
          </div>

          {/* El canvas WebGL va DENTRO del panel de vidrio, o sea POR DELANTE:
              backdrop-filter solo desenfoca lo que quedo pintado detras, asi
              que una animacion aca arriba no obliga a recalcularlo por frame. */}
          <div className="min-w-0">
            <PantallaFlotante />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/15 pt-8 sm:grid-cols-4">
          {METRICAS.map((m) => (
            <div key={m.texto}>
              <p className="text-2xl font-bold text-white">{m.valor}</p>
              <p className="text-xs text-slate-300/80">{m.texto}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
