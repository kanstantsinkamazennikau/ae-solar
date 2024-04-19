export interface BenProps {
  title: string;
  description: string;
  image: string;
  isFullHeightRow: boolean;
  fullDescription?: string;
  popUpImage: string;
}

export interface BensPopUpProps {
  title: string;
  fullDescription?: string;
  onClose: () => void;
  popUpImage: string;
}
