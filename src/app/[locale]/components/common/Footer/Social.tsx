"use client";

import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  FOOTER_SOCIAL,
  FOOTER_WE_ARE_SOCIAL,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Social() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <div className="flex flex-col min-[500px]:gap-4 gap-2 w-fit max-[500px]:mb-8">
      <span className="font-medium text-[#505050] [font-size:_clamp(16px,2vw,24px)] leading-[100%]">
        {t("We are social")}
      </span>
      <div className="flex justify-around w-full max-[500px]:gap-6">
        {FOOTER_SOCIAL.map(({ icon, link }) => (
          <a href={link} target="_blank" key={link}>
            <Image
              src={`/images/footer/${icon}`}
              alt={icon}
              priority
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
