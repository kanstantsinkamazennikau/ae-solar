import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `AE-Solar | ${metadata?.metadataTitleCart}`;
  const description = `${metadata?.metadataDescriptionCart}`;

  return {
    title,
    description,
    keywords: metadata?.metadataKeywordsCart,
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
