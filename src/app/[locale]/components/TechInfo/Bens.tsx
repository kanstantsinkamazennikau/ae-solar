"use client";

import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import Ben from "@/app/[locale]/components/TechInfo/Ben";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { TECH_INFO_BENS } from "@/app/[locale]/utils/constants";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function Bens() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <>
      <TwoTierHeading
        tierOneHeading={
          <Trans
            components={{
              red: <p className="text-[#B30006]" />,
            }}
          >
            {translation.weAreBest}
          </Trans>
        }
        align="left"
        reverseColor
      />
      <div
        className="
          grid
          md:grid-cols-3
          gap-5
          lg:mb-[280px]
          md:mb-[120px]
          mb-[100px]
          min-[500px]:grid-cols-2
          min-[500px]:[&>*:nth-child(5)]:col-start-1
          min-[500px]:[&>*:nth-child(5)]:col-end-3  
          md:[&>*:nth-child(5)]:col-start-auto
          md:[&>*:nth-child(5)]:col-end-auto
        "
      >
        {TECH_INFO_BENS.map(({ title, description, image }, index) => {
          const isFullHeightRow = index === 1;
          return (
            <Ben
              key={title}
              {...{
                title,
                description,
                image,
                isFullHeightRow,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
