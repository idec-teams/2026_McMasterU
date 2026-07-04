import {
  Beaker,
  Dna,
  Droplets,
  Flame,
  FlaskConical,
  Globe,
  Heart,
  Thermometer,
  Zap,
} from "lucide-react";
import type {
  PathwayEntry,
  Problem,
  ScienceFact,
  SolutionStat,
  Step,
} from "@/types/wiki";

export const PROBLEMS: Problem[] = [
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

export const STEPS: Step[] = [
  {
    num: "01",
    title: "Engineer the Yeast",
    icon: Dna,
    body: "Saccharomyces cerevisiae is genetically modified to overexpress lipid biosynthesis pathways — including fatty acid synthase and diacylglycerol acyltransferase — enabling massive accumulation of intracellular triglycerides identical to animal fat.",
  },
  {
    num: "02",
    title: "Accumulate Lipids",
    icon: Droplets,
    body: "MEYcells proliferate in fed-batch bioreactors under carbon-rich conditions, packing their interiors with lipid droplets. Each cell becomes a microscopic reservoir of dense, flavorful fat — exceeding 60% lipid dry cell weight.",
  },
  {
    num: "03",
    title: "Integrate with Protein",
    icon: FlaskConical,
    body: "MEYcells are embedded into cultured muscle fiber scaffolds or plant-based protein matrices. Distributed throughout the product like natural marbling, they remain structurally intact during cold storage and transport.",
  },
  {
    num: "04",
    title: "Cook, Burst, Devour",
    icon: Flame,
    body: "At a precise thermal threshold engineered to match cooking temperatures, MEYcell membranes rupture and release their entire lipid payload into the surrounding protein. The result: a juicy, fatty, satisfying bite that is structurally indistinguishable from the real thing.",
  },
];

export const SCIENCE_FACTS: ScienceFact[] = [
  {
    icon: Dna,
    label: "Host Organism",
    value: "S. cerevisiae",
    color: "text-cyan-400",
  },
  {
    icon: Thermometer,
    label: "Burst Threshold",
    value: "72 °C ± 3 °C",
    color: "text-orange-400",
  },
  {
    icon: Droplets,
    label: "Max Lipid Content",
    value: ">60% DCW",
    color: "text-yellow-300",
  },
  {
    icon: Zap,
    label: "Key Pathway",
    value: "de novo FA synthesis",
    color: "text-emerald-400",
  },
  {
    icon: FlaskConical,
    label: "Production Mode",
    value: "Fed-batch bioreactor",
    color: "text-cyan-400",
  },
];

export const SOLUTION_STATS: SolutionStat[] = [
  { label: "Lipid yield per cell", value: "~8×", sub: "vs. wild-type yeast" },
  { label: "Burst temperature", value: "72 °C", sub: "tunable ±5 °C" },
  { label: "Fat composition", value: "Identical", sub: "to animal fat" },
  { label: "Production scale", value: "Bioreactor", sub: "fully scalable" },
];

export const PATHWAY_ENTRIES: PathwayEntry[] = [
  {
    op: "GENE",
    name: "FAS1-OE",
    nameTone: "accent",
    comment: "Fatty acid synthase overexpression — lipid chain initiation",
  },
  {
    op: "GENE",
    name: "ACC1-S659A",
    nameTone: "accent",
    comment:
      "Acetyl-CoA carboxylase point mutation — removes feedback inhibition",
  },
  {
    op: "GENE",
    name: "DGA1-OE",
    nameTone: "accent",
    comment: "Diacylglycerol acyltransferase — triglyceride storage in LDs",
  },
  {
    op: "DELETE",
    name: "TGL3, TGL4, TGL5",
    nameTone: "danger",
    comment: "Lipase triple knockout — prevents intracellular fat degradation",
  },
  {
    op: "MODIFY",
    name: "MEMBRANE_COMP",
    nameTone: "success",
    comment:
      "Adjusted phospholipid bilayer — engineered thermal burst at 72 °C",
  },
  {
    op: "PROMOTE",
    name: "GPD1-prom",
    nameTone: "accent",
    comment: "Strong constitutive promoter driving all lipogenic genes",
  },
];

export const FOOTER_PROJECT_LINKS = [
  "Overview",
  "Procedures",
  "Models",
  "Parts",
  "Notebook",
];
export const FOOTER_TEAM_LINKS = [
  "Team Members",
  "Community",
  "Attributions",
  "Safety",
  "Sponsors",
];
