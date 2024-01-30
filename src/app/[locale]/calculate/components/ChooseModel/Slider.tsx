"use client";

import { SliderProps } from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import { useContext } from "react";

export default function Slider({ text, values, paramsKey }: SliderProps) {
  const {
    constructorModel,
    setConstructorModel,
    isGenerateModel,
    setIsGenerateModel,
  } = useContext(ConstructorContext);

  const onClickHandler = (value: string) => {
    isGenerateModel && setIsGenerateModel(false);
    setConstructorModel((prevState: ConstructorModel) => ({
      ...prevState,
      [paramsKey]: value,
    }));
  };

  return (
    <div>
      <span className="[font-size:_clamp(12px,2vw,16px)] font-walsheim font-medium mb-3 -tracking-[0.32px]">
        {text}
      </span>
      <div className="constructor-model-picker-border flex justify-center items-center border-option-border gap-1 [&>*:last-child>div:last-child]:hidden">
        {values.map((value) => (
          <div
            key={value}
            className="flex justify-between items-center cursor-pointer gap-1 flex-1"
          >
            <div
              className={`flex justify-between items-center cursor-pointer flex-1 ${
                constructorModel[paramsKey] === value
                  ? "constructor-model-picker-selected-outline"
                  : ""
              }`}
              onClick={() => onClickHandler(value)}
            >
              <div className="px-[14px] py-3 w-full flex justify-center [font-size:_clamp(11px,2vw,14px)] font-semibold leading-[0.9] -tracking-[0.42px] whitespace-nowrap">
                {value}
              </div>
            </div>
            <div className="w-[1px] h-[10px] ml-1 mr-1 bg-[#252525]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
