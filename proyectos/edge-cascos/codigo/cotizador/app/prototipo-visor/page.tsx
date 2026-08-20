import PrototipoVisorSwap from "@/components/PrototipoVisorSwap";

export default function PrototipoVisorPage() {
  return (
    <main className="min-h-screen bg-edge-bg px-4 py-10 sm:px-8 sm:py-16">
      <header className="mx-auto mb-8 w-full max-w-3xl text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-edge-accent">
          Prototipo
        </span>
        <h1 className="mt-2 text-2xl font-bold text-edge-text sm:text-3xl">
          Visor intercambiable sobre fotos reales
        </h1>
        <p className="mt-2 text-edge-muted">
          Foto base fija (Bob Esponja / Godfather) + capa de visor
          posicionada con coordenadas calibradas por foto.
        </p>
      </header>

      <PrototipoVisorSwap />
    </main>
  );
}
