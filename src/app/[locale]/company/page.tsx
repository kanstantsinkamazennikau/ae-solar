import Tier1 from "@/app/[locale]/components/common/Tier1";
import BornInGermany from "@/app/[locale]/company/components/BornInGermany";
import HeroSection from "@/app/[locale]/company/components/HeroSection";
import OurHistory from "@/app/[locale]/company/components/OurHistory";
import PortfolioBackground from "@/app/[locale]/company/components/PortfolioBackground";
import SequenceAnimation2 from "@/app/[locale]/company/components/SequenceAnimation2";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import { MainPageFAQ } from "@/app/[locale]/components/MainPageFAQ";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import GlobalImpact from "@/app/[locale]/solutions/components/GlobalImpact";
import JoinOurMission from "@/app/[locale]/solutions/components/JoinOurMission";
import {
  ABOUT_AS_A_TIER,
  ABOUT_AS_A_TIER_HIGHLIGHT,
  ABOUT_SYNONYMOUS,
  ABOUT_SYNONYMOUS_HIGHLIGHT,
} from "@/app/[locale]/company/constants";

export default function About() {
  return (
    <>
      <HeroSection />
      <BornInGermany />
      <Tier1
        tier1Text={ABOUT_AS_A_TIER}
        tier1TextHighlight={ABOUT_AS_A_TIER_HIGHLIGHT}
        descriptionText={ABOUT_SYNONYMOUS}
        descriptionTextHighlight={ABOUT_SYNONYMOUS_HIGHLIGHT}
      />
      <PortfolioBackground />
      <GlobalImpact />
      <JoinOurMission />
      <BasicWidthContainer styles="mx-auto">
        <div
          className="
          xl:mb-[180px]
          lg:mb-[140px]
          md:mb-[100px]
          mb-[80px]
          xl:mt-[180px]
          lg:mt-[140px]
          md:mt-[100px]
          mt-[80px]
        "
        >
          <FeaturedProducts />
        </div>
      </BasicWidthContainer>

      {/* <BusinessMap /> */}
      <OurHistory />

      <GetInTouch />
      {/* <div className="flex justify-center"> */}
      <MainPageFAQ />
      {/* </div> */}

      {/* <SequenceAnimation /> */}
      {/* <SequenceAnimation2 /> */}

      {/* <BasicWidthContainer styles="mx-auto z-30 relative -top-[64px]">
      <div
        className="
          flex
          flex-col
          md:gap-20
          lg:gap-14
          gap-10
          xl:mb-[180px]
          lg:mb-[140px]
          md:mb-[100px]
          mb-[80px]
          relative
          mt-[60px]
          md:py-[60px]
          py-[36px]
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
          className="absolute top-0 left-0"
        />
        <div
          className="
          flex
          md:pt-10
          md:pb-20
          pt-0
          pb-10
          border-b
          border-solid
          border-[#191919]
          max-w-[1100px]
          self-center
          md:items-center
          px-5
          gap-4
          md:flex-row
          flex-col
          justify-center
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
              md:text-center
            "
          >
            {ABOUT_AS_A_TIER}
          </div>
          <div
            className="
              font-medium
              leading-[150%]
              [font-size:_clamp(16px,1.5vw,24px)]
              font-walsheim
              max-w-[650px]
              md:text-center
            "
          >
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
          className="absolute bottom-0 right-0 pointer-events-none z-10"
        />
      </div>
    </BasicWidthContainer> */}
    </>
  );
}
