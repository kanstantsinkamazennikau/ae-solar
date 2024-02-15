"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import {
  ConstructorContext,
  ConstructorModel,
} from "@/app/[locale]/context/constructorContext";
import { ConclusionProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import {
  PRODUCT_IN_CONCLUSION,
  PRODUCT_CONCLUSION_FOR_PANELS,
  PRODUCT_DEFAULT_MODEL_PARAMS,
} from "@/app/[locale]/products/[id]/constants";
import {
  CART_LOCALSTORAGE,
  CART_SUCCESSFULLY_ADDED,
  CONSTRUCTOR_ADD_TO_BAG,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Conclusion({ id }: ConclusionProps) {
  const { setModelsInBag } = useContext(ConstructorContext);

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
    <div
      className="flex justify-center xl:mb-[150px] lg:mb-[120px] md:mb-[100px] mb-[80px] mt-20 w-full"
      id="conclusion"
    >
      <BasicWidthContainer styles="relative justify-center items-center flex">
        <div
          className="
            xl:py-[130px]
            xl:px-[60px]
            md:py-[80px]
            md:px-[40px]
            py-[30px]
            px-[20px]
            border
            border-solid
            backdrop-blur-[10px]
            bg-[#000]
            [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
            xl:max-w-[870px]
            lg:max-w-[670px]
            md:max-w-[550px]
            min-[560px]:max-w-[400px]
            max-w-[300px]
            flex
            flex-col
            md:gap-8
            gap-5
            justify-center
            mx-auto
            relative
            overflow-hidden
            z-10
          "
        >
          <div
            className="
              w-full
              h-[130%]
              absolute
              left-0
              top-0
              md:[background:radial-gradient(#490002_0%,transparent_70%,transparent_100%)]
              [background:radial-gradient(#490002_0%,#210000_70%,transparent_100%)]
              -translate-y-1/2
            "
          />
          <p className="[font-size:_clamp(24px,2.5vw,48px)] capitalize font-extrabold -tracking-[1.44px] leading-[120%] text-center z-10">
            {PRODUCT_IN_CONCLUSION}
          </p>
          <div className="[font-size:_clamp(12px,1.5vw,20px)] leading-[150%] font-walsheim text-center z-10">
            {PRODUCT_CONCLUSION_FOR_PANELS[id]
              .split(/\r?\n|\r|\n/g)
              .map((string) => (
                <p key={string} className="mb-7 last:mb-0">
                  {string}
                </p>
              ))}
          </div>
          <div className="self-center relative z-10">
            <Button size="thin" onClick={addModelToBag}>
              <div className="flex justify-center items-center px-2">
                <Image
                  src={`/images/cart.svg`}
                  alt={"cart"}
                  priority
                  width={24}
                  height={24}
                  className="inline-block"
                />
                <span className="[font-size:_clamp(14px,2vw,20px)] -tracking-[0.2px] font-semibold">
                  {CONSTRUCTOR_ADD_TO_BAG}
                </span>
              </div>
            </Button>
          </div>

          <Image
            src={`/images/products/moduleAngleConclusionLeft.png`}
            alt="moduleAngleConclusionLeft"
            priority
            width={310}
            height={310}
            className="absolute left-0 top-0 z-0 md:w-[310px] md:h-[310px] w-[130px] h-[130px]"
          />
          <Image
            src={`/images/products/moduleAngleConclusionRight.png`}
            alt="moduleAngleConclusionRight"
            priority
            width={240}
            height={240}
            className="absolute right-0 bottom-0 md:w-[240px] md:h-[240px] h-[150px] w-[150px]"
          />
        </div>
        <Image
          src={`/images/products/backLight.svg`}
          alt="backLight"
          priority
          width={1320}
          height={136}
          className="
            absolute
            xl:scale-110
            lg:scale-125
            md:scale-150
            min-[480px]:scale-150
            scale-[3.5]
          "
        />
      </BasicWidthContainer>
    </div>
  );
}
