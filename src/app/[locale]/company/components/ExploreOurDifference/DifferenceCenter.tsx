"use client";

import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function DifferenceCenter() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <Trans
      components={{
        red: <span className="text-[#B30006]" />,
      }}
    >
      {translation.exploreOurDifference}
    </Trans>
  );
}
