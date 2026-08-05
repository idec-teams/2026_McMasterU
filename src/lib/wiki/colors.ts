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
