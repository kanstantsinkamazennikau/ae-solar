import BlogPostStats from "@/app/[locale]/about/blog/components/BlogPostStats";
import {
  BlogPost,
  BlogPostsListProps,
} from "@/app/[locale]/about/blog/components/BlogPostsList/types";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/about/blog/constants";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
import Link from "next/link";
import { getDocumentSlugs, load } from "outstatic/server";

export async function generateStaticParams() {
  const blogs = getDocumentSlugs("blog");
  return blogs.map((slug) => ({ slug }));
}

const getBlogPosts = async (currentPage: number) => {
  const db = await load();
  const blogPosts = await db
    .find({
      collection: "blog",
    })
    .sort({ publishedAt: -1 })
    .skip((currentPage - 1) * BLOG_POSTS_PER_PAGE)
    .limit(BLOG_POSTS_PER_PAGE)
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

export default async function BlogPostsList({
  currentPage,
  blogPostsAmount,
}: BlogPostsListProps) {
  const blogPosts = await getBlogPosts(currentPage);

  return (
    <div className="flex flex-col w-full max-w-[945px]">
      {blogPosts.map(
        ({ slug, title, publishedAt, author, readingTime }, index) => {
          return (
            <div
              key={slug}
              className="flex py-8 border-b border-solid border-[#191919] first:border-t items-center gap-5"
            >
              <div className="flex flex-col text-[#505050] uppercase leading-[100%] gap-4 flex-grow-0 flex-shrink-0 basis-[200px] break-all">
                {/* <div className="[font-size:_clamp(10px,1vw,16px)] font-extrabold">
                {descr?.type}
              </div> */}
                <div className="[font-size:_clamp(20px,2vw,32px)] font-normal -tracking-[1.6]">
                  {/* {descr?.typeNumber && `#${descr.typeNumber}`} */}#
                  {String(
                    blogPostsAmount -
                      (currentPage - 1) * BLOG_POSTS_PER_PAGE -
                      index
                  ).padStart(3, "0")}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={`blog/${slug}`}>
                  <h2 className="[font-size:_clamp(16px,1.5vw,24px)] font-bold -tracking-[0.24] hover:text-base-red">
                    {title}
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
            </div>
          );
        }
      )}
    </div>
  );
}
