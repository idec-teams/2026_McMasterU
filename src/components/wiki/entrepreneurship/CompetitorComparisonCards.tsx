import type { LucideIcon } from "lucide-react";
import { Dna, Package, Target, TrendingUp } from "lucide-react";

type Feature = { icon: LucideIcon; label: string };

// Shared across every company column, in display order, so all 3 boxes
// compare the same 4 rows.
const FEATURES: Feature[] = [
  { icon: Dna, label: "Source" },
  { icon: Package, label: "Product Type" },
  { icon: TrendingUp, label: "Scalability" },
  { icon: Target, label: "Market Position" },
];

type CompanyColumn = {
  name: string;
  /** MEYcell's own column — keeps the site's dark card with a green border/title/icons. Unset for the two competitor columns, which instead get a light-green card with dark blue text/icons. */
  highlight?: boolean;
  /** One value per FEATURES entry, same order. */
  values: string[];
};

const COMPANIES: CompanyColumn[] = [
  {
    name: "Aleph Farms",
    values: [
      "Animal Cells",
      "Whole Cuts",
      "High Cost (Improving)",
      "Premium Dining",
    ],
  },
  {
    name: "Beyond Meat",
    values: [
      "Plant Proteins",
      "Texture Engineering",
      "Retail Focus",
      "Mainstream Retail",
    ],
  },
  {
    name: "MEYcell",
    highlight: true,
    values: [
      "Engineered Yeast",
      "Heat-Triggered Lipid Release",
      "Ingredient Platform",
      "Functional Ingredient for Next-Generation Protein",
    ],
  },
];

// Side-by-side competitor comparison: one bordered box per company, each
// listing the same 4 features (icon in a circle, label, value) in the same
// order so the three columns compare directly. Every row keeps its circle
// flush against the same left edge (`items-center` only, no `justify-center`
// on the row itself) so the circles form a constant column regardless of
// value length; the label/value text then fills the remaining width and is
// centered within that space (`flex-1 text-center`), rather than the whole
// icon+text group centering as one unit and shifting the circle around row
// to row. The row stays a horizontally
// scrollable flex row rather than a grid that stacks to 1-per-row on
// narrow screens — the whole point is comparing the 3 companies at a
// glance, which breaks once they're stacked full-width instead of
// side-by-side. MEYcell's box keeps the site's usual dark card with a green
// border/title/icons. The two competitor boxes instead get a light-green
// fill (the same emerald used for MEYcell's green, just a light tint) with
// a neutral border, and their text/icons use `text-card` — the exact navy
// of MEYcell's own card background — for contrast, rather than an
// unrelated blue. A deliberate exception to the site's otherwise dark
// palette, same idea as MarketOpportunityCircles' TAM/SAM/SOM colors, so
// these two read as distinct reference cards next to MEYcell's. They
// deliberately have no hover treatment — unlike most bordered boxes
// elsewhere on the site, these are reference points, not interactive cards.
export function CompetitorComparisonCards() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-2">
      {COMPANIES.map((company) => (
        <div
          key={company.name}
          className={`min-w-[15rem] flex-1 border p-6 ${
            company.highlight
              ? "border-emerald-400 bg-card"
              : "border-border bg-emerald-100"
          }`}
        >
          <h3
            className={`font-display text-lg mb-5 text-center ${
              company.highlight ? "text-emerald-400" : "text-card"
            }`}
          >
            {company.name}
          </h3>

          <div className="flex flex-col gap-5">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      company.highlight
                        ? "border-emerald-400"
                        : "border-card/40"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        company.highlight ? "text-emerald-400" : "text-card"
                      }`}
                    />
                  </span>
                  <div className="flex-1 text-center">
                    <div
                      className={`font-mono text-[10px] uppercase tracking-widest ${
                        company.highlight
                          ? "text-muted-foreground"
                          : "text-card/70"
                      }`}
                    >
                      {feature.label}
                    </div>
                    <div
                      className={`text-sm leading-snug ${
                        company.highlight ? "text-body" : "text-card"
                      }`}
                    >
                      {company.values[index]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
