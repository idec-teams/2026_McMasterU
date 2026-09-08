"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavLink } from "@/types/wiki";

// Desktop nav item with sub-pages. The parent stays a real link (Engineering is
// its own page), so the caret is a separate button rather than the whole item
// being a toggle.
//
// The header is transparent and sits over banner imagery, so the panel carries
// its own opaque-ish surface + blur + drop shadow. Without those it would be
// unreadable over a photo.
//
// Hover and keyboard focus are handled in CSS (`group-hover` /
// `group-focus-within`) so nothing runs on pointer movement; React state only
// covers the click/tap toggle, which touch devices need.
export function NavDropdown({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickAway = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickAway);
    };
  }, [open]);

  return (
    <div ref={ref} className="group relative">
      <div className="flex items-center gap-1.5">
        <Link
          href={link.href}
          className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase transition-colors duration-200 group-hover:text-foreground"
        >
          {link.label}
        </Link>
        <button
          type="button"
          aria-label={`${link.label} sub-pages`}
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((v) => !v)}
          className="text-muted-foreground transition-colors duration-200 group-hover:text-primary"
        >
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-200 group-hover:rotate-180 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* pt-2 is a hover bridge — it keeps the pointer inside the group while
          it travels from the label down into the panel. */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${
          open ? "block" : "hidden group-hover:block group-focus-within:block"
        }`}
      >
        <ul
          className="min-w-[12rem] border border-border bg-background/90 py-1.5 backdrop-blur-md"
          style={{ boxShadow: "0 16px 40px rgb(2 8 16 / 0.55)" }}
        >
          {link.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="block border-l-2 border-transparent px-4 py-2 font-mono text-[10px] tracking-widest whitespace-nowrap text-muted-foreground uppercase transition-colors duration-200 hover:border-primary hover:bg-primary/5 hover:text-foreground"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
