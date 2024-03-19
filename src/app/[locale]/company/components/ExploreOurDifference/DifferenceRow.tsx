import { DifferenceRowProps } from "@/app/[locale]/company/components/ExploreOurDifference/types";
import {
  ABOUT_EXPLORE_FOOTER,
  ABOUT_EXPLORE_HEADER,
} from "@/app/[locale]/company/constants";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import getLocale from "@/app/[locale]/utils/getLocale";

export default async function DifferenceRow({
  rowText,
  index,
}: DifferenceRowProps) {
  const locale = getLocale();
  const { t } = await useServerTranslation(locale, "translation");

  const formatNumber = (number: number) => {
    return String(number).padStart(2, "0");
  };

  return (
    <div
      className="
        flex
        relative
        p-0
        gradient-border-mask
        overflow-hidden
        backdrop-blur-[10px]
        rounded-[20px]
        md:max-w-[400px]
        w-full
        h-full
        lg:min-h-[200px]
        md:min-h-[150px]
        mx-auto
        z-10
        hover:scale-105
        hover:shadow-difference
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <div
        className="
        md:hidden
        bg-[url('/images/getInTouchBackground.svg')]
        absolute
        top-[1px]
        left-[1px]
        bottom-[1px]
        right-[1px]
        rounded-[20px]
      "
      />
      <div
        className="
          relative
          z-10
          w-full
          h-auto
          lg:py-10
          md:py-6
          md:px-10
          py-6
          px-5
          rou
          md:bg-[#00000033]
          [background:radial-gradient(90.83%_97%_at_50%_100%,rgb(255_255_255/7%)_0%,rgb(255_255_255/0%)_100%),#00000052]
          flex
          md:gap-0
          gap-3
          md:justify-center
          md:items-center
          flex-col
          [font-size:_clamp(20px,2.5vw,32px)]
          font-bold
          -tracking-[0.32px]
          md:text-center
          text-start
          leading-[120%]
        "
      >
        <div className="md:block hidden">{t(rowText)}</div>

        {/* MOBILE */}
        <div className="md:hidden leading-[100%] font-walsheim font-bold h-5 text-dark-gray-900 flex">
          <div className="text-[24px] flex items-start h-full">
            {formatNumber(index + 1)}
          </div>
          <div className="text-[14px] flex items-baseline h-full leading-[100%] text-[#505050]">
            /
            {formatNumber(
              ABOUT_EXPLORE_HEADER.length + ABOUT_EXPLORE_FOOTER.length
            )}
          </div>
        </div>
        <p className="md:hidden block">{t(rowText)}</p>
      </div>
    </div>
  );
}
