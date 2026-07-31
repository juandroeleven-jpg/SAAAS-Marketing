import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import MiniCaseStudy from "@/components/MiniCaseStudy";
import FinalCtaFooter from "@/components/FinalCtaFooter";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ThreePillars />
      <MiniCaseStudy />
      <FinalCtaFooter />
    </main>
  );
}
