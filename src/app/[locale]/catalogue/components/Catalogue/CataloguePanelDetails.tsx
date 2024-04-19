"use client";

import { CataloguePanelDetailsProps } from "@/app/[locale]/catalogue/components/Catalogue/types";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function CataloguePanelDetails({
  cellType,
  frameColor,
  links,
  moduleColor,
  moduleDesign,
  moduleDimension,
  powerRange,
}: CataloguePanelDetailsProps) {
  const { translation } = useContext(i18nProviderContext);

  const paramsMapping = [
    { value: cellType, paramName: "cellType" },
    { value: moduleDesign, paramName: "moduleDesign" },
    { value: moduleColor, paramName: "moduleColor", withColorImage: true },
    { value: frameColor, paramName: "frameColor", withColorImage: true },
    {
      value: `${moduleDimension.length} x ${moduleDimension.width} x ${moduleDimension.height}`,
      paramName: "dimension",
    },
    { value: powerRange, paramName: "powerRangeW" },
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
                  <Trans
                    components={{
                      br: <span />,
                    }}
                  >
                    {translation[paramName]}
                  </Trans>
                </p>
                <div className="flex gap-1 items-center">
                  <p className="[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%] capitalize">
                    {translation[value.toLowerCase()]}
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
                  <Trans
                    components={{
                      br: <span />,
                    }}
                  >
                    {translation[paramName]}
                  </Trans>
                  {paramName === "dimension" && (
                    <span className="lowercase">
                      , {translation.measureUnitsMM}
                    </span>
                  )}
                </p>
                <p
                  className={`[font-size:_clamp(12px,1.5vw,14px)] font-normal leading-[90%] ${
                    paramName === "dimension" ? "lowercase" : ""
                  }`}
                >
                  {value}
                </p>
              </>
            )}
          </div>
        ))}
        {links
          ?.filter(({ tooltip }) => tooltip.toLowerCase() === "datasheet")
          ?.map(({ link, tooltip }) => (
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
              <p className="[font-size:_clamp(12px,1.5vw,14px)] font-medium text-[#505050] leading-[90%] capitalize">
                {translation[tooltip.toLowerCase()]}
              </p>
              <a
                href={link}
                target="_blank"
                className="flex gap-1 leading-[90%]"
              >
                <span
                  className="
                  [font-size:_clamp(12px,1.5vw,14px)]
                  text-[#F60109]
                "
                >
                  {translation.download}
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
