import { JSXElementConstructor, LegacyRef, ReactElement } from "react";

export interface AccordionItemProps {
  title: string | ReactElement;
  isOpen?: boolean;
  onClick?: () => void;
  onClickCallback?: () => void;
  children: React.ReactNode;
  multiple?: boolean;
  index?: number;
  activeIndex?: number;
  id?: number;
  openCloseStyle?: boolean;
  documentsAccordion?: boolean;
  dropdownIcon?: string;
}

export interface AccordionData {
  question: string;
  answer: string;
}

export interface AccordionProps {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
  multiple?: boolean;
  documentsAccordionActiveIndex?: number;
  collapseAll?: boolean;
  documentsAccordion?: boolean;
}
