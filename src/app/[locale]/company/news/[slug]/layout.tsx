import { MetadataResponse } from "@/app/[locale]/company/news/[slug]/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { BASE_URL } from "@/app/[locale]/layout";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";
import Image from "next/image";

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug: string; locale: LocaleTypes };
}) {
  const metadata = await getOpengraphMetadata(locale);
  const defaultTitle = `${metadata?.metadataTitleNews}`;
  const defaultDescription = `${metadata?.metadataDescriptionNews}`;

  try {
    const path = `/blogs`;
    const urlParamsObject = {
      filters: { id: slug },
      fields: ["title"],
      populate: {
        seo: {
          populate: "*",
        },
      },
    };
    const response: MetadataResponse = await fetchAPI(path, urlParamsObject);
    const title = response.data[0].attributes.seo[0].metaTitle || defaultTitle;
    const description =
      response.data[0].attributes.seo[0].metaTitle || defaultDescription;
    return {
      title,
      description,
      metadataBase: new URL(BASE_URL),
      openGraph: {
        title,
        url: `${BASE_URL}/news/${slug}`,
        description,
        type: "website",
      },
    };
  } catch (error) {
    return {
      title: defaultTitle,
      description: defaultDescription,
      metadataBase: new URL(BASE_URL),
      openGraph: {
        title: defaultTitle,
        url: `${BASE_URL}/news/${slug}`,
        description: defaultDescription,
        type: "website",
      },
    };
  }
}

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative -mt-[80px] flex justify-center">
        <Image
          src="/images/about/blog/blogPostBackground.png"
          alt="documents"
          width={1920}
          height={440}
          quality={100}
          priority
          className="lg:h-[440px] xl:h-[400px] md:h-[350px] min-[560px]:h-[320px] h-[300px] min-[920px]:mt-0 mt-[80px] object-cover"
        />
      </div>
      <div className="flex w-full justify-center mb-[60px]">
        <BasicWidthContainer>{children}</BasicWidthContainer>
      </div>
    </>
  );
}
