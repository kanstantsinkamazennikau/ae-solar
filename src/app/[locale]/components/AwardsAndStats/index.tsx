import Awards from "@/app/[locale]/components/AwardsAndStats/Awards";
import Production from "@/app/[locale]/components/AwardsAndStats/Production";
import Stats from "@/app/[locale]/components/AwardsAndStats/Stats";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";

export default async function AwardsAndStats() {
  return (
    <BasicWidthContainer>
      <div className="flex flex-col md:gap-20 lg:gap-14 gap-10 xl:mb-[280px] lg:mb-[180px] md:mb-[100px] mb-[80px]">
        <Stats />
        <Production />
        <Awards />
      </div>
    </BasicWidthContainer>
  );
}
