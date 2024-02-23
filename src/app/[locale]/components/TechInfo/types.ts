export interface BenProps {
  title: string;
  description: string;
  image: string;
  isFullHeightRow: boolean;
  fullDescription?: string;
}

export interface BensPopUpProps {
  title: string;
  fullDescription?: string;
  onClose: () => void;
}
