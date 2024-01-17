import { Dispatch, SetStateAction } from "react";

export interface DocumentsTypesPresentation {
  category: "Presentation";
  type: "Presentation";
  data: PresentationProps[];
}

export interface DocumentsTypesOther {
  category:
    | "References"
    | "Technical Data"
    | "Certification"
    | "Warranty"
    | "Videos";
  type: "Text";
  data: {
    linkTitle: string;
    link: string;
  }[];
}

export interface PresentationProps {
  title: string;
  linkTitle: string;
  image?: string;
  link: string;
}

export interface TextProps {
  linkTitle: string;
  link: string;
}
