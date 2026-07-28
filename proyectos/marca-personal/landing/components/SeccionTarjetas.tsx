"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import TarjetasFlotantes, {
  type ContenidoTarjetas,
} from "./TarjetasFlotantes";
import { usarMovimientoReducido } from "@/lib/movimiento";

const FondoOndas = dynamic(() => import("./FondoOndas"), { ssr: false });

// Tercera seccion: vuelve el fondo de ondas del hero, pero encima NO hay
// vidrio sino una tarjeta blanca solida con sombra. Es un contraste
// deliberado: despues de dos secciones translucidas, una superficie opaca
// y limpia hace que las cuatro tarjetas de datos se lean sin competencia.
const CONTENIDO: ContenidoTarjetas = {
  principal: {
    etiqueta: "Herramientas conectadas",
    valor: "6",
    detalle: "Slack, Drive, Notion…",
  },
  destacada: {
    etiqueta: "Sin intervención",
    valor: "24/7",
    detalle: "los flujos corren solos",
  },
  proceso: {
    etiqueta: "Un solo flujo",
    detalle: "Webhook → ChatGPT",
  },
  secundaria: {
    etiqueta: "Pasos manuales",
    valor: "0",
    detalle: "por ejecución",
  },
};

export default function SeccionTarjetas() {
  const quieto = usarMovimientoReducido();

  return (
    <section
      id="flujos"
      className="fondo-azul relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-8"
    >
      <FondoOndas />

      <motion.div
        initial={quieto ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: quieto ? 0 : 0.6, ease: "easeOut" }}
        className="tarjeta-blanca relative z-10 w-full max-w-5xl rounded-[28px] px-6 py-14 sm:px-14 sm:py-20"
      >
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Flujos
          </span>
          <h2 className="mt-3 text-3xl font-bold text-cf-text sm:text-4xl">
            Lo que queda funcionando
          </h2>
        </div>

        <div className="mt-12">
          <TarjetasFlotantes contenido={CONTENIDO} />
        </div>
      </motion.div>
    </section>
  );
}
