import RecentNews from "@/app/[locale]/components/MainPageNews/RecentNews";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import getLocale from "@/app/[locale]/utils/getLocale";

export default async function MainPageNews() {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "translation");

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
          tierOneHeading={t("News and Insights")}
          tierTwoHeading={t("From Our Company")}
          align="left"
        />
      </BasicWidthContainer>
      <RecentNews />
    </div>
  );
}
