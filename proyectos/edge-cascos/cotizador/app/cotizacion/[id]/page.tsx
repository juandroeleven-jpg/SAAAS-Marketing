import { notFound } from "next/navigation";
import { getCotizacion } from "@/lib/cotizacionLink";
import { CATALOGO } from "@/lib/catalogo";
import { calcularPrecio } from "@/lib/calcularPrecio";
import { estimarFechaEntrega } from "@/lib/entrega";
import ConfirmacionCotizacion from "@/components/ConfirmacionCotizacion";

export default function CotizacionCompartidaPage({
  params,
}: {
  params: { id: string };
}) {
  const seleccion = getCotizacion(params.id);
  if (!seleccion || !seleccion.modeloId || !seleccion.colorwayId || !seleccion.talle) {
    notFound();
  }

  const modelo = CATALOGO.find((m) => m.id === seleccion.modeloId);
  const colorway = modelo?.colorways.find((c) => c.id === seleccion.colorwayId);
  if (!modelo || !colorway) {
    notFound();
  }

  const desglose = calcularPrecio(modelo, colorway.id, seleccion.cantidad);
  const entrega = estimarFechaEntrega(colorway, seleccion, new Date());

  return (
    <main className="flex min-h-screen items-center justify-center bg-edge-bg px-4 py-16">
      <ConfirmacionCotizacion
        modelo={modelo}
        colorway={colorway}
        talle={seleccion.talle}
        cantidad={seleccion.cantidad}
        desglose={desglose}
        entregaTexto={entrega.fechaTexto}
        soloLectura
      />
    </main>
  );
}
