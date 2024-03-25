"use client";

import Tier1 from "@/app/[locale]/components/common/Tier1";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams } from "next/navigation";
import { Trans } from "react-i18next";

export default function CompanyTier1() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <Tier1
      externalStyle="
        md:!py-20
        !py-14
        xl:!mb-[160px]
        lg:!mb-[100px]
        md:!mb-[60px]
        !mb-[0px]
      "
      tier1Text={
        <Trans
          components={{
            blue: <span className="text-[#038DF4]" />,
          }}
        >
          {t("As a TIER 1 Company")}
        </Trans>
      }
      descriptionText={
        <Trans
          components={{
            white: <span className="text-white" />,
          }}
        >
          {t("We Synonymous")}
        </Trans>
      }
    />
  );
}
