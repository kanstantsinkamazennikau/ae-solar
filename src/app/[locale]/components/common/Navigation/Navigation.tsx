"use client";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import ChangeLocale from "@/app/[locale]/components/common/ChangeLocale";
import Logo from "@/app/[locale]/components/common/Logo";
import Cart from "@/app/[locale]/components/common/Navigation/Cart";
import MobileNavigation from "@/app/[locale]/components/common/Navigation/MobileNavigation";
import NavLink from "@/app/[locale]/components/common/Navigation/NavLink";
import SubNavigation from "@/app/[locale]/components/common/Navigation/SubNavigation";
import { NavigationProps } from "@/app/[locale]/components/common/Navigation/types";
import { MainPageVideoContext } from "@/app/[locale]/context/mainPageVideoContext";
import { MobileSideMenuContext } from "@/app/[locale]/context/mobileSideMenuContext";
import { ProductsContext } from "@/app/[locale]/context/productsContext";
import { StickyNavigationContext } from "@/app/[locale]/context/stickyNavigationContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import SubNavigationProductPanels from "@/app/[locale]/products/components/SubNavigationProductPanels";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function Navigation({
  contentSections,
}: {
  contentSections: NavigationProps[];
}) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const { sticky } = useContext(StickyNavigationContext);
  const productsContext = useContext(ProductsContext);
  const { setIsHamburgerMenuOpen } = useContext(MobileSideMenuContext);
  const mainPageVideoContext = useContext(MainPageVideoContext);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const isProductsPage = ["/products", `/${locale}/products`].includes(
    pathname
  );
  const isMainPage = pathname === "/";

  const allModulesText = contentSections.find(
    (content) => content.componentName === "allModules"
  )?.text;

  const chooseYourModuleText = contentSections.find(
    (content) => content.componentName === "chooseModule"
  )?.text;

  const contactUsText = contentSections.find(
    (content) => content.componentName === "contact"
  )?.text;

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
        // {
        //   isMainPage &&
        //     mainPageVideoContext.isStartAnimation
        //       ? "translate-y-0"
        //       : "-translate-y-[144px] pointer-events-none"
        //   }
        // }
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
              {contentSections
                .filter((section) => section.__component === "layout.header")
                .map((navLink) => (
                  <NavLink
                    key={navLink.url}
                    {...{
                      ...navLink,
                      isProductsPage,
                      allModulesText: contentSections.find(
                        (content) => content.componentName === "allModules"
                      )?.text,
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
                  {contactUsText}
                </span>
              </Button>
            </div>

            {/* MOBILE NAV */}
            <MobileNavigation
              contactUsText={contactUsText}
              mobileNavigationLanguageSelectorText={contentSections.filter(
                (content) =>
                  ["language", "chooseLanguage"].includes(
                    content.componentName || ""
                  )
              )}
            />
          </nav>
        </BasicWidthContainer>
      </div>

      {/* SUBNAVIGATION */}
      {sticky && !hideSubnavigation() && (
        <SubNavigation isLink chooseYourModuleText={chooseYourModuleText} />
      )}

      {isProductsPage && (
        <SubNavigationProductPanels allModulesText={allModulesText} />
      )}
    </div>
  );
}
