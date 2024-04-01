import BlogPostContent from "@/app/[locale]/company/news/[slug]/BlogPostContent";
import BlogPostStats from "@/app/[locale]/company/news/components/BlogPostStats";
import {
  BlogPost,
  StrapiBlogs,
} from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
import { fetchAPI, getStrapiMedia } from "@/app/[locale]/utils/fetch-api";
import { markdownToHtml } from "@/app/[locale]/utils/markdownToHtml";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getDocumentBySlug, getDocumentSlugs } from "outstatic/server";

async function getBlogPostData(slug: string) {
  const blogPost = (await getDocumentBySlug("blog", slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
  ])) as BlogPost;

  const content = await markdownToHtml(blogPost?.content || "");

  return {
    ...blogPost,
    content,
  };
}

const getPostBySlug = async (slug: string) => {
  const path = `/blogs`;

  const urlParamsObject = {
    filters: { slug },
    populate: {
      authorBio: {
        populate: ["name", "avatar"],
      },
      tag: {
        populate: ["tag"],
      },
    },
    fields: ["title", "slug", "readingTime", "publishedAt", "body"],
  };
  // const urlParamsObject = {
  //   filters: { slug },
  //   populate: {
  //     cover: { fields: ["url"] },
  //     authorsBio: { populate: "*" },
  //     category: { fields: ["name"] },
  //     blocks: {
  //       populate: {
  //         __component: "*",
  //         files: "*",
  //         file: "*",
  //         url: "*",
  //         body: "*",
  //         title: "*",
  //         author: "*",
  //       },
  //     },
  //   },
  // };
  const response = await fetchAPI(path, urlParamsObject);
  return response as StrapiBlogs;
};

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const blogPost = await getBlogPostData(slug);
  const { data } = await getPostBySlug(slug);

  if (!data)
    return (
      <div className="text-center [font-size:_clamp(20px,2vw,32px)]">
        Post not found
      </div>
    );
  const { attributes } = data[0];

  const authorPicture = getStrapiMedia(
    attributes.authorBio.data?.attributes.avatar.data.attributes.url
  );
  const authorName = attributes.authorBio.data?.attributes.name;

  const { title, body, readingTime } = attributes;

  return (
    <div className="-mt-[160px] relative z-10">
      {/* <div className="[font-size:_clamp(16px,2vw,24px)] uppercase text-[#B30006] font-extrabold mb-6">
        {type}
      </div> */}
      <div className="[font-size:_clamp(32px,4vw,64px)] font-semibold leading-[130%] mb-6">
        {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
      </div>
      <BlogPostStats
        statistics={{
          author: authorName,
          image: authorPicture,
          readingTime,
        }}
      />
      <div className="flex flex-col mt-14 font-walsheim max-w-[900px] mx-auto w-full leading-[150%] blog_post_content">
        <BlogPostContent body={body} />
      </div>
    </div>
  );
}
