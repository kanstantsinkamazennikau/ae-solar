import { Model } from "@/app/[locale]/context/constructorContext";

export interface CustomizationProps {
  id: Model;
}

export type ProductBentofoxes = {
  [id in Model]: {
    areaTemplate: string;
    structure: {
      type: "full" | "half" | "quarter" | "warranty";
      imageUrl?: string;
      longDescription?: {
        title: string;
        description?: string;
      };
      gridArea: string;
      shortDescription?: string;
    }[];
  };
};

export interface BentoboxesLongDescription {
  __component: "module.bento-long-description";
  title: string;
  description: "Customize your power solution with tailored materials and power options, ensuring precise alignment with your specific needs and preferences.";
}

export interface BentoboxesShortDescription {
  __component: "module.bento-short-description";
  shortDescription: string;
}
