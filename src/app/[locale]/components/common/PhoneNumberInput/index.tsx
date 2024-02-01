"use client";

import CodesListWithFlags from "@/app/[locale]/components/common/PhoneNumberInput/CodesListWithFlags";
import SelectedCodeWithFlag from "@/app/[locale]/components/common/PhoneNumberInput/SelectedCodeWithFlag";
import { PhoneNumberInputProps } from "@/app/[locale]/components/common/PhoneNumberInput/types";
import { useRef, useState } from "react";

export const COUNTRIES_LIST = [{ code: "+49" }, { code: "+375" }];

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
              border-2
              border-solid
              border-option-border
              rounded-[12px]
              bg-[#131313d9]
              backdrop-blur-[50px]
              min-[920px]:items-center
              shadow-[0_4px_25px_0px_rgba(0,0,0,0.65)]
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
          className="bg-transparent outline-none placeholder:[font-size:_clamp(20px,2vw,30px)]"
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
