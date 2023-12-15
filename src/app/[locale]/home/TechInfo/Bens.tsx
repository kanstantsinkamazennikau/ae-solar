import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import {
  TECH_INFO_BENS,
  TECH_INFO_BEST_AT_THIS,
  TECH_INFO_WHY_WE_ARE,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Bens() {
  return (
    <>
      <TwoTierHeading
        tierOneHeading={TECH_INFO_WHY_WE_ARE}
        tierTwoHeading={TECH_INFO_BEST_AT_THIS}
        align="left"
      />
      <div className="grid grid-cols-3 gap-5">
        {TECH_INFO_BENS.map(({ title, description, image }, index) => {
          const isFullHeightRow = index === 1;
          return (
            <div
              key={title}
              className={`
              flex
              p-8
              items-start
              self-stretch
              relative
              overflow-hidden
              bg-dark-gray-950
              rounded-[10px]
              ${
                isFullHeightRow
                  ? "row-start-1 row-end-3 col-start-2 col-end-3"
                  : "h-[340px]"
              }`}
            >
              <Image
                src={`/images/techInfo/${image}`}
                alt={image}
                width={408}
                height={408}
                priority
                className={`absolute
                ${
                  isFullHeightRow
                    ? "top-0 right-0 w-full h-full"
                    : "-top-[50px] -right-[60px] stroke-white stroke-[4px] object-none"
                }`}
              />
              <div className="flex gap-6 flex-col self-end z-10">
                {isFullHeightRow && (
                  <Image
                    src="/images/german.svg"
                    alt="german"
                    width={76}
                    height={76}
                    priority
                  />
                )}
                <div className="text-[32px] leading-[120%] font-medium">
                  {title}
                </div>
                <div className="text-base leading-[150%] font-medium font-walsheim text-dark-gray-900">
                  {description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
