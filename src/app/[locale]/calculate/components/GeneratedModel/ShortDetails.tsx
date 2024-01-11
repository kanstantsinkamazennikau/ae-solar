"use client";

import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_MODELS_SHORT_DETAILS,
  CONSTRUCTOR_MODELS_SHORT_DETAILS_SPECS,
  CONSTRUCTOR_YOUR_MODEL_IS,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function ShortDetails() {
  const { constructorModel } = useContext(ConstructorContext);
  const modelIcon = HEADER_SUBNAVIGATION_PANELS_MODELS.filter((model) =>
    model.includes(constructorModel.model)
  )[0];

  const seletedModelSpecs =
    CONSTRUCTOR_MODELS_SHORT_DETAILS_SPECS[constructorModel.model];
  const selectedModelSpecsKeys = Object.keys(seletedModelSpecs);

  return (
    <>
      <div className="flex self-center min-[500px]:px-5 md:px-10 min-[500px]:py-4 md:py-8 flex-col justify-center items-center gap-2 rounded-[20px] border border-transparent backdrop-blur-[50px] min-[500px]:absolute relative bottom-0">
        <div className="pb-3 border-b-[1px] border-solid border-[#9199B5] w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative max-w-[800px] w-full">
            <p className="text-[#9199B5] text-xl [font-size:_clamp(11px,2vw,20px)] -tracking-[0.4x] font-semibold">
              {CONSTRUCTOR_YOUR_MODEL_IS}
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={`/images/models/${modelIcon}`}
                alt={modelIcon}
                priority
                width={48}
                height={48}
                className="md:w-12 md:h-12 h-6 w-6"
              />
              <div className="[font-size:_clamp(22px,4vw,64px)] -tracking-[0.64x] font-bold leading-none inline-flex">
                {constructorModel.model}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {selectedModelSpecsKeys.map((key) => {
            const { parameter, value } =
              seletedModelSpecs[key as keyof typeof seletedModelSpecs];
            return (
              <div
                key={parameter}
                className="flex py-1 border-b-[1px] border-dashed border-b-[#9199b526] justify-between gap-5 [font-size:_clamp(12px,2vw,16px)] items-center"
              >
                <div className="text-[#9199B5] leading-[150%] font-normal">
                  {parameter}
                </div>
                <div className="font-normal leading-[150%] min-w-[140px]">
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden self-center min-[500px]:px-5 md:px-10 min-[500px]:py-4 md:py-8 flex-col justify-center items-center gap-2 rounded-[20px] border border-transparent backdrop-blur-[50px] absolute bottom-0 z-30 min-[500px]:flex">
        <div className="pb-3 border-b-[1px] border-solid border-[#9199B5] w-full">
          <div className="flex flex-col gap-4 items-center justify-center relative max-w-[800px] w-full">
            <p className="text-[#9199B5] text-xl [font-size:_clamp(11px,2vw,20px)] -tracking-[0.4x] font-semibold">
              {CONSTRUCTOR_YOUR_MODEL_IS}
            </p>
            <div className="flex gap-3 items-center">
              <Image
                src={`/images/models/${modelIcon}`}
                alt={modelIcon}
                priority
                width={48}
                height={48}
              />
              <div className="[font-size:_clamp(22px,4vw,64px)] -tracking-[0.64x] font-bold leading-none inline-flex">
                {constructorModel.model}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {selectedModelSpecsKeys.map((key) => {
            const { parameter, value } =
              seletedModelSpecs[key as keyof typeof seletedModelSpecs];
            return (
              <div
                key={parameter}
                className="flex py-1 border-b-[1px] border-dashed border-b-[#9199b526] justify-between gap-5 [font-size:_clamp(12px,2vw,16px)] items-center"
              >
                <div className="text-[#9199B5] leading-[150%] font-normal">
                  {parameter}
                </div>
                <div className="font-normal leading-[150%] min-w-[140px]">
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
