"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useRef, useState } from "react";

import { ABOUT_HISTORY } from "@/app/[locale]/company/constants";
import Button from "@/app/[locale]/components/common/Button";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Starfield from "@/app/[locale]/products/components/StarField";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function OurHistory() {
  const container = useRef(null);
  const [isOpenItem, setIsOpenItem] = useState(false);

  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const onClick = () => {
    setIsOpenItem(true);
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
        backgroundColor="black"
        style="absolute h-full"
      />
      <BasicWidthContainer>
        <div id="history">
          <TwoTierHeading
            tierOneHeading={t("Our History")}
            tierTwoHeading={t("Through the Years")}
            align="center"
            reverseColor
            marginBottomNone
            externalStyle="
              [font-size:_clamp(32px,6vw,96px)]
              [&>*:last-child]:[font-size:_clamp(30px,4vw,64px)]
              [&>*:last-child]:font-medium
            "
          />
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
          />
          <div
            ref={container}
            className="relative py-[60px] w-full overflow-hidden"
          >
            <div className="ourHistoryDivider w-[1px] h-[calc(100%+100px)] absolute -top-[7px] md:left-[32%] left-[20%]" />
            {ABOUT_HISTORY.map(({ year, event }) => {
              return (
                <div
                  key={year}
                  className={`
                      flex
                      mb-6
                      w-full
                      relative
                      text-white
                    `}
                >
                  <div
                    className={`
                      w-[7px]
                      h-[7px]
                      border
                      border-solid
                      border-base-red
                      rounded-full
                      absolute
                      top-[10px]
                      md:left-[calc(32%-3px)]
                      left-[calc(20%-3px)]
                      bg-black
                  
                    `}
                  />
                  <div
                    className="
                      md:w-[32%]
                      w-[20%]
                      text-end
                      pr-4
                      [font-size:_clamp(14px,2vw,32px)]
                      leading-[120%]
                    "
                  >
                    {year}
                  </div>

                  <div
                    className={`
                      md:w-[68%]
                      w-[80%]
                      pl-4
                      max-w-[450px]
                      [font-size:_clamp(12px,2vw,16px)]
                      leading-[150%]
                    `}
                  >
                    <Trans>{t(event)}</Trans>
                  </div>
                </div>
              );
            })
              .reverse()
              .slice(0, isOpenItem ? 100 : 4)}
            {!isOpenItem && (
              <Button
                style="textOnly"
                externalStyle="!p-0 mx-auto mt-10 z-20"
                onClick={onClick}
              >
                <div
                  className={`text-base-red [font-size:_clamp(14px,1vw,16px)]`}
                >
                  {t("Read Full History")}
                </div>
                <Image
                  src="/images/techInfo/expand.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  priority
                />
              </Button>
            )}
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
