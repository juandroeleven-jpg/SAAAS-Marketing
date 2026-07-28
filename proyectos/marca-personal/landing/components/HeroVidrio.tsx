"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { usarMovimientoReducido } from "@/lib/movimiento";

// Las dos capas WebGL solo en cliente: montan contexto grafico y no tienen
// nada que renderizar en el servidor. El texto del hero llega en el HTML
// inicial y pinta de una, sin esperar a ninguna de las dos.
const PantallaFlotante = dynamic(() => import("./PantallaFlotante"), {
  ssr: false,
});
const FondoOndas = dynamic(() => import("./FondoOndas"), { ssr: false });

// Ocupan el lugar que en la referencia tiene el menu de navegacion: misma
// fila, mismo peso visual, pero diciendo lo unico que le importa a quien
// llega -- que esto ya funciona y cuanto rinde.
// Etiquetas cortas a proposito: los chips son grandes y tienen que entrar
// los cuatro en UNA sola fila junto a la marca. Con textos largos se parten
// en dos lineas y la fila deja de leerse como una barra de navegacion.
const METRICAS = [
  { valor: "15", texto: "sistemas" },
  { valor: "97%", texto: "ahorro nómina" },
  { valor: "95-98%", texto: "precisión" },
  { valor: "24/7", texto: "activo" },
];

export default function HeroVidrio() {
  const quieto = usarMovimientoReducido();

  return (
    <section className="fondo-azul relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
      {/* Capa 1, al fondo: el campo de ondas de energia en 3D. */}
      <FondoOndas />

      {/* Capa 2: resplandor ancho detras del borde superior del panel, como
          el arco de luz de la referencia. Da la sensacion de que el panel
          esta iluminado por detras y no simplemente pegado sobre el fondo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[6%] -z-[5] h-[30%] w-[70%] -translate-x-1/2 rounded-[50%] bg-sky-500/25 blur-[110px]"
      />

      <motion.div
        initial={quieto ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: quieto ? 0 : 0.7, ease: "easeOut" }}
        // pb generoso: la pantalla se apoya en el borde inferior y sobresale,
        // asi que el texto tiene que terminar bastante antes.
        className="vidrio relative z-10 mx-auto w-full max-w-7xl rounded-[32px] px-6 pb-10 pt-8 sm:px-10 sm:pt-10 lg:px-14"
      >
        {/* Fila superior: marca a la izquierda y metricas donde la referencia
            pone el menu. El boton NO va aqui: con los chips grandes la fila se
            partia en tres lineas. Baja debajo del titular, que ademas es donde
            corresponde a una llamada a la accion. */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Codeflow <span className="text-sky-300">AI</span>
          </span>

          <div className="flex flex-wrap items-center gap-2.5">
            {METRICAS.map((m) => (
              <span
                key={m.texto}
                className="rounded-full border border-white/25 bg-white/[0.07] px-4 py-2 text-sm text-slate-200 sm:px-6 sm:py-3 sm:text-lg"
              >
                <strong className="font-bold text-white">{m.valor}</strong>{" "}
                {m.texto}
              </span>
            ))}
          </div>
        </div>

        <h1 className="mt-12 max-w-4xl text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
          Agentes de IA que ya operan{" "}
          <span className="text-sky-300">procesos reales</span>
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* Anclas dentro de la misma pagina, no rutas: el recorrido es por
              scroll. El desplazamiento suave lo da scroll-behavior en
              globals.css, sin JavaScript. */}
          <a
            href="#agentes"
            className="rounded-full bg-white px-7 py-3 text-base font-semibold text-[#071634] transition hover:bg-sky-100"
          >
            Ver la plataforma
          </a>
          <a
            href="#flujos"
            className="rounded-full border border-white/60 px-7 py-3 text-base font-semibold text-white transition hover:border-white/70 hover:bg-white/10"
          >
            Ver los flujos
          </a>
        </div>

        {/* La pantalla: sale desde el borde inferior del panel y sobresale por
            debajo, igual que los personajes de la referencia. Va POR ENCIMA
            del vidrio (z-20) a proposito: backdrop-filter solo desenfoca lo
            que quedo pintado DETRAS, asi que un canvas animado aqui arriba no
            obliga a recalcularlo en cada frame. */}
        {/* En movil la pantalla NO se superpone: va en el flujo normal,
            debajo de los botones. Colocada en absoluto tapaba las llamadas a
            la accion, que es lo primero que hay que poder tocar en un
            telefono. A partir de sm vuelve a apoyarse en el borde inferior
            del panel y a sobresalir. */}
        {/* 72% y no 88%: al 88% los bordes del objeto quedaban casi tocando
            los costados del panel y el conjunto se leia apretado. El panel
            ademas paso a max-w-7xl, asi que en pixeles la pantalla apenas
            pierde tamano pero gana aire a los lados. */}
        <div className="relative z-20 mx-auto mt-10 w-full sm:mt-10 sm:w-[82%] sm:-mb-[13%]">
          {/* Luz LED detras de la pantalla. Es `filter: blur`, no
              backdrop-filter: se desenfoca a si misma y no lee lo que tiene
              detras, asi que no anade coste al vidrio. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] bg-sky-400/45 blur-[90px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[72%] h-[60%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-cyan-300/40 blur-[70px]"
          />
          <PantallaFlotante />
        </div>
      </motion.div>
    </section>
  );
}
