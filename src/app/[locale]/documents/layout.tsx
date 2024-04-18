import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `AE-Solar | ${metadata?.metadataTitleDocuments}`;
  const description = `AE-Solar | ${metadata?.metadataDescriptionDocuments}`;

  return {
    title,
    description,
    keywords: metadata?.metadataKeywordsDocuments,
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
  return <ClientLayout apiRoute="/pluraldocuments/1">{children}</ClientLayout>;
}
