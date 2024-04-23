import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `AE-Solar | ${metadata?.metadataTitleProducts}`;
  const description = `${metadata?.metadataDescriptionProducts}`;

  return {
    title,
    description,
    keywords: metadata?.metadataKeywordsProducts,
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
