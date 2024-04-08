import { StrapiBlogsWithPagination } from "@/app/[locale]/company/news/components/BlogPostsList/types";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";
import Link from "next/link";

const getMostPopularPosts = async () => {
  try {
    const path = `/blogs`;
    const urlParamsObject = {
      // locale: "de",
      sort: { views: "desc" },
      populate: {
        tag: {
          populate: ["tag"],
        },
      },
      fields: ["title", "slug"],
      pagination: {
        page: 1,
        pageSize: 3,
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

export default async function MostPopularPosts() {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "translation");
  const theMostPopularPosts = await getMostPopularPosts();

  return (
    !!theMostPopularPosts.data?.length && (
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
          {t("Most Popular")}
        </div>
        {theMostPopularPosts.data.map(({ id, attributes: { title, tag } }) => (
          <Link
            key={title}
            href={`news/${id}`}
            className="py-3 hover:text-base-red border-t border-solid border-[#191919] leading-[150%]"
          >
            {tag.data && (
              <div className="[font-size:_clamp(8px,1vw,12px)] uppercase font-extrabold text-[#505050] mb-1">
                {tag.data.attributes.tag}
              </div>
            )}
            <div className="[font-size:_clamp(12px,1vw,16px)] -tracking-[0.32px] font-normal">
              {title}
            </div>
          </Link>
        ))}
      </div>
    )
  );
}
