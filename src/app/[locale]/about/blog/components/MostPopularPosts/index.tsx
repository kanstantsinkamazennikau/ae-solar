import { TheMostPopularPost } from "@/app/[locale]/about/blog/components/MostPopularPosts/types";
import { BLOG_MOST_POPULAR } from "@/app/[locale]/about/blog/constants";
import Link from "next/link";
import { getDocumentBySlug } from "outstatic/server";

const mostPopularPostSlugs = ["test2", "test4", "test6"];

async function getTheMostPopularPostsData() {
  const theMostPopularPosts = await Promise.all(
    mostPopularPostSlugs.map((slug) =>
      getDocumentBySlug("blog", slug, ["title", "slug"])
    )
  );

  return theMostPopularPosts as TheMostPopularPost[];
}

export default async function MostPopularPosts() {
  const theMostPopularPosts = await getTheMostPopularPostsData();

  return (
    <div
      className="
        flex
        p-7
        rounded-xl
        border
        border-solid
        border-option-border
        bg-[#0D0D0D]
        w-full
        flex-col
        self-start
      "
    >
      <div className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold mb-4">
        {BLOG_MOST_POPULAR}
      </div>
      {theMostPopularPosts.map(({ title, slug }) => (
        <Link
          key={title}
          href={`blog/${slug}`}
          className="py-3 hover:text-base-red border-t border-solid border-[#191919]"
        >
          {/* <div className="[font-size:_clamp(8px,1vw,12px)] uppercase font-extrabold text-[#505050] mb-1">
            {type}
          </div> */}
          <div className="leading-[130%] [font-size:_clamp(12px,1vw,16px)] -tracking-[0.32px] font-normal">
            {title}
          </div>
        </Link>
      ))}
    </div>
  );
}
