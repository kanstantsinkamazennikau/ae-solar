"use client";

import Accordion from "@/app/[locale]/components/common/Accordion/";
import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  FAQ_ACCORDION_DATA,
  FAQ_MORE_QUESTIONS,
  FAQ_QUESTION,
  FAQ_SOLUTIONS,
} from "@/app/[locale]/utils/constants";

export function MainPageFAQ() {
  return (
    <BasicWidthContainer>
      <TwoTierHeading
        tierOneHeading={FAQ_QUESTION}
        tierTwoHeading={FAQ_SOLUTIONS}
        align="left"
      />
      <div className="flex flex-col mb-[120px] items-end">
        <div className="max-w-[873px] w-full">
          <Accordion multiple>
            {FAQ_ACCORDION_DATA.map((item) => (
              <AccordionItem key={item.question} title={item.question}>
                <p className="text-2xl leading-9 pb-6">{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-[60px]">
            <Button
              onClick={() => console.log(FAQ_MORE_QUESTIONS)}
              style="outline"
              showArrow
            >
              <span className="text-2xl -tracking-[0.24px] font-semibold">
                {FAQ_MORE_QUESTIONS}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
