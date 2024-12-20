import ClientCartPage from "@/app/[locale]/cart/ClientCartPage";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/carts`;
  const commonPath = `/commons`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function Cart() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <ClientCartPage />
    </I18nProvider>
  );
}
