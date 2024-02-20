export interface LightBoxYoutubeVideoProps {
  open: boolean;
  onClose: () => void;
}

import { GenericSlide } from "yet-another-react-lightbox";

declare module "yet-another-react-lightbox" {
  export interface CustomSlide extends GenericSlide {
    type: keyof SlideTypes | undefined;
    src: string;
    title: string;
    width: number;
    height: number;
  }

  interface SlideTypes {
    youtube: CustomSlide;
  }
}
