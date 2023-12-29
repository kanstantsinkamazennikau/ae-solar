"use client";

import { COUNTRIES_LIST } from "@/app/[locale]/components/common/PhoneNumberInput";
import Image from "next/image";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

export default function SelectedCodeWithFlag({
  code,
  externalStyle,
  setIsSelection,
  dropdownRef,
}: {
  code: string;
  setIsSelection: Dispatch<SetStateAction<boolean>>;
  externalStyle?: string;
  dropdownRef: RefObject<HTMLDivElement>;
}) {
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
      <Image
        src={`/images/input/${countryWithCode?.flagIcon}`}
        alt={countryWithCode?.flagIcon || ""}
        width={24}
        height={24}
      />
      {countryWithCode?.code}
      <Image
        src={`/images/input/triangle.svg`}
        alt="triangle"
        width={24}
        height={24}
      />
    </div>
  );
}
