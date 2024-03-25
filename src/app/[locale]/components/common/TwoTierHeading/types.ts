import { ReactElement } from "react";

export interface TwoTierHeadingProps {
  tierOneHeading: string | ReactElement<any, any>;
  tierTwoHeading?: string;
  align?: "right" | "left" | "center";
  size?: "default" | "small";
  reverseColor?: boolean;
  externalStyle?: string;
  marginBottomNone?: boolean;
  showDivider?: boolean;
}
