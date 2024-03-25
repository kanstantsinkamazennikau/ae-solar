"use client";

import { CataloguePanelDetailsProps } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CataloguePanelDetails({
  cellType,
  frameColor,
  links,
  moduleColor,
  moduleDesign,
  moduleDimension,
  powerRange,
}: CataloguePanelDetailsProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div className="bg-black rounded-xl w-full">
      <div className="pl-2 pt-3 w-full items-center gap-y-1 capitalize">
        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Cell type")}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
            {cellType}
          </p>
        </div>

        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Module design")}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
            {moduleDesign}
          </p>
        </div>

        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Module color")}
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
              {t(moduleColor)}
            </p>
            <Image
              src={`/images/option/${moduleColor.toLowerCase()}.svg`}
              alt={moduleColor}
              priority
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Frame color")}
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
              {t(frameColor)}
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

        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Frame color")}
          </p>
          <div className="flex items-center gap-1">
            <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
              {t(frameColor)}
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

        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Dimension")}, mm
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%] lowercase">
            {moduleDimension.length} x {moduleDimension.width}
          </p>
        </div>

        <div className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]">
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
            {t("Power range, W")}
          </p>
          <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
            {powerRange}
          </p>
        </div>

        {links?.map(({ link, tooltip }) => (
          <div
            className="grid grid-cols-[120px_auto] gap-x-4 py-[6px] border-b border-dashed border-[#ffffff26]"
            key={tooltip}
          >
            <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
              {t(tooltip)}
            </p>
            <a href={link} target="_blank" className="flex gap-1 leading-[90%]">
              <span
                className="
                  [font-size:_clamp(12px,1.5vw,14px)]
                  text-[#F60109]
                "
              >
                {t("Download")}
              </span>
              <Image
                src={"/images/downloadArrow.svg"}
                alt={"downloadArrowRed"}
                priority
                width={12}
                height={12}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
