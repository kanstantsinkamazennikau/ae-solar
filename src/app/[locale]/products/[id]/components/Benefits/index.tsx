import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import Benefit from "@/app/[locale]/products/[id]/components/Benefits/Benefit";
import { BenefitsProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import {
  PRODUCTS_BEST_FEATURES,
  PRODUCT_BENEFITS_FOR_PANELS,
  PRODUCT_WHAT_ARE_ITS,
} from "@/app/[locale]/products/[id]/constants";

export default function Benefits({ id }: BenefitsProps) {
  const benefits = PRODUCT_BENEFITS_FOR_PANELS[id];

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
            tierOneHeading={PRODUCT_WHAT_ARE_ITS}
            tierTwoHeading={PRODUCTS_BEST_FEATURES}
            align="left"
            reverseColor
            marginBottomNone
            externalStyle={"mb-20"}
          />
          {benefits?.map(
            ({ benefitTitle, benefitDescription, benefitPicture }, index) => (
              <Benefit
                key={benefitTitle}
                {...{
                  benefitTitle,
                  benefitDescription,
                  benefitPicture,
                  index,
                  benefitsLength: benefits.length,
                }}
              />
            )
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
