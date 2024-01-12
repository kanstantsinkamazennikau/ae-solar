"use client";

import CodesListWithFlags from "@/app/[locale]/components/common/PhoneNumberInput/CodesListWithFlags";
import SelectedCodeWithFlag from "@/app/[locale]/components/common/PhoneNumberInput/SelectedCodeWithFlag";
import { PhoneNumberInputProps } from "@/app/[locale]/components/common/PhoneNumberInput/types";
import { useRef, useState } from "react";

export const COUNTRIES_LIST = [
  { flagIcon: "germany.png", code: "+49" },
  { flagIcon: "england.png", code: "+375" },
  { flagIcon: "germany.png", code: "+491" },
  { flagIcon: "england.png", code: "+374" },
  { flagIcon: "germany.png", code: "+492" },
  { flagIcon: "england.png", code: "+376" },
];

export default function PhoneNumberInput({
  placeholder,
  register,
  externalStyle,
  error,
  name,
  setValue,
  ...props
}: PhoneNumberInputProps) {
  const [selectedCode, setSelectedCode] = useState("+49");
  const [isSelection, setIsSelection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelection = (code: string) => {
    setSelectedCode(code);
    setIsSelection(false);
    setValue("code", code);
  };

  return (
    <div className={`${externalStyle} flex relative min-[640px]:w-auto w-full`}>
      <div className="bg-transparent border-b-2 border-solid border-base-red outline-none pr-2 flex w-full">
        <SelectedCodeWithFlag
          code={selectedCode}
          externalStyle={externalStyle}
          setIsSelection={setIsSelection}
          dropdownRef={dropdownRef}
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
            "
          >
            <CodesListWithFlags handleSelection={handleSelection} />
          </div>
        )}
        <input
          placeholder={placeholder}
          {...register}
          {...props}
          className="bg-transparent outline-none"
        />
      </div>

      {error && (
        <div className="absolute text-xs text-base-red bottom-0 translate-y-full">
          {error.message!.toString()}
        </div>
      )}
    </div>
  );
}
