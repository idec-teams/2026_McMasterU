// ───────────────────────────────────────────────────────────────────────────
//  Promo video — this is the ONLY line you need to change.
//  Point it at a file in /public (e.g. "/promo.mp4") or any hosted video URL.
//  Leave it as "" to show the placeholder frame.
const VIDEO_SRC = "";
//  Optional poster frame shown before playback (also served from /public).
const VIDEO_POSTER = "";
// ───────────────────────────────────────────────────────────────────────────

export function PromoVideoSection() {
  return (
    <section id="promo" className="pt-16 pb-28 bg-raised">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display mb-12 text-4xl text-foreground lg:text-5xl">
          Promotion video
        </h2>

        <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden border border-border bg-card">
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
            <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Video — coming soon
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
