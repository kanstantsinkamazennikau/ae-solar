import { QuoteProps } from "@/app/dto/mainPage/types";
import { createContext } from "react";

export interface QuotesContext {
  goToSlide: (number: number) => void;
  changeSlide: (direction?: number) => void;
  slidesCount: number;
  slideNumber: number;
  REVIEWS_QUOTES_WITH_AUTHORS: QuoteProps[];
}

export const QuotesContext = createContext<QuotesContext>(null!);
