import Benefits from "@/app/[locale]/products/[id]/components/Benefits";
import Conclusion from "@/app/[locale]/products/[id]/components/Conclusion";
import Customization from "@/app/[locale]/products/[id]/components/Customization";
import PanelTechnology from "@/app/[locale]/products/[id]/components/PanelTechnology";
import ProductsPanel from "@/app/[locale]/products/[id]/components/ProductsPanel";
import VideoIntroduction from "@/app/[locale]/products/[id]/components/VideoIntroduction";
import { ProductPageProps } from "@/app/[locale]/products/[id]/types";

export default async function Page({ params: { id } }: ProductPageProps) {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <ProductsPanel id={id} />
      <PanelTechnology id={id} />
      <VideoIntroduction id={id} />
      <Benefits id={id} />
      <Customization id={id} />
      <Conclusion id={id} />
    </div>
  );
}
