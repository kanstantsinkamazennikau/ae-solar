import AwardsAndStats from "@/app/[locale]/components/AwardsAndStats";
import GetInTouch from "@/app/[locale]/components/GetInTouch";
import HeroSection from "@/app/[locale]/components/HeroSection";
import MainPageFAQ from "@/app/[locale]/components/MainPageFAQ";
import MainPageNews from "@/app/[locale]/components/MainPageNews";
import RecentNews from "@/app/[locale]/components/MainPageNews/RecentNews";
import ProductIntroVideo from "@/app/[locale]/components/ProductIntroVideo";
import TechInfo from "@/app/[locale]/components/TechInfo";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/main-pag`;
  const commonPath = `/commons`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function Home() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <main className="flex flex-col items-center w-full ">
        <HeroSection />
        <div className="w-full relative">
          <div className="absolute w-full h-[40%] flex">
            <div className="fade-strip-top !h-[100px]" />
            <Image
              src="/images/solarSystem.svg"
              alt="solarSystem"
              width={1920}
              height={620}
              // priority
              className="absolute h-full object-cover left-1/2 -translate-x-1/2 -z-0 max-md:hidden"
            />
            <div className="fade-strip-bottom !h-[100px]" />
          </div>
          <AwardsAndStats />
          <ProductIntroVideo />
        </div>
        <TechInfo />
        <GetInTouch />
        <MainPageNews>
          <RecentNews />
        </MainPageNews>
        <MainPageFAQ />
      </main>
    </I18nProvider>
  );
}
