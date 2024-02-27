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
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";

export default async function AboutTier1() {
  return (
    // <div className="flex flex-col items-center justify-center w-full">
    <BasicWidthContainer styles="mx-auto z-30 relative">
      <div
        className="
          flex
          md:flex-row
          flex-col
          justify-between
          items-center
          border-t
          border-solid
          border-[#191919]
          max-w-[1100px]
          xl:mb-[180px]
          lg:mb-[140px]
          md:mb-[100px]
          py-20
          mb-[80px]
          w-full
          mx-auto
          gap-4
        "
      >
        <div
          className="
            font-semibold
            leading-[110%]
            [font-size:_clamp(36px,3.5vw,64px)]
            -tracking-[1.92px]
            max-w-[426px]
            w-full
            max-md:text-center
          "
        >
          {styleMatchingText(
            ABOUT_AS_A_TIER,
            [ABOUT_AS_A_TIER_HIGHLIGHT],
            "",
            "text-[#038DF4]"
          )}
        </div>
        <div
          className="
              font-normal
              leading-[150%]
              [font-size:_clamp(16px,1.5vw,24px)]
              font-walsheim
              max-w-[650px]
              max-md:text-center
            "
        >
          {styleMatchingText(
            ABOUT_SYNONYMOUS,
            ABOUT_SYNONYMOUS_HIGHLIGHT,
            "text-dark-gray-900",
            "text-white"
          )}
        </div>
      </div>
    </BasicWidthContainer>
    // </div>
  );
}
