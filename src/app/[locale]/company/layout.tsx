import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";
import { headers } from "next/headers";

const mapTitleWithDocumentsCategory = {
  faq: {
    title: "metadataTitleFAQ",
    description: "metadataDescriptionFAQ",
    keywords: "metadataKeywordsFAQ",
  },
  publishers_info: {
    title: "metadataTitlePublishers",
    description: "metadataDescriptionPublishers",
    keywords: "metadataKeywordsPublishers",
  },
  imprint: {
    title: "metadataTitleImprint",
    description: "metadataDescriptionImprint",
    keywords: "metadataKeywordsImprint",
  },
  manufacturer: {
    title: "metadataTitleManufacturer",
    description: "metadataDescriptionManufacturer",
    keywords: "metadataKeywordsManufacturer",
  },
  news: {
    title: "metadataTitleNews",
    description: "metadataDescriptionNews",
    keywords: "metadataKeywordsNews",
  },
  company: {
    title: "metadataTitleCompany",
    description: "metadataDescriptionCompany",
    keywords: "metadataKeywordsCompany",
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const url = headers().get("x-url")!.split("/");

  const documentsCategory = url[
    url.length - 1
  ] as keyof typeof mapTitleWithDocumentsCategory;

  const title = `AE-Solar | ${
    metadata?.[
      mapTitleWithDocumentsCategory[documentsCategory]
        ?.title as keyof typeof metadata
    ] || ""
  }`;
  const description = `AE-Solar | ${
    metadata?.[
      mapTitleWithDocumentsCategory[documentsCategory]
        ?.description as keyof typeof metadata
    ] || ""
  }`;
  const keywords =
    metadata?.[
      mapTitleWithDocumentsCategory[documentsCategory]
        ?.keywords as keyof typeof metadata
    ] || "";

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
