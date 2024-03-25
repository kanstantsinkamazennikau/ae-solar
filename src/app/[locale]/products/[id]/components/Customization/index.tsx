"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import FullBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/FullBentobox";
import HalfBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/HalfBentobox";
import QuarterBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/QuarterBentobox";
import WarrantyYears from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/WarrantyYears";
import { CustomizationProps } from "@/app/[locale]/products/[id]/components/Customization/types";
import { PRODUCT_BENTOBOXES } from "@/app/[locale]/products/[id]/constants";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function Customization({ id }: CustomizationProps) {
  const { areaTemplate, structure } = PRODUCT_BENTOBOXES[id];

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div className="flex items-center relative flex-col min-[1536px]:w-[1440px] xl:mb-[180px] lg:mb-[100px] md:mb-[50px] mb-[30px]">
      <BasicWidthContainer styles="relative z-10">
        <div className="w-full flex flex-col gap-[20px] items-center">
          <TwoTierHeading
            tierOneHeading={
              <Trans
                components={{
                  red: <p className="text-[#B30006]" />,
                }}
              >
                {t("Create Your Own Space")}
              </Trans>
            }
            reverseColor
            align="left"
            showDivider
          />
          <div className="flex justify-center items-start gap-8 self-stretch min-[540px]:flex-row flex-col" />
        </div>
        <div className={`grid gap-5 ${areaTemplate}`}>
          {structure.map(
            ({
              gridArea,
              type,
              imageUrl,
              longDescription,
              shortDescription,
            }) => {
              if (type === "full") {
                return (
                  <FullBentobox
                    key={gridArea}
                    imageUrl={imageUrl}
                    shortDescription={shortDescription}
                    longDescription={longDescription}
                    gridArea={gridArea}
                  />
                );
              }
              if (type === "half") {
                return (
                  <HalfBentobox
                    key={gridArea}
                    imageUrl={imageUrl}
                    shortDescription={t(shortDescription || "")}
                    gridArea={gridArea}
                  />
                );
              }
              if (type === "quarter") {
                return (
                  <QuarterBentobox
                    key={gridArea}
                    imageUrl={imageUrl}
                    shortDescription={t(shortDescription || "")}
                    gridArea={gridArea}
                  />
                );
              }
              if (type === "warranty") {
                return <WarrantyYears gridArea={gridArea} key={gridArea} />;
              }
              return null;
            }
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
