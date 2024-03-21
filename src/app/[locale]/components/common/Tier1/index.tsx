import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { Tier1Props } from "@/app/[locale]/components/common/Tier1/types";

export default function Tier1({
  descriptionText,
  descriptionTextHighlight,
  tier1Text,
  externalStyle,
}: Tier1Props) {
  return (
    <BasicWidthContainer styles="mx-auto z-30 relative">
      <div
        className={`
          ${externalStyle}
          flex
          md:flex-row
          flex-col
          justify-between
          md:items-center
          border-t
          border-solid
          border-[#191919]
          max-w-[1100px]
          xl:mb-[180px]
          lg:mb-[140px]
          md:mb-[100px]
          mb-[80px]
          py-20
          w-full
          mx-auto
          gap-4
        `}
      >
        <div
          className="
            font-semibold
            leading-[110%]
            [font-size:_clamp(36px,3.5vw,64px)]
            -tracking-[1.92px]
            max-w-[426px]
            w-full
            max-md:text-left
          "
        >
          {tier1Text}
        </div>
        <div
          className="
            font-normal
            leading-[150%]
            [font-size:_clamp(16px,1.5vw,24px)]
            font-walsheim
            max-w-[600px]
            max-md:text-left
            text-dark-gray-900
          "
        >
          {descriptionText}
        </div>
      </div>
    </BasicWidthContainer>
  );
}
