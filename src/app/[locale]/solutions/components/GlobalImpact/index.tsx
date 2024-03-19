import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import {
  SOLUTIONS_GLOBAL_IMPACT,
  SOLUTIONS_GLOBAL_IMPACT_DESCRIPTION,
  SOLUTIONS_GLOBAL_IMPACT_STATS,
  SOLUTIONS_GLOBAL_IMPACT_STATS_WITH_IMAGES,
  SOLUTIONS_SEE_DETAILED_PRESENTATION,
} from "@/app/[locale]/solutions/constants";
import getLocale from "@/app/[locale]/utils/getLocale";
import Image from "next/image";
import Link from "next/link";

export default async function GlobalImpact() {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "translation");

  return (
    <div
      className="
        flex
        flex-col
        items-center
        xl:mb-[140px]
        lg:mb-[120px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <BasicWidthContainer>
        <div
          className="
          flex
          min-[540px]:flex-row
          flex-col
          xl:py-20
          md:py-10
          justify-center
          md:items-start
          items-center
          content-start
          gap-5
          flex-wrap
        "
        >
          {/* IMPACT */}
          <div className="flex max-w-[650px] flex-col items-start md:gap-10 gap-5">
            <p className="md:text-[64px] text-[36px] font-semibold leading-[100%] -tracking-[1.08px]">
              {t("Global Impact")}
            </p>
            <p className="md:text-[20px] text-[16px] font-normal font-walsheim leading-[150%]">
              {t("Global Impact Description")}
            </p>
            <a href="/documents/presentation.pdf" target="_blank">
              <Button style="textOnly" externalStyle="!p-0">
                <p
                  className="
                    [font-size:_clamp(16px,1.5vw,20px)]
                    font-semibold
                    -tracking-[0.32px]
                    font-walsheim
                    leading-[150%]
                    text-base-red
                  "
                >
                  {t("View PDF-Presentation")}
                </p>
                <Image
                  src="/images/arrowFutureRed.svg"
                  alt="downloadFile"
                  width={16}
                  height={16}
                  className="-rotate-[135deg] ml-1"
                />
              </Button>
            </a>
          </div>
          {/* STATS */}
          <div
            className="
              flex
              flex-col
              border
              border-solid
              bg-[#0D0D0D]
              [border-image:linear-gradient(154deg,_#f60109_0%,_rgb(49_9_10_/_73%)_27%,_rgb(49_9_10_/_73%)_51%,_rgb(246_1_9_/_28%)_80%,_#f60109_100%)_1]
              w-[315px]
              h-[315px]
              max-[540px]:w-full
              max-[400px]:w-[315px]
              p-8
              justify-between
              items-center
            "
          >
            {SOLUTIONS_GLOBAL_IMPACT_STATS.map(({ measure, value, units }) => (
              <div
                key={measure}
                className="flex flex-col items-start gap-2 self-stretch font-bold"
              >
                <div className="[font-size:_clamp(36px,1.5vw,36px)] leading-[100%] -tracking-[1.08px]">
                  {value}
                  {" " + t(units)}
                </div>
                <div className="[font-size:_clamp(20px,1.5vw,24px)] leading-[100%] font-walsheim text-dark-gray-900">
                  {t(measure)}
                </div>
              </div>
            ))}
          </div>
          {/* STATS WITH IMAGES */}
          {SOLUTIONS_GLOBAL_IMPACT_STATS_WITH_IMAGES.map(
            ({ country, desktopImage, mobileImage, value }) => (
              <div
                key={country}
                className={`
                  min-[720px]:w-[315px]
                  min-[620px]:w-[270px]
                  min-[540px]:w-[315px]
                  min-[620px]:h-[315px]
                  min-[540px]:h-[250px]
                  h-[130px]
                  min-[400px]:w-full
                  w-[315px]
                  relative
                  overflow-hidden
                `}
              >
                <Image
                  src={`/images/solutions/${desktopImage}`}
                  alt={desktopImage}
                  width={315}
                  height={315}
                  className="min-[540px]:block hidden h-full"
                />
                <Image
                  src={`/images/solutions/${mobileImage}`}
                  alt={mobileImage}
                  width={315}
                  height={130}
                  quality={100}
                  className="min-[540px]:hidden block min-[400px]:w-full"
                />
                <div className="flex flex-col p-8 w-full items-start gap-2 font-bold absolute bottom-0">
                  <div className="[font-size:_clamp(36px,1.5vw,36px)] leading-[100%] -tracking-[1.08px]">
                    {value}
                  </div>
                  <div className="[font-size:_clamp(20px,1.5vw,24px)] leading-[100%] font-walsheim">
                    {t(country)}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </BasicWidthContainer>
    </div>
  );
}
