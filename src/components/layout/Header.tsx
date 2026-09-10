"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { NAV_LINKS } from "@/lib/wiki/nav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // href of the collapsed-menu item whose sub-pages are pinned open by tapping
  // its caret. Hover also reveals them, but touch devices have no hover.
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* <div className="w-8 h-8 flex items-center justify-center bg-primary">
            <FlaskConical className="w-4 h-4 text-primary-foreground" />
          </div> */}
          <div className="leading-tight">
            <span className="font-display text-sm font-bold tracking-widest text-foreground">
              McMasterU
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.children?.length ? (
              <NavDropdown key={link.href} link={link} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="group flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <Link
                  href={link.href}
                  className="font-mono text-xs tracking-widest uppercase text-muted-foreground group-hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>

                {link.children?.length ? (
                  <button
                    type="button"
                    aria-label={`${link.label} sub-pages`}
                    aria-expanded={openSub === link.href}
                    onClick={() =>
                      setOpenSub((v) => (v === link.href ? null : link.href))
                    }
                    className="text-muted-foreground transition-colors duration-200 group-hover:text-primary"
                  >
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                        openSub === link.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : null}
              </div>

              {/* Revealed on parent hover, or pinned open by tapping the caret. */}
              {link.children?.length ? (
                <div
                  className={`flex-col gap-3 border-l border-border pl-4 group-hover:flex group-focus-within:flex ${
                    openSub === link.href ? "flex" : "hidden"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="font-mono text-[10px] tracking-widest uppercase text-dim hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
