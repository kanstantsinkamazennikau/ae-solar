"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import {
  COOKIES_AESOLAR,
  COOKIES_BY_CHOOSING,
  COOKIES_I_ACCEPT,
  COOKIES_I_DO_NOT_ACCEPT,
  COOKIES_LINKS,
  COOKIES_MATCH_TEXT_WITH_LINK,
  COOKIES_WE_USE_COOKIES,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

const styleLink = (text: string, linkToMatch: string[]) => {
  const matchRegex = RegExp(linkToMatch.join("|"), "ig");
  const matches = [...text.matchAll(matchRegex)];

  return text.split(matchRegex).map((nonLinkText, index) => (
    <span
      key={nonLinkText}
      className="[font-size:_clamp(10px,1.5vw,14px)] font-walsheim font-medium"
    >
      {nonLinkText}
      {
        <a
          href={
            COOKIES_MATCH_TEXT_WITH_LINK[
              matches[
                index
              ] as unknown as keyof typeof COOKIES_MATCH_TEXT_WITH_LINK
            ]
          }
          className="underline"
        >
          {matches[index]}
        </a>
      }
    </span>
  ));
};

export default function Cookies() {
  return (
    <div className="flex flex-col py-10 bg-[#0C0C0C] fixed bottom-0 z-40 justify-center items-center w-full hidden">
      <BasicWidthContainer>
        <div className="px-[60px] gap-[120px] flex items-center">
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="rotate-180 absolute top-0"
          />
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="absolute bottom-0"
          />
          <div className="flex [font-size:_clamp(10px,1.5vw,14px)] font-walsheim flex-col text-dark-gray-900">
            <p className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold font-sans mb-6 text-white">
              {COOKIES_AESOLAR}
            </p>
            <p className="mb-2">
              {styleLink(COOKIES_WE_USE_COOKIES, COOKIES_LINKS)}
            </p>
            <p>{COOKIES_BY_CHOOSING}</p>
          </div>
          <div className="flex flex-col [font-size:_clamp(14px,1.5vw,20px)] font-semibold">
            <Button onClick={() => console.log()}>
              <span className="whitespace-nowrap">{COOKIES_I_ACCEPT}</span>
            </Button>
            <Button
              onClick={() => localStorage.setItem("cookies", "false")}
              style="textOnly"
            >
              <span className="whitespace-nowrap text-base-red">
                {COOKIES_I_DO_NOT_ACCEPT}
              </span>
            </Button>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
