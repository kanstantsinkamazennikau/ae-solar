"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import ChangeLocale from "@/app/[locale]/components/common/ChangeLocale";
import Logo from "@/app/[locale]/components/common/Logo";
import Cart from "@/app/[locale]/components/common/Navigation/Cart";
import MobileNavigation from "@/app/[locale]/components/common/Navigation/MobileNavigation";
import NavLink from "@/app/[locale]/components/common/Navigation/NavLink";
import SubNavigation from "@/app/[locale]/components/common/Navigation/SubNavigation";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import {
  FOOTER_CONTACT_INFO,
  HEADER_CONTACT_US,
  HEADER_LANGUAGE,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
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
            <MobileNavigation />
          </nav>
        </BasicWidthContainer>
      </div>

      {/* SUBNAVIGATION */}
      {sticky && !hideSubnavigation() && <SubNavigation isLink />}
    </div>
  );
}
