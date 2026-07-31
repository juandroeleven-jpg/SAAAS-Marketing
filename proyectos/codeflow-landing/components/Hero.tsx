"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import PlaceholderDashboard from "./PlaceholderDashboard";

export default function Hero() {
  const [paused, setPaused] = useState(false);
  const [pct, setPct] = useState(0);
  const [widgetVisible, setWidgetVisible] = useState(true);

  // Elapsed-time-based counter so pause/resume continues from where it left
  // off instead of restarting from 0%.
  const elapsedRef = useRef(0);
  const lastTickRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) {
      lastTickRef.current = null;
      return;
    }
    let raf: number;
    const target = 73;
    const duration = 1400;

    const tick = (now: number) => {
      if (lastTickRef.current !== null) {
        elapsedRef.current += now - lastTickRef.current;
      }
      lastTickRef.current = now;

      const progress = Math.min(elapsedRef.current / duration, 1);
      setPct(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // Pinned 3-stage scroll sequence:
  // Stage 1 (0 - 0.3): "No te quedes en el pasado..."
  // Stage 2 (0.3 - 0.7): image passes through
  // Stage 3 (0.7 - 1): "Sé parte de la 4ta revolución industrial..."
  const heroSectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Widget only floats fixed while the Hero itself is in view — otherwise it
  // would stay pinned over every other section (including the final CTA).
  useEffect(() => {
    const el = heroSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setWidgetVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Zonas de fundido mas anchas y con leve superposicion entre etapas, para
  // que las 3 se sientan como un solo recorrido conectado en vez de 3
  // bloques con corte seco entre ellos.
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.34], [1, 1, 0]);
  const stage1Y = useTransform(scrollYProgress, [0, 0.34], [0, -40]);
  const stage1Visibility = useTransform(scrollYProgress, (v) =>
    v < 0.32 ? "visible" : "hidden"
  );

  const stage2Opacity = useTransform(
    scrollYProgress,
    [0.26, 0.38, 0.64, 0.78],
    [0, 1, 1, 0]
  );
  const stage2Scale = useTransform(scrollYProgress, [0.26, 0.5, 0.78], [0.92, 1, 1.05]);
  const stage2Visibility = useTransform(scrollYProgress, (v) =>
    v >= 0.26 && v < 0.8 ? "visible" : "hidden"
  );

  // Progreso local (0-1) de la etapa 2: YA NO esta atado al scroll (antes
  // requeria seguir scrolleando dentro de la etapa para revelar las 4
  // escenas de PlaceholderDashboard). Ahora corre una unica vez, disparado
  // por tiempo, apenas la etapa 2 se vuelve visible — asi las 4 escenas
  // (red, torta, barras, panel) aparecen solas sin scroll adicional.
  const [networkProgress, setNetworkProgress] = useState(0);
  const networkStartedRef = useRef(false);
  useMotionValueEvent(stage2Visibility, "change", (visibility) => {
    if (visibility !== "visible" || networkStartedRef.current) return;
    networkStartedRef.current = true;
    let raf: number;
    let elapsed = 0;
    let lastTick: number | null = null;
    const duration = 3200;
    const tick = (now: number) => {
      if (lastTick !== null) elapsed += now - lastTick;
      lastTick = now;
      const progress = Math.min(elapsed / duration, 1);
      setNetworkProgress(progress);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  });

  // Un texto por escena (red, torta, barras, panel) — PlaceholderDashboard
  // los muestra AL LADO de cada visual correspondiente, ya no en una columna
  // compartida aparte.
  const CAPTIONS: [string, string, string, string] = [
    "Cada vez más empresas suman agentes de IA a su operación diaria.",
    "Los datos ya no se procesan solos: los agentes trabajan en conjunto.",
    "73% de las empresas que ya usan IA crecen más rápido que su competencia.",
    "Automatizar tus 3 áreas clave puede ahorrar hasta 40% del tiempo operativo.",
  ];

  const stage3Opacity = useTransform(scrollYProgress, [0.72, 0.88, 1], [0, 1, 1]);
  const stage3Y = useTransform(scrollYProgress, [0.72, 0.9], [40, 0]);
  const stage3Visibility = useTransform(scrollYProgress, (v) =>
    v >= 0.74 ? "visible" : "hidden"
  );

  return (
    <section
      ref={heroSectionRef}
      className="relative w-full bg-white text-black"
    >
      {/* Floating stat widget — only fixed/visible while Hero is in view */}
      <div
        className={`
          animate-fade-in-up
          static mx-4 mt-4
          md:mx-0 md:mt-0
          ${widgetVisible ? "md:fixed md:top-6 md:right-6 md:z-50" : "md:hidden"}
          w-[calc(100%-2rem)] sm:w-72 md:w-72
          rounded-2xl border border-gray-200 bg-white/95 backdrop-blur
          shadow-[0_4px_14px_rgba(0,0,0,0.08)]
          p-4 flex items-start gap-3
        `}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#10B981]/10">
          <svg
            className="h-5 w-5 text-[#10B981]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="flex-1" aria-live="polite" role="status">
          <p className="text-sm leading-snug text-gray-700">
            <span className="text-xl font-bold text-[#2563EB]">{pct}%</span>{" "}
            de empresas que ya usan IA crecen más rápido que su competencia
          </p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#10B981] transition-all duration-100"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Reanudar animación" : "Pausar animación"}
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition"
        >
          {paused ? (
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Pinned 3-stage scroll sequence */}
      <div ref={scrollRef} className="relative h-[1100dvh]">
        <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
          {/* Stage 1 — not a heading: the page's single <h1> is Stage 3 */}
          <motion.p
            style={{ opacity: stage1Opacity, y: stage1Y, visibility: stage1Visibility }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none font-bold text-black leading-[1.05] text-[clamp(2rem,7vw,5rem)] tracking-tight text-center max-w-4xl mx-auto px-4"
          >
            No te quedes en el pasado...
          </motion.p>

          {/* Stage 2: widget grande con las 4 escenas en filas, cada una con
              su texto propio al lado (ya no hay columna de texto aparte). */}
          <motion.div
            style={{ opacity: stage2Opacity, scale: stage2Scale, visibility: stage2Visibility }}
            className="absolute inset-0 m-auto pointer-events-none w-[95%] max-w-4xl h-fit flex items-center px-2"
          >
            <div className="w-full">
              <PlaceholderDashboard progress={networkProgress} captions={CAPTIONS} />
            </div>
          </motion.div>

          {/* Stage 3 — the page's single <h1> */}
          <motion.div
            style={{ opacity: stage3Opacity, y: stage3Y, visibility: stage3Visibility }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto px-4 text-center pointer-events-none"
          >
            <h1 className="font-bold text-black leading-[1.05] text-[clamp(2rem,6vw,4.5rem)] tracking-tight">
              Sé parte de la{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                4ta revolución industrial
              </span>
              , y genera soluciones de IA para tu negocio
            </h1>

            <a
              href="#contacto"
              className="
                pointer-events-auto
                inline-flex items-center justify-center
                rounded-full bg-black text-white
                px-6 py-3.5 sm:px-8 sm:py-4
                text-sm sm:text-base font-semibold font-[var(--font-sora)]
                transition-transform duration-150 ease-out
                hover:scale-[1.02] active:scale-[0.99]
              "
            >
              Comentá qué te frena y te escribo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
