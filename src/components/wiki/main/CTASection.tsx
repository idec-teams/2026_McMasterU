import Link from "next/link";
import { NAV_LINKS } from "@/lib/wiki/nav";

const CTA_LINKS = NAV_LINKS.filter((link) => link.href !== "/");

export function CTASection() {
  return (
    <section className="py-20 bg-deep border-t border-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
          Ready to dig deeper?
        </div>
        <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-8 max-w-2xl mx-auto">
          Explore our full documentation, team, and lab notebook.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {CTA_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase border border-border text-muted-foreground px-5 py-3 hover:text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
