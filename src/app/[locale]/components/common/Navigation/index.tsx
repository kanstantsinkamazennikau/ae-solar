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
  HEADER_CONTACT_US,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/[locale]/utils/constants";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function Navigation() {
  const { sticky } = useContext(StickyNavigationContext);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const hideSubnavigation = () => {
    return [
      "calculate",
      "consult",
      "documents",
      "contacts",
      "products",
      "solutions",
      "manufacturer",
      "company",
    ].some((path) => pathname.includes(path));
  };

  const handleClick = () => {
    router.push(`/${params?.locale}/consult`);
  };

  return (
    <div
      className={`w-full sticky top-0 z-40 h-[64px] min-[920px]:h-[80px] border-b border-solid border-[#d0d8e91a]`}
    >
      {/* MAIN NAVIGATION */}
      <div className="w-full h-full backdrop-blur-[50px] absolute" />
      <div className="bg-navigation-black flex justify-center py-4 h-full">
        <BasicWidthContainer>
          <nav className="flex items-center justify-between relative font-normal w-full gap-2">
            <Link href={"/"}>
              <Logo />
            </Link>

            {/* DESKTOP NAV */}
            <ul className="gap-8 min-[920px]:flex hidden">
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
