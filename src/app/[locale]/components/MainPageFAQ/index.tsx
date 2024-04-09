"use client";

import Accordion from "@/app/[locale]/components/common/Accordion/";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import DownloadPresentation from "@/app/[locale]/components/common/DownloadPresentation";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { FAQ_ACCORDION_DATA } from "@/app/[locale]/utils/constants";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { Trans } from "react-i18next";

export function MainPageFAQ() {
  const locale = useParams()?.locale as LocaleTypes;
  const router = useRouter();
  const { t } = useClientTranslation(locale, "translation");

  const { translation } = useContext(i18nProviderContext);

  const handleClick = () => {
    router.push(`/${locale}/company/faq`);
  };

  return (
    <BasicWidthContainer>
      <TwoTierHeading
        tierOneHeading={translation.faqQuestion}
        tierTwoHeading={translation.faqSolution}
        align="left"
        size="small"
        externalStyle="[&>*:last-child]:!font-medium"
        reverseColor
      />
      <div
        className="
          flex
          min-[920px]:items-start
          xl:gap-[60px]
          lg:gap-[40px]
          gap-[20px]
          lg:mb-[120px]
          md:mb-[80px]
          mb-0
          pb-20
          min-[920px]:flex-row
          flex-col
          items-center
        "
      >
        <div className="flex min-[920px]:flex-col flex-col-reverse w-full min-w-[316px] top-[100px] max-w-[316px] gap-6">
          <DownloadPresentation link="/documents/presentation.pdf" />
          <div
            className="
                p-7
                min-[920px]:pt-0
                max-[920px]:border
                max-[920px]:border-solid
                max-[920px]:border-b-0
                max-[920px]:border-[#131313]
                max-[920px]:bg-[#0D0D0D]
                rounded-xl
                -mb-12
                z-10
                text-sm
                font-normal
                leading-[130%]
                font-walsheim
                text-[#747474]
              "
          >
            <Trans
              components={{
                bold: <span className="text-dark-gray-900 font-bold" />,
              }}
            >
              {translation.faqGermanBrand}
            </Trans>
            <hr className="mt-6 border-[#131313] min-[920px]:hidden" />
          </div>
        </div>

        <div className="max-w-[873px] w-full">
          <Accordion multiple>
            {FAQ_ACCORDION_DATA.map((item) => (
              <AccordionItem
                key={item.question}
                title={translation[item.question]}
                openCloseStyle
                dropdownIcon="/images/selectorWhite.svg"
              >
                <p className="leading-[150%] pb-6 [font-size:_clamp(14px,1.5vw,24px)] font-walsheim pl-6">
                  {translation[item.answer]}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-[60px] flex min-[920px]:justify-start justify-center">
            <Button onClick={handleClick} style="outline" showArrow>
              <span className="[font-size:_clamp(14px,1.5vw,24px)] -tracking-[0.24px] font-semibold">
                {translation.moreSolutions}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
