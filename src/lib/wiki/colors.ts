import type { ColorKey, ProblemCardColors } from "@/types/wiki";

// The palette is monochrome teal, so every problem card shares one brand
// treatment. The ColorKey map is kept so the data model stays open to
// re-introducing per-card accents later without touching components.
const TEAL_CARD: ProblemCardColors = {
  border: "border-border",
  stat: "text-primary",
  icon: "text-primary",
};

export const PROBLEM_CARD_COLORS: Record<ColorKey, ProblemCardColors> = {
  blue: TEAL_CARD,
  green: TEAL_CARD,
  yellow: TEAL_CARD,
};

export type TrackColor = { border: string; bg: string; text: string };

export const TRACK_COLORS: Record<string, TrackColor> = {
  "dry-lab-design": {
    border: "border-emerald-400",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  "dry-lab-modelling": {
    border: "border-sky-400",
    bg: "bg-sky-50",
    text: "text-sky-700",
  },
  "human-practices-entrepreneurship-commercialization": {
    border: "border-indigo-400",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
  },
  "human-practices-community-outreach": {
    border: "border-violet-400",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  finance: {
    border: "border-amber-400",
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  "wet-lab": {
    border: "border-rose-400",
    bg: "bg-rose-50",
    text: "text-rose-700",
  },
  "science-communication": {
    border: "border-lime-400",
    bg: "bg-lime-50",
    text: "text-lime-700",
  },
};
