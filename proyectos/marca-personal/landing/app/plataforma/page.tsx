"use client";

import { motion } from "framer-motion";
import TarjetasFlotantes, {
  type ContenidoTarjetas,
} from "@/components/TarjetasFlotantes";

// Pagina sin texto: la animacion de las cuatro tarjetas es el unico
// contenido, centrada en la pantalla. El componente es el mismo del home
// -- misma composicion, mismos tiempos -- y solo cambia lo que dicen las
// tarjetas, que aca hablan de la plataforma en vez de los logros.
const CONTENIDO_PLATAFORMA: ContenidoTarjetas = {
  principal: {
    etiqueta: "Herramientas conectadas",
    valor: "6",
    // Textos cortos a proposito: las tarjetas se pisan entre si por diseno,
    // y una linea larga queda tapada por la tarjeta de al lado.
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

export default function PlataformaPage() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-x-hidden bg-cf-bg px-6 py-20 sm:px-12">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <TarjetasFlotantes contenido={CONTENIDO_PLATAFORMA} />
      </motion.div>
    </main>
  );
}
