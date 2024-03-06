import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import WarrantyYears from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/WarrantyYears";
import FullBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/FullBentobox";
import HalfBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/HalfBentobox";
import QuarterBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/QuarterBentobox";
import {
  PRODUCT_CREATE_YOUR,
  PRODUCT_OWN_SPACE,
} from "@/app/[locale]/products/[id]/constants";

const area = `md:[grid-template-areas:"a_a_b_b""a_a_c_d""e_e_f_f""e_e_f_f"] [grid-template-areas:"a_a""b_b""c_d""e_e""f_f"]`;

export default function Customization() {
  return (
    <div className="flex items-center relative flex-col min-[1480px]:w-[1440px] xl:mb-[180px] lg:mb-[100px] md:mb-[50px] mb-[30px]">
      <BasicWidthContainer styles="relative z-10">
        <div className="w-full flex flex-col gap-[20px] items-center">
          <TwoTierHeading
            tierOneHeading={PRODUCT_CREATE_YOUR}
            tierTwoHeading={PRODUCT_OWN_SPACE}
            reverseColor
            align="left"
            showDivider
          />
          <div className="flex justify-center items-start gap-8 self-stretch min-[540px]:flex-row flex-col" />
        </div>
        <div className={`grid gap-5 ${area}`}>
          <FullBentobox
            imageUrl="url('/images/products/bentobox/sand.png')"
            shortDescription="Suitable for Extreme Conditions"
            gridArea="a"
          />
          <HalfBentobox
            imageUrl="url('/images/products/bentobox/frame.png')"
            shortDescription={`Different
          Frame Colors`}
            gridArea="b"
          />
          <QuarterBentobox
            imageUrl={"/images/products/bentobox/weather.svg"}
            shortDescription="Suitable for Extreme Conditions"
            gridArea="c"
          />
          <WarrantyYears gridArea="d" />
          <FullBentobox
            imageUrl="url('/images/products/bentobox/material.png')"
            longDescription={{
              title: `Tailored Material 
              and Power`,
              description:
                "Find the perfect color combination to complement your content with interchangeable backdrops and frames.",
            }}
            gridArea="e"
          />

          <FullBentobox
            imageUrl="url('/images/products/bentobox/sand.png')"
            shortDescription="Suitable for Extreme Conditions"
            gridArea="f"
          />
        </div>
      </BasicWidthContainer>
    </div>
  );
}
