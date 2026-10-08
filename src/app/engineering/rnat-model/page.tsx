import { ModelPage } from "@/components/wiki/engineering/ModelPage";
import { content } from "./content";

export const metadata = {
  title: "RNAt Model",
};

export default function RNAtModelPage() {
  return (
    <ModelPage
      title="RNAt Model"
      src="/banners/rnat.jpg"
      content={content}
    />
  );
}
