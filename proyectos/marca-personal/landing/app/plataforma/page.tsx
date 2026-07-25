"use client";

import dynamic from "next/dynamic";

const ModeloLaptop = dynamic(() => import("@/components/ModeloLaptop"), {
  ssr: false,
});

export default function PlataformaPage() {
  return (
    <main className="min-h-screen bg-cf-bg px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-cf-accent">
            Plataforma
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-cf-text sm:text-5xl">
            Tus herramientas, orquestadas en un solo flujo
          </h1>
          <p className="mt-6 max-w-lg text-lg text-cf-muted">
            Slack, ChatGPT, Drive, Canva, Notion, Discord — conectados y
            automatizados, sin que tengas que operar cada uno por separado.
          </p>
        </div>

        <div>
          <ModeloLaptop />
          <p className="mt-3 text-center text-xs text-cf-muted">
            Modelo 3D &ldquo;MacBook Laptop&rdquo; por Issac Ghazanfar,
            licencia Creative Commons Attribution
          </p>
        </div>
      </div>
    </main>
  );
}
