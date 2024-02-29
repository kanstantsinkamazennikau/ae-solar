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
import Stats from "@/app/[locale]/components/AwardsAndStats/Stats";
import Awards from "@/app/[locale]/components/AwardsAndStats/Awards";
import Image from "next/image";
import CompanyStats from "@/app/[locale]/company/components/CompanyStats";
import ExploreOurDifference from "@/app/[locale]/company/components/ExploreOurDifference";
import BusinessMap from "@/app/[locale]/company/components/BusinessMap";

export default function About() {
  return (
    <>
      <HeroSection />
      <BornInGermany />
      <Tier1
        externalStyle="
          md:!py-20
          !py-14
          xl:!mb-[160px]
          lg:!mb-[100px]
          md:!mb-[60px]
          !mb-[0px]
        "
        tier1Text={ABOUT_AS_A_TIER}
        tier1TextHighlight={ABOUT_AS_A_TIER_HIGHLIGHT}
        descriptionText={ABOUT_SYNONYMOUS}
        descriptionTextHighlight={ABOUT_SYNONYMOUS_HIGHLIGHT}
      />
      <PortfolioBackground />
      <GlobalImpact />
      <CompanyStats />
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
      <ExploreOurDifference />

      <BusinessMap />
      <OurHistory />

      <GetInTouch />
      {/* <div className="flex justify-center"> */}
      <MainPageFAQ />
      {/* </div> */}

      {/* <SequenceAnimation /> */}
      {/* <SequenceAnimation2 /> */}
    </>
  );
}
