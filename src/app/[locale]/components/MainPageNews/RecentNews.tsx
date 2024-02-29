import BlogPostStats from "@/app/[locale]/company/news/components/BlogPostStats";
import Post from "@/app/[locale]/company/news/components/BlogPostsList/Post";
import {
  BlogPost,
  BlogPostsListProps,
} from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/company/news/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
import { MAIN_PAGE_NEWS_READ_ALL } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { getDocumentSlugs, load } from "outstatic/server";

export async function generateStaticParams() {
  const blogs = getDocumentSlugs("blog");
  return blogs.map((slug) => ({ slug }));
}

const getBlogPosts = async () => {
  const db = await load();
  const blogPosts = await db
    .find({
      collection: "blog",
    })
    .sort({ publishedAt: -1 })
    .limit(3)
    .project([
      "title",
      "slug",
      "publishedAt",
      "author",
      "description",
      "readingTime",
      "tag",
    ])
    .toArray();

  return blogPosts as BlogPost[];
};

export default async function RecentNews() {
  const blogPosts = await getBlogPosts();

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
          className="min-[920px]:w-auto w-[300px] md:block hidden"
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
            rounded-xl
            border-solid
            border
            border-[#131313]
            md:-ml-5
            bg-[url('/images/getInTouchBackground.svg')]
          "
        >
          {blogPosts.map(
            ({ slug, title, publishedAt, author, readingTime, tag }) => (
              <Post
                {...{ slug, title, publishedAt, author, readingTime, tag }}
                key={slug}
              />
            )
          )}
          <Link href="company/news" className="mt-10 mx-auto">
            <Button style="outline" showArrow>
              <span className="[font-size:_clamp(16px,1.5vw,20px)] font-semibold -tracking-[0.2]">
                {MAIN_PAGE_NEWS_READ_ALL}
              </span>
            </Button>
          </Link>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
