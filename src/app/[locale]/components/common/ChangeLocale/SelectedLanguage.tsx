"use client";

import { LOCALIZATION_COUNTRIES_LIST } from "@/app/[locale]/components/common/ChangeLocale/FlagsList";
import { SelectedLanguageProps } from "@/app/[locale]/components/common/ChangeLocale/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function SelectedLanguage({
  locale,
  externalStyle,
  setIsSelection,
  dropdownRef,
  mobileNavigation,
}: SelectedLanguageProps) {
  const { t } = useClientTranslation(locale, "navigation");
  const countryWithCode = LOCALIZATION_COUNTRIES_LIST.find(
    (country) => country.abbr === locale
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
      className={`${externalStyle} inline-flex justify-between w-full cursor-pointer`}
      onClick={() => setIsSelection((prevState) => !prevState)}
      ref={outsideClickRef}
    >
      {mobileNavigation && (
        <div
          className="flex py-2 min-[920px]:items-center [font-size:_clamp(14px,1.5vw,16px)] leading-[inherit] justify-between cursor-pointer"
          suppressHydrationWarning={true}
        >
          {t("Language")}
        </div>
      )}
      <div className="inline-flex justify-center items-center gap-1 cursor-pointer flex-shrink-0">
        <Image
          src={`/images/input/${countryWithCode?.flagIcon}`}
          alt={countryWithCode?.flagIcon || ""}
          width={16}
          height={16}
        />
        <span className="leading-normal">{countryWithCode?.abbr}</span>
        <Image
          src={`/images/input/triangle.svg`}
          alt="triangle"
          width={8}
          height={8}
          className={`${mobileNavigation ? "w-3 h-3 -rotate-90" : "w-2 h-2"}`}
        />
      </div>
    </div>
  );
}
