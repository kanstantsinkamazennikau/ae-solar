import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BASE_URL } from "@/app/[locale]/layout";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `${metadata?.metadataTitleCatalogue}`;
  const description = `${metadata?.metadataDescriptionCatalogue}`;
  const canonicalURL = `${BASE_URL}/catalogue`;

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

export default function CalculateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
