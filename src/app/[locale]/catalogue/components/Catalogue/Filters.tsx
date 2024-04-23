"use client";

import Customize from "@/app/[locale]/catalogue/components/Catalogue/Customize";
import FilterControlButtons from "@/app/[locale]/catalogue/components/Catalogue/FilterControlButtons";
import TechnologyFilter from "@/app/[locale]/catalogue/components/Catalogue/TechnologyFilter";
import {
  MODELS_LIST,
  TECHNOLOGIES_LIST,
} from "@/app/[locale]/catalogue/constants";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useContext, useEffect } from "react";

export default function Filters() {
  const { isShowFilterMenu } = useContext(ConstructorContext);
  const { translation } = useContext(i18nProviderContext);
  const { setIsShowFilterMenu } = useContext(ConstructorContext);

  const onHideFilterMenu = () => {
    setIsShowFilterMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (isShowFilterMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isShowFilterMenu]);

  return (
    <div
      className="
        min-[1380px]:static
        fixed
        min-[920px]:top-[79px]
        max-[1380px]:top-[63px]
        min-[1380px]:w-auto
        w-full 
        z-30
      "
    >
      <div
        className={`
          ${isShowFilterMenu ? "w-full" : "w-0"}
          min-[1380px]:hidden
          transition-colors
          duration-300
          fixed
          right-0
          bottom-0
          left-0
          top-0
          ${
            isShowFilterMenu
              ? "bg-[#00000063] backdrop-blur-sm"
              : "bg-transparent"
          }
        `}
        onClick={onHideFilterMenu}
      />
      <div
        className={`
          flex
          flex-col
          min-[1380px]:h-fit
          min-[920px]:h-[calc(100dvh-79px)]
          h-[calc(100dvh-63px)]           
          transition-[right]
          duration-300
          ${
            isShowFilterMenu
              ? "max-[1380px]:right-0"
              : "max-[1380px]:-right-full"
          }
          min-[1380px]:static
          fixed
          max-w-[315px]
        `}
      >
        <div
          className="
            min-[1380px]:hidden
            flex
            flex-col
            bg-[#131313]
            items-end
            pt-3
            gap-3
            border-l
            border-solid
            border-[#131313]
          "
        >
          <Image
            alt="close"
            src={`/images/documents/closeRed.svg`}
            priority
            width={24}
            height={24}
            onClick={onHideFilterMenu}
            className="cursor-pointer mr-10"
          />
          <hr className="h-[1px] border-t border-solid border-[#B30006] w-full" />
        </div>
        <div
          className={`
            min-[1380px]:p-10
            px-10
            py-5
            flex
            flex-col
            min-[1380px]:rounded-[20px]
            max-[1380px]:border-t-0
            border
            border-solid
            border-[#191919]
            bg-[#131313]
            min-[1380px]:h-fit
            gap-6
            max-w-[315px]
            min-[1380px]:mb-10
            max-[1380px]:overflow-y-auto
            bensPopUp
          `}
        >
          <div className="min-[1380px]:block hidden">
            <p className="[font-size:_clamp(26px,2vw,32px)] font-bold -tracking-[0.32px] capitalize text-base-red mb-4">
              {translation.filter}
            </p>
            <hr className="h-[1px] border-t border-solid border-[#B30006] w-full" />
          </div>

          <TechnologyFilter
            checkboxesList={TECHNOLOGIES_LIST}
            filterTitle={translation.filterTitleTechnology}
          />
          <hr className="h-[1px] border-t border-solid border-[#B30006] w-full" />
          <TechnologyFilter
            checkboxesList={MODELS_LIST}
            showModelIcon
            filterTitle={translation.filterTitleTechName}
          />
          <hr className="h-[1px] border-t border-solid border-[#B30006] w-full" />
          <Customize />
          <div className="bg-[#131313] max-[1380px]:hidden">
            <hr className="h-[1px] border-t border-solid border-[#B30006] w-full mb-6" />
            <FilterControlButtons />
          </div>
        </div>

        {/* MOBILE */}
        <div
          className="
            bg-[#131313]
            min-[1380px]:hidden
            border-l
            border-solid
            border-[#131313]
          "
        >
          <hr className="h-[1px] border-t border-solid border-[#B30006] w-full mb-4" />
          <FilterControlButtons />
        </div>
      </div>
    </div>
  );
}
