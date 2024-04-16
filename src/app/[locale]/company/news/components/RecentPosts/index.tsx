import { StrapiBlogsWithPagination } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import Link from "next/link";

const getRecentPosts = async () => {
  try {
    const path = `/blogs`;
    const urlParamsObject = {
      // locale: "de",
      sort: { createdAt: "desc" },
      populate: {
        tag: {
          populate: ["tag"],
        },
      },
      fields: ["title", "slug"],
      pagination: {
        page: 1,
        pageSize: 5,
      },
    };
    const responseData = await fetchAPI(path, urlParamsObject);
    return responseData as StrapiBlogsWithPagination;
  } catch (error) {
    return {
      data: [],
    };
  }
};

export default async function RecentPosts({ heading }: { heading: string }) {
  const recentPosts = await getRecentPosts();

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
        {heading}
      </div>
      {recentPosts.data?.map(({ id, attributes: { title, tag } }) => (
        <Link
          key={id}
          href={`news/${id}`}
          className="py-3 hover:text-base-red border-t border-solid border-[#191919] leading-[150%]"
        >
          {tag.data && (
            <div className="[font-size:_clamp(8px,1vw,12px)] uppercase font-extrabold text-[#505050] mb-1">
              {tag.data.attributes.tag}
            </div>
          )}
          <div className="[font-size:_clamp(12px,1vw,16px)] -tracking-[0.32px] font-normal">
            {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
          </div>
        </Link>
      ))}
    </aside>
  );
}
