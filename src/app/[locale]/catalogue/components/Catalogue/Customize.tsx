"use client";

import ModuleDimensions from "@/app/[locale]/catalogue/components/Catalogue/ModuleDimensions";
import PowerRange from "@/app/[locale]/catalogue/components/Catalogue/PowerRange";
import SectionHeader from "@/app/[locale]/catalogue/components/Catalogue/SectionHeader";
import TechnologyFilter from "@/app/[locale]/catalogue/components/Catalogue/TechnologyFilter";
import {
  CUSTOMIZE_FRAME_COLOR,
  CUSTOMIZE_MODULE_COLOR,
  CUSTOMIZE_MODULE_DESIGN,
} from "@/app/[locale]/catalogue/constants";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { useContext } from "react";

export default function Customize() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div>
      <SectionHeader title={translation.customize} />
      <div className="flex flex-col gap-5">
        <TechnologyFilter
          checkboxesList={CUSTOMIZE_MODULE_DESIGN}
          subCategory={translation.moduleDesign}
        />
        <TechnologyFilter
          checkboxesList={CUSTOMIZE_MODULE_COLOR}
          showColorIcon
          subCategory={translation.moduleColor}
        />
        <TechnologyFilter
          checkboxesList={CUSTOMIZE_FRAME_COLOR}
          showColorIcon
          subCategory={translation.frameColor}
        />
        <PowerRange />
        <ModuleDimensions />
      </div>
    </div>
  );
}
