import type { ReactNode } from "react";
import {
  type StatColumn,
  StatColumns,
} from "@/components/wiki/entrepreneurship/StatColumns";
import { renderWithItalics } from "@/lib/wiki/text";

// Unlike SummaryPoint, `title` here is a ReactNode rather than a plain
// string — each hook line highlights a specific phrase in the accent color,
// which a plain string can't express.
export type ProblemHighlight = {
  title: ReactNode;
  body: string;
  columns?: StatColumn[];
};

// The Problem's 3-part teaser: each part is its own bordered box, split into
// a large hook statement on one side and its explanation on the other —
// flipping sides each box instead of settling into a static left/right
// pattern. The DOM always keeps hook-before-body so reading/tab order stays
// logical; only the visual side changes, via `md:order-*`. Both halves are
// vertically centered against each other (`md:self-center` on both), so a
// short hook and a longer paragraph still line up mid-box instead of the
// hook sitting flush with the top. An optional StatColumns row sits below,
// inside the same box, separated by a divider (`bordered={false}` so it
// doesn't draw its own nested box).
export function ProblemHighlights({ points }: { points: ProblemHighlight[] }) {
  return (
    <div className="flex flex-col gap-6">
      {points.map((point, index) => {
        const flipped = index % 2 === 1;
        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: static list, order never changes
            key={index}
            className="border border-border bg-card p-6 transition-colors duration-200 hover:border-accent md:p-8"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
              <p
                className={`font-display text-2xl leading-snug text-foreground md:self-center md:text-3xl ${
                  flipped ? "md:order-2" : "md:order-1"
                }`}
              >
                {point.title}
              </p>
              <p
                className={`text-sm leading-relaxed text-muted-foreground md:self-center ${
                  flipped ? "md:order-1" : "md:order-2"
                }`}
              >
                {renderWithItalics(point.body)}
              </p>
            </div>

            {point.columns ? (
              <div className="mt-8 border-t border-border pt-6">
                <StatColumns columns={point.columns} bordered={false} />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
