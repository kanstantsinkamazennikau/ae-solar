"use client";

import {
  MANUFACTURER_MANUFACTURER,
  MANUFACTURER_QUALITY,
} from "@/app/[locale]/company/manufacturer/constants";
import {
  DOCUMENTS_PUBLISHERS_INFO_INFORMATION,
  DOCUMENTS_PUBLISHERS_INFO_PUBLISHERS,
} from "@/app/[locale]/company/publishers_info/constants";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  DOCUMENTS_DOCUMENTS_HEADING,
  DOCUMENTS_FAQ_HAVE_A_QUESTION,
  DOCUMENTS_FAQ_WE_HAVE_SOLUTIONS,
  DOCUMENTS_IMPRINT_INFO_IMPRINT,
  DOCUMENTS_IMPRINT_INFO_INFORMATION,
  DOCUMENTS_YOU_NEED_TO_KNOW,
} from "@/app/[locale]/utils/constants";
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
