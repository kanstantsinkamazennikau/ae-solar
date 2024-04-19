export interface ManufacturerArticle {
  paragraphHeading: string;
  paragraphs: (
    | {
        type: "text";
        value: string;
      }
    | {
        type: "image";
        width?: number;
        height?: number;
        src: string[];
        style?: string;
        mobileSrc?: string[];
        mobileStyle?: string;
      }
    | {
        type: "stats";
      }
    | {
        type: "stroke";
        value: string;
      }
  )[];
}
