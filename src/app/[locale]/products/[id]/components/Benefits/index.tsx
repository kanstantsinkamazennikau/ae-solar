"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Benefit from "@/app/[locale]/products/[id]/components/Benefits/Benefit";
import { BenefitsProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import { PRODUCT_BENEFITS_FOR_PANELS } from "@/app/[locale]/products/[id]/constants";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function Benefits({ id }: BenefitsProps) {
  const benefits = PRODUCT_BENEFITS_FOR_PANELS[id];
  const { translation } = useContext(i18nProviderContext);

  return (
    <div className="flex justify-center w-full">
      <BasicWidthContainer>
        <div
          id="benefits"
          className="
            flex
            flex-col
            w-full
            xl:mt-[180px]
            lg:mt-[140px]
            md:mt-[100px]
            mt-[80px]
            xl:mb-[180px]
            lg:mb-[140px]
            md:mb-[100px]
            mb-[80px]
            scroll-mt-[140px]
          "
        >
          <TwoTierHeading
            tierOneHeading={
              <Trans
                components={{
                  red: <p className="text-[#B30006]" />,
                }}
              >
                {translation.moduleBestFeatures}
              </Trans>
            }
            align="left"
            reverseColor
            marginBottomNone
            externalStyle={"mb-20"}
          />
          <div
            className="
            min-[920px]:border
            min-[920px]:border-solid
            min-[920px]:border-[#131313]
            lg:px-20
            min-[920px]:px-14
            rounded-[20px]
            bg-[#0D0D0D]
          "
          >
            {benefits?.map(
              ({ benefitTitle, benefitDescription, benefitPicture }, index) => (
                <Benefit
                  key={benefitTitle}
                  {...{
                    benefitTitle,
                    benefitDescription,
                    benefitPicture,
                  }}
                />
              )
            )}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
