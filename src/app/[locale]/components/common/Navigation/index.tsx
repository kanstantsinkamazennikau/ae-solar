"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import ChangeLocale from "@/app/[locale]/components/common/ChangeLocale";
import { NavigationProps } from "@/app/[locale]/components/common/Footer/types";
import Logo from "@/app/[locale]/components/common/Logo";
import Cart from "@/app/[locale]/components/common/Navigation/Cart";
import MobileNavigation from "@/app/[locale]/components/common/Navigation/MobileNavigation";
import NavLink from "@/app/[locale]/components/common/Navigation/NavLink";
import SubNavigation from "@/app/[locale]/components/common/Navigation/SubNavigation";
import { MobileSideMenuContext } from "@/app/[locale]/context/mobileSideMenuContext";
import { ProductsContext } from "@/app/[locale]/context/productsContext";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import SubNavigationProductPanels from "@/app/[locale]/products/components/SubNavigationProductPanels";
import { HEADER_NAV_LINKS_ARRAY } from "@/app/[locale]/utils/constants";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function Navigation({
  headerAttributes,
}: {
  headerAttributes: NavigationProps;
}) {
  useClientTranslation("en", "translation");
  const locale = useParams()?.locale as LocaleTypes;
  const { sticky } = useContext(StickyNavigationContext);
  const productsContext = useContext(ProductsContext);
  const { setIsHamburgerMenuOpen } = useContext(MobileSideMenuContext);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const isProductsPage = ["/products", `/${locale}/products`].includes(
    pathname
  );

  const closeSideMenuOnLogoClickForMobile = () => {
    setIsHamburgerMenuOpen(false);
  };

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
      "catalogue",
    ].some((path) => pathname.includes(path));
  };

  const handleClick = () => {
    router.push(`/${params?.locale}/contacts`);
  };

  return (
    <div
      className={`
        w-full
        sticky
        top-0
        z-40
        h-[64px]
        min-[920px]:h-[80px]
        border-b
        border-solid
        border-[#d0d8e91a]
        transition-all
        duration-1000
        ${
          isProductsPage &&
          `${
            productsContext.isStartAnimation
              ? "translate-y-0"
              : "-translate-y-[144px] pointer-events-none"
          }`
        }
      `}
    >
      {/* MAIN NAVIGATION */}
      <div className="w-full h-full backdrop-blur-[50px] absolute" />
      <div className="bg-navigation-black flex justify-center py-4 h-full">
        <BasicWidthContainer>
          <nav className="flex items-center justify-between relative font-normal w-full gap-2">
            <Link href={"/"} onClick={closeSideMenuOnLogoClickForMobile}>
              <Logo />
            </Link>

            {/* DESKTOP NAV */}
            <ul className="xl:gap-8 gap-4 min-[920px]:flex hidden">
              {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
                <NavLink
                  key={navLink.url}
                  {...{
                    ...navLink,
                    isProductsPage,
                    headerAttributes,
                  }}
                />
              ))}
            </ul>
            <div className="gap-3 min-[920px]:flex hidden">
              <ChangeLocale />
              <Cart />
              <Button
                onClick={handleClick}
                externalStyle="!py-[10px] !px-[18px]"
              >
                <span className="[font-size:_clamp(14px,1.5vw,16px)] whitespace-nowrap">
                  {headerAttributes?.contactUs}
                </span>
              </Button>
            </div>

            {/* MOBILE NAV */}
            <MobileNavigation
              contactUsText={headerAttributes?.contactUs}
              headerAttributes={headerAttributes}
              mobileNavigationLanguageSelectorText={{
                language: headerAttributes?.language,
                chooseLanguage: headerAttributes?.chooseLanguage,
              }}
            />
          </nav>
        </BasicWidthContainer>
      </div>

      {/* SUBNAVIGATION */}
      {sticky && !hideSubnavigation() && (
        <SubNavigation
          isLink
          chooseYourModuleText={headerAttributes?.chooseModule}
          modulesText={headerAttributes?.modules}
        />
      )}

      {isProductsPage && (
        <SubNavigationProductPanels
          allModulesText={headerAttributes?.allModules}
          chooseModuleText={headerAttributes?.chooseModule}
        />
      )}
    </div>
  );
}
