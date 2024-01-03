"use client";

import Options from "@/app/[locale]/components/common/DropdownInput/Options";
import SelectedOption from "@/app/[locale]/components/common/DropdownInput/SelectedOption";
import { DropdownInputProps } from "@/app/[locale]/components/common/DropdownInput/types";
import { useRef, useState } from "react";

export default function DropdownInput({
  placeholder,
  register,
  externalStyle,
  error,
  name,
  setValue,
  dropDownValues,
}: DropdownInputProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [isSelection, setIsSelection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelection = (serviceName: string) => {
    setIsSelection(false);
    setSelectedOption(serviceName);
    setValue(name, serviceName, { shouldValidate: true });
  };

  return (
    <div className={`${externalStyle} flex relative`}>
      <div className="bg-transparent border-b-2 border-solid border-base-red outline-none pr-2 flex">
        <SelectedOption
          selectedOption={selectedOption}
          externalStyle={externalStyle}
          setIsSelection={setIsSelection}
          dropdownRef={dropdownRef}
          placeholder={placeholder}
        />
        {isSelection && (
          <div
            ref={dropdownRef}
            className="
              max-h-[200px]
              overflow-y-scroll
              absolute
              codeDropdown
              p-2
              border
              border-solid
              border-[#d0d8e91a]
              rounded-[5px]
              bg-[#474545b3]
              backdrop-blur-[50px]
              translate-y-[52px]
              z-10
              w-full
              whitespace-nowrap 
            "
          >
            <Options
              handleSelection={handleSelection}
              optionsList={dropDownValues}
            />
          </div>
        )}
      </div>

      {error && (
        <div className="absolute text-xs text-base-red bottom-0 translate-y-full">
          {error.message!.toString()}
        </div>
      )}
    </div>
  );
}
