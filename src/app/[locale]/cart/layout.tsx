import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BASE_URL } from "@/app/[locale]/layout";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const title = `${metadata?.metadataTitleCart}`;
  const description = `${metadata?.metadataDescriptionCart}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title,
      url: `${BASE_URL}/cart`,
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
