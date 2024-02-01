"use client";

import SectionHeader from "@/app/[locale]/calculate/components/ChooseModel/SectionHeader";
import { ApplicationsCheckboxes } from "@/app/[locale]/calculate/components/ChooseModel/types";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import { CONSTRUCTOR_APPLICATIONS_STANDARDS } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { ChangeEvent, useContext } from "react";

export default function ApplicationsCheckboxes({
  text,
  clarification,
  values,
}: ApplicationsCheckboxes) {
  const {
    constructorModel,
    setConstructorModel,
    isGenerateModel,
    setIsGenerateModel,
  } = useContext(ConstructorContext);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const applicationType = e.target.name;

    const { applications } = constructorModel;
    isGenerateModel && setIsGenerateModel(false);

    if (isChecked) {
      setConstructorModel((prevState: ConstructorModel) => ({
        ...prevState,
        applications: [...prevState.applications, e.target.name],
      }));
    } else {
      if (applications.length === 1) return;
      const filteredApplications = applications.filter(
        (application) => application !== applicationType
      );
      setConstructorModel((prevState: ConstructorModel) => ({
        ...prevState,
        applications: filteredApplications,
      }));
    }
  };

  return (
    <div className="flex flex-col mb-6">
      <SectionHeader title={text} clarification={clarification} />
      <div className="flex flex-col gap-3">
        {CONSTRUCTOR_APPLICATIONS_STANDARDS.map(({ type, clarification }) => {
          const isDisabledCheckbox = !values.includes(type);

          return (
            <div
              key={type}
              className="flex gap-[6px] justify-between items-center"
            >
              <label
                className={`flex items-center w-full ${
                  isDisabledCheckbox
                    ? "cursor-default text-dark-gray-650"
                    : "cursor-pointer"
                }`}
                htmlFor={type}
              >
                <input
                  key={type}
                  type="checkbox"
                  name={type}
                  value={type}
                  id={type}
                  checked={constructorModel.applications.includes(type)}
                  disabled={isDisabledCheckbox}
                  className={`
                    grid
                    place-content-center
                    appearance-none
                    w-4
                    h-4
                    border-2
                    border-[#E7E7E7]
                    rounded-[3px]
                    bg-black
                    before:shadow-[inset_1em_1em_#F60109]
                    before:content-['']
                    before:w-2
                    before:h-2
                    before:rounded-[1px]
                    before:scale-0
                    before:transition-transform
                    before:delay-150
                    before:ease-in-out
                    checked:before:scale-[1]
                    disabled:border-dark-gray-650
                    cursor-pointer               
                  `}
                  onChange={handleOnChange}
                />
                <span
                  className={`
                    ml-[6px]
                    font-semibold
                    [font-size:_clamp(11px,2vw,14px)]
                  `}
                >
                  {type}
                </span>
              </label>
              <div className="group/item relative">
                <Image
                  src={`/images/info.svg`}
                  alt={"info"}
                  priority
                  width={19.5}
                  height={19.5}
                  className="cursor-pointer"
                />
                <p className="hidden group-hover/item:block absolute right-7 top-0 w-[200px] bg-dark-gray-700 p-2 rounded-md text-xs z-10">
                  {clarification}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
