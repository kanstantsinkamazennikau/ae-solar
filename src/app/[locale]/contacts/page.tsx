import ClientContactsPage from "@/app/[locale]/contacts/ClientContactsPage";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    // locale,
  };
  const pageTranslationApiPath = `/contacts`;
  const commonPath = `/commons`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function ContactsPage() {
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <ClientContactsPage />
    </I18nProvider>
  );
}
