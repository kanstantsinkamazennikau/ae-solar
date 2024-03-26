"use client";

import ApplicationsCheckboxes from "@/app/[locale]/calculate/components/ChooseModel/ApplicationsCheckboxes";
import Color from "@/app/[locale]/calculate/components/ChooseModel/Color";
import Range from "@/app/[locale]/calculate/components/ChooseModel/Range";
import SectionHeader from "@/app/[locale]/calculate/components/ChooseModel/SectionHeader";
import Slider from "@/app/[locale]/calculate/components/ChooseModel/Slider";
import {
  CalculateError,
  ColorParamsKey,
  ConstructorSubCategory,
  RangeParamsKey,
  SliderParamsKey,
} from "@/app/[locale]/calculate/components/ChooseModel/types";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_CUSTOMIZE,
  CONSTRUCTOR_MODELS_SPEC,
  CONSTRUCTOR_YOUR_MODEL,
} from "@/app/[locale]/utils/constants";
import isEmptyObjectCheck from "@/app/[locale]/utils/isEmptyObjectcheck";
import { useContext, useEffect, useState } from "react";

export default function Customize() {
  const [error, setError] = useState<CalculateError>({
    power: "",
    dimension: "",
  });

  const { constructorModel, setIsFilterModels } =
    useContext(ConstructorContext);

  useEffect(() => {
    setError({
      power: "",
      dimension: "",
    });
  }, [constructorModel.model]);

  const selectedModel = constructorModel.model;
  const modelParams = CONSTRUCTOR_MODELS_SPEC[selectedModel].params;
  const modelParamsKeys = Object.keys(
    CONSTRUCTOR_MODELS_SPEC[selectedModel].params
  ) as Array<keyof typeof modelParams>;

  return (
    <div className="flex flex-col relative -mt-[70px] top-[70px] md:-mt-0 md:top-0">
      <SectionHeader
        title={CONSTRUCTOR_CUSTOMIZE}
        clarification={CONSTRUCTOR_YOUR_MODEL}
      />
      <div className="flex flex-col gap-6">
        {modelParamsKeys.map((paramsKey) => {
          const param = modelParams[paramsKey];

          if (param.type === "slider") {
            return (
              <Slider
                key={param.text}
                text={param.text}
                values={param.values}
                paramsKey={paramsKey as SliderParamsKey}
              />
            );
          }

          if (param.type === "color") {
            return (
              <Color
                text={param.text}
                paramsKey={paramsKey as ColorParamsKey}
                values={param.values}
                key={param.text}
              />
            );
          }

          if (
            param.type === "range/dimension" ||
            param.type === "range/power"
          ) {
            const rangeSubCategory = param.type.split(
              "/"
            )[1] as ConstructorSubCategory;

            const errorText = error[rangeSubCategory];
            return (
              <div key={param.text}>
                <Range
                  paramsKey={paramsKey as RangeParamsKey}
                  setError={setError}
                  rangeSubCategory={rangeSubCategory}
                  text={param.text}
                  values={param.values}
                  clarification={param.clarification}
                />
                <p className="text-xs text-base-red mt-2 text-center">
                  {errorText}
                </p>
              </div>
            );
          }
          if (param.type === "applications") {
            return (
              <ApplicationsCheckboxes
                key={param.text}
                text={param.text}
                clarification={param.clarification}
                values={param.values}
              />
            );
          }
        })}
      </div>
      <Button
        onClick={() => {
          const isPowerEmpty =
            !constructorModel.powerRange.to ||
            !constructorModel.powerRange.from;
          const isDimensionEmpty =
            !constructorModel.moduleDimension.length ||
            !constructorModel.moduleDimension.width;

          if (isPowerEmpty || isDimensionEmpty) {
            setError((prevState) => ({
              ...prevState,
              power: isPowerEmpty ? "Enter value" : "",
              dimension: isDimensionEmpty ? "Enter value" : "",
            }));
            return;
          }
          if (isEmptyObjectCheck(error)) {
            setIsFilterModels(true);
          }
        }}
        size="normal"
      >
        <span className="text-sm leading-none">
          {/* {CONSTRUCTOR_CONFIGURE_YOUR_MODEL} */}
        </span>
      </Button>
    </div>
  );
}
