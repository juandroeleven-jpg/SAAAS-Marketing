import LaptopFlotante from "@/components/LaptopFlotante";

export default function PlataformaPage() {
  return (
    <main className="min-h-screen bg-cf-bg px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
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

        <LaptopFlotante />
      </div>
    </main>
  );
}
