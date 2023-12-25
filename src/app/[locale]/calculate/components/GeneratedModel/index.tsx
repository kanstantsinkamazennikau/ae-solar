"use client";

import ShortDetails from "@/app/[locale]/calculate/components/GeneratedModel/ShortDetails";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_YOUR_MODEL_IS,
  HEADER_SUBNAVIGATION_PANELS_MODELS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";

export default function GeneratedModel() {
  const { constructorModel, isGenerateModel } = useContext(ConstructorContext);
  const modelIcon = HEADER_SUBNAVIGATION_PANELS_MODELS.filter((model) =>
    model.includes(constructorModel.model)
  )[0];

  return (
    isGenerateModel && (
      <div className="w-full h-[900px] bg-[url('/images/option/Back.png')] bg-center bg-contain flex mb-11 flex-col items-center relative bg-no-repeat">
        <div className="flex flex-col gap-4 items-center justify-center relative max-w-[800px] w-full">
          <p className="text-dark-gray-650 text-xl -tracking-[0.4x] font-semibold">
            {CONSTRUCTOR_YOUR_MODEL_IS}
          </p>
          <div className="flex gap-3 mb-8">
            <Image
              src={`/images/models/${modelIcon}`}
              alt={modelIcon}
              priority
              width={48}
              height={48}
            />
            <span className="text-[64px] -tracking-[0.64x] font-bold leading-none">
              {constructorModel.model}
            </span>
          </div>
          <Image
            src={`/images/option/glow.png`}
            alt="glow.png"
            priority
            width={800}
            height={60}
            className="absolute -bottom-[60px]"
          />
        </div>
        <Image
          src={`/images/option/${constructorModel.model}.png`}
          alt={constructorModel.model}
          priority
          width={964}
          height={615}
          className="absolute bottom-0"
        />
        <div className="fade-strip-bottom" />

        <ShortDetails />
      </div>
    )
  );
}
