import { WidgetCard } from "@/components/wiki/engineering/WidgetCard";
import type { EngineeringWidget } from "@/types/wiki";

// Background images aren't ready yet — add `image: "/engineering/<file>"`
// to a widget once one exists; WidgetCard falls back gracefully until then.
const WIDGETS: EngineeringWidget[] = [
  { id: "rnat-model", title: "RNAt Model", href: "/engineering/rnat-model" },
  { id: "ml-1", title: "ML1", href: "/engineering/ml-1" },
  { id: "ml-2", title: "ML2", href: "/engineering/ml-2" },
  {
    id: "kinetic-model",
    title: "Kinetic Model",
    href: "/engineering/kinetic-model",
  },
  {
    id: "financial-model",
    title: "Financial Model",
    href: "/engineering/financial-model",
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
