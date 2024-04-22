"use client";

import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Trans } from "react-i18next";

const mapHeadingWithCategory = {
  documents: {
    heading: "documentsToKnow",
  },
  faq: {
    heading: "gotAQuestion",
  },
  publishers_info: {
    heading: "publishersInfo",
  },
  imprint: {
    heading: "imprintInfo",
  },
};

export default function DocumentsHeading() {
  const pathName = usePathname().split("/");
  const { translation } = useContext(i18nProviderContext);

  const documentsCategory = pathName[pathName.length - 1];

  return (
    <div className="flex flex-col gap-4">
      <h1
        className="
          [font-size:_clamp(24px,4vw,96px)]
          font-extrabold
          leading-[100%]
        "
      >
        <Trans
          components={{
            red: (
              <p className="text-[#B30006] font-medium [font-size:_clamp(16px,4vw,64px)]" />
            ),
          }}
        >
          {
            translation[
              mapHeadingWithCategory[
                documentsCategory as keyof typeof mapHeadingWithCategory
              ].heading
            ]
          }
        </Trans>
      </h1>
    </div>
  );
}
