export interface TwoTierHeadingProps {
  tierOneHeading: string;
  tierTwoHeading: string;
  align?: "right" | "left" | "center";
  size?: "default" | "small";
  reverseColor?: boolean;
  externalStyle?: string;
  marginBottomNone?: boolean;
  showDivider?: boolean;
}
