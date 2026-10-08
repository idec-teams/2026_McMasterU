"use client";

import { useState } from "react";

/**
 * A PDF that only loads once the reader asks for it.
 *
 * Embedding a PDF directly means the browser fetches it on page load, and
 * readers who have "Download PDFs instead of automatically opening them"
 * turned on get an unprompted download just for visiting the page. Holding the
 * iframe back behind a click avoids that, and saves everyone else the
 * multi-megabyte fetch they never asked for.
 */
export function PdfEmbed({
  src,
  title,
  /** Shown under the button, e.g. "3.8 MB". */
  note,
}: {
  src: string;
  title: string;
  note?: string;
}) {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <iframe
        src={src}
        title={title}
        className="h-[800px] w-full border border-border bg-card/80"
      />
    );
  }

  return (
    <div className="flex h-[260px] w-full flex-col items-center justify-center gap-3 border border-border bg-card/80">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="border border-primary/40 px-5 py-2 font-mono text-xs tracking-widest text-primary uppercase transition-colors hover:border-primary hover:bg-primary/10"
      >
        View {title}
      </button>
      {note ? (
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          {note}
        </span>
      ) : null}
    </div>
  );
}
