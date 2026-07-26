"use client";

import dynamic from "next/dynamic";

// Pagina de comparacion, no forma parte del recorrido publico. Muestra el
// GLB original sin ningun ajuste nuestro (textura de fabrica, camara
// neutra, sin scale custom) para comparar contra /objeto-3d (con todos
// los ajustes aplicados).
const ModeloLaptopOriginal = dynamic(
  () => import("@/components/ModeloLaptopOriginal"),
  { ssr: false }
);

export default function Objeto3DOriginalPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cf-bg p-24">
      <div className="w-full max-w-xl scale-150">
        <ModeloLaptopOriginal />
      </div>
    </main>
  );
}
