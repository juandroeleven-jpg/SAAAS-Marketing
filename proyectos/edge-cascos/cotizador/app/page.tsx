import Cotizador from "@/components/Cotizador";

export default function Home() {
  return (
    <main className="min-h-screen bg-edge-bg px-4 py-10 sm:px-8 sm:py-16">
      <header className="mx-auto mb-10 w-full max-w-6xl text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-edge-accent">
          EDGE Cascos
        </span>
        <h1 className="mt-2 text-3xl font-bold text-edge-text sm:text-4xl">
          Armá tu casco
        </h1>
        <p className="mt-2 text-edge-muted">
          Elegí modelo, colorway, talle y cantidad. Precio en vivo, cotización al instante.
        </p>
      </header>

      <Cotizador />
    </main>
  );
}
