"use client";

import { motion } from "framer-motion";
import TarjetasFlotantes, {
  type ContenidoTarjetas,
} from "@/components/TarjetasFlotantes";

// Pagina sin texto a la vista: la animacion de las cuatro tarjetas es el
// unico contenido. El encabezado existe pero esta oculto visualmente -- una
// pagina sin ningun h1 no se puede recorrer con lector de pantalla, y el
// diseno sin texto es intencional, no una excusa para no tenerlo.
//
// Los textos son cortos a proposito: las tarjetas se pisan entre si por
// diseno y una linea larga queda tapada por la de al lado.
const CONTENIDO_FLUJOS: ContenidoTarjetas = {
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

export default function FlujosPage() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-x-hidden bg-cf-bg px-6 py-20 sm:px-12">
      <h1 className="sr-only">Flujos de automatización de Codeflow</h1>
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <TarjetasFlotantes contenido={CONTENIDO_FLUJOS} />
      </motion.div>
    </main>
  );
}
