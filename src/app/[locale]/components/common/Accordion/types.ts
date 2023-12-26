import { JSXElementConstructor, ReactElement } from "react";

export interface AccordionItemProps {
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  multiple?: boolean;
  style?: "default" | "small";
  index?: number;
  activeIndex?: number;
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
}
