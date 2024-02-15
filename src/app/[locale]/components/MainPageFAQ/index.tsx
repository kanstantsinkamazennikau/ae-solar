"use client";

import Accordion from "@/app/[locale]/components/common/Accordion/";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  FAQ_ACCORDION_DATA,
  FAQ_MORE_SOLUTIONS,
  FAQ_QUESTION,
  FAQ_SOLUTIONS,
} from "@/app/[locale]/utils/constants";
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
      />
      <div className="flex flex-col items-end lg:mb-[120px] md:mb-[80px] mb-0 pb-20">
        <div className="max-w-[873px] w-full">
          <Accordion multiple>
            {FAQ_ACCORDION_DATA.map((item) => (
              <AccordionItem
                key={item.question}
                title={item.question}
                openCloseStyle
              >
                <p className="leading-[150%] pb-6 [font-size:_clamp(12px,1.5vw,24px)] font-walsheim pl-6">
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
