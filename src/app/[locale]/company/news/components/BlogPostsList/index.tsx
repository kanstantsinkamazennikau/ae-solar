import Post from "@/app/[locale]/company/news/components/BlogPostsList/Post";
import {
  BlogPost,
  BlogPostsListProps,
} from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { BLOG_POSTS_PER_PAGE } from "@/app/[locale]/company/news/constants";
import { getDocumentSlugs, getDocuments, load } from "outstatic/server";
import { useEffect } from "react";

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

export default async function BlogPostsList({
  currentPage,
  searchParamsTags,
}: BlogPostsListProps) {
  const blogPosts = await getBlogPosts(currentPage, searchParamsTags);
  //  useEffect(() => {

  //  },)
  return (
    <div className="flex flex-col w-full max-w-[945px]">
      {blogPosts.map(
        ({ slug, title, publishedAt, author, readingTime, tag }) => (
          <Post
            {...{ slug, title, publishedAt, author, readingTime, tag }}
            key={slug}
          />
        )
      )}
    </div>
  );
}
