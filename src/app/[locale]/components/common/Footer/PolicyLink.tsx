"use client";

import { PolicyLinkProps } from "@/app/[locale]/components/common/Footer/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PolicyLink({ text, link }: PolicyLinkProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <>
      <Link className="min-[550px]:px-3 px-0" href={link}>
        {t(text)}
      </Link>
      <div className="w-[1px] h-5 bg-dark-gray-700 min-[550px]:inline-block hidden"></div>
    </>
  );
}
