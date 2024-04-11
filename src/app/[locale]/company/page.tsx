import BornInGermany from "@/app/[locale]/company/components/BornInGermany";
import BusinessMap from "@/app/[locale]/company/components/BusinessMap";
import CompanyStats from "@/app/[locale]/company/components/CompanyStats";
import CompanyTier1 from "@/app/[locale]/company/components/CompanyTier1";
import ExploreOurDifference from "@/app/[locale]/company/components/ExploreOurDifference";
import HeroSection from "@/app/[locale]/company/components/HeroSection";
import OurHistory from "@/app/[locale]/company/components/OurHistory";
import PortfolioBackground from "@/app/[locale]/company/components/PortfolioBackground";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import I18nProvider from "@/app/[locale]/i18nProvider";
import GlobalImpact from "@/app/[locale]/solutions/components/GlobalImpact";
import JoinOurMission from "@/app/[locale]/solutions/components/JoinOurMission";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/company`;
  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function About() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data?.attributes,
        ...commonI18n.data?.attributes,
      }}
    >
      <HeroSection />
      <BornInGermany />
      <CompanyTier1 />
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
    </I18nProvider>
  );
}
