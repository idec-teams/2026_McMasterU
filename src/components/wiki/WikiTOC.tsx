"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/types/wiki";

// Distance below the fixed header where a section counts as "current".
const ACTIVE_OFFSET = 120;

// On-page table of contents with scrollspy. Client-only because it tracks the
// reading position to highlight the active entry as the reader scrolls.
export function WikiTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // The active section is the last one whose top has scrolled past the
      // offset line — robust for both short and long sections.
      let current = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top - ACTIVE_OFFSET <= 0) {
          current = item.id;
        }
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <div className="sticky top-28">
        <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground/60 mb-4">
          On this page
        </div>
        <ul className="flex flex-col border-l border-border">
          {items.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`-ml-px block border-l pl-4 py-1 font-mono text-[11px] tracking-wide transition-colors ${
                    active
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
