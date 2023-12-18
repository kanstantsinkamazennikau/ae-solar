import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Bens from "@/app/[locale]/home/TechInfo/Bens";
import Divider from "@/app/[locale]/home/TechInfo/Divider";
import FeaturedProducts from "@/app/[locale]/home/TechInfo/FeaturedProducts";
import Tech from "@/app/[locale]/home/TechInfo/Tech";

export default function TechDescription() {
  return (
    <BasicWidthContainer>
      <Bens />
      <Divider />
      <Tech />
      <FeaturedProducts />
    </BasicWidthContainer>
  );
}
