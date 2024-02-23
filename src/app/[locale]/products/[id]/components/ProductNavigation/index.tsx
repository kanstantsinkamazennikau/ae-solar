"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import { ProductNavigationProps } from "@/app/[locale]/products/[id]/components/ProductNavigation/types";
import {
  PRODUCT_DEFAULT_MODEL_PARAMS,
  PRODUCT_NAVIGATION,
  PRODUCT_OVERVIEW,
} from "@/app/[locale]/products/[id]/constants";
import {
  CART_LOCALSTORAGE,
  CART_SUCCESSFULLY_ADDED,
  CONSTRUCTOR_ADD,
  CONSTRUCTOR_ADD_TO_BAG,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function ProductNavigation({ id }: ProductNavigationProps) {
  const { setModelsInBag } = useContext(ConstructorContext);
  const contentHeight = useRef<HTMLDivElement>(null);
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const onClick = () => {
    setIsOpenItem(!isOpenItem);
  };

  useEffect(() => {
    setHeight(contentHeight.current?.scrollHeight);
  }, []);

  const addModelToBag = () => {
    setModelsInBag((prevState) => {
      let previousElementId = prevState[prevState.length - 1]?.id ?? 0;
      const modelsInBag = [
        ...prevState,
        {
          id: ++previousElementId,
          ...(PRODUCT_DEFAULT_MODEL_PARAMS[id] as ConstructorModel),
        },
      ];
      localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(modelsInBag));
      return modelsInBag;
    });
    toast.success(CART_SUCCESSFULLY_ADDED);
  };

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
                  className="mr-4 md:hidden block"
                />
              </div>
              {/* DESKTOP NAVIGATION */}
              <div className="md:flex hidden gap-4 [font-size:_clamp(12px,1vw,14px)] font-normal leading-[100%]">
                <div className="text-dark-gray-900">{PRODUCT_OVERVIEW}</div>
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
                      {title}
                    </div>
                  );
                })}
              </div>
            </div>

            <Button
              onClick={addModelToBag}
              size="extrasmall"
              style="outline"
              externalStyle="md:!bg-transparent !bg-base-red max-md:!py-2"
            >
              <div className="flex justify-center items-center gap-[6px] [font-size:_clamp(14px,1vw,14px)]">
                <Image
                  src={`/images/cart.svg`}
                  alt={"cart"}
                  priority
                  width={12}
                  height={12}
                  className="inline-block md:w-3 md:h-3 w-4 h-4"
                />
                <span className="-tracking-[0.14px] font-semibold leading-[100%] md:block hidden">
                  {CONSTRUCTOR_ADD_TO_BAG}
                </span>
                <span className="-tracking-[0.14px] font-semibold leading-[100%]  block md:hidden">
                  {CONSTRUCTOR_ADD}
                </span>
              </div>
            </Button>
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
            {PRODUCT_OVERVIEW}
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
                {title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
