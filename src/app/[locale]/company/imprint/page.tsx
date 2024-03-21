"use client";

import Contacts from "@/app/[locale]/company/imprint/components/Contacts";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { DOCUMENTS_IMPRINT_INFO_LEGAL } from "@/app/[locale]/utils/constants";
import { useParams } from "next/navigation";

export default function Imprint() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div
      className="
        flex
        gap-[60px]
        relative
        min-[660px]:flex-row
        flex-col-reverse
        items-center
        max-[920px]:w-fit
        max-[920px]:mx-auto
      "
    >
      {/* CONTACTS */}
      <Contacts />

      {/* LEGAL */}
      <div className="flex flex-col gap-14 max-w-[760px] max-[920px]:self-start">
        <div className="flex flex-col gap-6">
          <div className="[font-size:_clamp(20px,1.5vw,24px)] font-semibold leading-[120%]">
            {t("Legal")}
          </div>
          <div className="flex flex-col">
            {DOCUMENTS_IMPRINT_INFO_LEGAL.registration.map(
              (registration: string) => (
                <div
                  key={registration}
                  className={`
                  font-walsheim
                  [font-size:_clamp(12px,1.5vw,20px)]
                  leading-[150%]
                  font-normal
                `}
                >
                  {registration}
                </div>
              )
            )}
          </div>
          <div>
            {DOCUMENTS_IMPRINT_INFO_LEGAL.address.map(
              (registration: string) => (
                <div
                  key={registration}
                  className={`
                  font-walsheim
                  [font-size:_clamp(12px,1.5vw,20px)]
                  leading-[150%]
                  font-normal
                `}
                >
                  {registration}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
