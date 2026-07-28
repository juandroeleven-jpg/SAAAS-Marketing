"use client";

import { MotionConfig } from "framer-motion";

/**
 * Aplica `prefers-reduced-motion` a TODA la app de una vez.
 *
 * Hace falta porque el opt-out manual no alcanza: framer-motion decide la
 * animacion en el momento de montar, y un hook que lee matchMedia en un
 * efecto llega tarde -- la animacion ya arranco. `reducedMotion="user"`
 * lo resuelve en la propia libreria: anula las transformaciones (x, y,
 * scale, rotate) y deja pasar solo opacity, que es lo que la pauta pide.
 *
 * Va en un componente cliente aparte para que el layout siga siendo un
 * componente de servidor y el HTML inicial no dependa de React en el cliente.
 */
export default function ProveedorMovimiento({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
