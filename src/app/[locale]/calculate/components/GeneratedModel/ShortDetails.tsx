import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import {
  CONSTRUCTOR_MODELS_SHORT_DETAILS,
  CONSTRUCTOR_MODELS_SHORT_DETAILS_SPECS,
} from "@/app/[locale]/utils/constants";
import { useContext } from "react";

export default function ShortDetails() {
  const { constructorModel } = useContext(ConstructorContext);

  const seletedModelSpecs =
    CONSTRUCTOR_MODELS_SHORT_DETAILS_SPECS[constructorModel.model];
  const selectedModelSpecsKeys = Object.keys(seletedModelSpecs);

  return (
    <>
      <div className="inline-flex px-10 py-8 flex-col justify-center items-center gap-2 rounded-[20px] border border-[#9199B526] backdrop-blur-[50px] absolute bottom-0">
        <div className="pb-3 border-b-[1px] border-solid border-[#9199B5] w-full">
          <p className="text-xl leading-[120%] font-semibold text-transparent">
            {CONSTRUCTOR_MODELS_SHORT_DETAILS}
          </p>
        </div>
        <div className="flex flex-col">
          {selectedModelSpecsKeys.map((key) => {
            const { parameter, value } =
              seletedModelSpecs[key as keyof typeof seletedModelSpecs];

            return (
              <div
                key={parameter}
                className="flex py-1 border-b-[1px] border-dashed border-b-[#9199b526] justify-between gap-5"
              >
                <div className="text-[#9199B5] text-base leading-[150%] font-normal text-transparent">
                  {parameter}
                </div>
                <div className="font-normal leading-[150%] text-transparent min-w-[142px]">
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="inline-flex px-10 py-8 flex-col justify-center items-center gap-2 rounded-[20px] border border-transparent backdrop-blur-[50px] absolute bottom-0 z-30">
        <div className="pb-3 border-b-[1px] border-solid border-[#9199B5] w-full">
          <p className="text-xl leading-[120%] font-semibold">
            {CONSTRUCTOR_MODELS_SHORT_DETAILS}
          </p>
        </div>
        <div className="flex flex-col">
          {selectedModelSpecsKeys.map((key) => {
            const { parameter, value } =
              seletedModelSpecs[key as keyof typeof seletedModelSpecs];

            return (
              <div
                key={parameter}
                className="flex py-1 border-b-[1px] border-dashed border-b-[#9199b526] justify-between gap-5"
              >
                <div className="text-[#9199B5] text-base leading-[150%] font-normal">
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
