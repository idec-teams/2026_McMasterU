import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Jumps from a section teaser on a landing page to the matching section on
// its details page. `href` should already include the target's `#id` anchor.
export function ReadMoreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary transition-colors hover:text-foreground"
    >
      Read More
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
