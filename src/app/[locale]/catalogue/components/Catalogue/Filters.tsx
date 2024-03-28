"use client";

import Customize from "@/app/[locale]/catalogue/components/Catalogue/Customize";
import FilterControlButtons from "@/app/[locale]/catalogue/components/Catalogue/FilterControlButtons";
import TechnologyFilter from "@/app/[locale]/catalogue/components/Catalogue/TechnologyFilter";
import {
  MODELS_LIST,
  TECHNOLOGIES_LIST,
} from "@/app/[locale]/catalogue/constants";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useContext } from "react";

export default function Filters() {
  const { isShowFilterMenu } = useContext(ConstructorContext);

  return (
    <div
      className={`
        p-10
        flex
        flex-col
        min-[1380px]:rounded-[20px]
        border
        border-solid
        border-[#131313]
        bg-[#0D0D0D]
        h-fit
        max-[1380px]:h-screen
        gap-6
        max-w-[315px]
        mb-10
        ${
          isShowFilterMenu
            ? "max-[1380px]:translate-x-0"
            : "max-[1380px]:translate-x-full"
        }
        
        max-[1380px]:fixed
        right-0
        min-[920]:top-[79px]
        top-[63px]
        z-[100]
        overflow-y-auto
      `}
    >
      <TechnologyFilter
        checkboxesList={TECHNOLOGIES_LIST}
        filterTitle="Technology"
      />
      <hr className="bg-[#191919] h-[1px] border-none w-full" />
      <TechnologyFilter
        checkboxesList={MODELS_LIST}
        showModelIcon
        filterTitle="Technical name"
      />
      <hr className="bg-[#191919] h-[1px] border-none w-full" />
      <Customize />
      <hr className="bg-[#191919] h-[1px] border-none w-full" />
      <FilterControlButtons />
    </div>
  );
}
