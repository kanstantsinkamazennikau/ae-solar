import BlogHeading from "@/app/[locale]/about/blog/components/BlogHeading";
import BlogPostsList from "@/app/[locale]/about/blog/components/BlogPostsList";
import BlogPostPagination from "@/app/[locale]/about/blog/components/BlogPostsPagination";
import MostPopularPosts from "@/app/[locale]/about/blog/components/MostPopularPosts";
import RecentPosts from "@/app/[locale]/about/blog/components/RecentPosts";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/about/blog/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { getDocumentSlugs } from "outstatic/server";
import { Suspense } from "react";

export async function getBlogPostsAmount() {
  const blogs = getDocumentSlugs("blog");
  return blogs.length;
}

export default async function Blog({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const blogPostsAmount = await getBlogPostsAmount();

  return (
    <>
      <BlogHeading />
      <div className="flex w-full justify-center flex-col items-center">
        <BasicWidthContainer>
          <div className="flex gap-[60px] justify-between">
            <Suspense key={currentPage} fallback={<Loader />}>
              <BlogPostsList currentPage={currentPage} />
            </Suspense>
            <div className="flex flex-col gap-[60px] w-full max-w-[315px]">
              <MostPopularPosts />
              <RecentPosts />
            </div>
          </div>
          <BlogPostPagination
            totalPages={Math.ceil(blogPostsAmount / BLOG_POSTS_PER_PAGE)}
          />
        </BasicWidthContainer>
      </div>
    </>
  );
}
