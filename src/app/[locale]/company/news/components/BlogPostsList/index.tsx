import Post from "@/app/[locale]/company/news/components/BlogPostsList/Post";
import {
  BlogPost,
  BlogPostsListProps,
  StrapiBlogs,
} from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/company/news/constants";
import { fetchAPI, getStrapiMedia } from "@/app/[locale]/utils/fetch-api";
import { getDocumentSlugs, getDocuments, load } from "outstatic/server";

export async function generateStaticParams() {
  const blogs = getDocumentSlugs("blog");
  return blogs.map((slug) => ({ slug }));
}

const getPostsAmount = async () => {
  const posts = getDocuments("blog");

  return posts.length;
};

const getBlogPosts = async (currentPage: number, searchParamsTags?: string) => {
  const tagsArray = searchParamsTags
    ?.split("&")
    .filter((tag) => tag)
    .map((tag) => ({ tag }));

  const db = await load();
  const blogPosts = await db
    .find({
      collection: "blog",
      $or: tagsArray || [{ collection: "blog" }],
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
      "tag",
    ])
    .toArray();

  return blogPosts as BlogPost[];
};

const getBlogs = async (currentPage: number, searchParamsTags?: string) => {
  const path = `/blogs`;
  const urlParamsObject = {
    sort: { createdAt: "desc" },
    populate: {
      authorBio: {
        populate: ["name", "avatar"],
      },
      tag: {
        populate: ["tag"],
      },
    },
    fields: ["title", "slug", "readingTime", "publishedAt"],
    pagination: {
      // page: 2,
      page: currentPage,
      pageSize: BLOG_POSTS_PER_PAGE,
      // pageSize: 1,
    },
  };
  const responseData = await fetchAPI(path, urlParamsObject);
  return responseData as StrapiBlogs;
};

export default async function BlogPostsList({
  currentPage,
  searchParamsTags,
}: BlogPostsListProps) {
  const blogPosts = await getBlogPosts(currentPage, searchParamsTags);
  const { data } = await getBlogs(currentPage);

  return (
    <div className="flex flex-col w-full max-w-[945px]">
      {/* {blogPosts.map(
        ({ slug, title, publishedAt, author, readingTime, tag }) => (
          <Post
            {...{ slug, title, publishedAt, author, readingTime, tag }}
            key={slug}
          />
        )
      )} */}

      {data.map(({ attributes }) => {
        const authorPicture = getStrapiMedia(
          attributes.authorBio.data?.attributes.avatar.data.attributes.url
        );
        const authorName = attributes.authorBio.data?.attributes.name;
        const tag = attributes.tag.data?.attributes.tag;

        return (
          <Post
            {...{
              slug: attributes.slug,
              title: attributes.title,
              publishedAt: attributes.publishedAt,
              author: {
                name: authorName,
                picture: authorPicture,
              },
              readingTime: attributes.readingTime,
              tag,
            }}
            key={attributes.slug}
          />
        );
      })}
    </div>
  );
}
