"use client";

import SectionHeader from "@/app/[locale]/calculate/components/ChooseModel/SectionHeader";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_MODEL,
  CONSTRUCTOR_MODELS_SPEC,
  CONSTRUCTOR_WHICH_IS_BEST,
} from "@/app/[locale]/utils/constants";
import { useContext } from "react";

const models = Object.keys(CONSTRUCTOR_MODELS_SPEC) as Array<
  keyof typeof CONSTRUCTOR_MODELS_SPEC
>;

export default function Model() {
  const { constructorModel, setConstructorModel } =
    useContext(ConstructorContext);

  return (
    <div className="flex flex-col">
      <SectionHeader
        title={CONSTRUCTOR_MODEL}
        clarification={CONSTRUCTOR_WHICH_IS_BEST}
      />
      <div className="flex gap-1 flex-col">
        {models.map((model) => (
          <div
            key={model}
            className={`
              flex
              flex-col
              md:gap-2
              gap-1
              p-4
              items-start
              border-2
              border-solid
              rounded-xl
              cursor-pointer
              w-full
              ${
                constructorModel.model === model
                  ? "border-base-red"
                  : "border-option-border "
              }
            `}
            onClick={() =>
              setConstructorModel((prevState: ConstructorModel) => ({
                ...prevState,
                model,
              }))
            }
          >
            <p className="font-semibold [font-size:_clamp(14px,2vw,16px)]">
              {model}
            </p>
            <p className="font-walsheim leading-[1.2] font-normal [font-size:_clamp(10px,2vw,14px)]">
              {CONSTRUCTOR_MODELS_SPEC[model].panelTechnology}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
