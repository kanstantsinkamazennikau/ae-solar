import AboutAwards from "@/app/[locale]/company/components/AboutAwards";
import BornInGermany from "@/app/[locale]/company/components/BornInGermany";
import HeroSection from "@/app/[locale]/company/components/HeroSection";
import OurHistory from "@/app/[locale]/company/components/OurHistory";
import PortfolioBackground from "@/app/[locale]/company/components/PortfolioBackground";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import { MainPageFAQ } from "@/app/[locale]/components/MainPageFAQ";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";
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
      <div
        className="
          xl:mb-[180px]
          lg:mb-[140px]
          md:mb-[100px]
          mb-[80px]
        "
      >
        <FeaturedProducts />
      </div>

      {/* <BusinessMap /> */}
      <OurHistory />
      <GetInTouch />
      <div className="flex justify-center">
        <MainPageFAQ />
      </div>

      {/* <SequenceAnimation /> */}
    </>
  );
}
