import Benefits from "@/app/[locale]/products/[id]/components/Benefits";
import Introduction from "@/app/[locale]/products/[id]/components/Introduction";
import PanelTechnology from "@/app/[locale]/products/[id]/components/PanelTechnology";
import ProductsPanel from "@/app/[locale]/products/[id]/components/ProductsPanel";
import { ProductPageProps } from "@/app/[locale]/products/[id]/types";

export default function ProductPage({ params: { id } }: ProductPageProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <ProductsPanel id={id} />
      <PanelTechnology />
      <Introduction id={id} />
      <Benefits id={id} />
    </div>
  );
}
