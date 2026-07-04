import { CTASection } from "@/components/wiki/CTASection";
import { HeroSection } from "@/components/wiki/HeroSection";
import { ProblemSection } from "@/components/wiki/ProblemSection";
import { ProceduresSection } from "@/components/wiki/ProceduresSection";
import { ScienceSection } from "@/components/wiki/ScienceSection";
import { SolutionSection } from "@/components/wiki/SolutionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProceduresSection />
      <ScienceSection />
      <CTASection />
    </>
  );
}
