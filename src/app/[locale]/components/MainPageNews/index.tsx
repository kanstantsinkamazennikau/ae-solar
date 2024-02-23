import RecentNews from "@/app/[locale]/components/MainPageNews/RecentNews";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  MAIN_PAGE_COMPANY,
  MAIN_PAGE_NEWS_INSIGHTS,
} from "@/app/[locale]/utils/constants";

export default function MainPageNews() {
  return (
    <div
      className="
        flex
        flex-col
        w-full
        justify-center
        items-center
        xl:mb-[180px]
        lg:mb-[140px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <BasicWidthContainer>
        <TwoTierHeading
          tierOneHeading={MAIN_PAGE_NEWS_INSIGHTS}
          tierTwoHeading={MAIN_PAGE_COMPANY}
          align="left"
        />
      </BasicWidthContainer>
      <RecentNews />
    </div>
  );
}
