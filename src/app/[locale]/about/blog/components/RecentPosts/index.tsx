import {
  BLOG_RECENT_POSTS,
  BLOG_POSTS,
} from "@/app/[locale]/about/blog/constants";
import Link from "next/link";

export default function RecentPosts() {
  const recentPosts = BLOG_POSTS.slice(BLOG_POSTS.length - 5);

  return (
    <div
      className="
        flex
        p-7
        rounded-xl
        w-full
        max-w-[315px]
        flex-col
        self-start
      "
    >
      <div className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold mb-4">
        {BLOG_RECENT_POSTS}
      </div>
      {recentPosts.map(({ type, title, id }) => (
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
