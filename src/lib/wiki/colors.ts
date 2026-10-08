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
  entrepreneurship: {
    border: "border-indigo-400",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
  },
  "community-outreach": {
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
