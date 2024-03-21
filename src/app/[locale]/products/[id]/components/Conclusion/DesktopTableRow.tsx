"use client";

import { Applications } from "@/app/[locale]/calculate/components/ChooseModel/types";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { DestopTableRowProps } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function DesktopTableRow({
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

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  useEffect(() => {
    setIsAlreadyInBag(modelsInBag.some(({ id }) => id === model));
  }, [model, modelsInBag]);

  return (
    <tr
      className={`
        contents
        [&>td]:py-3
        [&>td]:inline-flex
        [&>td]:items-center
        first:[&>td]:pl-5
        last:[&>td]:justify-end
        group/add
        cursor-pointer
        [&>td]:border-dashed
        [&>td]:border-b
        [&>td]:border-[#191919]
        [&>td]:last:border-none
        [&>td]:hover:bg-[#191919]
        ${isAlreadyInBag ? "[&>td]:!bg-[#292828]" : ""}
      `}
    >
      <td
        className="
          [font-size:_clamp(12px,1.5vw,16px)]
          font-bold
          md:-tracking-[0.32px]
          capitalize
          group-hover/add:text-[#B30006]
          transition-[color]
          duration-200
          pr-2
        "
      >
        {model}
      </td>
      <td className="[font-size:_clamp(10px,1.5vw,14px)] font-normal text-dark-gray-900 pr-2">
        {cellType}
      </td>
      <td className="[font-size:_clamp(10px,1.5vw,14px)] font-normal text-dark-gray-900 pr-2">
        {moduleDesign}
      </td>
      <td className="[font-size:_clamp(10px,1.5vw,14px)] font-normal text-dark-gray-900">
        {powerRange}
      </td>
      <td>
        <Image
          src={`/images/option/${moduleColor.toLowerCase()}.svg`}
          alt={moduleColor}
          priority
          width={16}
          height={16}
        />
      </td>
      <td>
        <Image
          src={`/images/option/${frameColor.toLowerCase()}.svg`}
          alt={moduleColor}
          priority
          width={16}
          height={16}
        />
      </td>
      <td>
        <div className="flex gap-2 relative">
          {links?.map(({ icon, link, tooltip }) => (
            <a key={icon} href={link} target="_blank" className="group">
              <Image
                src={icon}
                alt={moduleColor}
                priority
                width={16}
                height={16}
                className="inline-flex"
              />
              {/* <span
                className="
                  absolute
                  -top-full
                  hidden
                  group-hover:block p-1 
                  bg-[#131313]
                  [font-size:_clamp(8px,1vw,10px)]
                  capitalize whitespace-nowrap
                "
              >
                {t(tooltip)}
              </span> */}
            </a>
          ))}
        </div>
      </td>
      {!isAlreadyInBag ? (
        <td
          className="cursor-pointer relative"
          onClick={() =>
            addModelToBag(
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
          }
        >
          <div
            className="
            absolute
            mr-5 
            flex
            items-center
            max-w-[24px] 
            group-hover/add:max-w-[150px] 
            overflow-hidden
            transition-all
            duration-200
            gap-[2px]
          "
          >
            <Image
              src={`/images/cart.svg`}
              alt={"cart"}
              priority
              width={24}
              height={24}
              className="
              inline-block
              group-hover/add:[filter:invert(67%)_sepia(89%)_saturate(7492%)_hue-rotate(392deg)_brightness(84%)_contrast(146%)]
            "
            />
            <p
              className="
              group-hover/add:text-[#B30006]
              [font-size:_clamp(12px,1.5vw,14px)]
              md:-tracking-[0.24px]
              font-bold
            "
            >
              {t("Add")}
            </p>
          </div>
        </td>
      ) : (
        <td>
          <button onClick={() => removeModel(model)} className="pr-6">
            <span className="font-semibold [font-size:_clamp(12px,1.5vw,14px)] -tracking-[0.16px] text-base-red">
              {t("Remove")}
            </span>
          </button>
        </td>
      )}
    </tr>
  );
}
