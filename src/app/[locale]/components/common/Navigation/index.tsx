"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import ChangeLocale from "@/app/[locale]/components/common/ChangeLocale";
import Logo from "@/app/[locale]/components/common/Logo";
import Models from "@/app/[locale]/components/common/Navigation/Models";
import NavLink from "@/app/[locale]/components/common/Navigation/NavLink";
import {
  HEADER_CONTACT_US,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/[locale]/utils/constants";
import { useState } from "react";

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
    <div className="w-full sticky top-0 z-40">
      {/* MAIN NAVIGATION */}
      <div className="bg-navigation-black backdrop-blur-[50px] flex justify-center py-6">
        <BasicWidthContainer>
          <nav className="flex items-center justify-between relative font-normal w-full">
            <Logo />

            {/* DESKTOP NAV */}
            <ul className="gap-8 md:flex hidden">
              {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
                <NavLink key={navLink.url} {...navLink} />
              ))}
            </ul>
            <div className="gap-8 md:flex hidden">
              <ChangeLocale />
              <Button onClick={() => console.log("contact us")} size="small">
                {HEADER_CONTACT_US}
              </Button>
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
                md:hidden h-screen bg-red-700 fixed w-full top-0 overflow-y-auto bottom-0 py-24 px-4
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

                <div className="gap-8 flex md:hidden">
                  <ChangeLocale />
                  <Button
                    onClick={() => console.log("contact us")}
                    size="small"
                  >
                    {HEADER_CONTACT_US}
                  </Button>
                </div>
              </div>
            </>
          </nav>
        </BasicWidthContainer>
      </div>

      {/* SUBNAVIGATION */}
      <div
        className="bg-sub-navigation-black 
        backdrop-blur-[10px] 
        border-b border-solid 
        border-sub-navigation-border 
        py-2 
        md:flex 
        hidden 
        justify-center
        relative
        -z-[1]
        "
      >
        <BasicWidthContainer>
          <Models />
        </BasicWidthContainer>
      </div>
    </div>
  );
}
