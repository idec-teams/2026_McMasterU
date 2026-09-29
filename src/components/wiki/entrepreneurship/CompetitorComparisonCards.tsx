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
  /** MEYcell's own column — its title and icons render green to set it apart; everything else stays standard. */
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
// order so the three columns compare directly. Every row is centered as a
// unit (icon + text) rather than left-aligned, so short values don't leave
// a lopsided gap on one side of the box. The row stays a horizontally
// scrollable flex row rather than a grid that stacks to 1-per-row on
// narrow screens — the whole point is comparing the 3 companies at a
// glance, which breaks once they're stacked full-width instead of
// side-by-side. MEYcell's box border, title, and icons are green; its
// label/value text stays the same standard color as the other two boxes.
// The two competitor boxes deliberately have no hover treatment — unlike
// most bordered boxes elsewhere on the site, these are reference points,
// not interactive cards.
export function CompetitorComparisonCards() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-2">
      {COMPANIES.map((company) => (
        <div
          key={company.name}
          className={`min-w-[15rem] flex-1 border bg-card p-6 ${
            company.highlight ? "border-emerald-400" : "border-border"
          }`}
        >
          <h3
            className={`font-display text-lg mb-5 text-center ${
              company.highlight ? "text-emerald-400" : "text-foreground"
            }`}
          >
            {company.name}
          </h3>

          <div className="flex flex-col gap-5">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="flex items-center justify-center gap-3 text-center"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      company.highlight ? "border-emerald-400" : "border-border"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        company.highlight ? "text-emerald-400" : "text-accent"
                      }`}
                    />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {feature.label}
                    </div>
                    <div className="text-sm leading-snug text-body">
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
