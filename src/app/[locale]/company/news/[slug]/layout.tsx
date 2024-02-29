import { BlogPost } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Image from "next/image";
import { getDocumentBySlug } from "outstatic/server";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blogPost = (await getDocumentBySlug("blog", slug, [
    "title",
  ])) as BlogPost;
  const formattedTitle =
    blogPost.title.slice(0, 1).toUpperCase() +
    blogPost.title.slice(1).toLowerCase();
  const title = `AE-Solar | ${formattedTitle}`;
  const description = `AE-Solar | ${formattedTitle}`;

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
