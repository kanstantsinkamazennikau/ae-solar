import OurHistory from "@/app/[locale]/company/components/OurHistory";
import Contacts from "@/app/[locale]/company/imprint/components/Contacts";
import Artcile from "@/app/[locale]/company/manufacturer/components/Article";
import ManufacturerHeader from "@/app/[locale]/company/manufacturer/components/ManufacturerHeader";
import SaveTheWorld from "@/app/[locale]/company/manufacturer/components/SaveTheWorld";
import FeaturedProducts from "@/app/[locale]/components/TechInfo/FeaturedProducts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import DownloadPresentation from "@/app/[locale]/components/common/DownloadPresentation";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/manufacturers`;
  const commonPath = `/commons`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function ManufacturerPage() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <ManufacturerHeader />
      <div className="flex w-full justify-center flex-col items-center mb-20">
        <BasicWidthContainer>
          <div
            className="
              flex
              gap-[60px]
              relative
              min-[920px]:flex-row
              flex-col
              xl:mb-[100px]
              lg:mb-[60px]
              md:mb-[40px]
              mb-[40px]
            "
          >
            <div>
              <div
                className="
                  flex
                  min-[920px]:flex-col
                  flex-col-reverse
                  min-[920px]:sticky
                  static
                  min-[920px]:top-[100px]
                  top-[80px]
                  w-full
                  min-w-[300px]
                  max-w-[300px]
                  gap-6
                  mx-auto
                  max-[920px]:[&>*>#contacts]:static
                  max-[920px]:[&>*>#contacts>div]:border-b-0
                  max-[920px]:[&>*>#contacts]:-mb-12
                  max-[920px]:[&>*>#contacts]:z-10
                "
              >
                <DownloadPresentation link="/documents/presentation.pdf" />
                <div className="relative">
                  <Contacts />
                  <hr className="border-[#131313] min-[920px]:hidden absolute -bottom-[11%] z-10 w-[calc(100%-40px)] left-1/2 -translate-x-1/2" />
                </div>
              </div>
            </div>
            <Artcile />
          </div>
        </BasicWidthContainer>
        <OurHistory />
        <SaveTheWorld />
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
      </div>
    </I18nProvider>
  );
}
