"use client";

import { useEffect, useState } from "react";

/**
 * `true` cuando el sistema pide menos animacion.
 *
 * Arranca en `false` a proposito y no lee matchMedia durante el render: en el
 * servidor no existe `window`, y devolver valores distintos en servidor y
 * cliente rompe la hidratacion. El valor real se aplica en el efecto.
 */
export function usarMovimientoReducido(): boolean {
  const [reducido, setReducido] = useState(false);

  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducido(consulta.matches);
    const alCambiar = (e: MediaQueryListEvent) => setReducido(e.matches);
    consulta.addEventListener("change", alCambiar);
    return () => consulta.removeEventListener("change", alCambiar);
  }, []);

  return reducido;
}
