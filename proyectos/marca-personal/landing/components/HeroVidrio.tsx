"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { usarMovimientoReducido } from "@/lib/movimiento";

// Solo en cliente: monta un contexto grafico y no tiene nada que renderizar en
// el servidor. El texto del hero llega en el HTML inicial y pinta de una.
const FlujoFlotante = dynamic(() => import("./FlujoFlotante"), { ssr: false });

const METRICAS = [
  { valor: "15", texto: "sistemas" },
  { valor: "97%", texto: "ahorro nómina" },
  { valor: "95-98%", texto: "precisión" },
  { valor: "24/7", texto: "activo" },
];

export default function HeroVidrio() {
  const quieto = usarMovimientoReducido();
  const [listo, setListo] = useState(false);

  return (
    <section className="fondo-claro relative isolate min-h-screen overflow-hidden px-4 pb-16 pt-5 sm:px-8 sm:pt-7">
      {/* Manchas de color muy difusas. Son `radial-gradient` sobre un div, no
          `filter: blur`: el degradado ya nace suave, asi que la GPU lo compone
          como una textura y moverlo no obliga a volver a rasterizar nada. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="mancha-hero mancha-hero-1" />
        <div className="mancha-hero mancha-hero-2" />
        <div className="mancha-hero mancha-hero-3" />
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        {/* Barra flotante: marca a la izquierda, accion a la derecha. */}
        <nav className="flex items-center justify-between gap-4 rounded-full bg-white/85 px-5 py-3 shadow-[0_10px_40px_-16px_rgba(15,27,45,0.28)] ring-1 ring-white/70 backdrop-blur-md sm:px-7 sm:py-4">
          <span className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-cf-text sm:text-xl">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cf-accent to-cf-accent2 text-sm font-black text-white">
              C
            </span>
            Codeflow <span className="text-cf-accent">AI</span>
          </span>
          <a
            href="#agentes"
            className="rounded-full bg-gradient-to-r from-cf-accent to-cf-accent2 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)] transition hover:brightness-110 sm:px-7 sm:py-3 sm:text-base"
          >
            Ver la plataforma
          </a>
        </nav>

        {/* Dos columnas desde lg. Por debajo el objeto 3D va DESPUES del texto
            en el flujo normal: superpuesto taparia el texto, que es lo primero
            que hay que poder leer en un telefono. */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-4">
          <motion.div
            initial={quieto ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: quieto ? 0 : 0.7, ease: "easeOut" }}
            className="lg:pl-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cf-accent ring-1 ring-cf-border">
              <span className="h-2 w-2 rounded-full bg-cf-accent" />
              Agentes en operación
            </span>

            <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.04] tracking-tight text-cf-text sm:text-6xl lg:text-[4.1rem]">
              Agentes de IA que ya operan{" "}
              <span className="text-cf-accent">procesos reales</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cf-muted">
              Encadenan pasos de razonamiento y recién entonces tocan tus
              herramientas: Slack, Drive, Notion, Canva.
            </p>

            {/* Las metricas ocupan el lugar que en la referencia tienen los
                botones de las tiendas: misma fila, mismo peso visual, pero
                diciendo lo unico que le importa a quien llega. */}
            <div className="mt-8 flex flex-wrap gap-3">
              {METRICAS.map((m) => (
                <span
                  key={m.texto}
                  className="rounded-2xl bg-white/85 px-4 py-3 text-sm text-cf-muted shadow-[0_6px_20px_-12px_rgba(15,27,45,0.4)] ring-1 ring-cf-border sm:px-5"
                >
                  <strong className="block text-lg font-bold text-cf-text">
                    {m.valor}
                  </strong>
                  {m.texto}
                </span>
              ))}
            </div>
          </motion.div>

          {/* El hueco lo define ESTE contenedor, no el componente 3D: asi el
              poster ya tiene su sitio y su tamano en el HTML inicial y se ve
              desde el primer momento, aunque todavia no exista nada de WebGL.
              Cuando la escena real lleva unos frames dibujados, se cruzan. */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[520px] lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/posters/agentes.webp"
              alt=""
              aria-hidden
              width={860}
              height={1147}
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                listo ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${
                listo ? "opacity-100" : "opacity-0"
              }`}
            >
              <FlujoFlotante vertical claro onListo={() => setListo(true)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
