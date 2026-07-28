"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { usarMovimientoReducido } from "@/lib/movimiento";

const ModeloLaptop = dynamic(() => import("@/components/ModeloLaptop"), {
  ssr: false,
});
const FondoOndas = dynamic(() => import("@/components/FondoOndas"), {
  ssr: false,
});

export default function PlataformaPage() {
  const quieto = usarMovimientoReducido();

  return (
    <main className="fondo-azul relative isolate flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-8 sm:py-20">
      <FondoOndas />

      {/* Mancha oscura difusa bajo la columna de texto: el fondo animado tiene
          zonas brillantes y sin esto el contraste del titular cae por debajo
          del minimo cuando una cresta pasa por detras. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[22%] -z-[5] h-[56%] w-[42%] rounded-full bg-[#020817] opacity-70 blur-[110px]"
      />

      <motion.div
        initial={quieto ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: quieto ? 0 : 0.7, ease: "easeOut" }}
        className="vidrio relative z-10 mx-auto w-full max-w-6xl rounded-[32px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        {/* Texto a la izquierda y objeto a la derecha en escritorio; en movil
            la grilla pasa a una columna y, por el orden del DOM, el texto
            queda arriba y el laptop abajo -- que es justo lo pedido, sin
            necesidad de reordenar nada. */}
        <div className="grid grid-cols-1 items-center gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-sky-200">
              Plataforma
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[2.9rem] xl:text-5xl">
              Un agente que <span className="text-sky-300">razona</span> y
              ejecuta
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/flujos"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-[#071634] transition hover:bg-sky-100"
              >
                Ver los flujos
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:border-white/70 hover:bg-white/10"
              >
                Volver
              </Link>
            </div>
          </div>

          {/* En movil el objeto se sale del acolchado del panel (-mx-6, que es
              justo el px-6 del panel) para ganar 48 px de ancho: dentro del
              acolchado quedaba con demasiado aire a los lados y se veia
              pequeno en un telefono. */}
          <div className="-mx-6 min-w-0 sm:mx-0">
            <ModeloLaptop escena="agentes" />
          </div>
        </div>
      </motion.div>

      {/* La licencia Creative Commons Attribution del modelo 3D EXIGE
          mantener el credito. Se puede sacar de encima del objeto, no
          eliminar: aqui queda al pie, discreto, fuera del panel. */}
      <p className="absolute inset-x-0 bottom-4 z-10 text-center text-[11px] text-slate-400/50">
        Modelo 3D &ldquo;MacBook Laptop&rdquo; por Issac Ghazanfar, licencia
        Creative Commons Attribution
      </p>
    </main>
  );
}
