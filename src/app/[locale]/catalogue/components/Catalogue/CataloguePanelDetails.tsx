"use client";

import { CataloguePanelDetailsProps } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
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

  const paramsMapping = [
    { value: cellType, paramName: "Cell type" },
    { value: moduleDesign, paramName: "Module design" },
    { value: moduleColor, paramName: "Module color", withColorImage: true },
    { value: frameColor, paramName: "Frame color", withColorImage: true },
    {
      value: `${moduleDimension.length} x ${moduleDimension.width} x ${moduleDimension.height}`,
      paramName: "Dimension",
    },
    { value: powerRange, paramName: "Power range, W" },
  ];

  return (
    <div className="bg-black rounded-xl w-full">
      <div className="pl-2 pt-3 w-full items-center gap-y-1 capitalize">
        {paramsMapping.map(({ value, paramName, withColorImage }) => (
          <div
            key={paramName}
            className="
              grid
              grid-cols-[120px_auto]
              gap-x-4
              py-[6px]
              border-b
              border-dashed
              border-[#ffffff26]
              items-center
            "
          >
            {withColorImage ? (
              <>
                <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
                  {t(paramName)}
                </p>
                <div className="flex gap-1 items-center">
                  <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%]">
                    {t(value)}
                  </p>
                  <Image
                    src={`/images/option/${value.toLowerCase()}.svg`}
                    alt={value}
                    priority
                    width={16}
                    height={16}
                  />
                </div>
              </>
            ) : (
              <>
                <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%]">
                  {t(paramName)}
                  {paramName === "Dimension" && (
                    <span className="lowercase">, mm</span>
                  )}
                </p>
                <p
                  className={`[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%] ${
                    paramName === "Dimension" ? "lowercase" : ""
                  }`}
                >
                  {value}
                </p>
              </>
            )}
          </div>
        ))}
        {links?.map(({ link, tooltip }) => (
          <div
            className="
              grid
              grid-cols-[120px_auto]
              gap-x-4
              py-[6px]
              border-b
              border-dashed
              border-[#ffffff26]
              items-center
            "
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
