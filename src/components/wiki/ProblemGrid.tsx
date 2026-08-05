import { Beaker, Globe, Heart } from "lucide-react";
import type { Problem } from "@/types/wiki";
import { ProblemCard } from "./ProblemCard";

const PROBLEMS: Problem[] = [
  {
    icon: Globe,
    title: "Environmental Collapse",
    stat: "14.5%",
    statLabel: "of global GHG emissions",
    body: "Livestock agriculture is among the largest drivers of greenhouse gas emissions, freshwater depletion, and land degradation on Earth. At current scale, the system cannot sustain a population of 10 billion.",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Animal Welfare",
    stat: "80B+",
    statLabel: "land animals slaughtered annually",
    body: "Industrial farming involves the suffering of tens of billions of sentient animals each year. Alternatives that remove animals from the equation entirely are both an ethical imperative and a market opportunity.",
    color: "green",
  },
  {
    icon: Beaker,
    title: "The Fat Problem",
    stat: "~0%",
    statLabel: "intramuscular fat in lab-grown meat",
    body: "Cultivated meat and plant-based alternatives taste lean, dry, and hollow. Real meat owes its juiciness to marbled fat. Without fat, alternative proteins will never truly compete — and until now, no one had a scalable answer.",
    color: "yellow",
  },
];

export function ProblemGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {PROBLEMS.map((problem) => (
        <ProblemCard key={problem.title} problem={problem} />
      ))}
    </div>
  );
}
