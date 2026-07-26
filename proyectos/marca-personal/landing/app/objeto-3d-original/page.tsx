"use client";

import dynamic from "next/dynamic";

// Pagina de inspeccion, no forma parte del recorrido publico. Muestra el
// GLB original sin ajustes de textura nuestros, a pantalla completa y con
// OrbitControls, para poder examinarlo en detalle y comparar contra
// /objeto-3d (con todos los ajustes aplicados).
const ModeloLaptopOriginal = dynamic(
  () => import("@/components/ModeloLaptopOriginal"),
  { ssr: false }
);

export default function Objeto3DOriginalPage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-cf-bg">
      <ModeloLaptopOriginal />
      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[92vw] text-center rounded-full bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
        GLB original sin ajustes — arrastra para rotar, rueda para hacer zoom
      </p>
    </main>
  );
}
