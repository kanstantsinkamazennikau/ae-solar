import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { BenefitProps } from "@/app/[locale]/products/[id]/components/Benefits/types";
import {
  PRODUCT_BENEFITS,
  PRODUCT_BENEFITS_FOR_PANELS,
} from "@/app/[locale]/products/[id]/constants";

export default function Benefits({ id }: BenefitProps) {
  const benefits = PRODUCT_BENEFITS_FOR_PANELS[id];

  return (
    <div className="flex justify-center">
      <BasicWidthContainer>
        <div className="flex flex-col gap-10">
          <p className="[font-size:_clamp(40px,5vw,128px)]">
            {PRODUCT_BENEFITS}
          </p>
          {benefits.map(({ benefitTitle, benefitDescription }) => (
            <div key={benefitTitle} className="flex flex-col gap-4">
              <div>{benefitTitle}</div>
              <div>{benefitDescription}</div>
            </div>
          ))}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
