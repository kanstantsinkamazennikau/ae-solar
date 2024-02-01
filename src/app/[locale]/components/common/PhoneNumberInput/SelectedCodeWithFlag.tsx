"use client";

import { COUNTRIES_LIST } from "@/app/[locale]/components/common/PhoneNumberInput";
import { SelectedCodeWithFlagProps } from "@/app/[locale]/components/common/PhoneNumberInput/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SelectedCodeWithFlag({
  code,
  externalStyle,
  setIsSelection,
  dropdownRef,
}: SelectedCodeWithFlagProps) {
  const countryWithCode = COUNTRIES_LIST.find(
    (country) => country.code === code
  );
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
      className={`${externalStyle} inline-flex justify-center items-center gap-2 cursor-pointer flex-shrink-0`}
      onClick={() => setIsSelection((prevState) => !prevState)}
      ref={outsideClickRef}
    >
      {countryWithCode?.code}
      <Image
        src={`/images/input/triangle.svg`}
        alt="triangle"
        width={16}
        height={16}
      />
    </div>
  );
}
