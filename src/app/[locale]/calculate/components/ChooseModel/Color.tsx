"use client";

import { ColorProps } from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import Image from "next/image";
import { useContext } from "react";

export default function Color({ text, paramsKey, values }: ColorProps) {
  const {
    constructorModel,
    setConstructorModel,
    isGenerateModel,
    setIsGenerateModel,
  } = useContext(ConstructorContext);

  const onClickHandler = (color: string) => {
    isGenerateModel && setIsGenerateModel(false);
    setConstructorModel((prevState: ConstructorModel) => ({
      ...prevState,
      [paramsKey]: color,
    }));
  };

  return (
    <div key={text}>
      <span className="[font-size:_clamp(12px,2vw,16px)] font-walsheim font-medium mb-3 -tracking-[0.32px]">
        {text}
      </span>
      <div className="flex flex-col gap-1">
        {values.map((value) => {
          const { color, icon } = value;
          return (
            <div
              key={color}
              className={`flex items-center gap-2 p-3 cursor-pointer ${
                constructorModel[paramsKey] === color
                  ? "constructor-model-picker-selected-border"
                  : "constructor-model-picker-border"
              }`}
              onClick={() => onClickHandler(color)}
            >
              <Image
                src={`/images/option/${icon}`}
                alt={icon}
                priority
                width={16}
                height={16}
              />
              <span className="[font-size:_clamp(11px,2vw,14px)] font-semibold leading-[0.9] -tracking-[0.42px]">
                {color}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
