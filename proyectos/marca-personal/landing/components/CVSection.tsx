"use client";

import ScrollReveal from "./ScrollReveal";

const ITEMS = [
  {
    titulo: "NóminaPro",
    detalle: "Sistema de nómina multi-país automatizado de punta a punta.",
    metrica: "97% ahorro de tiempo",
  },
  {
    titulo: "Automatización multi-país",
    detalle:
      "Procesos operativos conectados entre países, sin coordinación manual constante.",
    metrica: "Multi-región",
  },
  {
    titulo: "Dashboards Power BI",
    detalle:
      "Reportería en vivo conectada a las fuentes de datos operativas.",
    metrica: "Tiempo real",
  },
  {
    titulo: "Optimización de cuentas por cobrar",
    detalle:
      "Priorización y seguimiento automatizado de cartera por riesgo y antigüedad.",
    metrica: "20% cartera optimizada",
  },
];

export default function CVSection() {
  return (
    <section id="cv" className="relative px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-cf-accent2">
            Trayectoria
          </span>
          <h2 className="mt-3 text-3xl font-bold text-cf-text sm:text-4xl">
            Credibilidad operativa
          </h2>
        </ScrollReveal>

        <div className="relative mt-12 flex flex-col gap-8 border-l border-cf-border pl-8">
          {ITEMS.map((item, idx) => (
            <ScrollReveal key={item.titulo} delay={idx * 0.08}>
              <div className="relative">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-cf-accent2" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-cf-text">
                    {item.titulo}
                  </h3>
                  <span className="rounded-full border border-cf-border px-3 py-0.5 text-xs font-semibold text-cf-accent2">
                    {item.metrica}
                  </span>
                </div>
                <p className="mt-1.5 text-cf-muted">{item.detalle}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
