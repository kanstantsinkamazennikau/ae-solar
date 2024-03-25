"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { Model } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Panel from "@/app/[locale]/products/components/PanelsList/Panel";
import { PRODUCT_INTRO_PANELS_IMAGES } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function PanelsList() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      className="
        flex
        flex-col
        items-center
        lg:mb-[180px]
        md:mb-[120px]
        mb-[60px]
      "
    >
      <TwoTierHeading
        tierOneHeading={
          <Trans
            components={{
              red: <p className="text-[#B30006]" />,
            }}
          >
            {t("Time To Choose")}
          </Trans>
        }
        align="center"
        reverseColor
        externalStyle="[font-size:_clamp(40px,6vw,102px)!important] font-semibold mb-[60px]"
      />
      <BasicWidthContainer>
        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={60}
          className="rotate-180 h-[60px] mb-[60px]"
        />
        <div className="w-full flex justify-center items-start content-start md:gap-5 gap-3 flex-wrap md:mb-[60px] mb-[40px]">
          {PRODUCT_INTRO_PANELS_IMAGES.map((panel) => (
            <Panel panel={panel as Model} key={panel} />
          ))}
        </div>
        {/* <Link href={"/calculate"}>
          <Button externalStyle="!py-[14px] mx-auto relative z-10">
            {PRODUCT_INTRO_CALCULATE_YOUR_MODEL}
          </Button>
        </Link> */}
      </BasicWidthContainer>
    </div>
  );
}
