"use client";

import { TagsFilterProps } from "@/app/[locale]/company/news/types";
import Button from "@/app/[locale]/components/common/Button";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  DOCUMENTS_FILTER,
  DOCUMENTS_RESET,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function TagsFilter({ tags }: TagsFilterProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const implementTagFilter = (tag: string) => {
    const tagsParams = params.get("tags");
    if (tagsParams?.includes(`&${tag}`)) {
      const filteredTags = tagsParams
        .split("&")
        .filter((paramsTag) => paramsTag !== tag)
        .join("&");
      filteredTags
        ? params.set("tags", `${filteredTags}`)
        : params.delete("tags");
    } else {
      !tagsParams
        ? params.set("tags", `&${tag}`)
        : params.set("tags", `${tagsParams}&${tag}`);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  const resetFilter = () => {
    params.delete("tags");
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className="
        z-30
        pb-2
        pt-[6px]
        bg-black
        backdrop-blur-3xl
        max-md:mt-5
      "
    >
      <div
        className="
          flex
          gap-1
          items-center
          flex-wrap
        "
      >
        <div
          className="
            mr-2
            font-semibold
            [font-size:_clamp(12px,1.5vw,16px)]
            text-dark-gray-900
            max-[920px]:flex
            max-[920px]:w-full
            max-[920px]:justify-between
            max-[920px]:mb-2
          "
        >
          <div className="text-[#505050]">{t("Filter")}</div>
          {!!params.get("tags") && (
            <Button
              style="textOnly"
              externalStyle="!px-0 ml-2 !py-0 max-[920px]:flex hidden"
              onClick={resetFilter}
            >
              <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red">
                {t("Reset")}
              </span>
              <Image
                alt="close"
                src={`/images/documents/closeRed.svg`}
                width={16}
                height={16}
              />
            </Button>
          )}
        </div>
        {tags.map((tag) => {
          const isAppliedFilter = params.get("tags")?.includes(tag);

          return (
            <button
              key={tag}
              className={`
                flex
                items-center
                gap-[6px]
                cursor-pointer
                px-[12px]
                py-[8px]
                border
                border-solid
                rounded-[100px]
                ${
                  isAppliedFilter
                    ? "border-[#505050] bg-[#2D2D2D]"
                    : "border-[#2D2D2D]"
                }
              `}
              onClick={() => implementTagFilter(tag)}
            >
              <span className="font-normal [font-size:_clamp(12px,1vw,16px)] capitalize">
                {tag}
              </span>
              {isAppliedFilter && (
                <Image
                  alt="close"
                  src={`/images/documents/close.svg`}
                  width={16}
                  height={16}
                />
              )}
            </button>
          );
        })}
        {!!params.get("tags") && (
          <Button
            style="textOnly"
            externalStyle="!px-0 ml-2 min-[920px]:flex hidden"
            onClick={resetFilter}
          >
            <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red">
              {t("Reset")}
            </span>
            <Image
              alt="close"
              src={`/images/documents/closeRed.svg`}
              width={16}
              height={16}
            />
          </Button>
        )}
      </div>
    </div>
  );
}
