import Accordion from "@/app/components/Accordion";
import { FAQ, MAIN_PAGE_ACCORDION_DATA } from "@/app/utils/constants";

export function MainPageFAQ() {
  return (
    <div className="flex justify-between w-full pb-[120px]">
      <div className="text-9xl leading-none font-extrabold text-dark-gray-900">
        {FAQ}
      </div>
      <Accordion data={MAIN_PAGE_ACCORDION_DATA} />
    </div>
  );
}
