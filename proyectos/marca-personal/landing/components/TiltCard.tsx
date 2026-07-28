"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

// Efecto de profundidad 3D via CSS transform (perspective + rotateX/Y),
// no requiere assets 3D reales — reacciona a la posicion del mouse.
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  // El rectangulo se mide al ENTRAR y se guarda, no en cada movimiento.
  // getBoundingClientRect fuerza al navegador a recalcular el layout antes de
  // responder; llamarlo en cada mousemove, con cuatro tarjetas en pantalla,
  // era hasta cuatro reflujos por movimiento del raton.
  const caja = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function alEntrar() {
    caja.current = ref.current?.getBoundingClientRect() ?? null;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = caja.current;
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    caja.current = null;
    x.set(0);
    y.set(0);
  }

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onMouseEnter={alEntrar}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
