import DocumentsLayout from "@/app/[locale]/documents/components/ClientLayout/ClientLayout";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getTranslation = async (page: string) => {
  const locale = getLocale();

  //TODO

  const footerUrlParamsObject = {
    // locale,
  };

  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(page, footerUrlParamsObject),
    fetchAPI(commonPath, footerUrlParamsObject),
  ]);
  return responseData;
};

export default async function Layout({
  children,
  page,
}: {
  children: React.ReactNode;
  page?: string;
}) {
  const [pageI18n, commonI18n] = await getTranslation(page!);

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data.attributes,
        ...commonI18n.data.attributes,
      }}
    >
      <DocumentsLayout>{children}</DocumentsLayout>
    </I18nProvider>
  );
}
