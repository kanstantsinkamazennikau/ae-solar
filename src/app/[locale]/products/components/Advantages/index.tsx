"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Tier1 from "@/app/[locale]/components/common/Tier1";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import PanelsList from "@/app/[locale]/products/components/PanelsList";
import { PRODUCT_ADVANTAGES } from "@/app/[locale]/products/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function Advantages() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const { translation } = useContext(i18nProviderContext);

  return (
    <div
      className="
        relative
        overflow-hidden
      "
    >
      <Tier1
        tier1Text={
          <Trans
            components={{
              red: <span className="text-[#F60109]" />,
            }}
          >
            {translation.productsWelcome}
          </Trans>
        }
        descriptionText={
          <Trans
            components={{
              white: <span className="text-white" />,
            }}
          >
            {translation.productsWelcomeWeTransform}
          </Trans>
        }
        externalStyle="border-t-0 md:mt-0 !py-0"
      />
      <PanelsList />
      <BasicWidthContainer styles="mx-auto -mt-5">
        <TwoTierHeading
          tierOneHeading={
            <Trans
              components={{
                red: <span className="text-[#B30006]" />,
              }}
            >
              {translation.theBenefits}
            </Trans>
          }
          align="center"
          reverseColor
          externalStyle="[font-size:_clamp(40px,6vw,102px)!important] font-semibold mb-[60px]"
        />
        <div
          className="
            xl:columns-[2]
            max-xl:grid
            max-xl:grid-cols-2
            max-[650px]:grid-cols-1
            gap-5
            w-fit
            mx-auto
            relative
          "
        >
          <Image
            src={`/images/products/advantagesBackgroundCube.svg`}
            alt="advantagesBackgroundCube"
            width={640}
            height={640}
            priority
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-[650px]:block hidden`}
          />
          {PRODUCT_ADVANTAGES.map(({ description, title, image }) => (
            <div
              key={title}
              className="
                max-w-[538px]
                p-10
                xl:mb-5
                min-[920px]:pt-[120px]
                min-[920px]:pb-[40px]
                min-[920px]:px-[40px]
                md:pt-[80px]
                pt-[40px]
                pb-[25px]
                px-[25px]
                rounded-[20px]
                relative
                [background:linear-gradient(227deg,#f10109_0%,rgb(49_9_10/73%)_27%,#3E0002_51%,rgb(246_1_9/28%)_80%,#3E0002_100%)]
              "
            >
              <div
                className="
                  absolute 
                  top-[1px]
                  left-[1px]
                  right-[1px]
                  bottom-[1px]
                  rounded-[20px]
                  bg-[url('/images/getInTouchBackground.svg')]
                "
              />
              <div
                className="
                  rounded-[20px]
                  z-[4]
                  absolute 
                  top-0
                  left-0
                  right-0
                  bottom-0
                  [background:radial-gradient(160.36%_141.42%_at_100%_0%,rgb(246_1_9/25%)_0%,rgba(246,1,9,0.00)_50%,rgba(246,1,9,0.00)_100%),#00000070]
                "
              />
              <Image
                src={`/images/products/${image}`}
                alt="automation"
                width={300}
                height={300}
                priority
                className={`absolute top-[1px] right-[1px] z-[5]`}
              />
              <div
                className="
                  font-medium
                  leading-[120%]
                  [font-size:_clamp(20px,2.5vw,32px)]
                  w-full
                  mb-4
                  relative
                  z-10
                "
              >
                <Trans>{translation[title]}</Trans>
              </div>
              <div
                className="
                  font-walsheim
                  font-normal
                  [font-size:_clamp(14px,1.5vw,16px)]
                  w-full
                  leading-[150%]
                  relative
                  z-10
                "
              >
                {translation[description]}
              </div>
            </div>
          ))}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
