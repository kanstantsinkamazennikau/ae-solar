import Accordion from "@/app/[locale]/components/common/Accordion/";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import { FAQ, MAIN_PAGE_ACCORDION_DATA } from "@/app/[locale]/utils/constants";

export function MainPageFAQ() {
  return (
    <BasicWidthContainer>
      <div className="flex justify-between pb-[120px]">
        <div className="text-9xl leading-none font-extrabold text-dark-gray-900">
          <span className="border-b border-solid border-base-red">{FAQ}</span>
        </div>
        <Accordion data={MAIN_PAGE_ACCORDION_DATA} />
      </div>
    </BasicWidthContainer>
  );
}
