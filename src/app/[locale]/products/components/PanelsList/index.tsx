"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { Model } from "@/app/[locale]/context/ConstructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Panel from "@/app/[locale]/products/components/PanelsList/Panel";
import { PRODUCT_INTRO_PANELS_IMAGES } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function PanelsList() {
  const { translation } = useContext(i18nProviderContext);

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
            {translation.timeToChoose}
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
        <Link href={"/catalogue"}>
          <Button externalStyle="!py-[14px] mx-auto relative z-10">
            {translation.chooseModule}
          </Button>
        </Link>
      </BasicWidthContainer>
    </div>
  );
}
