import { SectionCue } from "@/components/ui/SectionCue";
import { BioreactorScene } from "@/components/wiki/main/blueprint/BioreactorScene";

// Gold and green rays fanning out from the vessel, which sits in the left
// column. The mask keeps them clear of the vessel itself and fades them to
// nothing well before the section's edges.
const FOCUS = "20% 50%";
// A wide ellipse, so the rays carry across the text column before they go.
const FADE = `radial-gradient(ellipse 95% 72% at ${FOCUS}, transparent 6%, black 26%, transparent 88%)`;
const RAYS = {
  // Gold and green meet edge to edge, so the page background never shows
  // through as a third stripe.
  backgroundImage: `repeating-conic-gradient(from 0deg at ${FOCUS},
    rgb(var(--gold-rgb) / 0.13) 0deg 7deg,
    rgb(var(--teal-rgb) / 0.13) 7deg 14deg)`,
  maskImage: FADE,
  WebkitMaskImage: FADE,
};

// One screen: the bioreactor on the left, text on the right.
export function BioreactorSection() {
  return (
    <section
      id="bioreactor"
      className="relative flex min-h-svh items-center overflow-hidden bg-raised py-16"
    >
      <div className="pointer-events-none absolute inset-0" style={RAYS} />

      <div className="relative mx-auto flex w-full max-w-7xl items-center gap-16 px-6">
        {/* Sized to hug the vessel, so it sits flush in the left column. Grows
            with the window up to a cap, so it doesn't dominate a big screen. */}
        <div className="relative aspect-[7/10] h-[78svh] max-h-[480px] shrink-0">
          <BioreactorScene />
        </div>
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-foreground/85">
            MEYcell is a precision fermentation platform built around an
            engineered yeast strain that overproduces and stores lipids. We grow
            this yeast at scale in bioreactors and preserve it as a gel that
            manufacturers can easily incorporate into their existing
            formulations, like burgers and cuts, with no barriers to their
            production line.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            As the alternative meat cooks, high heat activates the RNA
            thermometer that we engineered into the cells. That causes the cells
            to burst, releasing lipids right into the meat, mimicking marbled
            animal fat and delivering juiciness in every single bite.
          </p>
        </div>
      </div>

      <SectionCue to="procedures" />
    </section>
  );
}
