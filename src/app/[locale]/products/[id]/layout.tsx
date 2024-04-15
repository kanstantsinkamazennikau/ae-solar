import { Model } from "@/app/[locale]/context/constructorContext";
import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import I18nProvider from "@/app/[locale]/i18nProvider";
import ProductNavigation from "@/app/[locale]/products/[id]/components/ProductNavigation";
import { PRODUCT_PANEL_TITLES } from "@/app/[locale]/products/[id]/constants";
import { LayoutProps } from "@/app/[locale]/products/[id]/types";
import { PRODUCT_INTRO_PANELS_IMAGES } from "@/app/[locale]/utils/constants";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

export async function generateMetadata({
  params: { id, locale },
}: {
  params: { id: Model; locale: LocaleTypes };
}) {
  const { t } = await serverTranslation(locale, "translation");
  const title = `AE-Solar | ${id}`;
  const description = `AE-Solar | ${t(PRODUCT_PANEL_TITLES[id])}`;

  return {
    title,
    description,
    keywords: [],
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/main-page`;
  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function ContactLayout({
  params: { id },
  children,
}: LayoutProps) {
  const [pageI18n, commonI18n] = await getTranslation();

  if (!PRODUCT_INTRO_PANELS_IMAGES.includes(id))
    return (
      <div className="text-center [font-size:_clamp(20px,2vw,32px)] mt-8">
        Product not found
      </div>
    );

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data?.attributes,
        ...commonI18n.data?.attributes,
      }}
    >
      <ProductNavigation id={id} />
      {children}
    </I18nProvider>
  );
}
