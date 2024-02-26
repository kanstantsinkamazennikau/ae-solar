import GetInTouch from "@/app/[locale]/components/GetInTouch";
import { MainPageFAQ } from "@/app/[locale]/components/MainPageFAQ";
import Loader from "@/app/[locale]/components/common/Loader";
import Benefits from "@/app/[locale]/products/[id]/components/Benefits";
import Conclusion from "@/app/[locale]/products/[id]/components/Conclusion";
import Customization from "@/app/[locale]/products/[id]/components/Customization";
import Introduction from "@/app/[locale]/products/[id]/components/Introduction";
import VideoIntroduction from "@/app/[locale]/products/[id]/components/VideoIntroduction";
import PanelTechnology from "@/app/[locale]/products/[id]/components/PanelTechnology";
import ProductsPanel from "@/app/[locale]/products/[id]/components/ProductsPanel";
import { ProductPageProps } from "@/app/[locale]/products/[id]/types";

export default async function Page({ params: { id } }: ProductPageProps) {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <ProductsPanel id={id} />
      <PanelTechnology id={id} />
      {/* <Introduction id={id} /> */}
      <VideoIntroduction id={id} />
      <Benefits id={id} />
      <Customization />
      <Conclusion id={id} />
      <div className="min-[560px]:mb-0 -mb-20 w-full">
        <GetInTouch />
      </div>
      <MainPageFAQ />
    </div>
  );
}
