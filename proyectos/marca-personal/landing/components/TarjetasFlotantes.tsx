"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// Colage de tarjetas superpuestas y rotadas (referencia: Cognify/Dribbble),
// no WebGL -- mas estable, sin bugs de camara/colision de etiquetas, y
// con unidades relativas (%, rem) en vez de alturas fijas en pixeles.
//
// Animacion en dos capas independientes por tarjeta:
// 1) Ensamblaje al montar (una sola vez): entra desde mas abajo, con mas
//    rotacion y escala reducida, hasta su posicion final -- efecto de
//    "las piezas se acomodan". Escalonado por tarjeta via `delay`.
// 2) Float continuo (loop infinito) en un motion.div hijo separado, que
//    arranca justo cuando termina el ensamblaje de esa tarjeta (su propio
//    delay = duracion + delay del ensamblaje). Al ser un elemento anidado,
//    su transform se suma al de la capa de ensamblaje sin pisarla.
//
// El contenido es un parametro (`contenido`), no texto fijo: las cuatro
// posiciones, rotaciones y tiempos son los mismos en toda la web, pero cada
// pagina cuenta lo suyo. Sin prop se usa CONTENIDO_LOGROS, que es lo que
// muestra el home.
const ENSAMBLAJE_DURACION = 0.7;

export type ContenidoTarjetas = {
  /** Tarjeta grande arriba a la izquierda: cifra + barra de progreso. */
  principal: { etiqueta: string; valor: string; detalle: string };
  /** Arriba a la derecha: cifra destacada en color de acento. */
  destacada: { etiqueta: string; valor: string; detalle: string };
  /** Abajo a la izquierda: una linea de texto + tres puntos de color. */
  proceso: { etiqueta: string; detalle: string };
  /** Abajo a la derecha, la mas chica: cifra corta. */
  secundaria: { etiqueta: string; valor: string; detalle: string };
};

const CONTENIDO_LOGROS: ContenidoTarjetas = {
  principal: {
    etiqueta: "Orquestador multi-agente",
    valor: "15",
    detalle: "sistemas de IA interconectados",
  },
  destacada: {
    etiqueta: "EDGE Helmet",
    valor: "95-98%",
    detalle: "precisión de render IA",
  },
  proceso: {
    etiqueta: "Cotizador EDGE",
    detalle: "Precio en vivo · Fase 1.5",
  },
  secundaria: {
    etiqueta: "NóminaPro",
    valor: "97%",
    detalle: "ahorro de tiempo",
  },
};

export default function TarjetasFlotantes({
  contenido = CONTENIDO_LOGROS,
}: {
  contenido?: ContenidoTarjetas;
}) {
  return (
    <div className="relative mx-auto aspect-[4/3.4] w-full max-w-xl">
      {/* Resplandor detrás — profundidad sin necesitar 3D real */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cf-accent/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-[45%] w-[45%] rounded-full bg-cf-accent2/30 blur-3xl" />
      </div>

      {/* Tarjeta 1 — la principal */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: -18, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: -6, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut" }}
        className="absolute left-[4%] top-[8%] w-[62%]"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                {contenido.principal.etiqueta}
              </p>
              <p className="mt-2 text-3xl font-bold text-cf-text">
                {contenido.principal.valor}
              </p>
              <p className="text-sm text-cf-muted">
                {contenido.principal.detalle}
              </p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-cf-surface2">
                <div className="h-1.5 w-[92%] rounded-full bg-cf-accent" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* Tarjeta 2 — la destacada */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 4, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut", delay: 0.12 }}
        className="absolute right-[2%] top-[2%] w-[52%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION + 0.12,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent2/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                {contenido.destacada.etiqueta}
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <p className="text-3xl font-bold text-cf-accent">
                  {contenido.destacada.valor}
                </p>
              </div>
              <p className="text-sm text-cf-muted">
                {contenido.destacada.detalle}
              </p>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* Tarjeta 3 — la de proceso */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: -14, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut", delay: 0.24 }}
        className="absolute bottom-[6%] left-[16%] w-[58%]"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION + 0.24,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                {contenido.proceso.etiqueta}
              </p>
              <p className="mt-2 text-sm font-medium text-cf-text">
                {contenido.proceso.detalle}
              </p>
              <div className="mt-3 flex gap-2">
                <span className="h-6 w-6 rounded-full bg-cf-accent" />
                <span className="h-6 w-6 rounded-full bg-cf-accent2" />
                <span className="h-6 w-6 rounded-full bg-cf-text/20" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>

      {/* Tarjeta 4 — la secundaria, la mas chica */}
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: 22, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotate: 8, scale: 1 }}
        transition={{ duration: ENSAMBLAJE_DURACION, ease: "easeOut", delay: 0.36 }}
        className="absolute bottom-[2%] right-[8%] w-[42%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ENSAMBLAJE_DURACION + 0.36,
          }}
        >
          <TiltCard>
            <div className="rounded-2xl border border-cf-border bg-cf-surface p-[5%] shadow-xl shadow-cf-accent2/10">
              <p className="text-xs font-semibold uppercase tracking-wide text-cf-muted">
                {contenido.secundaria.etiqueta}
              </p>
              <p className="mt-2 text-2xl font-bold text-cf-text">
                {contenido.secundaria.valor}
              </p>
              <p className="text-xs text-cf-muted">
                {contenido.secundaria.detalle}
              </p>
            </div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
