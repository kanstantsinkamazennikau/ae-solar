import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Bens from "@/app/[locale]/components/TechInfo/Bens";
import Divider from "@/app/[locale]/components/TechInfo/Divider";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";
import Tech from "@/app/[locale]/components/TechInfo/Tech";

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
