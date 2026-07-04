import type { ElementType } from "react";

export type ColorKey = "blue" | "green" | "yellow";

export type ProblemCardColors = {
  border: string;
  glow: string;
  stat: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Problem = {
  icon: ElementType;
  title: string;
  stat: string;
  statLabel: string;
  body: string;
  color: ColorKey;
};

export type Step = {
  num: string;
  title: string;
  icon: ElementType;
  body: string;
};

export type ScienceFact = {
  icon: ElementType;
  label: string;
  value: string;
  color: string;
};

export type SolutionStat = {
  label: string;
  value: string;
  sub: string;
};

export type PathwayEntry = {
  op: string;
  name: string;
  nameTone: "accent" | "danger" | "success";
  comment: string;
};
