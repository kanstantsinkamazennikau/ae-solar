"use client";

import { FlagsListProps } from "@/app/[locale]/components/common/ChangeLocale/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { HEADER_CHOOSE_LANGUAGE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

export const LOCALIZATION_COUNTRIES_LIST = [
  { flagIcon: "Deutsche.svg", abbr: "DE", language: "Deutsche" },
  { flagIcon: "English.svg", abbr: "EN", country: "English" },
];

export default function FlagsList({
  handleSelection,
  mobileNavigation,
}: FlagsListProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "navigation");

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
          {t("Choose language")}
        </div>
      )}
      {LOCALIZATION_COUNTRIES_LIST.map(({ flagIcon, abbr }) => (
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
          <span>{abbr}</span>
        </div>
      ))}
    </>
  );
}
