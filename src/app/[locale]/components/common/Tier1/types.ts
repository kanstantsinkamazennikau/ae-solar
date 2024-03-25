import { ReactElement } from "react";

export interface Tier1Props {
  tier1TextStyle?: string;
  descriptionText: string | ReactElement<any, any>;
  descriptionTextHighlight?: string[];
  tier1Text: string | ReactElement<any, any>;
  tier1TextHighlight?: string[];
  externalStyle?: string;
}
