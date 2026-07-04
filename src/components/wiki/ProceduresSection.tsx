import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { StepList } from "./StepList";

export function ProceduresSection() {
  return (
    <section id="procedures" className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <SectionEyebrow>Mechanism</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground">
            How it works
          </h2>
        </div>

        <StepList />
      </div>
    </section>
  );
}
