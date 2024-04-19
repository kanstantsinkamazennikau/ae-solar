import { ReactElement } from "react";

export interface HeadingWithBackgroundProps {
  tierOneHeading: string | ReactElement<any, any>;
  tierTwoHeading?: string;
  backgroundImage: string;
  mobileBackgroundImage?: string;
}
