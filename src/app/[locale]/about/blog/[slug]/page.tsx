import BlogPostStats from "@/app/[locale]/about/blog/components/BlogPostStats";
import { BlogPost } from "@/app/[locale]/about/blog/components/BlogPostsList/types";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
import { markdownToHtml } from "@/app/[locale]/utils/markdownToHtml";
import { getDocumentBySlug } from "outstatic/server";

async function getBlogPostData(slug: string) {
  const blogPost = getDocumentBySlug("blog", slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
  ]) as BlogPost;

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
        {title}
      </div>
      <BlogPostStats
        statistics={{
          publishedAt: blogPostFormatDate(publishedAt),
          author: author?.name,
          readingTime,
        }}
      />
      <div className="flex flex-col mt-14 font-walsheim ">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="max-w-[900px] mx-auto w-full leading-[150%] blog_post_content"
        />
        {/* {content.map(({ sectionHeadline, block, image }, index) => (
          <div key={index}>
            <div className="flex gap-8">
              <div className="[font-size:_clamp(16px,1.5vw,24px)] font-bold leading-[120%] -tracking-[0.24px] w-[300px] flex">
                {sectionHeadline}
              </div>
              <div className="flex flex-col">
                {block &&
                  block.map(({ paragraphs, subtitle }, index) => (
                    <div key={index} className="mb-9 [&>p:last-child]:mb-0">
                      {subtitle && (
                        <div className="[font-size:_clamp(12px,1.5vw,20px)] font-bold font-walsheim leading-[120%] mb-6 max-w-[650px]">
                          {subtitle}
                        </div>
                      )}
                      {!!paragraphs?.length &&
                        paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="[font-size:_clamp(12px,1.5vw,20px)] font-normal font-walsheim leading-[150%] mb-5 max-w-[650px]"
                          >
                            {parse(paragraph)}
                          </p>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
            {image && <BlogPostImage image={image} />}
          </div>
        ))} */}
      </div>
    </div>
  );
}
