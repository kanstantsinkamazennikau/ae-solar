"use client";

import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function DifferenceCenter() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <Trans
      components={{
        red: <p className="text-[#B30006]" />,
      }}
    >
      {t("Explore Our Difference")}
    </Trans>
  );
}
