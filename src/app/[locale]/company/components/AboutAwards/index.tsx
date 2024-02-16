import {
  ABOUT_AS_A_TIER,
  ABOUT_SYNONYMOUS,
} from "@/app/[locale]/company/constants";
import Awards from "@/app/[locale]/components/AwardsAndStats/Awards";
import Production from "@/app/[locale]/components/AwardsAndStats/Production";
import Stats from "@/app/[locale]/components/AwardsAndStats/Stats";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Image from "next/image";

export default async function AboutAwards() {
  return (
    <BasicWidthContainer styles="mx-auto z-30 relative -top-[64px]">
      <div
        className="
          flex
          flex-col
          md:gap-20
          lg:gap-14
          gap-10
          xl:mb-[280px]
          lg:mb-[180px]
          md:mb-[100px]
          mb-[80px]
          relative
          mt-[60px]
          py-[60px]
          bg-[linear-gradient(0deg,_rgb(0_0_0_/_50%),_rgb(0_0_0_/_50%)),_linear-gradient(0deg,_#19191947,_#19191947)]
          border
          border-solid
          border-[#191919]
          overflow-hidden
        "
      >
        <Image
          src="/images/awards/dividerSmall.svg"
          alt="dividerSmall"
          width={30}
          height={30}
          className="absolute top-0 -left-[1px]"
        />
        <div className="flex md:pt-10 md:pb-20 pt-0 pb-10 border-b border-solid border-[#191919] max-w-[1100px] self-center items-center px-5 gap-4 md:flex-row flex-col justify-center">
          <div className="font-semibold leading-[110%] [font-size:_clamp(26px,3.5vw,64px)] -tracking-[1.92px] max-w-[426px] w-full text-center">
            {ABOUT_AS_A_TIER}
          </div>
          <div className="font-medium leading-[150%] [font-size:_clamp(14px,1.5vw,24px)] font-walsheim max-w-[650px] text-center">
            {ABOUT_SYNONYMOUS}
          </div>
        </div>
        <Stats />
        <Awards />
        <Image
          src="/images/awards/dividerBig.svg"
          alt="dividerBig"
          width={300}
          height={300}
          className="absolute bottom-0 -right-[1px] pointer-events-none z-0"
        />
      </div>
    </BasicWidthContainer>
  );
}
