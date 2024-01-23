"use client";

import Button from "@/app/[locale]/components/common/Button";
import { DocumentsContext } from "@/app/[locale]/context/documentsContext";
import {
  DOCUMENTS_FILTER,
  DOCUMENTS_RESET,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function Filter() {
  const { setFilterModels, filterModels } = useContext(DocumentsContext);

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
          flex-wrap
        "
      >
        <span className="mr-2 font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-dark-gray-900">
          {DOCUMENTS_FILTER}
        </span>
        {HEADER_SUBNAVIGATION_PANELS_MODELS.map((panel) => {
          const modelName = panel.split(".")[0];
          const isAppliedFilter = filterModels.includes(modelName);

          return (
            <div
              key={panel}
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
              onClick={() =>
                setFilterModels((prevState) => {
                  if (isAppliedFilter) {
                    return prevState.filter((filters) => filters !== modelName);
                  }
                  return [...prevState, modelName];
                })
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
              {isAppliedFilter && (
                <Image
                  alt="close"
                  src={`/images/documents/close.svg`}
                  width={16}
                  height={16}
                />
              )}
            </div>
          );
        })}
        {!!filterModels.length && (
          <Button
            style="textOnly"
            externalStyle="!px-0 ml-2"
            onClick={() => setFilterModels([])}
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
        )}
      </div>

      <hr className="bg-option-border h-[1px] border-none w-full mt-2" />
    </div>
  );
}
