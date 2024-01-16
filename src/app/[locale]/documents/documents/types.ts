export interface DocumentsTypesPresentation {
  type: "Presentation";
  data: PresentationProps[];
}

export interface DocumentsTypesOther {
  type:
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
