import BlogPostsList from "@/app/[locale]/about/blog/components/BlogPostsList";
import BlogPostPagination from "@/app/[locale]/about/blog/components/BlogPostsPagination";
import RecentPosts from "@/app/[locale]/about/blog/components/RecentPosts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { getDocumentSlugs } from "outstatic/server";
import { Suspense } from "react";
import path from "path";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import {
  BLOG_ON_THE_BLOG,
  BLOG_READ_THOUGHTS,
} from "@/app/[locale]/about/blog/constants";

async function getOutstaticDirectory() {
  return path.join(process.cwd(), "outstatic");
}

async function getBlogPostsAmount() {
  try {
    await getOutstaticDirectory();

    const blogs = await getDocumentSlugs("blog");
    return blogs.length;
  } catch (error) {
    return 0;
  }
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

  if (!blogPostsAmount)
    return (
      <>
        <HeadingWithBackground
          backgroundImage="/images/about/blog/blogBackground.png"
          tierOneHeading={BLOG_READ_THOUGHTS}
          tierTwoHeading={BLOG_ON_THE_BLOG}
          mobileBackgroundImage="/images/about/blog/blogMobileBackground.png"
        />
        <div className="text-center [font-size:_clamp(20px,2vw,32px)]">
          No blog posts
        </div>
      </>
    );

  return (
    <>
      <HeadingWithBackground
        backgroundImage="/images/about/blog/blogBackground.png"
        tierOneHeading={BLOG_READ_THOUGHTS}
        tierTwoHeading={BLOG_ON_THE_BLOG}
        mobileBackgroundImage="/images/about/blog/blogMobileBackground.png"
      />
      <div className="flex w-full justify-center flex-col items-center md:mt-0 -mt-[60px]">
        <BasicWidthContainer>
          <div className="flex gap-[60px] justify-between">
            <Suspense key={currentPage} fallback={<Loader />}>
              <BlogPostsList
                currentPage={currentPage}
                blogPostsAmount={blogPostsAmount}
              />
            </Suspense>
            <div className="hidden flex-col gap-[60px] w-full max-w-[315px] min-[920px]:flex">
              {/* <MostPopularPosts /> */}
              <RecentPosts />
            </div>
          </div>
          <BlogPostPagination totalBlogPosts={blogPostsAmount} />
        </BasicWidthContainer>
      </div>
    </>
  );
}
