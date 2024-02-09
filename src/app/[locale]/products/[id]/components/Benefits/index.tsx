import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { BenefitProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import {
  PRODUCT_BENEFITS,
  PRODUCT_BENEFITS_FOR_PANELS,
} from "@/app/[locale]/products/[id]/constants";

export default function Benefits({ id }: BenefitProps) {
  const benefits = PRODUCT_BENEFITS_FOR_PANELS[id];

  return (
    <div className="flex justify-center w-full xl:mb-[280px] lg:mb-[180px] md:mb-[100px] mb-[80px]">
      <BasicWidthContainer>
        <div className="flex flex-col md:gap-6 gap-3 w-full">
          <p className="[font-size:_clamp(64px,6.5vw,128px)] font-extrabold -tracking-[3.84px] leading-[100%]">
            {PRODUCT_BENEFITS}
          </p>
          {benefits.map(({ benefitTitle, benefitDescription }) => (
            <div
              key={benefitTitle}
              className="flex flex-col gap-1 xl:max-w-[780px] lg:max-w-[680px] md:max-w-[580px] max-w-[480px] self-center"
            >
              <div className="[font-size:_clamp(18px,2vw,36px)] font-semibold -tracking-[0.36px]">
                {benefitTitle}
              </div>
              <div className="[font-size:_clamp(10px,1.5vw,20px)] font-normal leading-[150%] font-walsheim">
                {benefitDescription}
              </div>
            </div>
          ))}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
