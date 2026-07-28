"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { usarMovimientoReducido } from "@/lib/movimiento";

const ModeloLaptop = dynamic(() => import("./ModeloLaptop"), { ssr: false });

// Segunda seccion de la portada, en claro.
//
// El fondo NO es WebGL: son tres manchas de color muy desenfocadas que se
// mueven con `transform`. Asi la pagina no suma un tercer contexto grafico
// (ya hay dos en el hero) y el movimiento lo compone la GPU sin repintar.
export default function SeccionAgentes() {
  const quieto = usarMovimientoReducido();

  return (
    <section
      id="agentes"
      className="aurora-clara relative isolate flex min-h-screen items-center overflow-hidden px-4 py-20 sm:px-8"
    >
      {/* Manchas de color. Van detras del panel y son estaticas en tamano:
          solo se desplazan, que es lo barato. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-mancha mancha-cian aurora-1 left-[-10%] top-[-15%] h-[80%] w-[70%]" />
        <div className="aurora-mancha mancha-indigo aurora-2 right-[-8%] top-[10%] h-[75%] w-[65%]" />
        <div className="aurora-mancha mancha-azul aurora-3 bottom-[-20%] left-[25%] h-[80%] w-[75%]" />
      </div>

      <motion.div
        initial={quieto ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: quieto ? 0 : 0.6, ease: "easeOut" }}
        className="vidrio-claro relative z-10 mx-auto w-full max-w-6xl rounded-[32px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Plataforma
            </span>
            {/* Texto oscuro: sobre vidrio claro el blanco de la seccion
                anterior seria ilegible. */}
            <h2 className="mt-4 text-4xl font-bold leading-[1.08] text-cf-text sm:text-5xl lg:text-[2.9rem] xl:text-5xl">
              Un agente que <span className="text-blue-600">razona</span> y
              ejecuta
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-slate-600">
              Encadena pasos de razonamiento y recién entonces toca tus
              herramientas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#flujos"
                className="rounded-full bg-cf-text px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Ver los flujos
              </a>
            </div>
          </div>

          {/* El objeto se sale del acolchado del panel para ganar ancho: en
              movil los 24 px de cada lado, en escritorio bastante mas, porque
              es la pieza que tiene que llevar el peso visual de la seccion. */}
          <div className="-mx-6 min-w-0 sm:mx-0">
            <ModeloLaptop escena="agentes" />
          </div>
        </div>
      </motion.div>

      {/* La licencia Creative Commons Attribution del modelo 3D exige mantener
          el credito. Se puede sacar de encima del objeto, no eliminar. */}
      <p className="absolute inset-x-0 bottom-4 z-10 text-center text-[11px] text-slate-500/60">
        Modelo 3D &ldquo;MacBook Laptop&rdquo; por Issac Ghazanfar, licencia
        Creative Commons Attribution
      </p>
    </section>
  );
}
