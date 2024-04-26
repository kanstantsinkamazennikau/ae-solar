import { Model } from "@/app/[locale]/context/ConstructorContext";

export interface BenefitsProps {
  id: Model;
}

export interface BenefitProps {
  benefitTitle: string;
  benefitDescription: string;
  benefitPicture: string;
}
