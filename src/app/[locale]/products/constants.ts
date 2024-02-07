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
  Aurora: `Aurora (PERC) Our Passivated Emitter and Rear Cell (PERC) technology, aptly named Aurora, brings a new dawn of highly efficient and reduced power loss solar modules. It's a greener choice for landscapes, generating the same power as conventional modules, but in less space`,
  Comet: `Comet (HJT) Leap into the future of solar energy with our Heterojunction Technology (HJT) named after the swift celestial phenomenon - Comet. Experience high efficiency and superior performance, even under shaded or high-temperature conditions`,
  Terra: `Terra (Agricultural Photovoltaic, Noise Barrier and Solar Fence Applications) The Terra module, our symbol of solar versatility, integrates different distinct applications of solar technology: agricultural photovoltaic, noise barriers, and solar fencing, carports aso.`,
  ShadeStar: `ShadeStar(Smart Cell) Meet our innovative Smart Cell technology, ShadeStar, designed to withstand the challenges of partial shading. It's a leap forward in sustainable energy, providing increased energy output and installation capacity`,
  Neptune: `Comet (HJT) Leap into the future of solar energy with our Heterojunction Technology (HJT) named after the swift celestial phenomenon - Comet. Experience high efficiency and superior performance, even under shaded or high-temperature conditions.`,
  Meteor: `Meteor (TOPCon) Our Tunnel Oxide Passivated Contact (TOPCon) technology - named Meteor - minimizes power loss and shines brightly, even in low light conditions. Its robust design and energy-efficient manufacturing process make it a game-changer in solar technology.`,
};

export const PRODUCT_WE_TRANSFORM = "We transform sunlight into power.";
export const PRODUCT_FOR_YOU = "for you and for the planet";
export const PRODUCT_ADVANCED_TECHNOLOGY =
  "Our range of advanced solar technologies is designed to harness the abundant energy of the sun, providing renewable, clean, and highly efficient solutions.";
export const PRODUCT_INNOVATIVE_PRODUCTS =
  "Each of our innovative products draws inspiration from the universe, embodying our belief in the vast potential of renewable energy.";
export const PRODUCT_JOIN =
  "Join us in harnessing the power of the sun and driving the evolution of solar technology.";

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
