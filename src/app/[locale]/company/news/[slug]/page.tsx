import BlogPostContent from "@/app/[locale]/company/news/[slug]/BlogPostContent";
import { UpdateViewsResponse } from "@/app/[locale]/company/news/[slug]/types";
import { StrapiBlogs } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

export const revalidate = 1800;

const getPostBySlug = async (slug: string) => {
  try {
    const path = `/blogs`;
    const urlParamsObject = {
      filters: { id: slug },
      populate: {
        // authorBio: {
        //   populate: ["name", "avatar"],
        // },
        tag: {
          populate: ["tag"],
        },
      },
      fields: ["title", "slug", "publishedAt", "body"],
    };
    const response = await fetchAPI(path, urlParamsObject);
    return response as StrapiBlogs;
  } catch (error) {
    return { data: [] };
  }
};

const updatePostViews = async (slug: string) => {
  try {
    const path = `/blogs/${slug}`;
    const urlParamsObject = {
      fields: ["views"],
    };
    const responseData: UpdateViewsResponse = await fetchAPI(
      path,
      urlParamsObject
    );
    if (responseData.data) {
      const {
        attributes: { views },
      } = responseData.data;
      const options: RequestInit = {
        method: "PUT",
        body: JSON.stringify({
          data: {
            views: Number(views) + 1,
          },
        }),
      };

      await fetchAPI(path, urlParamsObject, options);
    }
  } catch (error) {
    return { data: [] };
  }
};

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/news`;
  const commonPath = `/common`;
  const [pageI18n, commonI18n] = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return {
    ...pageI18n.data?.attributes,
    ...commonI18n.data?.attributes,
  };
};

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await getPostBySlug(slug);
  await updatePostViews(slug);
  const translation = await getTranslation();

  if (!data.length)
    return (
      <div className="text-center [font-size:_clamp(20px,2vw,32px)]">
        {translation.postNotFound}
      </div>
    );

  const { attributes } = data[0];

  // const authorPicture = getStrapiMedia(
  //   attributes.authorBio.data?.attributes.avatar.data?.attributes.url
  // );
  // const authorName = attributes.authorBio.data?.attributes.name;

  const { title, body } = attributes;

  return (
    <div className="-mt-[160px] relative z-10">
      <div className="[font-size:_clamp(32px,4vw,64px)] font-semibold leading-[130%] mb-6">
        {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
      </div>
      <div className="flex flex-col mt-14 font-walsheim max-w-[900px] mx-auto w-full leading-[150%] blog_post_content">
        <BlogPostContent body={body} />
      </div>
    </div>
  );
}
