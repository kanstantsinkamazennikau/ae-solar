import {
  ABOUT_AS_A_TIER,
  ABOUT_AS_A_TIER_HIGHLIGHT,
  ABOUT_SYNONYMOUS,
  ABOUT_SYNONYMOUS_HIGHLIGHT,
} from "@/app/[locale]/company/constants";
import Awards from "@/app/[locale]/components/AwardsAndStats/Awards";
import Production from "@/app/[locale]/components/AwardsAndStats/Production";
import Stats from "@/app/[locale]/components/AwardsAndStats/Stats";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { Tier1Props } from "@/app/[locale]/components/common/Tier1/types";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";

export default function Tier1({
  tier1TextStyle = "text-[#038DF4]",
  descriptionText,
  descriptionTextHighlight,
  tier1Text,
  tier1TextHighlight,
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
          {styleMatchingText(tier1Text, tier1TextHighlight, "", tier1TextStyle)}
        </div>
        <div
          className="
              font-normal
              leading-[150%]
              [font-size:_clamp(16px,1.5vw,24px)]
              font-walsheim
              max-w-[650px]
              max-md:text-left
            "
        >
          {styleMatchingText(
            descriptionText,
            descriptionTextHighlight,
            "text-dark-gray-900",
            "text-white"
          )}
        </div>
      </div>
    </BasicWidthContainer>
  );
}
