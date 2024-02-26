import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import Logo from "@/app/[locale]/components/common/Logo";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import CooperationStats from "@/app/[locale]/solutions/components/Cooperation/CooperationStats";
import {
  SOLUTIONS_COOPERATION,
  SOLUTIONS_EXPLORE_OUR,
  SOLUTIONS_STATS_WITH_DETAILS,
  SOLUTIONS_TIER_1,
  SOLUTIONS_TO_COOPERATION,
  SOLUTIONS_WE_ARE_OPEN,
} from "@/app/[locale]/solutions/constants";
import {
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
  FOOTER_SAVE_THE_WORLD,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Cooperation() {
  return (
    <div
      className="
        xl:mb-[180px]
        lg:mb-[140px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <div className="flex flex-col items-center">
        <BasicWidthContainer>
          <TwoTierHeading
            tierOneHeading={SOLUTIONS_WE_ARE_OPEN}
            tierTwoHeading={SOLUTIONS_TO_COOPERATION}
            align="left"
            size="small"
            externalStyle="[font-size:_clamp(40px,6vw,96px)!important] [&>*:last-child]:[font-size:_clamp(40px,6vw,96px)!important]"
            reverseColor
          />
          <div className="flex gap-[60px] justify-between md:flex-row flex-col">
            <div>
              <CooperationStats />
            </div>
            <div className="flex flex-col w-full gap-5">
              {SOLUTIONS_COOPERATION.map(
                ({ clientType, description, links, picture }) => (
                  <div
                    className={`
                      flex
                      flex-col
                      w-full
                      min-[920px]:p-[60px]
                      md:p-[40px]
                      p-[20px]
                      min-[640px]:flex-row-reverse
                      xl:max-w-[946px]
                      relative
                      justify-end
                      border-solid
                      border-[#131313]
                      bg-[#0D0D0D]
                      rounded-xl
                    `}
                    key={clientType}
                  >
                    <Image
                      src={`/images/solutions/${picture}`}
                      alt="dividerSmall"
                      width={540}
                      height={400}
                      className="absolute top-0 right-0 h-full"
                    />
                    <div
                      className="
                        flex
                        flex-col
                        items-start
                        xl:gap-8
                        gap-6
                        relative
                        z-10
                      "
                    >
                      <div className="flex gap-6 items-start [font-size:_clamp(30px,3.5vw,64px)] leading-[100%] ">
                        <span className="font-semibold -tracking-[1.08px]">
                          {clientType.split(/\r?\n|\r|\n/g).map((string) => (
                            <div key={string}>{string}</div>
                          ))}
                        </span>
                      </div>
                      <p
                        className="
                        [font-size:_clamp(16px,1.5vw,20px)]
                        leading-[150%]
                        font-normal
                        font-walsheim
                      "
                      >
                        {description}
                      </p>
                      <div className="flex gap-4 items-baseline">
                        <div className="flex flex-col gap-3">
                          {links.map(({ link, title }) => (
                            <Link href={link} key={link}>
                              <Button
                                style="textOnly"
                                externalStyle="!p-0 text-base-red"
                                showRedArrow
                              >
                                <span className="[font-size:_clamp(16px,1.5vw,20px)] font-semibold leading-[100%] -tracking-[0.2px]">
                                  {title}
                                </span>
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </BasicWidthContainer>
      </div>
    </div>
  );
}
