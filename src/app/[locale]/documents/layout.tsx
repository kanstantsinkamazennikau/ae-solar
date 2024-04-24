import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BASE_URL } from "@/app/[locale]/layout";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `${metadata?.metadataTitleDocuments}`;
  const description = `${metadata?.metadataDescriptionDocuments}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/documents`,
      type: "website",
    },
  };
}

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout apiRoute="/pluraldocuments">{children}</ClientLayout>;
}
