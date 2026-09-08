import type { ElementType, ReactNode } from "react";

export type ColorKey = "sky" | "rose" | "gold";

export type ProblemCardColors = {
  border: string;
  hover: string;
  stat: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type Problem = {
  title: string;
  stat: string;
  statLabel: string;
  body: string;
  color: ColorKey;
};

/** Per-step accent classes — literal strings so Tailwind can see them. */
export type StepTone = {
  icon: string;
  label: string;
  divider: string;
  /** CSS color for the oversized step numeral. */
  num: string;
};

export type Step = {
  num: string;
  title: string;
  icon: ElementType;
  body: string;
  tone: StepTone;
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

export type TeamMember = {
  /** Unique, stable key for this member (e.g. "jane-doe"). */
  id: string;
  name: string;
  /**
   * One entry per track, each rendered as a pill. Commas belong to the track
   * name ("Human Practices, Community Outreach"); separate tracks are separate
   * array entries. In _data.json a single "A | B" string is also accepted.
   */
  tracks: string[];
  program?: string;
  /** Year of study, e.g. "Year 3" or "MSc 1". */
  year?: string;
  /** Path to a photo in /public/team, e.g. "/team/Jane.JPG". */
  photo?: string;
  linkedin?: string;
  /** A fun fact about the team member. */
  funFact?: string;
};

export type WikiReference = {
  id: string;
  authors?: string;
  title: string;
  source?: string;
  year?: string | number;
  url?: string;
};

export type EngineeringWidget = {
  id: string;
  title: string;
  /** Route the widget links to, e.g. "/engineering/rnat-model". */
  href: string;
  /** Path to a background image in /public. Until set, the card falls back to a plain scrim. */
  image?: string;
};

export type SummaryPoint = {
  title: string;
  body: string;
};

export type WikiSectionProps = {
  id: string;
  title: string;
  /** Keep `title` as the section's id/TOC reference but don't render it visibly (e.g. a section with its own custom heading). */
  hideTitle?: boolean;
  children?: ReactNode;
};

export type TocItem = {
  id: string;
  title: string;
};
