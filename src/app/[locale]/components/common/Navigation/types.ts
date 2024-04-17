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
  chooseModuleText?: string;
}

export interface SubMenuItemsProps {
  subMenuArray: NavLink[];
  onLinkClick?: () => void;
}

export interface SubNavigationProps {
  isLink?: boolean;
  isProductionIntroBlock?: boolean;
  chooseYourModuleText?: string;
  modulesText?: string;
}

export interface ModelsProps {
  isLink?: boolean;
  isProductionIntroBlock?: boolean;
  chooseYourModuleText?: string;
  modulesText?: string;
}

export interface MobileNavigationProps {
  language: string;
  chooseLanguage: string;
}
