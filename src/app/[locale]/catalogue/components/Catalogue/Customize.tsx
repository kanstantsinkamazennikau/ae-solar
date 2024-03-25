"use client";

import SectionHeader from "@/app/[locale]/calculate/components/ChooseModel/SectionHeader";
import ModuleDimensions from "@/app/[locale]/catalogue/components/Catalogue/ModuleDimensions";
import PowerRange from "@/app/[locale]/catalogue/components/Catalogue/PowerRange";
import TechnologyFilter from "@/app/[locale]/catalogue/components/Catalogue/TechnologyFilter";
import {
  CUSTOMIZE_FRAME_COLOR,
  CUSTOMIZE_MODULE_COLOR,
  CUSTOMIZE_MODULE_DESIGN,
} from "@/app/[locale]/catalogue/constants";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";

export default function Customize() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div>
      <SectionHeader title={t("Customize")} />
      <div className="flex flex-col gap-5">
        <TechnologyFilter
          checkboxesList={CUSTOMIZE_MODULE_DESIGN}
          subCategory="Module design"
        />
        <TechnologyFilter
          checkboxesList={CUSTOMIZE_MODULE_COLOR}
          showColorIcon
          subCategory="Module color"
        />
        <TechnologyFilter
          checkboxesList={CUSTOMIZE_FRAME_COLOR}
          showColorIcon
          subCategory="Frame color"
        />
        <PowerRange />
        <ModuleDimensions />
      </div>
    </div>
  );
}
