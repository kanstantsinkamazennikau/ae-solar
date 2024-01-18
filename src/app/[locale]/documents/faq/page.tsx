import FAQAccrodionWithIntersection from "@/app/[locale]/documents/components/FAQAccordionWithIntersection";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";

export default function FAQ() {
  return DOCUMENTS_FAQ_FILES.map(({ category, data }, index) => {
    return (
      <FAQAccrodionWithIntersection
        category={category}
        data={data}
        key={category}
      />
    );
  });
}
