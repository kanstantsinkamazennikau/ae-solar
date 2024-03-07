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
        description: string;
      };
      gridArea: string;
      shortDescription?: string;
    }[];
  };
};
