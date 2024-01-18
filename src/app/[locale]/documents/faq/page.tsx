import AccrodionWithIntersection from "@/app/[locale]/documents/components/AccordionWithIntersection";
import { DOCUMENTS_FAQ_FILES } from "@/app/[locale]/utils/constants";

export default function FAQ() {
  return DOCUMENTS_FAQ_FILES.map(({ category, data }, index) => {
    return (
      <AccrodionWithIntersection
        category={category}
        data={data}
        key={category}
      />
    );
  });
}
