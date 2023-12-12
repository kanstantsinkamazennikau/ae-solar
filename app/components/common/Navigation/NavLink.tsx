"use client";

import SubMenuItems from "@/app/components/common/Navigation/SubMenuItems";
import { NavLinkProps } from "@/app/components/common/Navigation/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  url,
  text,
  subMenu,
  onSubMenuHeadingClick,
  subMenuHeading,
  onLinkClick,
}: NavLinkProps) {
  const path = usePathname();

  return (
    <li className="group">
      {!subMenu && (
        <Link
          href={url}
          className={`flex py-2 md:items-center text-base justify-between ${
            path === url && "md:border-base-red md:border-b-2 md:border-solid"
          }}`}
          onClick={onLinkClick}
        >
          {text}
        </Link>
      )}
      {subMenu && (
        <>
          <div
            className="flex py-2 md:items-center text-base justify-between cursor-pointer"
            onClick={() => onSubMenuHeadingClick && onSubMenuHeadingClick(text)}
          >
            {text}
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
          <div className="absolute top-30 hidden group-hover:md:block hover:md:block">
            <div className="py-3">
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
