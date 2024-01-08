export interface NavLink {
  url: string;
  text: string;
}

export interface NavLinkProps {
  url: string;
  text: string;
  subMenu?: NavLink[];
  subMenuHeading?: string;
  onSubMenuHeadingClick?: (e: any) => void;
  onLinkClick?: () => void;
}

export interface SubMenuItemsProps {
  subMenuArray: NavLink[];
  onLinkClick?: () => void;
}

export interface SubNavigationProps {
  isLink?: boolean;
  isProductionIntroBlock?: boolean;
}

export interface ModelsProps {
  isLink?: boolean;
  isProductionIntroBlock?: boolean;
}
