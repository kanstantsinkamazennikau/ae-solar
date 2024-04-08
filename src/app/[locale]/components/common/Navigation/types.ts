export interface NavLink {
  url: string;
  text: string;
}

export interface NavLinkProps {
  url: string;
  text: string;
  subMenu?: NavLink[];
  stickyProducts?: boolean;
  subMenuHeading?: string;
  onSubMenuHeadingClick?: (e: any) => void;
  onLinkClick?: () => void;
  isProductsPage?: boolean;
  allModulesText?: string;
}

export interface SubMenuItemsProps {
  subMenuArray: NavLink[];
  onLinkClick?: () => void;
}

export interface SubNavigationProps {
  isLink?: boolean;
  isProductionIntroBlock?: boolean;
  chooseYourModuleText?: string;
}

export interface ModelsProps {
  isLink?: boolean;
  isProductionIntroBlock?: boolean;
  chooseYourModuleText?: string;
}

export interface NavigationProps {
  url: string;
  text: string;
  stickyProducts: boolean;
  __component: "layout.header" | "links.button";
  componentName?:
    | "contact"
    | "allModules"
    | "chooseModule"
    | "language"
    | "chooseLanguage";
  subMenu: {
    url: string;
    text: string;
  }[];
}

export interface NavigationProps {
  url: string;
  text: string;
  stickyProducts: boolean;
  __component: "layout.header" | "links.button";
  componentName?:
    | "contact"
    | "allModules"
    | "chooseModule"
    | "language"
    | "chooseLanguage";
  subMenu: {
    url: string;
    text: string;
  }[];
}
