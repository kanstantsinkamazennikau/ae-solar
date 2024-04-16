"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { ProductNavigationProps } from "@/app/[locale]/products/[id]/components/ProductNavigation/types";
import { PRODUCT_NAVIGATION } from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

export default function ProductNavigation({ id }: ProductNavigationProps) {
  const contentHeight = useRef<HTMLDivElement>(null);
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const { translation } = useContext(i18nProviderContext);

  const onClick = () => {
    setIsOpenItem(!isOpenItem);
  };

  useEffect(() => {
    setHeight(contentHeight.current?.scrollHeight);
  }, []);

  return (
    <>
      <div
        className={`
          fixed
          min-[920px]:top-[79px]
          top-[63px]
          w-full
          h-[64px]
          flex
          md:flex-row
          flex-col
          justify-center
          items-center
          py-3
          border-b
          border-solid
          border-[#d0d8e91a]
          backdrop-blur-[50px]
          bg-navigation-black
          z-30
        `}
      >
        <BasicWidthContainer>
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-5 md:w-auto w-full">
              <div
                className="flex min-[920px]:w-[200px] w-full gap-[6px] items-center md:cursor-default cursor-pointer md:justify-normal justify-between"
                onClick={onClick}
              >
                <div className="flex justify-center items-center gap-[6px]">
                  <Image
                    src={`/images/models/${id}.svg`}
                    alt={id}
                    priority
                    width={40}
                    height={40}
                    className="inline-block md:w-10 md:h-10 min-[560px]:w-8 min-[560px]:h-8 w-6 h-6"
                  />
                  <span className="[font-size:_clamp(14px,1.5vw,24px)] leading-[100%] md:font-bold font-semibold">
                    {id}
                  </span>
                </div>
                <Image
                  src={`/images/selectorWhite.svg`}
                  alt="selectorWhite"
                  width={16}
                  height={16}
                  className={`mr-4 md:hidden block duration-300 transition-all ${
                    isOpenItem ? "rotate-180" : ""
                  } `}
                />
              </div>
              {/* DESKTOP NAVIGATION */}
              <div className="md:flex hidden gap-4 [font-size:_clamp(12px,1vw,14px)] font-normal leading-[100%]">
                <div className="text-dark-gray-900">
                  {translation.overview}:
                </div>
                {PRODUCT_NAVIGATION.map(({ title, link, position }) => {
                  const onClick = () => {
                    document.getElementById(link)!.scrollIntoView({
                      behavior: "smooth",
                      block: position as ScrollLogicalPosition,
                    });
                  };
                  return (
                    <div
                      key={title}
                      onClick={onClick}
                      className="cursor-pointer"
                    >
                      {translation[title]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </BasicWidthContainer>
        {/* MOBILE NAVIGATION*/}
      </div>
      <div
        ref={contentHeight}
        className={`
          md:hidden
          transition-all
          duration-[300ms]
          ease-in-out
          fixed
          top-[127px]         
          backdrop-blur-[50px]
        bg-navigation-black
          overflow-hidden
          w-full
          z-30
        `}
        style={isOpenItem ? { height } : { height: 0 }}
      >
        <div className="flex flex-col md:hidden [font-size:_clamp(14px,1vw,14px)] font-normal leading-[100%] p-4 w-full">
          <div className="text-dark-gray-900 py-4 pl-6  border-solid border-b border-option-border">
            {translation.overview}
          </div>
          {PRODUCT_NAVIGATION.map(({ title, link, position }) => {
            const onClick = () => {
              document.getElementById(link)!.scrollIntoView({
                behavior: "smooth",
                block: position as ScrollLogicalPosition,
              });
              setIsOpenItem(false);
            };
            return (
              <div
                key={title}
                onClick={onClick}
                className="cursor-pointer py-4 border-solid border-b border-option-border pl-6 last-of-type:border-0"
              >
                {translation[title]}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
