"use client";

import Tier1 from "@/app/[locale]/components/common/Tier1";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function CompanyTier1() {
  const { translation } = useContext(i18nProviderContext);

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
          {translation.asTIER1Company}
        </Trans>
      }
      descriptionText={
        <Trans
          components={{
            white: <span className="text-white" />,
          }}
        >
          {translation.weSynonymous}
        </Trans>
      }
    />
  );
}
