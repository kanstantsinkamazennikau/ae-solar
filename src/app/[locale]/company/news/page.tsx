import BlogPostsList from "@/app/[locale]/company/news/components/BlogPostsList";
import { StrapiBlogsWithPagination } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import BlogPostPagination from "@/app/[locale]/company/news/components/BlogPostsPagination";
import MostPopularPosts from "@/app/[locale]/company/news/components/MostPopularPosts";
import RecentPosts from "@/app/[locale]/company/news/components/RecentPosts";
import TagsFilter from "@/app/[locale]/company/news/components/TagsFilter";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/company/news/constants";
import { TagsResponse } from "@/app/[locale]/company/news/types";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import Loader from "@/app/[locale]/components/common/Loader";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import { Suspense } from "react";

async function getBlogPosts(currentPage: number, searchParamsTags?: string) {
  try {
    const tagsArray = searchParamsTags
      ?.split("&")
      .filter((tag) => tag)
      .map((tag) => ({ tag }));

    const path = `/blogs`;
    const urlParamsObject = {
      filters: {
        tag: {
          $or: tagsArray,
        },
      },
      sort: { createdAt: "desc" },
      populate: {
        // authorBio: {
        //   populate: ["name", "avatar"],
        // },
        tag: {
          populate: ["tag"],
        },
      },
      fields: ["title", "slug", "publishedAt", "body"],
      pagination: {
        page: currentPage,
        pageSize: BLOG_POSTS_PER_PAGE,
      },
    };
    const responseData = await fetchAPI(path, urlParamsObject);

    return responseData as StrapiBlogsWithPagination;
  } catch (error) {
    return {
      data: [],
      meta: {
        pagination: {
          total: 0,
        },
      },
    };
  }
}

const getTags = async () => {
  try {
    const path = `/tags`;
    const urlParamsObject = {
      fields: ["tag", "dislpayTagName"],
    };
    const responseData: TagsResponse = await fetchAPI(path, urlParamsObject);
    if (responseData.data) {
      return {
        data: responseData.data.map(
          ({ attributes: { tag, dislpayTagName } }) => ({ tag, dislpayTagName })
        ),
      };
    }
    return { data: [] };
  } catch (error) {
    return { data: [] };
  }
};

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/pluralnews`;
  const commonPath = `/commons`;
  const [pageI18n, commonI18n] = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return {
    ...pageI18n.data[0]?.attributes,
    ...commonI18n.data[0]?.attributes,
  };
};

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
  const { data, meta } = await getBlogPosts(currentPage, searchParamsTags);
  const tags = await getTags();
  const translation = await getTranslation();

  if (!data.length)
    return (
      <>
        <HeadingWithBackground
          backgroundImage="/images/about/blog/blogBackground.png"
          tierOneHeading={translation.readAboutUs}
          tierTwoHeading={translation.onTheMedia}
          mobileBackgroundImage="/images/about/blog/blogMobileBackground.png"
        />
        {!!tags.data.length && (
          <div className="flex w-full justify-center flex-col items-center md:mt-0 -mt-[60px] pb-20">
            <BasicWidthContainer>
              <div className="flex gap-[60px] justify-between">
                <div className="flex flex-col w-full">
                  <TagsFilter
                    tags={tags.data}
                    filterText={translation.filter}
                    resetText={translation.reset}
                  />
                </div>
              </div>
            </BasicWidthContainer>
          </div>
        )}
        <div className="text-center [font-size:_clamp(20px,2vw,32px)] mb-14">
          {translation.noPosts}
        </div>
      </>
    );

  return (
    <Suspense fallback={<Loader />}>
      <HeadingWithBackground
        backgroundImage="/images/about/blog/blogBackground.png"
        tierOneHeading={translation.readAboutUs}
        tierTwoHeading={translation.onTheMedia}
        mobileBackgroundImage="/images/about/blog/blogMobileBackground.png"
      />
      <div className="flex w-full justify-center flex-col items-center md:mt-0 -mt-[60px] pb-20">
        <BasicWidthContainer>
          <div className="flex gap-[60px] justify-between">
            <div className="flex flex-col w-full">
              <TagsFilter
                tags={tags.data}
                filterText={translation.filter}
                resetText={translation.reset}
              />
              <BlogPostsList blogsList={data} />
            </div>
            <div className="hidden flex-col gap-[40px] w-full max-w-[315px] min-[920px]:flex">
              <MostPopularPosts heading={translation.mostPopular} />
              <RecentPosts heading={translation.recentPosts} />
            </div>
          </div>
          <BlogPostPagination
            totalBlogPosts={meta.pagination.total}
            itemsPerPage={BLOG_POSTS_PER_PAGE}
          />
        </BasicWidthContainer>
      </div>
    </Suspense>
  );
}
