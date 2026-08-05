import { PlayCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

// ───────────────────────────────────────────────────────────────────────────
//  Promo video — this is the ONLY line you need to change.
//  Point it at a file in /public (e.g. "/promo.mp4") or any hosted video URL.
//  Leave it as "" to show the styled placeholder.
const VIDEO_SRC = "";
//  Optional poster frame shown before playback (also served from /public).
const VIDEO_POSTER = "";
// ───────────────────────────────────────────────────────────────────────────

export function PromoVideoSection() {
  return (
    <section id="promo" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <SectionEyebrow tone="brand">Watch</SectionEyebrow>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground">
            See MEYcell in action
          </h2>
          <p className="mt-4 text-sm text-body leading-relaxed">
            A short look at the strain, the science, and the team behind it.
          </p>
        </div>

        <div
          className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden border border-primary/15 bg-card"
          style={{ boxShadow: "0 0 60px rgb(var(--teal-rgb) / 0.06)" }}
        >
          {VIDEO_SRC ? (
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              poster={VIDEO_POSTER || undefined}
              src={VIDEO_SRC}
            >
              <track kind="captions" />
            </video>
          ) : (
            <VideoPlaceholder />
          )}
        </div>
      </div>
    </section>
  );
}

function VideoPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
      <PlayCircle className="w-16 h-16 text-primary/70" strokeWidth={1} />
      <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
        Promo video coming soon
      </div>
    </div>
  );
}
