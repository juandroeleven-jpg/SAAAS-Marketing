"use client";

import { useEffect, useRef, useState } from "react";

/**
 * `[ref, visible]` — visible es true mientras el elemento toca el viewport.
 *
 * Existe por un motivo medible: `requestAnimationFrame` NO se detiene cuando
 * un elemento sale de pantalla por scroll (solo cuando se oculta la pestana
 * entera). Sin esto, las escenas 3D del hero siguen calculando y subiendo
 * datos a la GPU mientras el usuario lee secciones que estan mucho mas abajo
 * -- ventilador y bateria a cambio de nada.
 *
 * `rootMargin` generoso a proposito: la escena se reanuda un poco antes de
 * entrar en cuadro, para que nunca se vea el primer frame congelado.
 */
export function usarVisibilidad<T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean,
] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: "200px" }
    );
    obs.observe(nodo);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

/** `true` si el puntero principal es preciso (raton/trackpad). */
export function usarPunteroFino(): boolean {
  const [fino, setFino] = useState(false);
  useEffect(() => {
    const c = window.matchMedia("(pointer: fine)");
    setFino(c.matches);
    const al = (e: MediaQueryListEvent) => setFino(e.matches);
    c.addEventListener("change", al);
    return () => c.removeEventListener("change", al);
  }, []);
  return fino;
}
