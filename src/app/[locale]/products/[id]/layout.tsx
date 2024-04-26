import { Model } from "@/app/[locale]/context/constructorContext";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { BASE_URL } from "@/app/[locale]/layout";
import ProductNavigation from "@/app/[locale]/products/[id]/components/ProductNavigation";
import ProductNotFoundRedirect from "@/app/[locale]/products/[id]/components/ProductNotFoundRedirect";
import {
  PRODUCT_PANEL_KEYWORDS,
  PRODUCT_PANEL_TITLES,
} from "@/app/[locale]/products/[id]/constants";
import { LayoutProps } from "@/app/[locale]/products/[id]/types";
import { PRODUCT_INTRO_PANELS_IMAGES } from "@/app/[locale]/utils/constants";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params: { id, locale },
}: {
  params: { id: Model; locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `${id}`;
  const description = `${
    metadata?.[PRODUCT_PANEL_TITLES[id] as keyof typeof metadata]
  }`;
  const keywords =
    metadata?.[PRODUCT_PANEL_KEYWORDS[id] as keyof typeof metadata] || "";
  const canonicalURL = `${BASE_URL}/products/${id}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalURL,
    },
    openGraph: {
      title,
      description,
      url: canonicalURL,
      type: "website",
    },
  };
}

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const commonPath = `/commons`;
  const responseData = await fetchAPI(commonPath, urlParamsObject);
  return responseData;
};

export default async function ContactLayout({
  params: { id },
  children,
}: LayoutProps) {
  const commonI18n = await getTranslation();

  if (!PRODUCT_INTRO_PANELS_IMAGES.includes(id))
    return <ProductNotFoundRedirect />;

  return (
    <I18nProvider
      translate={{
        ...commonI18n.data[0]?.attributes,
      }}
    >
      <ProductNavigation id={id} />
      {children}
    </I18nProvider>
  );
}
