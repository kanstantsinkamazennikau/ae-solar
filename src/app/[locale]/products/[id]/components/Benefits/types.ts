export interface BenefitsProps {
  id: "Aurora" | "Comet" | "Meteor" | "ShadeStar" | "Neptune" | "Terra";
}

export interface BenefitProps {
  benefitTitle: string;
  benefitDescription: string;
  benefitPicture: string;
  index: number;
  benefitsLength: number;
}
