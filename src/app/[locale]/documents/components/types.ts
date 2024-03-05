import { Dispatch, SetStateAction } from "react";

export interface DocumentsTypesPresentation {
  category: "Presentation" | "Datasheets";
  type: "Presentation";
  data: PresentationProps[];
}

export interface DocumentsTypesOther {
  category:
    | "References"
    | "Technical Data"
    | "Certification"
    | "Warranty"
    | "Datasheets"
    | "Videos";
  type: "Text";
  data: {
    linkTitle: string;
    link: string;
    tags?: string[];
  }[];
}

export interface DocumentsTypePublisher {
  category: string;
  title: string;
  data: {
    subtitle?: string;
    paragraphs: string[];
  }[];
}

export interface ImprintInformation {
  category: string;
  title: string;
  data: string[];
}

export interface FAQ {
  category: string;
  data: { question: string; answer: string }[];
}

export interface PresentationProps {
  title?: string;
  linkTitle: string;
  image?: string;
  link: string;
  tags?: string[];
}

export interface TextProps {
  linkTitle: string;
  link: string;
}
