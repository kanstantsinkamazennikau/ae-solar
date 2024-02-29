import BlogPostsList from "@/app/[locale]/company/resources/components/BlogPostsList";
import BlogPostPagination from "@/app/[locale]/company/resources/components/BlogPostsPagination";
import RecentPosts from "@/app/[locale]/company/resources/components/RecentPosts";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Loader from "@/app/[locale]/components/common/Loader";
import { getDocumentSlugs, load } from "outstatic/server";
import { Suspense } from "react";
import path from "path";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import {
  BLOG_ON_THE_BLOG,
  BLOG_READ_THOUGHTS,
} from "@/app/[locale]/company/resources/constants";
import TagsFilter from "@/app/[locale]/company/resources/components/TagsFilter";

async function getOutstaticDirectory() {
  return path.join(process.cwd(), "outstatic");
}

async function getBlogPostsAmount(searchParamsTags?: string) {
  const tagsArray = searchParamsTags
    ?.split("&")
    .filter((tag) => tag)
    .map((tag) => ({ tag }));

  try {
    await getOutstaticDirectory();

    const db = await load();
    const blogPosts = await db
      .find({
        collection: "blog",
        $or: tagsArray || [{ collection: "blog" }],
      })
      .project(["tag"])
      .toArray();

    return blogPosts.length;
  } catch (error) {
    return 0;
  }
}

async function getBlogTags() {
  try {
    await getOutstaticDirectory();
    const db = await load();
    const blogPosts = await db
      .find({
        collection: "blog",
      })
      .project(["tag"])
      .toArray();

    const tags = [
      ...new Set(
        blogPosts.map(({ tag }) => {
          if (!tag) return;
          return tag;
        })
      ),
    ].filter((tag) => tag);

    return tags;
  } catch (error) {
    return [];
  }
}

export default async function Blog({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    tags?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const searchParamsTags = searchParams?.tags;
  const blogPostsAmount = await getBlogPostsAmount(searchParamsTags);
  const tags = await getBlogTags();

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
          No posts
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
      <div className="flex w-full justify-center flex-col items-center md:mt-0 -mt-[60px] pb-20">
        <BasicWidthContainer>
          <div className="flex gap-[60px] justify-between">
            <Suspense fallback={<Loader />}>
              <div className="flex flex-col">
                <TagsFilter tags={tags as string[]} />
                <BlogPostsList
                  currentPage={currentPage}
                  searchParamsTags={searchParamsTags}
                />
              </div>
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
