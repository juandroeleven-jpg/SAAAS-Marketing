"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";

// PROVISIONAL: vista conceptual, no es una captura real de producto.
// Reemplazar por captura real de EDGE o Copper cuando esté disponible
// (ver pagina-web-progreso.md, pendiente de decision w6).
export default function PlaceholderDashboard() {
  return (
    <section className="relative px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <ScrollReveal>
          <span className="rounded-full border border-cf-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cf-muted">
            Vista conceptual — no es una captura real de producto
          </span>
          <h2 className="mt-5 text-3xl font-bold text-cf-text sm:text-4xl">
            Así se ve el orquestador por dentro
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-12">
          <TiltCard>
            <div className="mx-auto max-w-3xl rounded-3xl border border-cf-border bg-cf-surface p-6 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 border-b border-cf-border pb-3">
                <span className="h-3 w-3 rounded-full bg-cf-accent" />
                <span className="h-3 w-3 rounded-full bg-cf-accent2" />
                <span className="h-3 w-3 rounded-full bg-cf-border" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                {["Ventas", "Cobranza", "Inventario"].map((label, i) => (
                  <motion.div
                    key={label}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                    className="rounded-xl border border-cf-border bg-cf-surface2 p-4 text-left"
                  >
                    <p className="text-xs text-cf-muted">{label}</p>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-cf-border">
                      <div
                        className="h-1.5 rounded-full bg-cf-accent2"
                        style={{ width: `${55 + i * 15}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 h-24 rounded-xl border border-cf-border bg-cf-surface2" />
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
