import type { ColorKey, ProblemCardColors } from "@/types/wiki";

export const PROBLEM_CARD_COLORS: Record<ColorKey, ProblemCardColors> = {
  blue: {
    border: "border-cyan-400/30",
    glow: "rgba(0,212,255,0.08)",
    stat: "text-cyan-400",
    icon: "text-cyan-400",
  },
  green: {
    border: "border-emerald-400/30",
    glow: "rgba(0,200,83,0.08)",
    stat: "text-emerald-400",
    icon: "text-emerald-400",
  },
  yellow: {
    border: "border-yellow-300/30",
    glow: "rgba(196,255,0,0.08)",
    stat: "text-yellow-300",
    icon: "text-yellow-300",
  },
};
