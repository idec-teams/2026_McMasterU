import { Banner } from "@/components/wiki/Banner";
import { WidgetGrid } from "@/components/wiki/engineering/WidgetGrid";

export const metadata = {
  title: "Engineering — MEYcell",
};

export default function EngineeringPage() {
  return (
    <>
      <Banner title="Engineering">
        <p>The design–build–test–learn iterations behind the MEYcell strain.</p>
      </Banner>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <WidgetGrid />
      </section>
    </>
  );
}
