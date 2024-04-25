import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BASE_URL } from "@/app/[locale]/layout";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";
import { headers } from "next/headers";

const mapTitleWithDocumentsCategory = {
  faq: {
    title: "metadataTitleFAQ",
    description: "metadataDescriptionFAQ",
    OGUrl: "/company/faq",
  },
  publishers_info: {
    title: "metadataTitlePublishers",
    description: "metadataDescriptionPublishers",
    OGUrl: "/company/publishers_info",
  },
  imprint: {
    title: "metadataTitleImprint",
    description: "metadataDescriptionImprint",
    OGUrl: "/company/imprint",
  },
  manufacturer: {
    title: "metadataTitleManufacturer",
    description: "metadataDescriptionManufacturer",
    OGUrl: "/company/manufacturer",
  },
  news: {
    title: "metadataTitleNews",
    description: "metadataDescriptionNews",
    OGUrl: "/company/news",
  },
  company: {
    title: "metadataTitleCompany",
    description: "metadataDescriptionCompany",
    OGUrl: "/company",
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

  const title = `${
    metadata?.[
      mapTitleWithDocumentsCategory[documentsCategory]
        ?.title as keyof typeof metadata
    ] || ""
  }`;
  const description = `${
    metadata?.[
      mapTitleWithDocumentsCategory[documentsCategory]
        ?.description as keyof typeof metadata
    ] || ""
  }`;

  const canonicalURL = `${BASE_URL}${mapTitleWithDocumentsCategory[documentsCategory].OGUrl}`;

  return {
    title,
    description,
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

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
