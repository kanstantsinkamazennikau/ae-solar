"use client";

import { SliderProps } from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import { useContext } from "react";

export default function Slider({ text, values, paramsKey }: SliderProps) {
  const { constructorModel, setConstructorModel } =
    useContext(ConstructorContext);

  return (
    <div>
      <span className="text-base font-walsheim font-medium mb-3 -tracking-[0.32px]">
        {text}
      </span>
      <div className="constructor-model-picker-border flex justify-center items-center border-option-border gap-1 [&>*:last-child>div:last-child]:hidden">
        {values.map((value) => (
          <div
            key={value}
            className={`flex justify-between items-center cursor-pointer gap-1 flex-1 ${
              constructorModel[paramsKey] === value
                ? "constructor-model-picker-selected-outline"
                : ""
            }`}
            onClick={() =>
              setConstructorModel((prevState: ConstructorModel) => ({
                ...prevState,
                [paramsKey]: value,
              }))
            }
          >
            <div className="px-[14px] py-3 w-full flex justify-center text-sm font-semibold leading-[0.9] -tracking-[0.42px]">
              {value}
            </div>
            <div className="w-[1px] h-[10px] bg-[#252525]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}