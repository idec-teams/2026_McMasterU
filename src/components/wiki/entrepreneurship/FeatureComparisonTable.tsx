import { Check, Minus } from "lucide-react";

const FEATURE_ROWS = ["Feature 1", "Feature 2", "Feature 3", "Feature 4"];
const COMPETITOR_COLUMNS = [
  "Competitor 1",
  "Competitor 2",
  "Competitor 3",
  "Competitor 4",
];

// Placeholder comparison: MEYcell checks every row, competitors don't, until
// the real feature-by-feature comparison is written.
export function FeatureComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-b border-border px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Features
            </th>
            <th className="border-b border-primary/50 bg-primary/5 px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-primary">
              MEYcell
            </th>
            {COMPETITOR_COLUMNS.map((name) => (
              <th
                key={name}
                className="border-b border-border px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURE_ROWS.map((feature) => (
            <tr
              key={feature}
              className="border-b border-border/50 last:border-b-0"
            >
              <td className="px-4 py-4 text-body">{feature}</td>
              <td className="bg-primary/5 px-4 py-4 text-center">
                <Check className="mx-auto h-5 w-5 text-primary" />
              </td>
              {COMPETITOR_COLUMNS.map((name) => (
                <td key={name} className="px-4 py-4 text-center">
                  <Minus className="mx-auto h-5 w-5 text-muted-foreground/50" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
