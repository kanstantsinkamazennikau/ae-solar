"use client";

import RecentNews from "@/app/[locale]/components/MainPageNews/RecentNews";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import TwoTierHeading from "@/app/[locale]/components/common/TwoTierHeading";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Link from "next/link";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function MainPageNews({
  children,
}: {
  children: React.ReactNode;
}) {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div
      className="
        flex
        flex-col
        w-full
        justify-center
        items-center
        xl:mb-[180px]
        lg:mb-[140px]
        md:mb-[100px]
        mb-[80px]
      "
    >
      <BasicWidthContainer>
        <TwoTierHeading
          tierOneHeading={
            <Trans
              components={{
                red: <p className="text-[#B30006]" />,
              }}
            >
              {translation.mainPageNews}
            </Trans>
          }
          align="left"
          reverseColor
        />
      </BasicWidthContainer>
      {children}
    </div>
  );
}
