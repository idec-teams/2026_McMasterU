import type { LucideIcon } from "lucide-react";
import {
  type StatColumn,
  StatColumns,
} from "@/components/wiki/entrepreneurship/StatColumns";

export type IconLabel = { icon: LucideIcon; label: string };

export type ProblemPanelsData = {
  panel1: { heading: string; body: string; columns: IconLabel[] };
  panel2: {
    heading: string;
    body: string;
    subheading: string;
    bubbles: IconLabel[];
  };
  panel3: {
    heading: string;
    body: string;
    subheading: string;
    stats: StatColumn[];
  };
};

// Shared "big centered statement, then explanatory body directly below it"
// intro used by all 3 panels.
function PanelIntro({ heading, body }: { heading: string; body: string }) {
  return (
    <>
      <h3 className="max-w-2xl font-display text-2xl text-foreground md:text-3xl">
        {heading}
      </h3>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        {body}
      </p>
    </>
  );
}

// The Problem's 3-part teaser. Previously 3 bordered boxes with a uniform
// alternating layout; now plain, un-boxed content, and each panel has its
// own distinct shape instead of sharing one generic structure — a 2x2
// icon/label matrix, a horizontal row of icon bubbles, and a stat box —
// so this component just hardcodes each rather than looping over
// interchangeable data.
export function ProblemPanels({ data }: { data: ProblemPanelsData }) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <PanelIntro heading={data.panel1.heading} body={data.panel1.body} />

        {/* 2x2 matrix, no visible grid lines — icon on the left of each
            cell, label close beside it (a small fixed `gap-3`, rather than
            the icon and label sitting in two equal-width halves, which left
            a wide gap whenever the label was shorter than its half). */}
        <div className="grid w-full max-w-2xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          {data.panel1.columns.map((column) => {
            const Icon = column.icon;
            return (
              <div
                key={column.label}
                className="grid grid-cols-[auto_1fr] items-center gap-3"
              >
                <Icon className="h-7 w-7 text-accent" />
                <p className="text-center text-base text-body">
                  {column.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <PanelIntro heading={data.panel2.heading} body={data.panel2.body} />
        <p className="font-display text-lg text-foreground">
          {data.panel2.subheading}
        </p>

        <div className="flex flex-wrap items-start justify-center gap-8">
          {data.panel2.bubbles.map((bubble) => {
            const Icon = bubble.icon;
            return (
              <div
                key={bubble.label}
                className="flex flex-col items-center gap-2"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </span>
                <p className="text-base text-body">{bubble.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        <PanelIntro heading={data.panel3.heading} body={data.panel3.body} />
        <p className="font-display text-lg text-foreground">
          {data.panel3.subheading}
        </p>
        <StatColumns columns={data.panel3.stats} />
      </div>
    </div>
  );
}
