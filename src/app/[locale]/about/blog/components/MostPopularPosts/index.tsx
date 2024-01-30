import {
  BLOG_MOST_POPULAR,
  BLOG_POSTS,
} from "@/app/[locale]/about/blog/constants";
import Link from "next/link";

export default function MostPopularPosts() {
  const mostPopularPostsIds = [1, 2, 3];
  const mostPopularPosts = BLOG_POSTS.filter(({ id }) =>
    mostPopularPostsIds.includes(id)
  );

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
        max-w-[315px]
        flex-col
        self-start
      "
    >
      <div className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold mb-4">
        {BLOG_MOST_POPULAR}
      </div>
      {mostPopularPosts.map(({ type, title, id }) => (
        <Link
          key={title}
          href={`blog/${id}`}
          className="py-3 hover:text-base-red border-t border-solid border-[#191919]"
        >
          <div className="[font-size:_clamp(8px,1vw,12px)] uppercase font-extrabold text-[#505050] mb-1">
            {type}
          </div>
          <div className="leading-[130%] [font-size:_clamp(12px,1vw,16px)] -tracking-[0.32px] font-normal">
            {title}
          </div>
        </Link>
      ))}
    </div>
  );
}
