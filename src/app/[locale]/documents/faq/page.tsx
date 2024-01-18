import AccordionItem from "@/app/[locale]/components/common/Accordion/AccordionItem";
import AccordionWithIntersection from "@/app/[locale]/documents/components/AccordionWithIntersection";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";

export default function FAQ() {
  return DOCUMENTS_FAQ_FILES.map(({ category, data }) => {
    return (
      <AccordionWithIntersection category={category} key={category}>
        {data.map(({ question, answer }) => {
          const styledTitle = (
            <span
              className={`
                font-semibold
                leading-[100%]
                [font-size:_clamp(10px,1.5vw,24px)]
              `}
            >
              {category}
            </span>
          );
          return (
            <AccordionItem key={question} title={styledTitle} openCloseStyle>
              <p className="pb-6">{answer}</p>
            </AccordionItem>
          );
        })}
      </AccordionWithIntersection>
    );
  });
}
