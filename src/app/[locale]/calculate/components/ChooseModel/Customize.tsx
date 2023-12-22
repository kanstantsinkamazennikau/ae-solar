"use client";

import SectionHeader from "@/app/[locale]/calculate/components/ChooseModel/SectionHeader";
import { ConstructorSubCategory } from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_CUSTOMIZE,
  CONSTRUCTOR_MODELS_SPEC,
  CONSTRUCTOR_YOUR_MODEL,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { ChangeEvent, useContext, useState } from "react";

type ObjectKeys<T> = {
  [K in keyof T]: T[K] extends { [key: string]: any } ? K : never;
}[keyof T];

export default function Customize() {
  const { constructorModel, setConstructorModel } =
    useContext(ConstructorContext);

  const [error, setError] = useState({ power: {}, dimension: {} });

  const selectedModel = constructorModel.model;
  const modelParams = CONSTRUCTOR_MODELS_SPEC[selectedModel].params;
  const modelParamsKeys = Object.keys(
    CONSTRUCTOR_MODELS_SPEC[selectedModel].params
  ) as Array<keyof typeof modelParams>;

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    paramsKey: ObjectKeys<ConstructorModel>
  ) => {
    const { value, name } = e.target;
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setConstructorModel((prevState: ConstructorModel) => ({
        ...prevState,
        [paramsKey]: {
          ...prevState[paramsKey],
          [name]: value,
        },
      }));
    }
  };

  const onBlur = (
    e: ChangeEvent<HTMLInputElement>,
    rangeSubCategory: "dimension" | "power",
    lowerLimit: string,
    upperLimit?: string
  ) => {
    const { value, name } = e.target;

    if (+value < +lowerLimit) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: {
          ...prevState[rangeSubCategory],

          [name]: `Minimum permissible value is ${lowerLimit}`,
        },
      }));
      return;
    }

    if (upperLimit && +value > +upperLimit) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: {
          ...prevState[rangeSubCategory],

          [name]: `Maximum permissible value is ${upperLimit}`,
        },
      }));
      return;
    }

    setError((prevState) => {
      const test = Object.fromEntries(
        Object.entries(prevState[rangeSubCategory]).filter(
          ([key]) => key !== name
        )
      );
      return {
        ...prevState,
        [rangeSubCategory]: test,
      };
    });
  };

  return (
    <div className="flex flex-col">
      <SectionHeader
        title={CONSTRUCTOR_CUSTOMIZE}
        clarification={CONSTRUCTOR_YOUR_MODEL}
      />
      <div className="flex flex-col gap-6">
        {modelParamsKeys.map((paramsKey) => {
          const param = modelParams[paramsKey];

          if (param.type === "slider") {
            const values = param.values;
            return (
              <div key={param.text}>
                <span className="text-base font-walsheim font-medium mb-3 -tracking-[0.32px]">
                  {param.text}
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

          if (param.type === "color") {
            const values = param.values;

            return (
              <div key={param.text}>
                <span className="text-base font-walsheim font-medium mb-3 -tracking-[0.32px]">
                  {param.text}
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
                        onClick={() =>
                          setConstructorModel(
                            (prevState: ConstructorModel) => ({
                              ...prevState,
                              [paramsKey]: color,
                            })
                          )
                        }
                      >
                        <Image
                          src={`/images/option/${icon}`}
                          alt={icon}
                          priority
                          width={16}
                          height={16}
                        />
                        <span className="text-sm font-semibold leading-[0.9] -tracking-[0.42px]">
                          {color}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (param.type.includes("range")) {
            const rangeSubCategory = param.type.split(
              "/"
            )[1] as ConstructorSubCategory;

            const values = param.values;
            const { measure1, measure2, upperLimit, lowerLimit, name1, name2 } =
              values;

            const errorText = Object.values(
              error[rangeSubCategory]
            )[0] as string;

            return (
              <div key={param.text}>
                <span className="text-base font-walsheim font-medium mb-3 -tracking-[0.32px]">
                  {param.text}
                </span>
                <span className="font-walsheim text-dark-gray-650 text-base -tracking-[0.32px]">
                  {param.clarification}
                </span>
                <div className="flex gap-2">
                  <div className="flex items-center flex-col gap-2">
                    <input
                      className="p-3 border-2 rounded-xl border-solid border-[#252525] focus:border-base-red focus:outline-none bg-get-in-touch-client text-center max-w-[145px] "
                      placeholder="Enter value"
                      name={name1}
                      value={
                        //@ts-ignore
                        constructorModel[paramsKey][name1]
                      }
                      onChange={(e) => {
                        onChange(e, paramsKey as ObjectKeys<ConstructorModel>);
                      }}
                      onBlur={(e) =>
                        onBlur(e, rangeSubCategory, lowerLimit, upperLimit)
                      }
                    />
                    <span className="text-sm font-walsheim leading-[1.2] font-normal">
                      {measure1}
                    </span>
                  </div>
                  <div className="flex items-center flex-col gap-2">
                    <input
                      className="p-3 border-2 rounded-xl border-solid border-[#252525] focus:border-base-red focus:outline-none bg-get-in-touch-client text-center max-w-[145px]"
                      placeholder="Enter value"
                      name={name2}
                      value={
                        //@ts-ignore
                        constructorModel[paramsKey][name2]
                      }
                      onChange={(e) => {
                        onChange(e, paramsKey as ObjectKeys<ConstructorModel>);
                      }}
                      onBlur={(e) =>
                        onBlur(e, rangeSubCategory, lowerLimit, upperLimit)
                      }
                    />
                    <span className="text-sm font-walsheim leading-[1.2] font-normal">
                      {measure2}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-base-red mt-2 text-center">
                  {errorText}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
