"use client";

import { TagsFilterProps } from "@/app/[locale]/company/resources/types";
import Button from "@/app/[locale]/components/common/Button";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import {
  DOCUMENTS_FILTER,
  DOCUMENTS_RESET,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";

export default function TagsFilter({ tags }: TagsFilterProps) {
  // const { documentsLoading } = useContext(DocumentsContext);
  // const { setFilterModels, filterModels } = useContext(DocumentsContext);
  // if (documentsLoading) return;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageURL = (tag: string) => {
    const params = new URLSearchParams(searchParams);
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

  return (
    <div
      className="
        min-[920px]:sticky
        min-[920px]:top-[79px]
        top-[63px]
        z-30
        pb-2
        pt-[6px]
        bg-black
        backdrop-blur-3xl
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
          <div className="text-[#505050]">{DOCUMENTS_FILTER}</div>
          {/* {!!filterModels.length && ( */}
          <Button
            style="textOnly"
            externalStyle="!px-0 ml-2 !py-0 max-[920px]:flex hidden"
            // onClick={() => setFilterModels([])}
          >
            <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red">
              {DOCUMENTS_RESET}
            </span>
            <Image
              alt="close"
              src={`/images/documents/closeRed.svg`}
              width={16}
              height={16}
            />
          </Button>
          {/* )} */}
        </div>
        {tags.map((tag) => {
          // const isAppliedFilter = filterModels.includes(modelName);

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
                  // isAppliedFilter
                  //   ? "border-[#505050] bg-[#2D2D2D]"
                  //   : "border-[#2D2D2D]"
                  ""
                }
              `}
              onClick={() => createPageURL(tag)}
              // onClick={() =>
              //   setFilterModels((prevState) => {
              //     if (isAppliedFilter) {
              //       return prevState.filter((filters) => filters !== modelName);
              //     }
              //     return [...prevState, modelName];
              //   })
              // }
            >
              <span className="font-normal [font-size:_clamp(12px,1vw,16px)] capitalize">
                {tag}
              </span>
              {/* {isAppliedFilter && ( */}
              <Image
                alt="close"
                src={`/images/documents/close.svg`}
                width={16}
                height={16}
              />
              {/* )} */}
            </button>
          );
        })}
        {/* {!!filterModels.length && ( */}
        <Button
          style="textOnly"
          externalStyle="!px-0 ml-2 min-[920px]:flex hidden"
          // onClick={() => setFilterModels([])}
        >
          <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red">
            {DOCUMENTS_RESET}
          </span>
          <Image
            alt="close"
            src={`/images/documents/closeRed.svg`}
            width={16}
            height={16}
          />
        </Button>
        {/* )} */}
      </div>
    </div>
  );
}
