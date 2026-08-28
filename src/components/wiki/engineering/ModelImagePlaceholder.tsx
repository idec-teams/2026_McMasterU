import { Image as ImageIcon } from "lucide-react";

// Stand-in for a figure that hasn't been produced yet. Once an image exists,
// replace the usage site with a real <Image> (see WidgetCard for the pattern).
export function ModelImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 border border-dashed border-border bg-section text-muted-foreground">
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
      <span className="font-mono text-[10px] uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
