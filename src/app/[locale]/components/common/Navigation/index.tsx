"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import ChangeLocale from "@/app/[locale]/components/common/ChangeLocale";
import Logo from "@/app/[locale]/components/common/Logo";
import Cart from "@/app/[locale]/components/common/Navigation/Cart";
import NavLink from "@/app/[locale]/components/common/Navigation/NavLink";
import SubNavigation from "@/app/[locale]/components/common/Navigation/SubNavigation";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import {
  HEADER_CONTACT_US,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/[locale]/utils/constants";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Navigation() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [subMenuHeading, setSubMenuHeading] = useState("");
  const { sticky } = useContext(StickyNavigationContext);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const hideSubnavigation = () => {
    return ["calculate", "consult"].some((path) => pathname.includes(path));
  };

  const onSubMenuHeadingClick = (subMenuHeader: string) => {
    setSubMenuHeading(subMenuHeader);
  };

  const onLinkClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  const handleClick = () => {
    router.push(`/${params?.locale}/consult`);
  };

  return (
    <div
      className={`w-full sticky top-0 z-40 h-[64px] min-[920px]:${
        !hideSubnavigation() ? "h-[130px]" : "h-[80px]"
      }`}
    >
      {/* MAIN NAVIGATION */}
      <div className="bg-navigation-black backdrop-blur-[50px] flex justify-center py-5 md:py-4">
        <BasicWidthContainer>
          <nav className="flex items-center justify-between relative font-normal w-full gap-2">
            <Logo />

            {/* DESKTOP NAV */}
            <ul className="md:gap-2 lg:gap-5 xl:gap-8 min-[920px]:flex hidden">
              {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
                <NavLink key={navLink.url} {...navLink} />
              ))}
            </ul>
            <div className="gap-3 min-[920px]:flex hidden">
              {/* <ChangeLocale /> */}
              <Cart />
              <Button onClick={handleClick} size="small">
                <span className="[font-size:_clamp(14px,1.5vw,16px)] whitespace-nowrap">
                  {HEADER_CONTACT_US}
                </span>
              </Button>
            </div>

            {/* MOBILE NAV */}
            <>
              <div className="min-[920px]:hidden flex items-center gap-5">
                <Cart />
                <div
                  className="text-3xl cursor-pointer z-50 relative"
                  onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
                >
                  <div className="space-y-[5px]">
                    <div className="w-5 h-0.5 bg-white rounded"></div>
                    <div className="w-5 h-0.5 bg-white rounded"></div>
                    <div className="w-5 h-0.5 bg-white rounded"></div>
                  </div>
                </div>
              </div>

              <div
                className={`
                min-[920px]:hidden h-screen bg-red-700 fixed w-full top-0 overflow-y-auto bottom-0 py-24 px-4
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

                <div className="gap-8 flex min-[920px]:hidden">
                  {/* <ChangeLocale /> */}
                  <Button onClick={handleClick} size="small">
                    {HEADER_CONTACT_US}
                  </Button>
                </div>
              </div>
            </>
          </nav>
        </BasicWidthContainer>
      </div>

      {/* SUBNAVIGATION */}
      {sticky && !hideSubnavigation() && <SubNavigation isLink />}
    </div>
  );
}
