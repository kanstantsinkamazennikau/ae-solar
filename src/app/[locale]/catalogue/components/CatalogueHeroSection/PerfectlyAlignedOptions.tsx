"use client";

import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function PerfectlyAlignedOptions() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <>
      <div className="[font-size:_clamp(18px,2.5vw,40px)] font-bold leading-[120%] text-center mb-10">
        <Trans
          components={{
            red: <span className="text-[#B30006]" />,
          }}
        >
          {t("Perfectly Aligned Options")}
        </Trans>
      </div>
      <Image
        src={`/images/glowFull.png`}
        alt="glow"
        priority
        width={1320}
        height={60}
        className="rotate-180"
      />
    </>
  );
}
