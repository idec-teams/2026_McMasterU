import { WidgetCard } from "@/components/wiki/engineering/WidgetCard";
import type { EngineeringWidget } from "@/types/wiki";

// All four share the engineering banner image until each model gets its own
// background; WidgetCard falls back gracefully if `image` is ever removed.
const WIDGET_IMAGE = "/banners/engineering.png";

const WIDGETS: EngineeringWidget[] = [
  {
    id: "rnat-model",
    title: "RNAt Model",
    href: "/engineering/rnat-model",
    image: WIDGET_IMAGE,
  },
  {
    id: "kinetic-model",
    title: "Kinetic Model",
    href: "/engineering/kinetic-model",
    image: WIDGET_IMAGE,
  },
  {
    id: "ml-1",
    title: "ML1",
    href: "/engineering/ml-1",
    image: WIDGET_IMAGE,
  },
  {
    id: "ml-2",
    title: "ML2",
    href: "/engineering/ml-2",
    image: WIDGET_IMAGE,
  },
];

export function WidgetGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {WIDGETS.map((widget) => (
        <WidgetCard key={widget.id} widget={widget} />
      ))}
    </div>
  );
}
