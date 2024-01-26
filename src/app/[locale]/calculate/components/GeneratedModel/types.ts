export interface DocumentationLinkProps {
  link: string;
  datasheet: string;
}

export interface GeneratedModelBenefit {
  advantageCategory: "Benefit";
  advantageDescription: string[];
}

export interface GeneratedModelPDF {
  advantageCategory: "Documentation (pdf)";
  advantageDescription: {
    datasheet: string;
    link: string;
  }[];
}
export type GeneratedModelAdvantages = [
  GeneratedModelBenefit,
  GeneratedModelPDF
];
