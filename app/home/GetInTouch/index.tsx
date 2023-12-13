"use client";

import Button from "@/app/components/common/Button";
import {
  GET_IN_TOUCH_BECOME_A,
  GET_IN_TOUCH_CLIENT_TYPE,
  GET_IN_TOUCH_ELEVATE_GROWTH,
  GET_IN_TOUCH_JOIN_US,
} from "@/app/utils/constants";
import Image from "next/image";
import { useState } from "react";

export default function GetInTouch() {
  const [clientType, setClientType] = useState("Investor");

  return (
    <div
      className="
      flex
      justify-center
      items-end
      bg-gradient-297
      bg-[#111]
      w-full
      h-screen
      relative
      px-5
      "
    >
      <Image
        src="/images/getInTouchUnion.svg"
        alt="union"
        priority
        width={1920}
        height={1080}
        className="h-full w-full mix-blend-color-dodge absolute"
      />
      <div className="flex flex-col justify-center items-start gap-[100px] max-w-[1320px] pb-[130px] w-full">
        {/* CLIENT TYPE */}
        <div className="flex p-1 justify-center items-center gap-5 get-in-touch-border [&>*:last-child>div:last-child]:hidden">
          {GET_IN_TOUCH_CLIENT_TYPE.map((type) => (
            <div key={type} className="flex justify-center items-center gap-5">
              <button
                className={`flex py-5 px-7 ${
                  clientType === type
                    ? "get-in-touch-client-border"
                    : "border-1 border border-transparent"
                }`}
                onClick={() => setClientType(type)}
              >
                <span className="text-2xl leading-[0.9]">{type}</span>
              </button>
              <div className="w-1 h-5 bg-base-red"></div>
            </div>
          ))}
        </div>

        {/* TITLE */}

        <div className="flex flex-col gap-[60px] self-stretch">
          <div className="text-[64px] leading-none text-base-red -tracking-[1.92px] font-medium">
            {GET_IN_TOUCH_ELEVATE_GROWTH}
          </div>
          <div className="text-8xl leading-none -tracking-[-2.88px] font-extrabold max-w-[900px]">
            {GET_IN_TOUCH_JOIN_US(clientType)}
          </div>
        </div>

        {/* BUTTON */}
        <Button onClick={() => console.log("contact us")} showArrow>
          {GET_IN_TOUCH_BECOME_A + clientType.toLowerCase()}
        </Button>
      </div>
    </div>
  );
}
