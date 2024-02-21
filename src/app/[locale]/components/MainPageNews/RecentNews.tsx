import BlogPostStats from "@/app/[locale]/company/blog/components/BlogPostStats";
import {
  BlogPost,
  BlogPostsListProps,
} from "@/app/[locale]/company/blog/components/BlogPostsList/types";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/company/blog/constants";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
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
    ])
    .toArray();

  return blogPosts as BlogPost[];
};

async function getBlogPostsAmount() {
  try {
    const blogs = await getDocumentSlugs("blog");
    return blogs.length;
  } catch (error) {
    return 0;
  }
}

export default async function RecentNews() {
  const blogPosts = await getBlogPosts();
  const blogPostsAmount = await getBlogPostsAmount();

  return (
    <div className="flex flex-col w-full max-w-[945px]">
      {blogPosts.map(
        ({ slug, title, publishedAt, author, readingTime }, index) => {
          return (
            <article
              key={slug}
              className="
                flex
                md:pt-8
                md:pb-8
                pt-8
                pb-7
                border-b
                border-solid
                border-[#191919]
                md:first:border-t
                md:items-center
                gap-5
                md:flex-row
                flex-col
                items-start
              "
            >
              <div
                className="
                  flex
                  flex-col
                  text-[#505050]
                  uppercase
                  leading-[100%]
                  gap-4
                  flex-grow-0
                  flex-shrink-0
                  xl:basis-[200px]
                  lg:basis-[150px]
                  min-[920px]:basis-[100px]
                  md:basis-[100px]
                  break-all
                "
              >
                {/* <div className="[font-size:_clamp(10px,1vw,16px)] font-extrabold">
                {descr?.type}
                </div> */}
                {/* MOBILE VERSION DATE */}

                <div
                  className={`
                    flex
                    items-center
                    md:hidden
                  `}
                >
                  <Image
                    src={`/images/about/blog/calendar.svg`}
                    alt="calendar"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  <span className="[font-size:_clamp(10px,1vw,14px)] font-bold font-walsheim text-dark-gray-900 leading-[100%]">
                    {blogPostFormatDate(publishedAt)}
                  </span>
                </div>

                <div className="[font-size:_clamp(20px,2vw,32px)] font-normal -tracking-[1.6] md:block hidden">
                  {/* {descr?.typeNumber && `#${descr.typeNumber}`} */}#
                  {String(blogPostsAmount - index).padStart(3, "0")}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={`blog/${slug}`}>
                  <h2 className="[font-size:_clamp(16px,1.5vw,24px)] font-bold -tracking-[0.24] hover:text-base-red">
                    {title.slice(0, 1).toUpperCase() +
                      title.slice(1).toLowerCase()}
                  </h2>
                </Link>
                <BlogPostStats
                  statistics={{
                    publishedAt: blogPostFormatDate(publishedAt),
                    author: author.name,
                    readingTime,
                  }}
                  dividerColor="gray"
                />
              </div>
            </article>
          );
        }
      )}
    </div>
  );
}
