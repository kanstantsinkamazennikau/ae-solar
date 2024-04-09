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

export interface RepeatableText {
  __component: "text.repeatable-text";
  text: string;
  componentName: "saveTheWorld" | "germanBrand" | "weAreSocial";
}

export interface NavigationProps {
  [key: string]: string;
  logoText: string;
  germanBrand: string;
  weAreSocial: string;
  copyright: string;
  policy: string;
  terms: string;
  products: string;
  aboutUs: string;
  company: string;
  manufacturer: string;
  b2b: string;
  contacts: string;
  news: string;
  faq: string;
  legalInfo: string;
  imprint: string;
  publishers: string;
  documents: string;
  datasheet: string;
  warranty: string;
  legal: string;
  allModules: string;
  contactUs: string;
  chooseModule: string;
  language: string;
  chooseLanguage: string;
}

export interface CookiesProps {
  [key: string]: string;
}
