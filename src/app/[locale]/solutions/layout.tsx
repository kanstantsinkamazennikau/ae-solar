import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `AE-Solar | ${metadata?.metadataTitleSolutions}`;
  const description = `AE-Solar | ${metadata?.metadataDescriptionSolutions}`;

  return {
    title,
    description,
    keywords: metadata?.metadataKeywordsSolutions,
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
