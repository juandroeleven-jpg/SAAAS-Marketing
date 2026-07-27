"use client";

import dynamic from "next/dynamic";

// Pagina de inspeccion, no forma parte del recorrido publico del sitio
// (no esta enlazada desde ninguna nav). Solo el objeto 3D, sin texto ni
// layout alrededor, en grande, para revisar a simple vista si el bisel
// se ve bien en un navegador real con GPU -- las capturas de este agente
// salen de Chromium headless con software rendering, que no es un
// sustituto confiable para juzgar detalle fino como este.
const ModeloLaptop = dynamic(() => import("@/components/ModeloLaptop"), {
  ssr: false,
});

export default function Objeto3DPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cf-bg p-24">
      {/* ModeloLaptop trae su propio max-w-xl interno (el mismo que usa
          /plataforma) -- se agranda solo la vista de esta pagina de
          inspeccion con un scale de CSS, sin tocar ese limite compartido. */}
      <div className="w-full max-w-xl scale-150">
        <ModeloLaptop />
      </div>
    </main>
  );
}
