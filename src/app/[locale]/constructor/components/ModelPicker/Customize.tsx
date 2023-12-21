"use client";

import SectionHeader from "@/app/[locale]/constructor/components/ModelPicker/SectionHeader";
import {
  ColorInterface,
  ConstructorParams,
  ConstructorSubCategory,
  RangeInterface,
} from "@/app/[locale]/constructor/components/ModelPicker/types";
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

export default function Customize() {
  const { constructorModel, setConstructorModel } =
    useContext(ConstructorContext);

  const [error, setError] = useState({ power: {}, dimension: {} });

  const selectedModel = constructorModel.model;
  const modelParams = CONSTRUCTOR_MODELS_SPEC[selectedModel].params;
  const modelParamsKeys = Object.keys(
    CONSTRUCTOR_MODELS_SPEC[selectedModel].params
  ) as Array<keyof typeof modelParams>;

  const inputFieldValidation = (
    e: ChangeEvent<HTMLInputElement>,
    rangeCategoryValue: string,
    paramsKey: string
  ) => {
    const { value } = e.target;

    setConstructorModel((prevState: ConstructorModel) => ({
      ...prevState,
      [paramsKey]: {
        //@ts-ignore
        ...prevState[paramsKey],
        [rangeCategoryValue]: value,
      },
    }));
  };

  const onBlur = (
    e: ChangeEvent<HTMLInputElement>,
    rangeSubCategory: "dimension" | "power",
    rangeCategoryValue: string,
    lowerLimit: string,
    upperLimit?: string
  ) => {
    const { value } = e.target;

    if (+value < +lowerLimit) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: {
          ...prevState[rangeSubCategory],

          [rangeCategoryValue]: `Minimum permissible value is ${lowerLimit}`,
        },
      }));
      return;
    }

    if (upperLimit && +value > +upperLimit) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: {
          ...prevState[rangeSubCategory],

          [rangeCategoryValue]: `Maximum permissible value is ${upperLimit}`,
        },
      }));
      return;
    }

    setError((prevState) => {
      const test = Object.fromEntries(
        Object.entries(prevState[rangeSubCategory]).filter(
          ([key]) => key !== rangeCategoryValue
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
      <div className="flex  flex-col gap-6">
        {modelParamsKeys.map((paramsKey) => {
          const param = modelParams[paramsKey];
          const paramType = param.type as ConstructorParams;

          if (paramType === "slider") {
            const values = param.values as string[];
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

          if (paramType === "color") {
            const values = param.values as ColorInterface[];
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
                          alt="union"
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

          if (paramType.includes("range")) {
            const rangeSubCategory = paramType.split(
              "/"
            )[1] as ConstructorSubCategory;

            const values = param.values as RangeInterface;
            const { measure1, measure2, upperLimit, lowerLimit } = values;

            const errorText = Object.values(
              error[rangeSubCategory]
            )[0] as string;

            return (
              <div key={param.text}>
                <span className="text-base font-walsheim font-medium mb-3 -tracking-[0.32px]">
                  {param.text}
                </span>{" "}
                <span className="font-walsheim text-dark-gray-650 text-base -tracking-[0.32px]">
                  {param.clarification}
                </span>
                <div className="flex gap-2">
                  <div className="flex items-center flex-col gap-2">
                    <input
                      className="p-3 constructor-model-picker-border bg-get-in-touch-client text-center max-w-[145px]"
                      value={
                        //@ts-ignore
                        constructorModel[paramsKey][
                          rangeSubCategory === "dimension" ? "length" : "from"
                        ]
                      }
                      onChange={(e) => {
                        inputFieldValidation(
                          e,
                          rangeSubCategory === "dimension" ? "length" : "from",
                          paramsKey
                        );
                      }}
                      onBlur={(e) =>
                        onBlur(
                          e,
                          rangeSubCategory,
                          rangeSubCategory === "dimension" ? "length" : "from",
                          lowerLimit,
                          upperLimit
                        )
                      }
                    />
                    <span className="text-sm font-walsheim leading-[1.2] font-normal">
                      {measure1}
                    </span>
                  </div>
                  <div className="flex items-center flex-col gap-2">
                    <input
                      className="p-3 constructor-model-picker-border bg-get-in-touch-client text-center max-w-[145px]"
                      value={
                        //@ts-ignore
                        constructorModel[paramsKey][
                          rangeSubCategory === "dimension" ? "width" : "to"
                        ]
                      }
                      onChange={(e) => {
                        inputFieldValidation(
                          e,
                          rangeSubCategory === "dimension" ? "width" : "to",
                          paramsKey
                        );
                      }}
                      onBlur={(e) =>
                        onBlur(
                          e,
                          rangeSubCategory,
                          rangeSubCategory === "dimension" ? "width" : "to",
                          lowerLimit,
                          upperLimit
                        )
                      }
                    />
                    <span className="text-sm font-walsheim leading-[1.2] font-normal">
                      {measure2}
                    </span>
                  </div>
                  <span>{errorText}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
