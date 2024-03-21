"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { COOKIES_USER_CONSENT_FLAG } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "next/navigation";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { Trans } from "react-i18next";

export default function CookiesBanner() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

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
              {t("Cookies on AESolar")}
            </p>
            <p className="mb-2 [font-size:_clamp(10px,1.5vw,14px)] font-walsheim font-medium">
              <Trans
                components={{
                  linkPolicy: (
                    <a
                      className="underline"
                      href={`${locale}/company/publishers_info`}
                      target="_blank"
                    />
                  ),
                }}
              >
                {t("We Use Cookies")}
              </Trans>
            </p>
            <p>{t("Cookies Choosing")}</p>
          </div>
          <div className="flex md:flex-col flex-row font-semibold gap-6">
            <Button onClick={onAcceptClick} externalStyle="py-[9px] px-[26px]">
              <span className="whitespace-nowrap [font-size:_clamp(14px,1.5vw,20px)]">
                {t("I accept")}
              </span>
            </Button>
            <Button
              onClick={onRejectClick}
              style="textOnly"
              externalStyle="!px-0 !py-0"
            >
              <span className="whitespace-nowrap text-base-red [font-size:_clamp(14px,1.5vw,20px)]">
                {t("I do not accept")}
              </span>
            </Button>
          </div>
        </div>
      </BasicWidthContainer>
    </div>
  );
}
