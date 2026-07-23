"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CATALOGO } from "@/lib/catalogo";
import { calcularPrecio } from "@/lib/calcularPrecio";
import { SeleccionCotizador, TalleId } from "@/lib/types";
import SelectorModelo from "./SelectorModelo";
import SelectorColorway from "./SelectorColorway";
import SelectorTalle from "./SelectorTalle";
import SelectorCantidad from "./SelectorCantidad";
import GaleriaImagen from "./GaleriaImagen";
import DesglosePrecio from "./DesglosePrecio";
import ConfirmacionCotizacion from "./ConfirmacionCotizacion";

const SELECCION_INICIAL: SeleccionCotizador = {
  modeloId: null,
  colorwayId: null,
  talle: null,
  cantidad: 1,
};

export default function Cotizador() {
  const [seleccion, setSeleccion] = useState<SeleccionCotizador>(SELECCION_INICIAL);
  const [confirmado, setConfirmado] = useState(false);

  const modelo = useMemo(
    () => CATALOGO.find((m) => m.id === seleccion.modeloId) ?? null,
    [seleccion.modeloId]
  );

  const colorway = useMemo(
    () => modelo?.colorways.find((c) => c.id === seleccion.colorwayId) ?? null,
    [modelo, seleccion.colorwayId]
  );

  const desglose = useMemo(() => {
    if (!modelo || !colorway) return null;
    return calcularPrecio(modelo, colorway.id, seleccion.cantidad);
  }, [modelo, colorway, seleccion.cantidad]);

  const listoParaConfirmar = Boolean(modelo && colorway && seleccion.talle);

  function elegirModelo(modeloId: string) {
    const nuevoModelo = CATALOGO.find((m) => m.id === modeloId) ?? null;
    setSeleccion({
      modeloId,
      // Al cambiar de modelo, colorway/talle previos podrían no existir en el nuevo modelo.
      colorwayId: null,
      talle: null,
      cantidad: seleccion.cantidad,
    });
    void nuevoModelo;
  }

  function elegirColorway(colorwayId: string) {
    setSeleccion((s) => ({ ...s, colorwayId }));
  }

  function elegirTalle(talle: TalleId) {
    setSeleccion((s) => ({ ...s, talle }));
  }

  function cambiarCantidad(cantidad: number) {
    setSeleccion((s) => ({ ...s, cantidad }));
  }

  if (confirmado && modelo && colorway && seleccion.talle && desglose) {
    return (
      <ConfirmacionCotizacion
        modelo={modelo}
        colorway={colorway}
        talle={seleccion.talle}
        cantidad={seleccion.cantidad}
        desglose={desglose}
        onVolver={() => setConfirmado(false)}
      />
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <GaleriaImagen
          imagenUrl={colorway?.imagenUrl ?? null}
          nombreModelo={modelo?.nombre ?? null}
          nombreColorway={colorway?.nombre ?? null}
        />
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-edge-muted">
            1. Elegí tu modelo
          </h2>
          <SelectorModelo
            modelos={CATALOGO}
            modeloSeleccionadoId={seleccion.modeloId}
            onSeleccionar={elegirModelo}
          />
        </section>

        {modelo && (
          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-edge-muted">
              2. Colorway
            </h2>
            <SelectorColorway
              colorways={modelo.colorways}
              colorwaySeleccionadoId={seleccion.colorwayId}
              onSeleccionar={elegirColorway}
            />
          </section>
        )}

        {modelo && (
          <section className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-edge-muted">
                3. Talle
              </h2>
              <SelectorTalle
                tallesDisponibles={modelo.tallesDisponibles}
                talleSeleccionado={seleccion.talle}
                onSeleccionar={elegirTalle}
              />
            </div>

            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-edge-muted">
                4. Cantidad
              </h2>
              <SelectorCantidad
                cantidad={seleccion.cantidad}
                onCambiar={cambiarCantidad}
              />
            </div>
          </section>
        )}

        <section>
          <DesglosePrecio desglose={desglose} />

          <motion.button
            type="button"
            disabled={!listoParaConfirmar}
            onClick={() => setConfirmado(true)}
            whileHover={listoParaConfirmar ? { scale: 1.01 } : undefined}
            whileTap={listoParaConfirmar ? { scale: 0.98 } : undefined}
            className={`mt-4 w-full rounded-xl px-6 py-3 text-center font-semibold transition-colors duration-200 ${
              listoParaConfirmar
                ? "bg-edge-accent text-edge-text hover:brightness-110"
                : "cursor-not-allowed bg-edge-border text-edge-muted"
            }`}
          >
            {listoParaConfirmar
              ? "Confirmar cotización"
              : "Elegí modelo, colorway y talle"}
          </motion.button>
        </section>
      </div>
    </div>
  );
}
