import { Dispatch, SetStateAction } from "react";

export interface DocumentsTypesPresentation {
  category: "Presentation";
  data: PresentationProps[];
}

export interface DocumentsTypesOther {
  category:
    | "References"
    | "Technical Data"
    | "Certification"
    | "Warranty"
    | "Videos";
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

export interface CategoriesProps {
  setSelectedCategory: Dispatch<
    SetStateAction<
      | "Presentation"
      | "References"
      | "Technical Data"
      | "Certification"
      | "Warranty"
      | "Videos"
    >
  >;
  selectedCategory: string;
}
