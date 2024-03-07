import { Model } from "@/app/[locale]/context/constructorContext";

export interface BenefitsProps {
  id: Model;
}

export interface BenefitProps {
  benefitTitle: string;
  benefitDescription: string;
  benefitPicture: string;
}
