import { renderModelText } from "@/lib/wiki/text";
import type { WikiReference } from "@/types/wiki";

// A data table within a model write-up (e.g. kinetic parameters), with its
// caption set above — the convention for tables and figures on model pages.
export function ModelTable({
  caption,
  headers,
  rows,
  references,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  references: WikiReference[];
}) {
  return (
    <figure>
      <figcaption className="mb-3 text-left text-sm leading-relaxed text-muted-foreground">
        {renderModelText(caption, references)}
      </figcaption>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-border px-4 py-3 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                // biome-ignore lint/suspicious/noArrayIndexKey: rows are static, first-column values can repeat
                key={rowIndex}
                className="border-b border-border/50 last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    // biome-ignore lint/suspicious/noArrayIndexKey: cells are positional and never reordered
                    key={cellIndex}
                    className="px-4 py-3 align-top text-body"
                  >
                    {renderModelText(cell, references)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
