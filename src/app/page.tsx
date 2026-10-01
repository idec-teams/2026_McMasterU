import { CTASection } from "@/components/wiki/main/CTASection";
import { HeroBanner } from "@/components/wiki/main/HeroBanner";
import { ProblemSection } from "@/components/wiki/main/ProblemSection";
import { ProceduresSection } from "@/components/wiki/main/ProceduresSection";
import { PromoVideoSection } from "@/components/wiki/main/PromoVideoSection";
import { SolutionSection } from "@/components/wiki/main/SolutionSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ProblemSection />
      <SolutionSection />
      <ProceduresSection />
      <PromoVideoSection />
      <CTASection />
    </>
  );
}
