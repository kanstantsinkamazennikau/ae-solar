import { ConstructorModel } from "@/app/[locale]/context/constructorContext";

export type Details = Omit<ConstructorModel, "model">;
export interface DetailsProps {
  model: Details;
}
