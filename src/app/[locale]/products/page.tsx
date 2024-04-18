import I18nProvider from "@/app/[locale]/i18nProvider";
import ClientProductsPage from "@/app/[locale]/products/ClientProductsPage";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/products`;
  const commonPath = `/commons`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function ProductsPage() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <ClientProductsPage />
    </I18nProvider>
  );
}
