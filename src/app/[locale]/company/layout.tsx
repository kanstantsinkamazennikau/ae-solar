import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { headers } from "next/headers";
import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";

const mapTitleWithDocumentsCategory = {
  faq: { title: "FAQ", description: "We have solutions" },
  publishers_info: {
    title: "Publisher's",
    description: "MetadataDescriptionPublishers",
  },
  imprint: {
    title: "Imprint",
    description: "MetadataDescriptionImprint",
  },
  manufacturer: {
    title: "Manufacturer",
    description: "Harnessing the Sun, Empowering the World",
  },
  blog: {
    title: "News",
    description: "Read About Us",
  },
  company: {
    title: "Company",
    description: "Company Illuminating",
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const url = headers().get("x-url")!.split("/");
  const { t } = await serverTranslation(locale, "translation");
  const documentsCategory = url[
    url.length - 1
  ] as keyof typeof mapTitleWithDocumentsCategory;

  const title = `AE-Solar | ${t(
    mapTitleWithDocumentsCategory[documentsCategory]?.title
  )}`;
  const description = `AE-Solar | ${t(
    mapTitleWithDocumentsCategory[documentsCategory]?.description
  )}`;

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

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
