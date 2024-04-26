import { Model } from "@/app/[locale]/context/ConstructorContext";
import { Dispatch, SetStateAction } from "react";

export interface ProductsPanelProps {
  id: Model;
}

export interface VideoProps {
  onLoaded: () => void;
  onEnded: () => void;
  id: Model;
}

export interface Layers {
  sequenceTitle: string;
  sequenceDescription: string;
}
