"use client";

import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";

const SISTEMAS = [
  {
    titulo: "Orquestador multi-agente de operaciones",
    detalle:
      "Agentes de IA especializados en ventas, cobranza, inventario y soporte que colaboran entre sí de punta a punta.",
  },
  {
    titulo: "Agente autónomo de compras y reposición",
    detalle:
      "Monitorea stock y genera órdenes de reposición con aprobación automática por umbral de monto o criticidad.",
  },
  {
    titulo: "Motor de pricing dinámico con IA",
    detalle:
      "Ajusta precios en tiempo real según demanda, competencia, inventario y márgenes objetivo.",
  },
  {
    titulo: "Data warehouse multi-país y multi-moneda",
    detalle:
      "Capa semántica unificada — una sola fuente de verdad entre países, monedas e idiomas.",
  },
  {
    titulo: "Predicción de demanda con machine learning",
    detalle:
      "Forecasting por producto y región, reduce quiebres y excesos de inventario.",
  },
  {
    titulo: "Integración universal ERP legacy ↔ herramientas modernas",
    detalle:
      "Sistemas antiguos y nuevos intercambian información sin reemplazar infraestructura existente.",
  },
];

export default function Logros() {
  return (
    <section id="logros" className="relative px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-cf-accent2">
            Prueba, no promesa
          </span>
          <h2 className="mt-3 text-3xl font-bold text-cf-text sm:text-4xl">
            Logros
          </h2>
        </ScrollReveal>

        {/* Caso 1 — Cliente Enterprise Multi-país (Copper/1HVAC, anonimizado) */}
        <ScrollReveal delay={0.1} className="mt-10">
          <div className="rounded-3xl border border-cf-border bg-cf-surface p-8 sm:p-10">
            <h3 className="text-xl font-bold text-cf-text">
              Transformación digital con IA — Cliente Enterprise Multi-país
            </h3>
            <p className="mt-3 text-cf-muted">
              Distribuidora mediana-grande, operaciones en varios países,
              múltiples monedas y stock distribuido. Ecosistema de 15
              sistemas de IA y automatización interconectados, diseñado e
              implementado a lo largo de un compromiso de varios meses.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SISTEMAS.map((s) => (
                <TiltCard key={s.titulo}>
                  <div className="h-full rounded-2xl border border-cf-border bg-cf-surface2 p-5">
                    <p className="font-semibold text-cf-text">{s.titulo}</p>
                    <p className="mt-2 text-sm text-cf-muted">{s.detalle}</p>
                  </div>
                </TiltCard>
              ))}
            </div>

            <p className="mt-6 text-xs text-cf-muted">
              Detalles específicos de cliente, cifras exactas y nombre de la
              empresa se mantienen confidenciales por acuerdo de
              confidencialidad.
            </p>
          </div>
        </ScrollReveal>

        {/* Caso 2 — EDGE Helmet */}
        <ScrollReveal delay={0.15} className="mt-6">
          <div className="rounded-3xl border border-cf-border bg-cf-surface p-8 sm:p-10">
            <h3 className="text-xl font-bold text-cf-text">EDGE Helmet</h3>
            <p className="mt-3 text-cf-muted">
              Pipeline de generación de imagen con IA para catálogo de
              cascos personalizados — de boceto sobre molde a render
              fotorrealista.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-cf-accent2">95-98%</p>
                <p className="mt-1 text-sm text-cf-muted">precisión</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cf-accent2">5-10 min</p>
                <p className="mt-1 text-sm text-cf-muted">por casco</p>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <p className="text-sm font-medium text-cf-text">
                  Aprobación real de Jimmy Benzaquen y Jim Garzon
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
