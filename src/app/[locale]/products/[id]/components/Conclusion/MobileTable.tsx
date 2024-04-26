import { Applications } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { DesktopTableRowProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Trans } from "react-i18next";

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
}: DesktopTableRowProps) {
  const { modelsInBag } = useContext(ConstructorContext);
  const [isAlreadyInBag, setIsAlreadyInBag] = useState(
    modelsInBag.some(({ id }) => id === model)
  );

  const { translation } = useContext(i18nProviderContext);
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
                applications as Applications,
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
                  capitalize
                "
              >
                {translation.addToCart}
              </p>
            </>
          ) : (
            <p className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] -tracking-[0.16px] text-[#B30006] h-6 flex items-center">
              {translation.remove}
            </p>
          )}
        </div>
      </button>
      <div className="bg-black rounded-xl w-full">
        <div className="px-4 pt-3 grid grid-cols-2 gap-x-8 pb-3 w-full items-center gap-y-3">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {translation.cellType}
            </Trans>
          </p>
          <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {cellType}
            </Trans>
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {translation.moduleDesign}
            </Trans>
          </p>
          <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {moduleDesign}
            </Trans>
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {translation.powerRangeW}
            </Trans>
          </p>
          <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {powerRange}
            </Trans>
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium  leading-[100%]">
            <Trans
              components={{
                br: <span />,
              }}
            >
              {translation.moduleColor}
            </Trans>
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%] capitalize">
              {translation[moduleColor.toLowerCase()]}
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
            <Trans
              components={{
                br: <span />,
              }}
            >
              {translation.frameColor}
            </Trans>
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(14px,1.5vw,16px)] font-normal text-dark-gray-900 leading-[100%] capitalize">
              {translation[frameColor.toLowerCase()]}
            </p>
            <Image
              src={`/images/option/${frameColor.toLowerCase()}.svg`}
              alt={frameColor}
              priority
              width={16}
              height={16}
            />
          </div>
        </div>
        <div className="w-full px-4">
          <hr className="bg-[#131313] w-full h-[1px] border-none " />
        </div>

        <div className="flex gap-2 px-4 pb-3 pt-3 min-h-[48px]">
          {links?.map(({ icon, link }) => (
            <a key={icon} href={link} target="_blank" className="group">
              <Image
                src={icon}
                alt={moduleColor}
                priority
                width={24}
                height={24}
                className="inline-flex"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
