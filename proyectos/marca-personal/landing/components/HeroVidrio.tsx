"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { usarMovimientoReducido } from "@/lib/movimiento";

// Las dos capas WebGL solo en cliente: montan contexto grafico y no tienen
// nada que renderizar en el servidor. El texto del hero llega en el HTML
// inicial y pinta de una, sin esperar a ninguna de las dos.
const PantallaFlotante = dynamic(() => import("./PantallaFlotante"), {
  ssr: false,
});
const FondoOndas = dynamic(() => import("./FondoOndas"), { ssr: false });

const METRICAS = [
  { valor: "15", texto: "sistemas interconectados" },
  { valor: "97%", texto: "ahorro de tiempo, nómina" },
  { valor: "95-98%", texto: "precisión, EDGE Helmet" },
];

export default function HeroVidrio() {
  const quieto = usarMovimientoReducido();

  return (
    <section className="fondo-azul relative isolate overflow-hidden px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16">
      {/* Capa 1 (al fondo): el campo de ondas de energia en 3D. */}
      <FondoOndas />

      {/* Capa 2: mancha oscura difusa justo debajo del panel. No es adorno --
          el titular es blanco y la red de fondo tiene zonas brillantes; sin
          esto el contraste del texto caeria por debajo del minimo cuando un
          nodo encendido pasa por detras. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[4%] top-[24%] -z-[5] h-[62%] w-[52%] rounded-full bg-[#020817] opacity-70 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Capa 4 (al frente): la pantalla, grande y desbordando por arriba y
            por la derecha para que se lea suspendida sobre el panel y no
            metida dentro de una columna. Solo en escritorio: en pantallas
            angostas no hay lugar para superponer y pasa a ir debajo. */}
        <div className="absolute -right-[8%] -top-[10%] z-20 hidden w-[58%] lg:block">
          <PantallaFlotante />
        </div>

        {/* Capa 3: el vidrio. Va POR ENCIMA del fondo animado y POR DEBAJO de
            la pantalla. Ocupa poco mas de la mitad del ancho, asi que la
            pantalla que flota a la derecha queda casi toda fuera de el. */}
        <motion.div
          initial={quieto ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: quieto ? 0 : 0.7, ease: "easeOut" }}
          className="vidrio relative z-10 mt-0 w-full rounded-[28px] px-6 py-12 sm:px-10 sm:py-14 lg:mt-[15%] lg:w-[52%] lg:px-12 lg:py-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-200">
            Codeflow
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[2.9rem]">
            Agentes de IA que ya operan{" "}
            <span className="text-sky-300">procesos reales</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200/90">
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

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
            {METRICAS.map((m) => (
              <div key={m.texto}>
                <p className="text-xl font-bold text-white sm:text-2xl">
                  {m.valor}
                </p>
                <p className="text-xs text-slate-300/80">{m.texto}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* En pantallas angostas la pantalla va debajo del panel, a todo el
            ancho: superponer ahi solo taparia el texto. */}
        <div className="relative z-10 mt-8 lg:hidden">
          <PantallaFlotante />
        </div>
      </div>
    </section>
  );
}
