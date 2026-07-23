"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface GaleriaImagenProps {
  imagenUrl: string | null;
  nombreModelo: string | null;
  nombreColorway: string | null;
}

export default function GaleriaImagen({
  imagenUrl,
  nombreModelo,
  nombreColorway,
}: GaleriaImagenProps) {
  const [imagenConError, setImagenConError] = useState(false);

  // Reinicia el estado de error cada vez que cambia la imagen a mostrar.
  useEffect(() => {
    setImagenConError(false);
  }, [imagenUrl]);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-edge-border bg-edge-surface shadow-xl">
      <AnimatePresence mode="wait">
        {!imagenUrl ? (
          <motion.div
            key="vacio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center"
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-edge-muted"
            >
              <path
                d="M12 2C7 2 4 5.5 4 10.5V15a2 2 0 0 0 2 2h1.2c.4 1.7 1.9 3 3.8 3s3.4-1.3 3.8-3H16a2 2 0 0 0 2-2v-4.5C18 5.5 15 2 12 2Z"
                strokeLinejoin="round"
              />
              <path d="M4 13.5c0-2 1-3 3-3" strokeLinecap="round" />
              <path d="M20 13.5c0-2-1-3-3-3" strokeLinecap="round" />
              <circle cx="12" cy="10" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            <p className="max-w-[16rem] text-sm font-medium text-edge-muted">
              Elegí un modelo y colorway para ver tu casco
            </p>
          </motion.div>
        ) : imagenConError ? (
          <motion.div
            key={`fallback-${imagenUrl}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8 text-center"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,61,46,0.18), transparent 60%), linear-gradient(160deg, #1D2127 0%, #0B0D10 100%)",
            }}
          >
            <span className="text-xs uppercase tracking-widest text-edge-muted">
              Vista previa no disponible
            </span>
            <span className="text-xl font-semibold text-edge-text">
              {nombreModelo ?? "Modelo"}
            </span>
            {nombreColorway && (
              <span className="text-sm text-edge-muted">{nombreColorway}</span>
            )}
          </motion.div>
        ) : (
          <motion.img
            key={imagenUrl}
            src={imagenUrl}
            alt={`${nombreModelo ?? "Casco"}${
              nombreColorway ? ` — ${nombreColorway}` : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onError={() => setImagenConError(true)}
            className="absolute inset-0 h-full w-full object-contain p-8"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
