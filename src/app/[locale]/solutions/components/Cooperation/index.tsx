"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import LinkWithArrow from "@/app/[locale]/components/common/LinkWithArrow";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import CooperationStats from "@/app/[locale]/solutions/components/Cooperation/CooperationStats";
import { SOLUTIONS_COOPERATION } from "@/app/[locale]/solutions/constants";
import Image from "next/image";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function Cooperation() {
  const { translation } = useContext(i18nProviderContext);

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
            tierOneHeading={
              <Trans
                components={{
                  red: <p className="text-[#B30006]" />,
                }}
              >
                {translation.openToCooperation}
              </Trans>
            }
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
                          {translation[clientType]
                            ?.split(/\r?\n|\r|\n/g)
                            .map((string) => (
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
                        {translation[description]}
                      </p>
                      <div className="flex gap-4 items-baseline">
                        <div className="flex flex-col gap-3">
                          {links.map(({ link, title }) => (
                            <LinkWithArrow
                              key={link}
                              label={translation[title]}
                              href={link}
                              externalStyle="[font-size:_clamp(16px,1.5vw,20px)!important] font-semibold leading-[100%] -tracking-[0.2px]"
                              arrowStyle="w-[14px] h-[14px]"
                            />
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
