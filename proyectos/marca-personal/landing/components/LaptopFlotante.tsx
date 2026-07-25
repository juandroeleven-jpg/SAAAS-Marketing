"use client";

import { motion } from "framer-motion";
import NodosConexion from "./NodosConexion";

// Laptop flotante en diagonal (CSS 3D real: perspective + rotateX/Y/Z,
// no WebGL) con sombra tipo neon debajo -- referencia: nixtio.com.
// Dimensiones en unidades relativas, no pixeles fijos.
export default function LaptopFlotante() {
  return (
    <div className="relative mx-auto aspect-[4/3.2] w-full max-w-xl">
      {/* Sombra neon debajo */}
      <div className="pointer-events-none absolute inset-x-[8%] bottom-[2%] h-[18%] rounded-[50%] bg-cf-accent/30 blur-2xl" />
      <div className="pointer-events-none absolute inset-x-[18%] bottom-[4%] h-[10%] rounded-[50%] bg-cf-accent2/40 blur-xl" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
        style={{ perspective: "1400px" }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-16deg)",
          }}
        >
          {/* Base/teclado — casi horizontal, da la perspectiva de "mesa" */}
          <div
            className="absolute bottom-[6%] left-[6%] h-[10%] w-[88%] origin-top rounded-lg bg-cf-text/90 shadow-2xl"
            style={{ transform: "rotateX(72deg) translateZ(6px)" }}
          />

          {/* Pantalla — casi de frente, apenas reclinada hacia atrás */}
          <div
            className="absolute left-0 top-0 h-[86%] w-full origin-bottom rounded-xl bg-cf-text p-[3%] shadow-2xl"
            style={{ transform: "rotateX(9deg)" }}
          >
            <div className="h-full w-full overflow-hidden rounded-lg bg-white p-[4%]">
              <NodosConexion />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
