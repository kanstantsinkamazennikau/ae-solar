import Post from "@/app/[locale]/company/news/components/BlogPostsList/Post";
import {
  BlogPost,
  StrapiBlogsWithPagination,
} from "@/app/[locale]/company/news/components/BlogPostsList/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { fetchAPI, getStrapiMedia } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";
import Link from "next/link";
import { getDocumentSlugs, load } from "outstatic/server";

const getRecentPosts = async () => {
  try {
    const path = `/blogs`;
    const urlParamsObject = {
      // locale: "de",
      sort: { createdAt: "desc" },
      populate: {
        authorBio: {
          populate: ["name", "avatar"],
        },
        tag: {
          populate: ["tag"],
        },
      },
      fields: ["title", "readingTime", "publishedAt"],
      pagination: {
        page: 1,
        pageSize: 5,
      },
    };
    const responseData = await fetchAPI(path, urlParamsObject);
    return responseData as StrapiBlogsWithPagination;
  } catch (error) {
    return {
      data: [],
    };
  }
};

export default async function RecentNews() {
  const blogPosts = await getRecentPosts();
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "translation");

  return (
    <div className="flex md:flex-row flex-col">
      <Image
        src={`/images/newsMobile.png`}
        alt="news"
        width={426}
        height={685}
        quality={100}
        className="w-full h-[300px] md:hidden block min-[500px]:h-[350px] object-cover"
      />
      <BasicWidthContainer styles="flex max-md:p-0 w-full">
        <Image
          src={`/images/news.png`}
          alt="news"
          width={426}
          height={685}
          className="min-[920px]:w-[400px] w-[300px] md:block hidden"
        />
        <div
          className="
            flex
            flex-col
            w-full
            max-w-[915px]
            xl:p-20
            lg:p-12
            px-6
            justify-center
            rounded-r-xl
            border-solid
            border
            border-[#131313]
            md:-ml-5
            bg-[url('/images/getInTouchBackground.svg')]
            [&>*:first-child]:border-t-0
          "
        >
          {blogPosts.data.map(({ id, attributes }) => {
            const authorPicture = getStrapiMedia(
              attributes.authorBio.data?.attributes.avatar.data.attributes.url
            );
            const authorName = attributes.authorBio.data?.attributes.name;
            const tag = attributes.tag.data?.attributes.tag;

            return (
              <Post
                {...{
                  id,
                  title: attributes.title,
                  publishedAt: attributes.publishedAt,
                  author: {
                    name: authorName,
                    picture: authorPicture,
                  },
                  readingTime: attributes.readingTime,
                  tag,
                }}
                key={id}
              />
            );
          })}
          <Link href="company/news" className="mt-10 mx-auto">
            <Button style="outline" showArrow>
              <span className="[font-size:_clamp(16px,1.5vw,20px)] font-semibold -tracking-[0.2]">
                {t("Read all the news")}
              </span>
            </Button>
          </Link>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
