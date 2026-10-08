import { ArrowDown } from "lucide-react";
import { ScrollLink } from "@/components/ui/ScrollLink";

/**
 * The "next section" link used down the home page: plain white text that
 * brightens and glows on hover, with an eased glide to the section `to` points
 * at. `className` is for positioning only.
 */
export function ScrollCue({
  to,
  label = "Next",
  className = "",
}: {
  /** id of the section to scroll to, without the "#". */
  to: string;
  label?: string;
  className?: string;
}) {
  return (
    <ScrollLink
      to={to}
      className={`group inline-flex items-center gap-3 font-mono text-xs tracking-widest text-foreground/85 uppercase transition-[color,text-shadow] duration-300 hover:text-foreground hover:[text-shadow:0_0_14px_rgb(216_238_248/0.7)] ${className}`}
    >
      {label}
      <ArrowDown
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transition-none"
      />
    </ScrollLink>
  );
}
