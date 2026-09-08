import Image from "next/image";
import Link from "next/link";
import { CountUpStat } from "@/components/ui/CountUpStat";

// Swap in the real Co-operathon photo once it exists (e.g.
// "/entrepreneurship/cooperathon.jpg") — until then the tinted panel below
// stands in as the background, same fallback used by Banner and WidgetCard.
const COOPERATHON_IMAGE: string | undefined = undefined;

type AwardStat = { amount: number; label: string; body: string };

const AWARD_STATS: AwardStat[] = [
  {
    amount: 10000,
    label: "Planet Award",
    body: "Recognizing solutions advancing sustainability and climate resilience.",
  },
  {
    amount: 40000,
    label: "Grand Prix",
    body: "Awarded to the project with the greatest social, environmental, or economic impact potential.",
  },
];

// Photo-and-stats highlight for the Cooperathon section: a photo on one
// side, a count-up total plus the two award breakdowns on the other. The
// section's own "Cooperathon" heading is kept (via WikiSection's hideTitle)
// as the id/TOC reference but isn't shown — this panel is the visible
// heading instead.
export function CooperathonSection({ readMoreHref }: { readMoreHref: string }) {
  return (
    <div className="grid overflow-hidden border border-border bg-section md:grid-cols-2">
      <div className="relative min-h-[16rem] overflow-hidden bg-card">
        {COOPERATHON_IMAGE ? (
          <Image
            src={COOPERATHON_IMAGE}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover grayscale-[0.35]"
          />
        ) : null}
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      <div className="flex flex-col gap-6 px-8 py-10">
        <div>
          <CountUpStat
            target={50000}
            prefix="$"
            className="font-display text-6xl text-foreground md:text-7xl"
          />
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            total funding awarded
          </p>
        </div>

        <p className="text-sm leading-relaxed text-body">
          Out of 1170+ participants and 180+ teams across Canada, MEYcell was
          one of just 8 winning projects at the Desjardins Cooperathon.
        </p>

        <div className="grid grid-cols-2 gap-6 border-t border-border pt-6">
          {AWARD_STATS.map((stat) => (
            <div key={stat.label}>
              <CountUpStat
                target={stat.amount}
                prefix="$"
                className="font-display text-2xl text-foreground"
              />
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                {stat.label}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-body">
                {stat.body}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={readMoreHref}
          className="mt-2 border border-primary bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-primary-foreground transition-colors hover:bg-transparent hover:text-primary"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
