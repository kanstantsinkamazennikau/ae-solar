import {
  ConstructorModel,
  ConstructorModelWithId,
} from "@/app/[locale]/context/ConstructorContext";

export type Details = Omit<ConstructorModelWithId, "model">;
export interface DetailsProps {
  model: Details;
}
