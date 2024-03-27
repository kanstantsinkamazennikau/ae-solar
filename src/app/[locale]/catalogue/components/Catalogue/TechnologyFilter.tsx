"use client";

import SectionHeader from "@/app/[locale]/catalogue/components/Catalogue/SectionHeader";
import FilterCheckbox from "@/app/[locale]/catalogue/components/Catalogue/FilterCheckbox";
import { TechnologyFilterProps } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";

export default function TechnologyFilter({
  checkboxesList,
  showModelIcon,
  showColorIcon,
  filterTitle,
  subCategory,
}: TechnologyFilterProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div className="flex flex-col">
      {filterTitle && <SectionHeader title={t(filterTitle)} />}
      {subCategory && (
        <div className="[font-size:_clamp(12px,2vw,16px)] font-medium -tracking-[0.4px] mb-2 capitalize font-walsheim">
          {t(subCategory)}
        </div>
      )}
      <div className="flex flex-col gap-2">
        {checkboxesList.map(({ placeToSearch, technology, title }) => (
          <FilterCheckbox
            key={technology}
            {...{
              placeToSearch,
              technology,
              title,
              showModelIcon,
              showColorIcon,
            }}
          />
        ))}
      </div>
    </div>
  );
}
