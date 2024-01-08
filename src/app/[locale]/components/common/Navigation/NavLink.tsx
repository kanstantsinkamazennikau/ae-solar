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
    <li className="group">
      {!subMenu && (
        <Link
          href={`/${locale}${url}`}
          className={`flex py-2 md:items-center [font-size:_clamp(14px,1.5vw,16px)] leading-none justify-between whitespace-nowrap ${
            highlightNavigationLink(locale, url, path) &&
            "md:border-base-red md:border-b-2 md:border-solid"
          }}`}
          onClick={onLinkClick}
        >
          {t(text)}
        </Link>
      )}
      {subMenu && (
        <>
          <div
            className="flex py-2 md:items-center [font-size:_clamp(14px,1.5vw,16px)] leading-none justify-between cursor-pointer "
            onClick={() => onSubMenuHeadingClick && onSubMenuHeadingClick(text)}
          >
            {t(text)}
            <Image
              src="/images/navMenuTriangle.svg"
              alt="navMenuTriangle"
              width={8}
              height={8}
              className="group-hover:rotate-180 ml-1 hidden md:block"
            />
            {/* MOBILE SUBMENU TRIANGLE ROTATION ON HEADING CLICK */}
            <Image
              src="/images/navMenuTriangle.svg"
              alt="navMenuTriangle"
              width={8}
              height={8}
              className={`${
                subMenuHeading === text ? "rotate-180" : ""
              } ml-1 md:hidden block`}
            />
          </div>
          <div className="absolute hidden group-hover:md:block hover:md:block z-10">
            <div className="py-2">
              <div
                className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
              ></div>
            </div>
            <SubMenuItems subMenuArray={subMenu} />
          </div>

          {/* MOBILE SUBMENU ON HEADING CLICK */}
          <div
            className={`${subMenuHeading === text ? "md:hidden" : "hidden"}`}
          >
            <SubMenuItems subMenuArray={subMenu} onLinkClick={onLinkClick} />
          </div>
        </>
      )}
    </li>
  );
}
