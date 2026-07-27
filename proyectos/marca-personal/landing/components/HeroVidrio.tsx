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

// Ocupan el lugar que en la referencia tiene el menu de navegacion: misma
// fila, mismo peso visual, pero diciendo lo unico que le importa a quien
// llega -- que esto ya funciona y cuanto rinde.
const METRICAS = [
  { valor: "15", texto: "sistemas" },
  { valor: "97%", texto: "ahorro en nómina" },
  { valor: "95-98%", texto: "precisión" },
  { valor: "24/7", texto: "sin intervención" },
];

export default function HeroVidrio() {
  const quieto = usarMovimientoReducido();

  return (
    <section className="fondo-azul relative isolate overflow-hidden px-4 pb-24 pt-10 sm:px-8 sm:pb-32 sm:pt-14">
      {/* Capa 1, al fondo: el campo de ondas de energia en 3D. */}
      <FondoOndas />

      {/* Capa 2: resplandor ancho detras del borde superior del panel, como
          el arco de luz de la referencia. Da la sensacion de que el panel
          esta iluminado por detras y no simplemente pegado sobre el fondo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[6%] -z-[5] h-[30%] w-[70%] -translate-x-1/2 rounded-[50%] bg-sky-500/25 blur-[110px]"
      />

      <motion.div
        initial={quieto ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: quieto ? 0 : 0.7, ease: "easeOut" }}
        // pb generoso: la pantalla se apoya en el borde inferior y sobresale,
        // asi que el texto tiene que terminar bastante antes.
        className="vidrio relative z-10 mx-auto w-full max-w-6xl rounded-[32px] px-6 pb-[52%] pt-8 sm:px-10 sm:pb-[46%] sm:pt-10 lg:px-14 lg:pb-[42%]"
      >
        {/* Fila superior: marca a la izquierda y metricas donde la referencia
            pone el menu. */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <span className="text-lg font-bold tracking-tight text-white">
            Codeflow <span className="text-sky-300">AI</span>
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {METRICAS.map((m) => (
              <span
                key={m.texto}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-slate-200"
              >
                <strong className="font-semibold text-white">{m.valor}</strong>{" "}
                {m.texto}
              </span>
            ))}
          </div>

          <Link
            href="/plataforma"
            className="ml-auto hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#071634] transition hover:bg-sky-100 lg:block"
          >
            Ver la plataforma
          </Link>
        </div>

        <h1 className="mt-10 max-w-4xl text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          Agentes de IA que ya operan{" "}
          <span className="text-sky-300">procesos reales</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200/90">
          15 sistemas conectados y corriendo — multi-agente, forecasting,
          pricing dinámico, integración de herramientas. Evidencia verificable,
          no mockups.
        </p>

        {/* La pantalla: sale desde el borde inferior del panel y sobresale por
            debajo, igual que los personajes de la referencia. Va POR ENCIMA
            del vidrio (z-20) a proposito: backdrop-filter solo desenfoca lo
            que quedo pintado DETRAS, asi que un canvas animado aqui arriba no
            obliga a recalcularlo en cada frame. */}
        <div className="absolute inset-x-0 -bottom-[10%] z-20 mx-auto w-[94%] sm:w-[88%]">
          {/* Luz LED detras de la pantalla. Es `filter: blur`, no
              backdrop-filter: se desenfoca a si misma y no lee lo que tiene
              detras, asi que no anade coste al vidrio. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-sky-400/45 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[72%] h-[60%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-cyan-300/40 blur-[70px]"
          />
          <PantallaFlotante />
        </div>
      </motion.div>
    </section>
  );
}
