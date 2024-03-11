import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import WarrantyYears from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/WarrantyYears";
import FullBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/FullBentobox";
import HalfBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/HalfBentobox";
import QuarterBentobox from "@/app/[locale]/products/[id]/components/Customization/Bentoboxes/QuarterBentobox";
import {
  PRODUCT_BENTOBOXES,
  PRODUCT_CREATE_YOUR,
  PRODUCT_OWN_SPACE,
} from "@/app/[locale]/products/[id]/constants";
import {
  CustomizationProps,
  ProductBentofoxes,
} from "@/app/[locale]/products/[id]/components/Customization/types";

const area = `md:[grid-template-areas:"a_a_b_b""a_a_c_d""e_e_f_f""e_e_f_f"] [grid-template-areas:"a_a""b_b""c_d""e_e""f_f"]`;

export default function Customization({ id }: CustomizationProps) {
  const { areaTemplate, structure } = PRODUCT_BENTOBOXES[id];

  return (
    <div className="flex items-center relative flex-col min-[1536px]:w-[1440px] xl:mb-[180px] lg:mb-[100px] md:mb-[50px] mb-[30px]">
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
                    shortDescription={shortDescription}
                    gridArea={gridArea}
                  />
                );
              }
              if (type === "quarter") {
                return (
                  <QuarterBentobox
                    key={gridArea}
                    imageUrl={imageUrl}
                    shortDescription={shortDescription}
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
