"use client";

import { FlagsListProps } from "@/app/[locale]/components/common/ChangeLocale/types";
import Image from "next/image";

export const LOCALIZATION_COUNTRIES_LIST = [
  { flagIcon: "English.svg", abbr: "EN", country: "English" },
  { flagIcon: "Deutsche.svg", abbr: "DE", country: "Deutsch" },
  // { flagIcon: "France.svg", abbr: "FR", country: "Français" },
  // { flagIcon: "China.svg", abbr: "ZN", country: "中文" },
  // { flagIcon: "Russia.svg", abbr: "RU", country: "Русский" },
  { flagIcon: "Poland.svg", abbr: "PL", country: "Polski" },
  // { flagIcon: "Turkey.svg", abbr: "TR", country: "Türkçe" },
  // { flagIcon: "Portugal.svg", abbr: "PT", country: "Português" },
  // { flagIcon: "Spain.svg", abbr: "ES", country: "Español" },
  // { flagIcon: "Italy.svg", abbr: "IT", country: "Italiano" },
  // { flagIcon: "Japan.svg", abbr: "JA", country: "日本語" },
  // { flagIcon: "Arabian.svg", abbr: "AR", country: "اللغة العربية" },
  // { flagIcon: "Bulgaria.svg", abbr: "BG", country: "Български" },
];

export default function FlagsList({
  handleSelection,
  mobileNavigation,
  chooseLanguageText,
}: FlagsListProps) {
  return (
    <>
      {mobileNavigation && (
        <div className="flex gap-1 mb-6 cursor-pointer">
          <Image
            src="/images/whiteArrowRight.svg"
            alt="quote"
            width={12}
            height={12}
            priority
            className="rotate-180"
          />
          {chooseLanguageText}
        </div>
      )}
      {LOCALIZATION_COUNTRIES_LIST.map(({ flagIcon, abbr, country }) => (
        <div
          className={`
            cursor-pointer
            flex
            items-center
            gap-2
            ${mobileNavigation ? "mb-5" : "mb-2"} 
            text-xs
            hover:text-base-red
          `}
          key={abbr}
          onClick={() => handleSelection(abbr)}
        >
          <Image
            src={`/images/input/${flagIcon}`}
            alt="germany"
            width={24}
            height={24}
          />
          <span>{mobileNavigation ? country : abbr}</span>
        </div>
      ))}
    </>
  );
}
