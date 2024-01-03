"use client";

import { SelectedOptionProps } from "@/app/[locale]/components/common/DropdownInput/types";
import { COUNTRIES_LIST } from "@/app/[locale]/components/common/PhoneNumberInput";
import Image from "next/image";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

export default function SelectedOption({
  selectedOption,
  externalStyle,
  setIsSelection,
  dropdownRef,
  placeholder,
}: SelectedOptionProps) {
  const outsideClickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !outsideClickRef.current?.contains(event.target as HTMLElement) &&
        !dropdownRef.current?.contains(event.target as HTMLElement)
      ) {
        setIsSelection(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsSelection]);

  return (
    <div
      className={`${externalStyle} inline-flex justify-center items-center gap-2 cursor-pointer flex-shrink-0 ${
        selectedOption ? "" : "text-[#9ca3af]"
      }`}
      onClick={() => setIsSelection((prevState) => !prevState)}
      ref={outsideClickRef}
    >
      {selectedOption || placeholder}
      <Image
        src={`/images/input/triangle.svg`}
        alt="triangle"
        width={16}
        height={16}
      />
    </div>
  );
}
