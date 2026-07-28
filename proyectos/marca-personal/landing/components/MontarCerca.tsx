"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Retrasa el MONTAJE de sus hijos hasta que el hueco se acerca al viewport.
 *
 * No es lo mismo que pausar el bucle de animacion: un `<Canvas>` fuera de
 * pantalla con `frameloop="never"` ya no dibuja, pero para llegar a ese estado
 * antes tuvo que crear su contexto WebGL, compilar sus shaders y, en el caso
 * del laptop, descargar y parsear un modelo de 2,5 MB. Todo eso pasa en la
 * primera carga, compitiendo con lo unico que el visitante esta mirando: la
 * primera pantalla.
 *
 * Con esto, en la carga inicial solo se inicializa el 3D del hero. Lo de las
 * secciones de abajo se monta cuando el usuario se acerca, que es cuando ya
 * no hay nada mas compitiendo.
 *
 * El hueco se reserva con la misma proporcion que tendra el contenido, asi
 * que al montar no hay salto de layout.
 */
export default function MontarCerca({
  children,
  proporcion,
  margen = "300px",
  className = "",
}: {
  children: React.ReactNode;
  /** Proporcion del hueco reservado, p. ej. "5 / 3.9". */
  proporcion: string;
  margen?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [montar, setMontar] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;
    if (typeof IntersectionObserver === "undefined") {
      setMontar(true);
      return;
    }

    let obs: IntersectionObserver | null = null;
    let cancelado = false;

    // El observador NO se instala de inmediato. La segunda seccion empieza a
    // solo ~56 px por debajo del pliegue, asi que con cualquier margen razonable
    // se considera "cerca" desde el primer instante y el montaje diferido no
    // serviria de nada. Se espera a que la carga inicial termine Y a que el
    // navegador tenga un hueco libre; recien ahi se empieza a observar.
    const observar = () => {
      if (cancelado || !ref.current) return;
      obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setMontar(true);
            obs?.disconnect();
          }
        },
        { rootMargin: margen }
      );
      obs.observe(ref.current);
    };

    const enReposo = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(observar, { timeout: 1200 });
      } else {
        window.setTimeout(observar, 400);
      }
    };

    if (document.readyState === "complete") enReposo();
    else window.addEventListener("load", enReposo, { once: true });

    return () => {
      cancelado = true;
      obs?.disconnect();
      window.removeEventListener("load", enReposo);
    };
  }, [margen]);

  return (
    <div
      ref={ref}
      className={className}
      style={montar ? undefined : { aspectRatio: proporcion }}
    >
      {montar ? children : null}
    </div>
  );
}
