import DocumentsLayout from "@/app/[locale]/documents/components/ClientLayout/ClientLayout";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async (pagePath: string) => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const commonPath = `/commons`;
  const responseData = await Promise.all([
    fetchAPI(pagePath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function Layout({
  children,
  apiRoute,
}: {
  children: React.ReactNode;
  apiRoute?: string;
}) {
  const [pageI18n, commonI18n] = await getTranslation(apiRoute!);

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <DocumentsLayout>{children}</DocumentsLayout>
    </I18nProvider>
  );
}
