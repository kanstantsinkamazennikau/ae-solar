"use client";

import SubMenuItems from "@/app/[locale]/components/common/Navigation/SubMenuItems";
import { NavLinkProps } from "@/app/[locale]/components/common/Navigation/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import highlightNavigationLink from "@/app/[locale]/utils/highlightNavigationLink";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function NavLink({
  url,
  text,
  subMenu,
  onSubMenuHeadingClick,
  subMenuHeading,
  onLinkClick,
}: NavLinkProps) {
  const path = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "navigation");

  return (
    <li className="group min-[920px]:flex justify-center relative">
      {!subMenu && (
        <Link
          href={`/${locale}${url}`}
          className={`
            flex min-[920px]:py-2 
            py-4 
            md:items-center 
            [font-size:_clamp(14px,1.5vw,16px)] 
            leading-none 
            justify-between 
            whitespace-nowrap
            hover:text-dark-gray-900
            ${
              highlightNavigationLink(locale, url, path) &&
              "min-[920px]:border-base-red min-[920px]:border-b-2 min-[920px]:border-solid"
            }
          `}
          onClick={onLinkClick}
        >
          {t(text)}
        </Link>
      )}
      {subMenu && (
        <>
          <div
            className={`
              flex
              min-[920px]:py-2
              py-4
              min-[920px]:items-center
              [font-size:_clamp(14px,1.5vw,16px)]
              leading-none
              justify-between
              cursor-pointer
              hover:text-dark-gray-900
              ${
                path.includes(url) &&
                "min-[920px]:border-base-red min-[920px]:border-b-2 min-[920px]:border-solid"
              }
            `}
            onClick={() => onSubMenuHeadingClick && onSubMenuHeadingClick(text)}
          >
            {t(text)}
            <Image
              src="/images/navMenuTriangle.svg"
              alt="navMenuTriangle"
              width={8}
              height={8}
              className={`
                ${subMenuHeading === text ? "rotate-180" : ""}
                ml-1
                block
                min-[920px]:group-hover:rotate-180
                min-[920px]:w-2
                min-[920px]:h-2
                w-3
                h-3
              `}
            />
          </div>
          <div className="absolute hidden group-hover:min-[920px]:block hover:min-[920px]:block z-10 top-[calc(100%-2px)]">
            <SubMenuItems subMenuArray={subMenu} />
          </div>

          {/* MOBILE SUBMENU ON HEADING CLICK */}
          <div
            className={`${
              subMenuHeading === text ? "min-[920px]:hidden" : "hidden"
            }`}
          >
            <SubMenuItems subMenuArray={subMenu} onLinkClick={onLinkClick} />
          </div>
        </>
      )}
    </li>
  );
}
