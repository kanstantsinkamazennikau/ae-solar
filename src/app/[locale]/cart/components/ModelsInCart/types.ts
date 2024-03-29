import {
  ConstructorModel,
  ConstructorModelWithId,
} from "@/app/[locale]/context/constructorContext";

export type Details = Omit<ConstructorModelWithId, "model">;
export interface DetailsProps {
  model: Details;
}
