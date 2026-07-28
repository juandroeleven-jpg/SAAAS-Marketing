import HeroVidrio from "@/components/HeroVidrio";

// La portada es SOLO el hero. Las secciones que vivian debajo (Logros,
// PlaceholderDashboard, CVSection y el pie) se quitaron a proposito: son de
// la version anterior, siguen con el estilo claro y rompian la lectura al
// hacer scroll. Los componentes siguen en el repo por si su contenido se
// reaprovecha, pero ya no se renderizan en ninguna ruta.
//
// El sitio son tres paginas y nada mas:
//   /            pantalla flotante con el flujo ejecutandose
//   /plataforma  el agente que razona
//   /flujos      las cuatro tarjetas
export default function Home() {
  return (
    <main className="bg-cf-bg">
      <HeroVidrio />
    </main>
  );
}
