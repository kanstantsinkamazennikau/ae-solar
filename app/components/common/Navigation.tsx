"use client";

import Button from "@/app/components/common/Button";
import Logo from "@/app/components/common/Logo";
import {
  HEADER_CONTACT_US,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLink {
  url: string;
  text: string;
}

interface NavLinkProps {
  url: string;
  text: string;
  subMenu?: NavLink[];
  subMenuHeading?: string;
  onSubMenuHeadingClick?: (e: any) => void;
  onLinkClick?: () => void;
}

interface SubMenuItemsProps {
  subMenuArray: NavLink[];
  onLinkClick?: () => void;
}

function SubMenuItems({ subMenuArray, onLinkClick }: SubMenuItemsProps) {
  return (
    <ul className="bg-white p-5 flex flex-col">
      {subMenuArray.map(({ url, text }) => (
        <li className="text-sm text-gray-600 my-2.5" key={text}>
          <Link
            href={url}
            className="flex items-center text-base hover:text-primary"
            onClick={onLinkClick}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function NavLink({
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

export default function Navigation() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [subMenuHeading, setSubMenuHeading] = useState("");

  const onSubMenuHeadingClick = (subMenuHeader: string) => {
    setSubMenuHeading(subMenuHeader);
  };

  const onLinkClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <nav className="flex h-[120px] items-center justify-between relative z-40 font-normal ">
      <Logo />

      {/* DESKTOP NAV */}
      <ul className="gap-8 md:flex hidden">
        {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
          <NavLink key={navLink.url} {...navLink} />
        ))}
      </ul>
      <div className="gap-8 md:flex hidden">
        <Button
          label={HEADER_CONTACT_US}
          onClick={() => console.log("contact us")}
          small
        />
      </div>

      {/* MOBILE NAV */}
      <>
        <div
          className="text-3xl md:hidden block cursor-pointer z-50 relative"
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
        >
          <div className="space-y-2">
            <div className="w-8 h-0.5 bg-yellow-600"></div>
            <div className="w-8 h-0.5 bg-yellow-600"></div>
            <div className="w-8 h-0.5 bg-yellow-600"></div>
          </div>
        </div>
        <div
          className={`
        md:hidden bg-red-700 fixed w-full top-0 overflow-y-auto bottom-0 py-24 px-4
        duration-500 ${isHamburgerMenuOpen ? "left-0" : "left-[-100%]"}
        `}
        >
          <ul>
            {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
              <NavLink
                key={navLink.url}
                subMenuHeading={subMenuHeading}
                onSubMenuHeadingClick={onSubMenuHeadingClick}
                onLinkClick={onLinkClick}
                {...navLink}
              />
            ))}
          </ul>

          <div className="gap-8 md:flex hidden">
            <Button
              label={HEADER_CONTACT_US}
              onClick={() => console.log("contact us")}
              small
            />
          </div>
        </div>
      </>
    </nav>
  );
}
