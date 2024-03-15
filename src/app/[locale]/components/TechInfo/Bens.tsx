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
      <div
        className="
          grid
          md:grid-cols-3
          gap-5
          lg:mb-[280px]
          md:mb-[120px]
          mb-[100px]
          min-[500px]:grid-cols-2
          min-[500px]:[&>*:nth-child(5)]:col-start-1
          min-[500px]:[&>*:nth-child(5)]:col-end-3  
          md:[&>*:nth-child(5)]:col-start-auto
          md:[&>*:nth-child(5)]:col-end-auto
        "
      >
        {TECH_INFO_BENS.map(({ title, description, image }, index) => {
          const isFullHeightRow = index === 1;
          return (
            <Ben
              key={title}
              {...{
                title,
                description,
                image,
                isFullHeightRow,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
