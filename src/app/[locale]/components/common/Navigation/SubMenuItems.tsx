"use client";

import { SubMenuItemsProps } from "@/app/[locale]/components/common/Navigation/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function SubMenuItems({
  subMenuArray,
  onLinkClick,
}: SubMenuItemsProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "navigation");

  return (
    <ul
      className="
        bg-[#191919]
        px-4
        py-5
        flex
        flex-col
        gap-6
        min-[920px]:border-2
        border-solid
        rounded-xl
        border-option-border
        min-[920px]:items-start
        list-none
      "
    >
      {subMenuArray.map(({ url, text }) => (
        <li
          className="[font-size:_clamp(14px,1.5vw,16px)] hover:text-base-red whitespace-nowrap"
          key={text}
        >
          <Link
            href={`/${locale}/${url}`}
            className="flex items-center hover:text-primary"
            onClick={onLinkClick}
          >
            {t(text)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
