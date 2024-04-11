import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { headers } from "next/headers";
import { useServerTranslation as serverTranslation } from "@/app/[locale]/i18n/server";

const mapTitleWithDocumentsCategory = {
  documents: { title: "Documents", desription: "Documents You Need to Know" },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await serverTranslation(locale, "translation");
  const url = headers().get("x-url")!.split("/");
  const documentsCategory = url[
    url.length - 1
  ] as keyof typeof mapTitleWithDocumentsCategory;

  const title = `AE-Solar | ${t(
    mapTitleWithDocumentsCategory[documentsCategory].title
  )}`;
  const description = `AE-Solar | ${t(
    mapTitleWithDocumentsCategory[documentsCategory].desription
  ).replaceAll(/(<([^>]+)>)/gi, "")}`;

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

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout apiRoute="/documents">{children}</ClientLayout>;
}
