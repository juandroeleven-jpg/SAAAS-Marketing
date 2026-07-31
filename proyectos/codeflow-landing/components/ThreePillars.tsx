"use client";

import { useEffect, useRef, useState } from "react";
import PlaceholderDashboard from "./PlaceholderDashboard";

type Pillar = {
  title: string;
  subtitle: string;
  rotate: string;
  accent: "blue" | "green";
  agentTitle: string;
  agents: { name: string; color: string; home: { x: number; y: number } }[];
};

const PILLARS: Pillar[] = [
  {
    title: "Business Intelligence",
    subtitle: "Convierte tus datos en decisiones, en minutos.",
    rotate: "md:-rotate-3",
    accent: "blue",
    agentTitle: "AGENTES DE DATOS",
    agents: [
      { name: "Agente de Ingesta", color: "#00D9FF", home: { x: 24, y: 24 } },
      { name: "Agente de Insight", color: "#39FF14", home: { x: 72, y: 58 } },
    ],
  },
  {
    title: "Automatización comercial",
    subtitle: "Tu negocio trabaja solo, mientras vos creces.",
    rotate: "md:rotate-2",
    accent: "green",
    agentTitle: "AGENTES DE PROCESO",
    agents: [
      { name: "Agente de Tarea", color: "#39FF14", home: { x: 24, y: 24 } },
      { name: "Agente de Acción", color: "#00D9FF", home: { x: 72, y: 58 } },
    ],
  },
  {
    title: "Creación de contenido",
    subtitle: "Genera contenido de calidad en segundos, no en días.",
    rotate: "md:rotate-4",
    accent: "blue",
    agentTitle: "AGENTES DE CONTENIDO",
    agents: [
      { name: "Agente de Idea", color: "#00D9FF", home: { x: 24, y: 24 } },
      { name: "Agente de Publicación", color: "#39FF14", home: { x: 72, y: 58 } },
    ],
  },
];

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function PillarCard({ pillar, index, isFront }: { pillar: Pillar; index: number; isFront?: boolean }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const accentColor = pillar.accent === "blue" ? "#2563EB" : "#10B981";
  const delay = index * 70;

  return (
    <div
      ref={ref}
      className={`relative ${pillar.rotate} transition-all ease-out`}
      style={{
        transitionDuration: "600ms",
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <div
        className={`relative flex flex-col gap-4 rounded-2xl bg-white p-6 ${isFront ? "md:z-20 md:scale-[1.03]" : "md:z-10"}`}
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(15, 23, 42, 0.15), 0 4px 6px -2px rgba(15, 23, 42, 0.08)",
          borderTop: `3px solid ${accentColor}`,
        }}
      >
        <div className="h-40 w-full rounded-xl overflow-hidden md:h-44 border border-gray-100">
          <PlaceholderDashboard agents={pillar.agents} title={pillar.agentTitle} />
        </div>

        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor }} />

        <h2 className="text-[24px] font-semibold leading-tight text-gray-900 md:text-[28px]">
          {pillar.title}
        </h2>

        <p className="text-base font-normal leading-snug text-gray-500">
          {pillar.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ThreePillars() {
  return (
    <section
      className="bg-white px-6 py-20 md:px-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 md:flex-row md:items-center md:gap-6">
        {PILLARS.map((pillar, index) => (
          <div key={pillar.title} className="w-full md:flex-1">
            <PillarCard pillar={pillar} index={index} isFront={index === 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
