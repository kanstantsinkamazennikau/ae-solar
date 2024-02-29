import { RecentPost } from "@/app/[locale]/company/resources/components/RecentPosts/types";
import { BLOG_RECENT_POSTS } from "@/app/[locale]/company/resources/constants";
import Link from "next/link";
import { load } from "outstatic/server";

async function getRecentPostsData() {
  const db = await load();
  const recentPosts = await db
    .find({
      collection: "blog",
    })
    .sort({ publishedAt: -1 })
    .project(["title", "slug"])
    .limit(5)
    .toArray();

  return recentPosts as RecentPost[];
}

export default async function RecentPosts() {
  const recentPosts = await getRecentPostsData();

  return (
    <aside
      className="
        flex
        p-7
        rounded-xl
        w-full
        flex-col
        self-start
      "
    >
      <div className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold mb-4">
        {BLOG_RECENT_POSTS}
      </div>
      {recentPosts.map(({ title, slug }) => (
        <Link
          key={title}
          href={`blog/${slug}`}
          className="py-3 hover:text-base-red border-t border-solid border-[#191919] leading-[150%]"
        >
          {/* <div className="[font-size:_clamp(8px,1vw,12px)] uppercase font-extrabold text-[#505050] mb-1">
            {type}
          </div> */}
          <div className="[font-size:_clamp(12px,1vw,16px)] -tracking-[0.32px] font-normal">
            {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
          </div>
        </Link>
      ))}
    </aside>
  );
}
