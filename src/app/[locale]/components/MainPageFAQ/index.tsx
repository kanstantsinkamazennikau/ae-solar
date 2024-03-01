"use client";

import Accordion from "@/app/[locale]/components/common/Accordion/";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import DownloadPresentation from "@/app/[locale]/components/common/DownloadPresentation";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  FAQ_ACCORDION_DATA,
  FAQ_MORE_SOLUTIONS,
  FAQ_QUESTION,
  FAQ_SOLUTIONS,
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import { useParams, useRouter } from "next/navigation";

export function MainPageFAQ() {
  const locale = useParams()?.locale;
  const router = useRouter();

  //TODO fill form with partner type value for "intrested in" dropdown
  const handleClick = () => {
    router.push(`/${locale}/documents/faq`);
  };

  return (
    <BasicWidthContainer>
      <TwoTierHeading
        tierOneHeading={FAQ_QUESTION}
        tierTwoHeading={FAQ_SOLUTIONS}
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
              "
          >
            {styleMatchingText(
              FOOTER_GERMAN_BRAND,
              FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
              "text-sm font-normal leading-[130%] font-walsheim text-[#747474]",
              "text-dark-gray-900 font-bold"
            )}
            <hr className="mt-6 border-[#131313] min-[920px]:hidden" />
          </div>
        </div>

        <div className="max-w-[873px] w-full">
          <Accordion multiple>
            {FAQ_ACCORDION_DATA.map((item) => (
              <AccordionItem
                key={item.question}
                title={item.question}
                openCloseStyle
                dropdownIcon="/images/selectorWhite.svg"
              >
                <p className="leading-[150%] pb-6 [font-size:_clamp(14px,1.5vw,24px)] font-walsheim pl-6">
                  {item.answer}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-[60px] flex min-[920px]:justify-start justify-center">
            <Button onClick={handleClick} style="outline" showArrow>
              <span className="[font-size:_clamp(14px,1.5vw,24px)] -tracking-[0.24px] font-semibold">
                {FAQ_MORE_SOLUTIONS}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
