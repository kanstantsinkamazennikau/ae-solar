export interface FooterCategoryProps {
  text: string;
  url: string;
  subMenu: { text: string; url: string }[];
}

export interface PolicyLinkProps {
  link: string;
  text: string;
}
export interface FooterFormFields {
  email: string;
}

export interface FooterNavigation {
  url: string;
  text: string;
  stickyProducts: boolean;
  __component: "layout.header";
  subMenu: {
    url: string;
    text: string;
  }[];
}

export interface FooterCopyright {
  copyrightText: string;
  __component: "layout.copyright";
  policyLinks: {
    text: string;
    url: string;
  }[];
}

export interface FooterProps {
  navigation: FooterNavigation[];
  copyright: FooterCopyright[];
}
