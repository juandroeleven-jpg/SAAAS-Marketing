"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target, duration]);

  return value;
}

function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function MiniCaseStudy() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  const days = useCountUp(3, inView, 1500);
  const hours = useCountUp(3, inView, 1500);

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setShowArrow(true), 1500);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#FAFAF9] py-24 px-6 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(16,185,129,0.05) 0%, rgba(16,185,129,0) 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Caso real — Retail
        </span>

        <div
          className="font-sora flex flex-wrap items-center justify-center gap-x-4 font-bold leading-none text-black"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          <span>{days} día{days === 1 ? "" : "s"}</span>

          <span
            className="inline-block text-[#10B981] transition-all duration-500 ease-out"
            style={{
              opacity: showArrow ? 1 : 0,
              transform: showArrow ? "scale(1)" : "scale(0.5)",
            }}
          >
            →
          </span>

          <span>{hours} hora{hours === 1 ? "" : "s"}</span>
        </div>

        <p className="mt-8 max-w-md text-base text-neutral-500 sm:text-lg">
          Reposición de stock. Mismo equipo. Sin contratar a nadie.
        </p>
      </div>
    </section>
  );
}
