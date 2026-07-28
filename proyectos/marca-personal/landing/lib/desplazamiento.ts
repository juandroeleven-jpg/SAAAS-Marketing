"use client";

import { useEffect, useState } from "react";

/**
 * Estado global "el usuario esta desplazandose", con UN solo listener de
 * scroll para toda la app.
 *
 * Para que sirve: mientras la pagina se desplaza, cada frame obliga a
 * recalcular el `backdrop-filter` de los paneles de vidrio (el fondo se mueve
 * respecto al panel) y a redibujar las escenas 3D. Es justo el momento en el
 * que menos se aprecia el detalle y mas se nota un tiron. Sabiendo que se
 * esta desplazando, se puede apagar lo caro y devolverlo al parar.
 *
 * El listener es unico y `passive`, y solo cambia de estado en los bordes
 * (empieza / termina), no en cada evento.
 */
const MS_QUIETO = 140;

let desplazando = false;
let temporizador = 0;
let instalado = false;
const oyentes = new Set<(v: boolean) => void>();

function avisar() {
  oyentes.forEach((f) => f(desplazando));
}

function alDesplazar() {
  if (!desplazando) {
    desplazando = true;
    document.documentElement.classList.add("desplazando");
    avisar();
  }
  clearTimeout(temporizador);
  temporizador = window.setTimeout(() => {
    desplazando = false;
    document.documentElement.classList.remove("desplazando");
    avisar();
  }, MS_QUIETO);
}

function instalar() {
  if (instalado || typeof window === "undefined") return;
  instalado = true;
  // passive: este listener no llama a preventDefault, y decirselo al navegador
  // le permite desplazar sin esperar a que termine.
  window.addEventListener("scroll", alDesplazar, { passive: true });
}

export function usarDesplazando(): boolean {
  const [valor, setValor] = useState(false);

  useEffect(() => {
    instalar();
    oyentes.add(setValor);
    setValor(desplazando);
    return () => {
      oyentes.delete(setValor);
    };
  }, []);

  return valor;
}
