import { Model } from "@/app/[locale]/context/ConstructorContext";

export interface PanelProps {
  panel: Model;
}

export interface PanelVideoProps {
  panel: Model;
  onLoaded: () => void;
}
