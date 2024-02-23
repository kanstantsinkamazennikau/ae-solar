import { Dispatch, SetStateAction } from "react";

export interface ProductsPanelProps {
  id: "Aurora" | "Comet" | "Meteor" | "ShadeStar" | "Neptune" | "Terra";
}

export interface VideoProps {
  onLoaded: () => void;
  videoLoaded: boolean;
}
