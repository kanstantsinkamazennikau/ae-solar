export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface AccordionData {
  question: string;
  answer: string;
}

export interface AccordionProps {
  data: AccordionData[];
}
