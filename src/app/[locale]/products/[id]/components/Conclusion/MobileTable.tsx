import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { DestopTableRowProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import {
  PRODUCT_CONCLUSION_TABLE_ADD_MOBILE,
  PRODUCT_CONCLUSION_TABLE_MOBILE_CELL_TYPE,
  PRODUCT_CONCLUSION_TABLE_MOBILE_FRAME_COLOR,
  PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_COLOR,
  PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_DESIGN,
  PRODUCT_CONCLUSION_TABLE_MOBILE_RANGE,
} from "@/app/[locale]/products/[id]/constants";
import { CART_REMOVE } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

export default function MobileTable({
  model,
  cellType,
  frameColor,
  links,
  moduleColor,
  moduleDesign,
  powerRange,
  moduleDimension,
  applications,
  backCover,
  addModelToBag,
  removeModel,
}: DestopTableRowProps) {
  const { modelsInBag } = useContext(ConstructorContext);
  const [isAlreadyInBag, setIsAlreadyInBag] = useState(
    modelsInBag.some(({ id }) => id === model)
  );

  useEffect(() => {
    setIsAlreadyInBag(modelsInBag.some(({ id }) => id === model));
  }, [model, modelsInBag]);

  return (
    <div className="flex flex-col justify-center items-start rounded-xl border-2 border-[#191919] bg-[#131313] overflow-hidden">
      <button
        onClick={() => {
          !isAlreadyInBag
            ? addModelToBag(
                model,
                cellType,
                moduleDesign,
                moduleColor,
                frameColor,
                moduleDimension,
                applications as Applications[],
                powerRange,
                backCover
              )
            : removeModel(model);
        }}
        className="
          flex
          px-4
          justify-between
          items-center
          self-stretch
          py-3
          bg-[#131313]
          cursor-pointer
          group/mobile
        "
      >
        <p
          className="
            [font-size:_clamp(12px,1.5vw,16px)]
            font-bold
            md:-tracking-[0.32px]
            capitalize
            transition-[color]
            duration-100
            group-hover/mobile:text-[#B30006]
          "
        >
          {model}
        </p>
        <div className="flex items-center">
          {!isAlreadyInBag ? (
            <>
              <Image
                src={`/images/cart.svg`}
                alt={"cart"}
                priority
                width={24}
                height={24}
                className="
                  inline-block
                  transition-all
                  duration-100
                  group-hover/mobile:[filter:invert(67%)_sepia(89%)_saturate(7492%)_hue-rotate(392deg)_brightness(84%)_contrast(146%)]
                "
              />
              <p
                className="
                  group-hover/mobile:text-[#B30006]
                  [font-size:_clamp(12px,1.5vw,14px)]
                  transition-[color]
                  duration-100
                  md:-tracking-[0.24px]
                  font-bold
                "
              >
                {PRODUCT_CONCLUSION_TABLE_ADD_MOBILE}
              </p>
            </>
          ) : (
            <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] -tracking-[0.16px] text-[#B30006]">
              {CART_REMOVE}
            </span>
          )}
        </div>
      </button>
      <div className="bg-black rounded-xl w-full">
        <div className="px-4 pt-3 grid grid-cols-2 gap-x-8 pb-3 w-full items-center gap-y-3">
          {/* <div> */}
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            {PRODUCT_CONCLUSION_TABLE_MOBILE_CELL_TYPE}
          </p>
          <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
            {cellType}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            {PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_DESIGN}
          </p>
          <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
            {moduleDesign}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            {PRODUCT_CONCLUSION_TABLE_MOBILE_RANGE}
          </p>
          <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
            {powerRange}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            {PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_COLOR}
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
              {moduleColor}
            </p>
            <Image
              src={`/images/option/${moduleColor.toLowerCase()}.svg`}
              alt={moduleColor}
              priority
              width={16}
              height={16}
            />
          </div>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            {PRODUCT_CONCLUSION_TABLE_MOBILE_FRAME_COLOR}
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
              {frameColor}
            </p>
            <Image
              src={`/images/option/${frameColor.toLowerCase()}.svg`}
              alt={frameColor}
              priority
              width={16}
              height={16}
            />
          </div>
          {/* </div> */}
        </div>
        <div className="w-full px-4">
          <hr className="bg-[#131313] w-full h-[1px] border-none " />
        </div>

        <div className="flex gap-2 px-4 pb-3 pt-3 min-h-[48px]">
          {links?.map(({ icon, link, tooltip }) => (
            <a key={icon} href={link} target="_blank" className="group">
              <Image
                src={icon}
                alt={moduleColor}
                priority
                width={24}
                height={24}
                className="inline-flex"
              />
              <span
                className="
                  absolute
                  -top-full
                  hidden
                  group-hover:block p-1 
                  bg-[#131313]
                  [font-size:_clamp(8px,1vw,10px)]
                  capitalize
                "
              >
                {tooltip}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
