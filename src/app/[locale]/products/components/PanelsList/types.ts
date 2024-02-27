import { Model } from "@/app/[locale]/context/constructorContext";

export interface PanelProps {
  panel: Model;
}

export interface PanelVideoProps {
  panel: Model;
  onLoaded: () => void;
}
