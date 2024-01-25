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
  COOKIES_USER_CONSENT_FLAG,
  COOKIES_WE_USE_COOKIES,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";

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

export default function CookiesBanner() {
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(COOKIES_USER_CONSENT_FLAG) === "false") {
      setCookieConsentIsTrue(true);
      return;
    }
    const consentIsTrue = Cookies.get(COOKIES_USER_CONSENT_FLAG) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onAcceptClick = (e: MouseEvent<HTMLButtonElement>) => {
    Cookies.set(COOKIES_USER_CONSENT_FLAG, "true");
    setCookieConsentIsTrue(true);
  };

  const onRejectClick = (e: MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem(COOKIES_USER_CONSENT_FLAG, "false");
    setCookieConsentIsTrue(true);
  };

  if (cookieConsentIsTrue) {
    return null;
  }

  return (
    <div className="flex md:py-10 py-4 bg-[#0C0C0C] fixed bottom-0 z-40 justify-center items-center w-full">
      <BasicWidthContainer>
        <div className="lg:px-[60px] md:px-5 lg:gap-[120px] md:gap-12 gap-5 flex items-center md:flex-row flex-col">
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
            <p className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold font-sans mb-2 text-white">
              {COOKIES_AESOLAR}
            </p>
            <p className="mb-2">
              {styleLink(COOKIES_WE_USE_COOKIES, COOKIES_LINKS)}
            </p>
            <p>{COOKIES_BY_CHOOSING}</p>
          </div>
          <div className="flex md:flex-col flex-row font-semibold gap-6">
            <Button onClick={onAcceptClick} size="thin">
              <span className="whitespace-nowrap [font-size:_clamp(14px,1.5vw,20px)]">
                {COOKIES_I_ACCEPT}
              </span>
            </Button>
            <Button
              onClick={onRejectClick}
              style="textOnly"
              externalStyle="!px-0 !py-0"
            >
              <span className="whitespace-nowrap text-base-red [font-size:_clamp(14px,1.5vw,20px)]">
                {COOKIES_I_DO_NOT_ACCEPT}
              </span>
            </Button>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
