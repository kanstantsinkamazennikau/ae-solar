"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function ContactUs() {
  const { translation } = useContext(i18nProviderContext);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/contacts`);
  };

  return (
    <BasicWidthContainer styles={`mx-auto w-full max-[540px]:!px-0`}>
      <div
        className={`
          flex
          flex-col
          justify-center
          items-center
          w-full
          bg-[url('/images/getInTouchBackground.svg')]
          2xl:py-[100px]
          2xl:px-[100px]
          md:py-[80px]
          md:px-[50px]
          py-[40px]
          min-[540px]:px-[30px]
          px-[8px]
          rounded-[40px]
          max-[540px]:rounded-none
          max-[540px]:border-x-0
          border-2
          border-solid
          border-[#3e0002]
          relative
          overflow-hidden
          bg-[#111]
        `}
      >
        <div
          className="
            [background:radial-gradient(100%_100%_at_50%_100%,rgba(109,2,7,0.30)_0%,rgba(109,2,7,0.00)_100%),linear-gradient(297deg,#000_0%,rgba(0,0,0,0.00)_100%),#0d0d0d00]
            w-full
            h-full
            absolute
          "
        />
        <Image
          src={`/images/getInTouchUnion.svg`}
          alt="getInTouchUnion"
          width={1440}
          height={1000}
          className="absolute h-full mix-blend-hard-light md:hidden"
        />

        <div
          className="
            flex
            flex-col
            xl:gap-20
            lg:gap-14
            md:gap-10
            gap-6
            justify-center
            items-center
            z-10
            relative
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              xl:gap-[20px]
              lg:gap-[20px]
              md:gap-[20px]
              gap-2
              self-stretch
              text-center
              w-full
            "
          >
            <div
              className="
              [font-size:_clamp(24px,4vw,64px)]
              leading-[100%]
              text-base-red
              md:-tracking-[1.92px]
              -tracking-[0.72px]
              font-medium
            "
            >
              {translation.fuelingGrowth}
            </div>
            <div
              className="
                [font-size:_clamp(26px,5.5vw,96px)]
                md:-tracking-[-2.88px]
                -tracking-[-1.08px]
                font-extrabold
                max-w-[1000px]
                leading-[100%]
              "
            >
              {translation.sustainableFuture}
            </div>
          </div>
          <Button externalStyle="!py-[14px] !px-[26px]" onClick={handleClick}>
            <span className="[font-size:_clamp(16px,1.5vw,20px)] leading-[100%] whitespace-nowrap">
              {translation.contactUs}
            </span>
          </Button>
        </div>
      </div>
    </BasicWidthContainer>
  );
}
