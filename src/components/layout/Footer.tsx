import Link from "next/link";

const FOOTER_PROJECT_LINKS = [
  "Project",
  "Engineering",
  "Documentation",
  "Entrepreneurship",
];
const FOOTER_TEAM_LINKS = ["Team", "Community"];

export function Footer() {
  return (
    <footer className="bg-footer border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="font-display text-2xl mb-3">
              <span className="text-primary">MEY</span>
              <span className="text-accent">cell</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              McMaster University IDEC 2026. Engineering yeast to solve the fat
              problem in alternative protein — and put flavor back into
              sustainable food.
            </p>
          </div>

          <FooterLinks title="Project" items={FOOTER_PROJECT_LINKS} />
          <FooterLinks title="Team" items={FOOTER_TEAM_LINKS} />
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="font-mono text-[10px] text-muted-foreground/60">
            © 2026 McMaster University IDEC Team. All rights reserved.
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/35">
            MEYcell — S. cerevisiae MEY-26 — IDEC Foundation
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  items,
  hrefFor = (label) => `/${label.toLowerCase()}`,
}: {
  title: string;
  items: string[];
  hrefFor?: (label: string) => string;
}) {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground mb-4">
        {title}
      </div>
      <div className="flex flex-col gap-2.5">
        {items.map((link) => (
          <Link
            key={link}
            href={hrefFor(link)}
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
