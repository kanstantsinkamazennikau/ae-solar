"use client";

import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import {
  DOCUMENTS_FILTERS,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function Filter() {
  const { setFiltersModel, filtersModel } = useContext(DocumentsContext);

  return (
    <div
      className="
        sticky
        min-[920px]:top-[80px]
        top-[64px]
        z-30
        pb-2
        bg-black
        backdrop-blur-3xl
      "
    >
      <div
        className="
          flex
          gap-1
          items-center
        "
      >
        <span className="mr-2 font-semibold [font-size:_clamp(12px,1.5vw,16px)]">
          {DOCUMENTS_FILTERS}
        </span>
        {HEADER_SUBNAVIGATION_PANELS_MODELS.map((panel) => {
          const modelName = panel.split(".")[0];

          return (
            <div
              key={panel}
              className={`
            flex
            items-center
            gap-[6px]
            cursor-pointer
            px-[14px]
            py-[10px]
            border-2
            border-solid
            rounded-[100px]
            ${
              filtersModel === modelName
                ? " border-base-red"
                : "border-[#505050]"
            }
          `}
              onClick={() =>
                setFiltersModel(filtersModel === modelName ? "" : modelName)
              }
            >
              <Image
                alt="model"
                src={`/images/models/${panel}`}
                width={16}
                height={16}
              />
              <span className="font-normal [font-size:_clamp(12px,1.5vw,16px)]">
                {modelName}
              </span>
            </div>
          );
        })}
      </div>

      <hr className="bg-option-border h-[1px] border-none w-full mt-2" />
    </div>
  );
}
