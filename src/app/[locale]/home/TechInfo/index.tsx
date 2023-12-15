import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Bens from "@/app/[locale]/home/TechInfo/Bens";
import Tech from "@/app/[locale]/home/TechInfo/Tech";

export default function TechDescription() {
  return (
    <BasicWidthContainer>
      <Tech />
      <Bens />
    </BasicWidthContainer>
  );
}
