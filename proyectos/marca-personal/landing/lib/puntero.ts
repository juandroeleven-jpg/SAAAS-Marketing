"use client";

import { useEffect, useRef } from "react";

/** Posicion del puntero normalizada a -1..1 desde el centro de la ventana. */
export type Puntero = { x: number; y: number; activo: boolean };

/**
 * Devuelve un ref con la posicion del puntero.
 *
 * Es un REF y no estado a proposito: la posicion cambia decenas de veces por
 * segundo y guardarla en estado provocaria un re-render de React por cada
 * movimiento del raton. Quien la consume la lee dentro de su propio bucle de
 * animacion, que ya corre a la tasa del monitor.
 */
export function usarPuntero() {
  const puntero = useRef<Puntero>({ x: 0, y: 0, activo: false });

  useEffect(() => {
    // En tactil no hay puntero que seguir: el efecto no se monta y los
    // objetos se quedan con su movimiento propio.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const alMover = (e: PointerEvent) => {
      puntero.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      puntero.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      puntero.current.activo = true;
    };
    const alSalir = () => {
      puntero.current.activo = false;
    };

    // passive: el listener no llama a preventDefault, y decirselo al navegador
    // le permite no esperar por el antes de desplazar la pagina.
    window.addEventListener("pointermove", alMover, { passive: true });
    document.addEventListener("pointerleave", alSalir);
    return () => {
      window.removeEventListener("pointermove", alMover);
      document.removeEventListener("pointerleave", alSalir);
    };
  }, []);

  return puntero;
}
