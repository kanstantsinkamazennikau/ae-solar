import { BLOG_POSTS } from "@/app/[locale]/about/blog/constants";
import Image from "next/image";
import parse from "html-react-parser";
import BlogPostImage from "@/app/[locale]/about/blog/[id]/components/BlogPostImage";

export default function BlogPost({
  params: { id },
}: {
  params: { id: string };
}) {
  const blogPost = BLOG_POSTS.find((post) => post.id === +id);

  if (!blogPost) return <div className="text-center">Post not found</div>;

  const { type, title, statistics, content } = blogPost;
  const statisticsParamsWithIconsMapping = {
    creationDate: "calendar",
    readingTime: "time",
    author: "author",
  };

  return (
    <div className="-mt-[160px] relative z-10">
      <div className="[font-size:_clamp(16px,2vw,24px)] uppercase text-[#B30006] font-extrabold mb-6">
        {type}
      </div>
      <div className="[font-size:_clamp(32px,4vw,64px)] font-semibold leading-[130%] mb-6">
        {title}
      </div>
      <div className="flex [&>*:last-child]:border-none [&>*:first-child]:pl-0 mb-14">
        {Object.keys(statisticsParamsWithIconsMapping).map((statParam) => (
          <div
            key={statParam}
            className="flex border-r border-solid border-base-red px-4 items-center"
          >
            <Image
              src={`/images/about/blog/${
                statisticsParamsWithIconsMapping[
                  statParam as keyof typeof statisticsParamsWithIconsMapping
                ]
              }.svg`}
              alt={statParam}
              width={16}
              height={16}
              className="mr-1"
            />
            <span className="[font-size:_clamp(10px,1vw,14px)] font-bold font-walsheim text-dark-gray-900 leading-[100%]">
              {statistics[statParam as keyof typeof statistics]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {content.map(({ sectionHeadline, block, image }, index) => (
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
        ))}
      </div>
    </div>
  );
}
