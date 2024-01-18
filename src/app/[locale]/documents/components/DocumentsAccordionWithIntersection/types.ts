import { ReactElement } from "react";

export interface DocumentsAccordionWithIntersectionProps {
  title: string | ReactElement;
  category: string;
  index: number;
  children: React.ReactNode;
}
