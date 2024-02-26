import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import Logo from "@/app/[locale]/components/common/Logo";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
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
              <div
                className="
                  min-[920px]:w-[314px]
                  md:w-[240px]
                  md:sticky
                  min-[920px]:top-[80px]
                  md:top-[64px]
                  md:block
                  flex
                  flex-col
                "
              >
                <div
                  className="
                    flex
                    gap-4
                    flex-col
                    md:max-w-full
                    py-4
                    px-7
                    z-10
                    max-w-[500px]
                    max-md:mx-auto
                    max-md:items-center
                  "
                >
                  <div className="flex flex-col w-fit relative z-10">
                    <Logo />
                    <p className="text-base-red text-[10px] text-right">
                      {FOOTER_SAVE_THE_WORLD}
                    </p>
                  </div>
                  <div className="[font-size:_clamp(14px,1.5vw,16px)] max-md:text-center">
                    {styleMatchingText(
                      FOOTER_GERMAN_BRAND,
                      FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
                      "font-normal leading-[130%] font-walsheim",
                      "font-bold"
                    )}
                  </div>
                </div>
                <div
                  className="
                  border-solid
                  border-[#131313]
                  bg-[#0D0D0D]
                  rounded-xl
                  md:py-8
                  md:px-7
                  py-4
                  px-3
                  w-full
                "
                >
                  <p className="[font-size:_clamp(20px,2.5vw,36px)] font-semibold leading-[110%] mb-8 max-md:text-center">
                    {SOLUTIONS_TIER_1}
                  </p>
                  <div
                    className="
                      flex
                      md:flex-col
                      min-[500px]:flex-row
                      flex-col
                      gap-6
                      max-md:justify-around
                      max-[500px]:justify-between
                      max-md:gap-3
                    "
                  >
                    {SOLUTIONS_STATS_WITH_DETAILS.map(({ details, stat }) => (
                      <Fragment key={details}>
                        <div className="flex flex-col items-start gap-[6px] max-md:items-center">
                          <p className="[font-size:_clamp(26px,2.5vw,48px)] font-semibold leading-[100%] -tracking-[1.44px]">
                            {stat}
                          </p>
                          <p className="[font-size:_clamp(14px,1.5vw,20px)] font-normal font-walsheim leading-[110%] max-md:text-center">
                            {details}
                          </p>
                        </div>
                        <div className="w-0.5 bg-[#131313] mx-4 h-auto last:hidden" />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
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
