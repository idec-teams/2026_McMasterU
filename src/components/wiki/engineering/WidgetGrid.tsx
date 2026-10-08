import { WidgetCard } from "@/components/wiki/engineering/WidgetCard";
import type { EngineeringWidget } from "@/types/wiki";

// Each model carries its own background; WidgetCard falls back gracefully if
// `image` is ever removed.
const WIDGETS: EngineeringWidget[] = [
  {
    id: "rnat-model",
    title: "RNAt Model",
    href: "/engineering/rnat-model",
    image: "/engineering/card-rnat.jpg",
  },
  {
    id: "kinetic-model",
    title: "Kinetic Model",
    href: "/engineering/kinetic-model",
    image: "/engineering/card-kinetic.jpg",
  },
  {
    id: "ml-1",
    title: "ML1 - ThermoRank",
    href: "/engineering/ml-1",
    image: "/engineering/card-ml1.jpg",
  },
  {
    id: "ml-2",
    title: "ML2 - ThermoCast",
    href: "/engineering/ml-2",
    image: "/engineering/card-ml2.jpg",
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
