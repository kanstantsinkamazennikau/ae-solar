"use client";

import ContactInfo from "@/app/[locale]/components/common/Footer/ContactInfo";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function Contacts() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      className="flex flex-col sticky min-[920px]:top-[80px] top-[64px] w-full min-w-[300px] max-w-[300px]"
      id="contacts"
    >
      <div
        className="
          py-10
          px-10
          border
          border-solid
        border-[#131313]
        bg-[#0D0D0D]
          rounded-xl
          font-semibold
          [font-size:_clamp(12px,1.5vw,16px)]
          leading-[120%]
          min-w-[300px]
          max-w-[300px]
          flex
          flex-col
          gap-4
        "
      >
        <p className="[font-size:_clamp(20px,1.5vw,24px)] font-semibold leading-[120%]">
          {t("Contacts")}
        </p>
        <div className="text-sm font-normal leading-[130%] font-walsheim text-[#747474]">
          <Trans
            components={{
              bold: <span className="text-dark-gray-900 font-bold" />,
            }}
          >
            {t("German Brand")}
          </Trans>
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
