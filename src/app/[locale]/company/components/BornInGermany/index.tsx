"use client";

import {
  ABOUT_BORN_IN_GERMANY,
  ABOUT_BORN_STORY,
  ABOUT_BORN_STORY_WORDS_TO_HIGHLIGHT,
} from "@/app/[locale]/company/constants";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import getLocale from "@/app/[locale]/utils/getLocale";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Trans, TransWithoutContext } from "react-i18next";

export default function BornInGermany() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      className="
        flex
        flex-col
        justify-center 
        items-center 
        2xl:mt-[160px]
        xl:mt-[100px]
        lg:mt-[80px]
        md:mt-[60px]
        mt-[40px]
      "
    >
      <BasicWidthContainer styles="max-[560px]:px-0">
        <div
          className="
            min-[560px]:bg-[url('/images/about/bornInGermany.png')]
            bg-[url('/images/about/bornInGermanyMobile.png')]
            xl:h-[495px]
            lg:h-[450px]
            md:h-[400px]
            min-[560px]:h-[400px]
            h-[460px]
            w-full         
            bg-no-repeat
            mb-10
            [background-size:100%_100%]
            max-[560px]:bg-center
            z-30
            relative
            lg:pt-[120px]
            lg:px-[80px]
            lg:pb-[60px]
            md:py-[50px]
            md:px-[80px]
            min-[560px]:py-[30px]
            min-[560px]:px-[40px]
            pt-[80px]
            pb-[60px]
          "
        >
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              lg:gap-10
              gap-10
              max-w-[1100px]
              max-[560px]:px-5
              mx-auto
            "
          >
            <div className="flex items-center">
              <Image
                src="/images/about/german.svg"
                alt="german"
                priority
                width={160}
                height={160}
                className="xl:w-[160px] lg:w-[120px] md:w-[100px] w-[80px]"
              />
              <p
                className="
                font-walsheim
                font-semibold
                [font-size:_clamp(30px,3.5vw,64px)]
                leading-[clamp(30px,3.5vw,64px)]
                max-w-[306px]
              "
              >
                {t("Born in Germany")}
              </p>
            </div>

            <hr className="h-[1px] bg-[#038DF4] border-none w-full" />
            <div className="flex min-[560px]:gap-8 gap-4 min-[560px]:flex-row flex-col font-walsheim font-normal [font-size:_clamp(16px,1.5vw,20px)] md:leading-[150%] leading-[120%]">
              <div>
                <Trans
                  components={{
                    bold: <span className="font-bold" />,
                  }}
                >
                  {t("In the heart")}
                </Trans>
              </div>
              <div>
                <Trans
                  components={{
                    bold: <span className="font-bold" />,
                  }}
                >
                  {t("Visionary idea")}
                </Trans>
              </div>
            </div>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
