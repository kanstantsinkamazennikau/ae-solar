import BlogPostStats from "@/app/[locale]/company/news/components/BlogPostStats";
import { BlogPost } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
import { markdownToHtml } from "@/app/[locale]/utils/markdownToHtml";
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

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blogPost = await getBlogPostData(slug);

  if (!blogPost.content)
    return (
      <div className="text-center [font-size:_clamp(20px,2vw,32px)]">
        Post not found
      </div>
    );

  const { title, content, publishedAt, author, readingTime } = blogPost;

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
          author: author?.name,
          readingTime,
        }}
      />
      <div className="flex flex-col mt-14 font-walsheim ">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="max-w-[900px] mx-auto w-full leading-[150%] blog_post_content"
        />
      </div>
    </div>
  );
}
