import { AlternativesSection } from "@/components/wiki/main/AlternativesSection";
import { BioreactorSection } from "@/components/wiki/main/BioreactorSection";
import { CTASection } from "@/components/wiki/main/CTASection";
import { DirectedEvolutionSection } from "@/components/wiki/main/DirectedEvolutionSection";
import { HeroBanner } from "@/components/wiki/main/HeroBanner";
import { ProblemSection } from "@/components/wiki/main/ProblemSection";
import { ProceduresSection } from "@/components/wiki/main/ProceduresSection";
import { PromoVideoSection } from "@/components/wiki/main/PromoVideoSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ProblemSection />
      <AlternativesSection />
      <BioreactorSection />
      <ProceduresSection />
      <DirectedEvolutionSection />
      <PromoVideoSection />
      <CTASection />
    </>
  );
}
