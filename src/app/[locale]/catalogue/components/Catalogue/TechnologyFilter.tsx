"use client";

import FilterCheckbox from "@/app/[locale]/catalogue/components/Catalogue/FilterCheckbox";
import SectionHeader from "@/app/[locale]/catalogue/components/Catalogue/SectionHeader";
import { TechnologyFilterProps } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { Trans } from "react-i18next";

export default function TechnologyFilter({
  checkboxesList,
  showModelIcon,
  showColorIcon,
  filterTitle,
  subCategory,
}: TechnologyFilterProps) {
  return (
    <div className="flex flex-col">
      {filterTitle && <SectionHeader title={filterTitle} />}
      {subCategory && (
        <div className="[font-size:_clamp(14px,2vw,16px)] font-medium -tracking-[0.4px] mb-2 capitalize font-walsheim">
          <Trans
            components={{
              br: <span />,
            }}
          >
            {subCategory}
          </Trans>
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
