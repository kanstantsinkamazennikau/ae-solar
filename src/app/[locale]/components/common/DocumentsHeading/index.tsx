"use client";

import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { useParams, usePathname } from "next/navigation";
import { Trans } from "react-i18next";

const mapHeadingWithCategory = {
  documents: {
    heading: "Documents You Need to Know",
  },
  faq: {
    heading: "Got a Question We have solutions",
  },
  publishers_info: {
    heading: "Publisher's Information",
  },
  imprint: {
    heading: "Imprint Information",
  },
};

export default function DocumentsHeading() {
  const pathName = usePathname().split("/");
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const documentsCategory = pathName[pathName.length - 1];

  return (
    <div className="flex flex-col gap-4">
      <div
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
          {t(
            mapHeadingWithCategory[
              documentsCategory as keyof typeof mapHeadingWithCategory
            ].heading
          )}
        </Trans>
      </div>
    </div>
  );
}
