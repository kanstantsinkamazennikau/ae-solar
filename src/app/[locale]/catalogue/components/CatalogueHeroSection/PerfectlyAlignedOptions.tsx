"use client";

import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function PerfectlyAlignedOptions() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <>
      <div className="[font-size:_clamp(18px,2.5vw,40px)] font-bold leading-[120%] text-center mb-10">
        <Trans
          components={{
            red: <span className="text-[#B30006]" />,
          }}
        >
          {translation.perfectlyAlignedOptions}
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
