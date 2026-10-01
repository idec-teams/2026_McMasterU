// On GitHub Pages the site lives under a sub-path (/<repo>/), set at build
// time through NEXT_PUBLIC_BASE_PATH (see next.config.ts). Next.js applies it
// to <Link>s and its own bundles automatically, but NOT to src strings on
// images or video — "/team/Efe.JPG" would 404 on the live site while working
// fine locally.
//
// The shared components (Banner, MemberCard, ModelFigure, WidgetCard,
// InitiativesCarousel, PromoVideoSection) already run their src through this,
// so callers pass plain "/banners/x.png" paths. Only a raw <Image>/<img>/<video>
// written directly in a page needs to call it:
//
//   <Image src={asset("/figures/PCR.png")} ... />
//
// `pnpm deploy:pages` scans the build and refuses to publish if anything was
// missed.

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  // Leave remote URLs alone, and don't prefix twice if a caller already did.
  if (!path.startsWith("/") || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
