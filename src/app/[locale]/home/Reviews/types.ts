export interface QuoteProps {
  quote: string;
  author: string;
  organisation: string;
}

export interface QuotesControlProps {
  quotesAmount: string;
  onClick: () => void;
}

export interface DotProps {
  number: number;
}
