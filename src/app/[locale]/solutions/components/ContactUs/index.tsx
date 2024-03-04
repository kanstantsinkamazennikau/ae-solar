"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { SOLUTIONS_CONTACTS_US } from "@/app/[locale]/solutions/constants";
import {
  GET_IN_TOUCH_CLIENT_TYPE,
  GET_IN_TOUCH_ELEVATE_GROWTH,
  HEADER_CONTACT_US,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactUs() {
  const [clientType, setClientType] =
    useState<keyof typeof matchPartnerTypeWithArticle>("partner");
  const router = useRouter();

  //TODO fill form with partner type value for "intrested in" dropdown
  const handleClick = () => {
    router.push(`/contacts?type=${clientType}`);
  };

  const matchPartnerTypeWithArticle = {
    partner: "a partner",
    investor: "an investor",
    installer: "an installer",
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
          {/* CLIENT TYPE */}
          <div
            className={`flex p-1 justify-center items-center md:gap-5 gap-1 get-in-touch-border [&>*:last-child>div:last-child]:hidden relative`}
          >
            {GET_IN_TOUCH_CLIENT_TYPE.map((type) => (
              <div
                key={type}
                className="flex justify-center items-center md:gap-5 gap-1"
              >
                <button
                  className={`flex py-[14px] md:px-7 px-5 ${
                    clientType === type
                      ? "get-in-touch-client-border"
                      : "border-1 border border-transparent"
                  }`}
                  onClick={() =>
                    setClientType(
                      type as keyof typeof matchPartnerTypeWithArticle
                    )
                  }
                >
                  <span className="[font-size:_clamp(10px,2vw,24px)] leading-[0.9] capitalize">
                    {type}
                  </span>
                </button>
                <div className="w-1 h-5 bg-base-red"></div>
              </div>
            ))}
          </div>
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
              {GET_IN_TOUCH_ELEVATE_GROWTH}
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
              {SOLUTIONS_CONTACTS_US}
            </div>
          </div>
          {/* <Link href={`/consult`}> */}
          <Button externalStyle="!py-[14px] !px-[26px]" onClick={handleClick}>
            <span className="[font-size:_clamp(16px,1.5vw,20px)] leading-[100%] whitespace-nowrap">
              {HEADER_CONTACT_US}
            </span>
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </BasicWidthContainer>
  );
}
