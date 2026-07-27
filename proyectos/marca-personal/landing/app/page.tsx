import HeroVidrio from "@/components/HeroVidrio";
import Logros from "@/components/Logros";
import PlaceholderDashboard from "@/components/PlaceholderDashboard";
import CVSection from "@/components/CVSection";

export default function Home() {
  return (
    <main className="bg-cf-bg">
      <HeroVidrio />
      <Logros />
      <PlaceholderDashboard />
      <CVSection />

      <footer className="border-t border-cf-border px-6 py-10 text-center text-sm text-cf-muted">
        Codeflow — automatización e IA aplicada.
      </footer>
    </main>
  );
}
