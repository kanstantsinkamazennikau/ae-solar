"use client";

import SectionHeader from "@/app/[locale]/constructor/components/ModelPicker/SectionHeader";
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
export default function Model() {
  // const { constructorModel, setConstructorModel } =
  //   useContext(ConstructorContext);
  const models = Object.keys(CONSTRUCTOR_MODELS_SPEC) as Array<string>;

  return (
    <div className="flex flex-col">
      <SectionHeader
        title={CONSTRUCTOR_MODEL}
        clarification={CONSTRUCTOR_WHICH_IS_BEST}
      />
      <div className="flex gap-1 flex-col">
        {["asd", "dasd"].map((model) => (
          <div
            key={model}
            // className={`flex flex-col gap-2 p-4 items-start border-2 border-solid rounded-xl cursor-pointer ${
            //   constructorModel.model === model
            //     ? "border-base-red"
            //     : "border-option-border "
            // }`}
            // onClick={() =>
            //   setConstructorModel((prevState: ConstructorModel) => ({
            //     ...prevState,
            //     model,
            //   }))
            // }
          >
            <p className="text-base font-semibold">{model}</p>
            <p className="font-walsheim text-sm leading-[1.2] font-normal">
              {CONSTRUCTOR_MODELS_SPEC[model].panelTechnology}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
