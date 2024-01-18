import { JSXElementConstructor, ReactElement } from "react";

export interface AccordionWithIntersectionPropps {
  category: string;
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
}
