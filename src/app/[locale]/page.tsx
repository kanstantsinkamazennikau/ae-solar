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
      <main className="flex flex-col items-center w-full">
        <HeroSection
          test1={
            <Image
              src={`/videos/headerOpeningPoster.webp`}
              alt="headerOpeningPoster"
              priority
              width={1920}
              height={1080}
              className={`w-screen object-cover absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 h-screen`}
            />
          }
          test2={
            <Image
              src={`/images/heroSectionBackground.webp`}
              alt="heroSectionBackground"
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,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"
              width={1376}
              height={768}
              className={`w-full object-cover absolute -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 h-full md:hidden`}
            />
          }
          test3={
            <Image
              src={`/images/heroSectionBackground.jpeg`}
              alt="heroSectionBackground"
              priority
              width={1920}
              height={1080}
              className={`object-cover h-full w-full md:block hidden`}
            />
          }
        />
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
