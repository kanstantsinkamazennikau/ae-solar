"use client";

import Logo from "@/app/[locale]/components/common/Logo";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  SOLUTIONS_STATS_WITH_DETAILS,
  SOLUTIONS_TIER_1,
} from "@/app/[locale]/solutions/constants";
import {
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
  FOOTER_SAVE_THE_WORLD,
} from "@/app/[locale]/utils/constants";
import getLocale from "@/app/[locale]/utils/getLocale";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import { useParams } from "next/navigation";
import { Fragment } from "react";
import { Trans } from "react-i18next";

export default function CooperationStats() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      className="
        min-[920px]:w-[314px]
        md:w-[240px]
        md:sticky
        min-[920px]:top-[80px]
        md:top-[64px]
        md:block
        flex
        flex-col
      "
    >
      <div
        className="
          flex
          gap-4
          flex-col
          md:max-w-full
          py-4
          px-7
          z-10
          max-w-[500px]
          max-md:mx-auto
          max-md:items-center
        "
      >
        <div className="flex flex-col w-fit relative z-10">
          <Logo />
          <p className="text-base-red text-[10px] text-right">
            {t("Save the World")}
          </p>
        </div>
        <div className="[font-size:_clamp(14px,1.5vw,16px)] max-md:text-center font-normal leading-[130%] font-walsheim">
          <Trans
            components={{
              bold: <span className="font-bold" />,
            }}
          >
            {t("German Brand")}
          </Trans>
        </div>
      </div>
      <div
        className="
          border-solid
          border-[#131313]
          bg-[#0D0D0D]
          rounded-xl
          md:py-8
          md:px-7
          py-4
          px-3
          w-full
        "
      >
        <p className="[font-size:_clamp(20px,2.5vw,36px)] font-semibold leading-[110%] mb-8 max-md:text-center">
          {t("We’re TIER 1 Company")}
        </p>
        <div
          className="
            flex
            md:flex-col
            min-[500px]:flex-row
            flex-col
            gap-6
            max-md:justify-around
            max-[500px]:justify-between
            max-md:gap-3
          "
        >
          {SOLUTIONS_STATS_WITH_DETAILS.map(({ details, stat }) => (
            <Fragment key={details}>
              <div className="flex flex-col items-start gap-[6px] max-md:items-center">
                <p className="[font-size:_clamp(26px,2.5vw,48px)] font-semibold leading-[100%] -tracking-[1.44px]">
                  {stat}
                </p>
                <p className="[font-size:_clamp(14px,1.5vw,20px)] font-normal font-walsheim leading-[110%] max-md:text-center">
                  {t(details)}
                </p>
              </div>
              <div className="w-0.5 bg-[#131313] mx-4 h-auto last:hidden" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
