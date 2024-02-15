import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { BenefitProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import {
  PRODUCTS_BEST_FEATURES,
  PRODUCT_BENEFITS,
  PRODUCT_BENEFITS_FOR_PANELS,
  PRODUCT_WHAT_ARE_ITS,
} from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function Benefits({ id }: BenefitProps) {
  const benefits = PRODUCT_BENEFITS_FOR_PANELS[id];
  const formatNumber = (number: number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <div className="flex justify-center w-full">
      <BasicWidthContainer>
        <div
          id="benefits"
          className="
            flex
            flex-col
            w-full
            xl:mt-[280px]
            lg:mt-[180px]
            md:mt-[100px]
            mt-[80px]
            xl:mb-[280px]
            lg:mb-[180px]
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
          {benefits.map(
            ({ benefitTitle, benefitDescription, benefitPicture }, index) => (
              <div
                key={benefitTitle}
                className="
                  flex
                  xl:py-[80px]
                  lg:py-[50px]
                  md:py-[30px]
                  py-[20px]
                  justify-between
                  md:items-center
                  items-start
                  md:self-stretch
                  gap-4
                  md:flex-row
                  flex-col
                  border-t
                  border-solid
                  border-[#191919]
                  md:w-auto
                  w-full
                  self-center
                "
              >
                <div
                  className="
                    flex
                    md:items-center
                    items-end
                    lg:gap-20
                    gap-4
                    xl:w-[778px]
                    lg:w-[578px]
                    md:w-[340px]
                    justify-between
                    w-auto
                  "
                >
                  <Image
                    src={`/images/products/${benefitPicture}`}
                    alt={id}
                    priority
                    width={140}
                    height={140}
                    className="lg:w-[140px] lg:h-[140px] md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
                  />
                  <div
                    className="
                      xl:max-w-[538px]
                      lg:max-w-[338px]
                      md:max-w-[200px]
                      max-w-full
                      [font-size:_clamp(24px,2.5vw,48px)]
                      font-extrabold
                      leading-[120%]
                      -tracking-[1.44px]
                      capitalize
                      w-full
                    "
                  >
                    <div className="md:hidden leading-[100%] font-walsheim font-bold h-5 text-[#505050] flex">
                      <div className="[font-size:_clamp(11px,1.5vw,20px)] flex items-start h-full">
                        {formatNumber(index + 1)}
                      </div>
                      <div className="[font-size:_clamp(8px,1.2vw,14px)] flex items-end h-full">
                        /{formatNumber(benefits.length)}
                      </div>
                    </div>
                    {benefitTitle}
                  </div>
                </div>

                {/* <div className="flex justify-between items-center gap-3"> */}
                <div className="flex flex-col items-start lg:gap-6 md:gap-3 gap-2">
                  {/* DESKTOP COUNTER */}
                  <div className="md:flex leading-[100%] font-walsheim font-bold h-5 text-[#505050] hidden">
                    <div className="[font-size:_clamp(10px,1.5vw,20px)] flex items-end h-full">
                      {formatNumber(index + 1)}
                    </div>
                    <div className="[font-size:_clamp(8px,1.2vw,14px)] flex items-start h-full">
                      /{formatNumber(benefits.length)}
                    </div>
                  </div>
                  <p
                    className="
                        [font-size:_clamp(12px,1.5vw,20px)]
                        font-normal
                        leading-[150%]
                        font-walsheim
                        capitalize
                        md:max-w-[427px]
                        w-full
                      "
                  >
                    {benefitDescription}
                  </p>
                </div>
              </div>
              // </div>
            )
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
