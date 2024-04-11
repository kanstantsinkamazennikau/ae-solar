import I18nProvider from "@/app/[locale]/i18nProvider";
import ContactUs from "@/app/[locale]/solutions/components/ContactUs";
import Cooperation from "@/app/[locale]/solutions/components/Cooperation";
import Discover from "@/app/[locale]/solutions/components/Discover";
import GlobalImpact from "@/app/[locale]/solutions/components/GlobalImpact";
import JoinOurMission from "@/app/[locale]/solutions/components/JoinOurMission";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/solution`;
  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function SolutionsPage() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data?.attributes,
        ...commonI18n.data?.attributes,
      }}
    >
      <div
        className="
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
      >
        <Discover />
        <Cooperation />
        <GlobalImpact />
        <JoinOurMission />
        <ContactUs />
      </div>
    </I18nProvider>
  );
}
