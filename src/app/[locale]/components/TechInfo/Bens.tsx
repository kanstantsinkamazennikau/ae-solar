import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import Ben from "@/app/[locale]/components/TechInfo/Ben";
import {
  TECH_INFO_BENS,
  TECH_INFO_BEST_AT_THIS,
  TECH_INFO_WHY_WE_ARE,
} from "@/app/[locale]/utils/constants";

export default function Bens() {
  return (
    <>
      <TwoTierHeading
        tierOneHeading={TECH_INFO_WHY_WE_ARE}
        tierTwoHeading={TECH_INFO_BEST_AT_THIS}
        align="left"
      />
      <div className="grid grid-cols-3 gap-5 mb-[200px]">
        {TECH_INFO_BENS.map(({ title, description, image }, index) => {
          const isFullHeightRow = index === 1;
          return (
            <Ben
              key={title}
              {...{ title, description, image, isFullHeightRow }}
            />
          );
        })}
      </div>
    </>
  );
}
