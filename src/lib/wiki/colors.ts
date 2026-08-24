import type { ColorKey, ProblemCardColors } from "@/types/wiki";

// Per-topic accents from the bounded set in globals.css. Same tint recipe for
// every hue (full-strength icon/stat, /25 border, /50 hover) so the cards read
// as one system despite carrying different colors.
export const PROBLEM_CARD_COLORS: Record<ColorKey, ProblemCardColors> = {
  sky: {
    border: "border-sky/25",
    hover: "hover:border-sky/60",
    stat: "text-sky",
    icon: "text-sky",
  },
  rose: {
    border: "border-rose/25",
    hover: "hover:border-rose/60",
    stat: "text-rose",
    icon: "text-rose",
  },
  gold: {
    border: "border-gold/25",
    hover: "hover:border-gold/60",
    stat: "text-gold",
    icon: "text-gold",
  },
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
