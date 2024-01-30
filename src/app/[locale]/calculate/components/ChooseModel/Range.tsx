import {
  ObjectKeys,
  RangeProps,
} from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import { ChangeEvent, useContext } from "react";

export default function Range({
  text,
  paramsKey,
  values,
  clarification,
  rangeSubCategory,
  setError,
}: RangeProps) {
  const { measure1, measure2, upperLimit, lowerLimit, name1, name2 } = values;
  const {
    constructorModel,
    setConstructorModel,
    isGenerateModel,
    setIsGenerateModel,
  } = useContext(ConstructorContext);

  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    paramsKey: ObjectKeys<ConstructorModel>
  ) => {
    isGenerateModel && setIsGenerateModel(false);
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
    const { value } = e.target;

    if (+value < +lowerLimit) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: `Minimum permissible value is ${lowerLimit}`,
      }));
      return;
    }

    if (upperLimit && +value > +upperLimit) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: `Maximum permissible value is ${upperLimit}`,
      }));
      return;
    }

    setError((prevState) => {
      return {
        ...prevState,
        [rangeSubCategory]: "",
      };
    });
  };

  return (
    <div>
      <span className="[font-size:_clamp(12px,2vw,16px)] font-walsheim font-medium mb-3 -tracking-[0.32px]">
        {text}{" "}
      </span>
      <span className="font-walsheim text-dark-gray-650 [font-size:_clamp(12px,2vw,16px)] -tracking-[0.32px]">
        {clarification}
      </span>
      <div className="flex gap-2">
        <div className="flex items-center flex-col gap-2 w-1/2">
          <input
            className="
              p-3
              border-2
              rounded-xl
              border-solid
              border-[#252525]
              focus:border-base-red
              focus:outline-none
              bg-get-in-touch-client
              text-center
              md:max-w-[145px]
              max-[768px]:w-full
              [font-size:_clamp(11px,2vw,14px)]
              placeholder:[font-size:_clamp(11px,2vw,14px)]
            "
            placeholder="Enter value"
            name={name1}
            value={
              //@ts-ignore
              constructorModel[paramsKey][name1]
            }
            onChange={(e) => {
              onChange(e, paramsKey as ObjectKeys<ConstructorModel>);
            }}
            onBlur={(e) => onBlur(e, rangeSubCategory, lowerLimit, upperLimit)}
          />
          <span className="text-sm font-walsheim leading-[1.2] font-normal">
            {measure1}
          </span>
        </div>
        <div className="flex items-center flex-col gap-2 w-1/2">
          <input
            className="
              p-3
              border-2
              rounded-xl
              border-solid
              border-[#252525]
              focus:border-base-red
              focus:outline-none
              bg-get-in-touch-client
              text-center
              md:max-w-[145px]
              max-[768px]:w-full
              [font-size:_clamp(11px,2vw,14px)]
              placeholder:[font-size:_clamp(11px,2vw,14px)]
            "
            placeholder="Enter value"
            name={name2}
            value={
              //@ts-ignore
              constructorModel[paramsKey][name2]
            }
            onChange={(e) => {
              onChange(e, paramsKey as ObjectKeys<ConstructorModel>);
            }}
            onBlur={(e) => onBlur(e, rangeSubCategory, lowerLimit, upperLimit)}
          />
          <span className="text-sm font-walsheim leading-[1.2] font-normal">
            {measure2}
          </span>
        </div>
      </div>
    </div>
  );
}
