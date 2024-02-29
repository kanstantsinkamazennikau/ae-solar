import BlogPostStats from "@/app/[locale]/company/news/components/BlogPostStats";
import { PostProps } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { blogPostFormatDate } from "@/app/[locale]/utils/blogPostFormatDate";
import Image from "next/image";
import Link from "next/link";

export default function Post({
  slug,
  title,
  publishedAt,
  author,
  readingTime,
  tag,
}: PostProps) {
  return (
    <article
      className="
        flex
        md:pt-8
        md:pb-8
        pt-8
        pb-7
        border-b
        border-solid
        border-[#191919]
        md:first:border-t
        md:items-center
        gap-5
        md:flex-row
        flex-col
        items-start
      "
    >
      <div
        className="
          flex
          md:flex-col
          flex-row
          text-[#505050]
          leading-[100%]
          gap-4
          flex-grow-0
          flex-shrink-0
          xl:basis-[200px]
          lg:basis-[150px]
          min-[920px]:basis-[100px]
          md:basis-[100px]
          break-all
        "
      >
        {/* MOBILE VERSION DATE */}

        <div
          className={`
            flex
            items-center
            md:hidden
          `}
        >
          <Image
            src={`/images/about/blog/calendar.svg`}
            alt="calendar"
            width={16}
            height={16}
            className="mr-1"
          />
          <span className="[font-size:_clamp(12px,1vw,14px)] font-bold font-walsheim text-dark-gray-900 leading-[100%]">
            {blogPostFormatDate(publishedAt)}
          </span>
        </div>

        <div className="[font-size:_clamp(20px,2vw,32px)] font-normal -tracking-[1.6] md:block hidden">
          <div
            className={`
              flex
              items-center
            `}
          >
            <Image
              src={`/images/about/blog/calendar.svg`}
              alt="calendar"
              width={16}
              height={16}
              className="mr-1"
            />
            <span className="[font-size:_clamp(12px,1vw,14px)] font-normal font-walsheim text-[#9A9A9A] leading-[100%]">
              {blogPostFormatDate(publishedAt)}
            </span>
          </div>
        </div>
        {tag && (
          <div className="[font-size:_clamp(12px,1vw,16px)] font-extrabold uppercase">
            {tag}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Link href={`/company/news/${slug}`}>
          <h2 className="[font-size:_clamp(16px,1.5vw,24px)] font-bold -tracking-[0.24] hover:text-base-red">
            {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
          </h2>
        </Link>
        <BlogPostStats
          statistics={{
            author: author.name,
            readingTime,
          }}
          dividerColor="gray"
        />
      </div>
    </article>
  );
}
