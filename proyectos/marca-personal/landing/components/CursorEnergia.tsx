"use client";

import { useEffect, useRef } from "react";
import { usarMovimientoReducido } from "@/lib/movimiento";
import { usarPunteroFino } from "@/lib/visibilidad";

// Cursor propio: una bolita de energia con el mismo lenguaje que los avatares
// de agente de la escena del laptop -- nucleo brillante, halo y un rastro que
// llega con retraso.
//
// Decisiones que no son estéticas:
//
// 1. Solo con puntero fino. En tactil no hay cursor que reemplazar y el
//    elemento seria un adorno que nunca se mueve.
// 2. `cursor: none` se aplica desde JavaScript, no desde la hoja de estilos.
//    Si se pusiera en CSS y el componente fallara al montar, el usuario se
//    quedaria sin ningun cursor y sin forma de saber donde esta apuntando.
//    Asi, si esto no corre, el cursor del sistema sigue ahi.
// 3. El nucleo va EXACTO en la posicion del puntero, sin retraso. Solo el halo
//    va rezagado. Si el punto de mira se retrasara, apuntar a un boton se
//    volveria impreciso.
// 4. Con `prefers-reduced-motion` no se monta nada: el cursor del sistema es
//    el que espera quien pide menos animacion.
const RETARDO = 0.18; // cuanto persigue el halo al nucleo, por frame

export default function CursorEnergia() {
  const fino = usarPunteroFino();
  const quieto = usarMovimientoReducido();
  const nucleo = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fino || quieto) return;

    const anterior = document.body.style.cursor;
    document.body.style.cursor = "none";

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let hx = x;
    let hy = y;
    let visible = false;
    let id = 0;

    const alMover = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        hx = x;
        hy = y;
        if (nucleo.current) nucleo.current.style.opacity = "1";
        if (halo.current) halo.current.style.opacity = "1";
      }
    };
    const alSalir = () => {
      visible = false;
      if (nucleo.current) nucleo.current.style.opacity = "0";
      if (halo.current) halo.current.style.opacity = "0";
    };

    const paso = () => {
      hx += (x - hx) * RETARDO;
      hy += (y - hy) * RETARDO;
      // translate3d y no left/top: mover con transform lo compone la GPU sin
      // volver a calcular el layout de la pagina en cada movimiento del raton.
      if (nucleo.current) {
        nucleo.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (halo.current) {
        halo.current.style.transform = `translate3d(${hx}px, ${hy}px, 0) translate(-50%, -50%)`;
      }
      id = requestAnimationFrame(paso);
    };
    id = requestAnimationFrame(paso);

    window.addEventListener("pointermove", alMover, { passive: true });
    document.addEventListener("pointerleave", alSalir);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("pointermove", alMover);
      document.removeEventListener("pointerleave", alSalir);
      document.body.style.cursor = anterior;
    };
  }, [fino, quieto]);

  if (!fino || quieto) return null;

  return (
    <>
      <div
        ref={halo}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-14 w-14 rounded-full opacity-0 mix-blend-screen transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.55) 0%, rgba(56,189,248,0.18) 45%, rgba(56,189,248,0) 70%)",
        }}
      />
      <div
        ref={nucleo}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2.5 w-2.5 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, #7DD3FC 55%, rgba(56,189,248,0.6) 100%)",
          boxShadow: "0 0 12px rgba(125,211,252,0.9)",
        }}
      />
    </>
  );
}
