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
  const { constructorModel, setConstructorModel } =
    useContext(ConstructorContext);

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

    if (
      rangeSubCategory === "power" &&
      constructorModel.powerRange.from === constructorModel.powerRange.to
    ) {
      setError((prevState) => ({
        ...prevState,
        [rangeSubCategory]: {
          ...prevState[rangeSubCategory],

          [name]: `Values should be different`,
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
    <div>
      <span className="text-base font-walsheim font-medium mb-3 -tracking-[0.32px]">
        {text}
      </span>{" "}
      <span className="font-walsheim text-dark-gray-650 text-base -tracking-[0.32px]">
        {clarification}
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
            onBlur={(e) => onBlur(e, rangeSubCategory, lowerLimit, upperLimit)}
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
