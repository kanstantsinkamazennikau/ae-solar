import AboutAwards from "@/app/[locale]/company/components/AboutAwards";
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

export default function About() {
  return (
    <>
      <HeroSection />
      <BornInGermany />
      <AboutAwards />
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
      {/*<div className="flex justify-center">
        <MainPageFAQ />
      </div> */}

      {/* <SequenceAnimation /> */}
      {/* <SequenceAnimation2 /> */}
    </>
  );
}
