export const PRODUCTS_WELCOME = "Welcome to AESOLAR—German TIER1 Manufacturer";
export const PRODUCTS_LIGHTING = "Lighting The Way To A Sustainable Future";
export const PRODUCT_PANELS_IMAGES = [
  "Aurora",
  "Comet",
  "Terra",
  "ShadeStar",
  "Neptune",
  "Meteor",
];

export const PRODUCT_DESCRIPTIONS = {
  Aurora: `Aurora (PERC) Our Passivated Emitter and Rear Cell (PERC) technology, aptly named Aurora, brings a new dawn of highly efficient and reduced power loss solar modules.`,
  Comet: `Panel description`,
  Terra: `Panel description`,
  ShadeStar: `Panel description`,
  Neptune: `Panel description`,
  Meteor: `Panel description`,
};
export const PRODUCT_SELECTOR_IMAGES = [
  {
    panel: "Neptune",
    icon: "Neptune.svg",
    position: `
      absolute
      min-[1024px]:-bottom-[86px]
      md:-bottom-[76px]
      min-[560px]:-bottom-[76px]
      -bottom-[30px]
      left-1/2
      -translate-x-1/2
    `,
    container: `
      flex
      flex-col
      items-center
      gap-2
    `,
  },
  {
    panel: "Comet",
    icon: "Comet.svg",
    position: `
      absolute
      min-[1024px]:-top-[72px]
      md:-top-[62px]
      min-[560px]:top-0
      left-1/2
      -translate-x-1/2
    `,
    container: `
      flex
      flex-col-reverse
      items-center
      gap-2
    `,
  },
  {
    panel: "Aurora",
    icon: "Aurora.svg",
    position: `
      absolute
      min-[1024px]:bottom-[470px]
      min-[1024px]:-left-[96px]
      md:bottom-[440px]
      min-[560px]:bottom-[320px]
      min-[560px]:left-0
      bottom-[260px]
      left-[26px]
    `,
    container: `
      flex
      min-[1024px]:flex-row-reverse
      flex-col
      items-center
      gap-3
    `,
  },
  {
    panel: "Terra",
    icon: "Terra.svg",
    position: `
      absolute
      min-[1024px]:bottom-[470px]
      min-[1024px]:-right-[78px]
      md:bottom-[440px]
      md:right-[4px]
      min-[560px]:bottom-[320px]
      min-[560px]:right-[2px]
      bottom-[260px]
      right-[26px]
    `,
    container: `
      flex
      min-[1024px]:flex-row
      flex-col
      items-center
      gap-3
  `,
  },
  {
    panel: "Meteor",
    icon: "Meteor.svg",
    position: `
      absolute
      min-[1024px]:bottom-[110px]
      min-[1024px]:-left-[100px]
      md:bottom-[74px]
      min-[560px]:bottom-[40px]
      min-[560px]:left-0
      bottom-[46px]
      left-[26px]
    `,
    container: `
      flex
      min-[1024px]:flex-row-reverse
      flex-col
      items-center
      gap-3
    `,
  },
  {
    panel: "ShadeStar",
    icon: "ShadeStar.svg",
    position: `
      absolute
      min-[1024px]:bottom-[110px]
      min-[1024px]:-right-[140px]
      md:bottom-[74px]
      md:-right-[14px]
      min-[560px]:bottom-[40px]
      min-[560px]:-right-[4px]
      bottom-[46px]
      right-[26px]
    `,
    container: `
      flex
      min-[1024px]:flex-row
      flex-col
      items-center
      gap-3
    `,
  },
];
