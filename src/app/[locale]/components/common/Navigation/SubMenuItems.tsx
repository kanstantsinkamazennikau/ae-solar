"use client";

import { SubMenuItemsProps } from "@/app/[locale]/components/common/Navigation/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SubMenuItems({
  subMenuArray,
  onLinkClick,
  parentUrl,
}: SubMenuItemsProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "navigation");

  return (
    <ul className="bg-white p-5 flex flex-col">
      {subMenuArray.map(({ url, text }) => (
        <li className="text-sm text-gray-600 my-2.5" key={text}>
          <Link
            href={`/${locale}/${parentUrl}/${url}`}
            className="flex items-center text-base hover:text-primary"
            onClick={onLinkClick}
          >
            {t(text)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
