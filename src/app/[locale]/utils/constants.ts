// NAVIGATION
export const HEADER_NAV_LINKS_ARRAY = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/products",
    text: "Products",
  },
  {
    url: "/solutions",
    text: "Solutions",
  },
  {
    url: "/about_us",
    text: "About us",
    subMenu: [
      {
        url: "/solutions4",
        text: "Solutions4",
      },
      {
        url: "/solutions5",
        text: "Solutions5",
      },
      {
        url: "/solutions6",
        text: "Solutions6",
      },
    ],
  },
  {
    url: "/documents",
    text: "Documents",
    subMenu: [
      {
        url: "/solutions1",
        text: "Solutions1",
      },
      {
        url: "/solutions2",
        text: "Solutions2",
      },
      {
        url: "/solutions3",
        text: "Solutions3",
      },
    ],
  },
  {
    url: "/partners",
    text: "Partners",
  },
];
export const HEADER_CONTACT_US = "Contact Us";
export const HEADER_SUBNAVIGATION_PANELS_MODELS = [
  "Aurora.svg",
  "Comet.svg",
  "Meteor.svg",
  "Terra.svg",
  "Neptun.svg",
  "Smart.svg",
];
export const HEADER_CHOOSE_YOUR_MODEL = "Choose your model";
export const HEADER_CALCULATE = "Calculate";

//MAIN PAGE
export const HERO_SECTION_SLOGAN =
  "We are TIER1 Manufacturer of High-Quality Solar Panels";
export const HERO_SECTION_SCROLL_TO_THE_FUTURE = "Scroll to the future";

export const AWARDS_AND_STATS_STATS_WITH_DETAILS = [
  { stat: "2003", details: "experience since" },
  { stat: "3200+", details: "successful PV installations" },
  { stat: "100+", details: "countries" },
];
export const AWARDS_AND_STATS_GERMAN_ENGINEERING = "German Engineering";
export const AWARDS_AND_STATS_PRODUCTION_PLANTS =
  "Production Plants in Europe and Asia";
export const AWARDS_AND_STATS_AWARDS_IMAGES = [
  "eupd.png",
  "ae.png",
  "inter.png",
  "pv.png",
  "snec.png",
  "future.png",
  "rewardable.png",
];
export const AWARDS_AND_STATS_SEE_ALL_AWARDS = "See all awards";

export const FEATURED_PRODUCTS_THE_NEXT_LEVEL_OF_PANELS_PHRASE_ARRAY = [
  "The Next Level ",
  "of High-Quality Solar Panels",
];
export const FEATURED_PRODUCTS_HIGH_QUALITY = "High-Quality";

export const TECH_INFO_THE_HIDDEN_LAYERS = "The Hidden Layers";
export const TECH_INFO_A_CLOSE_LOOK_AT = "A Close Look at";
export const TECH_INFO_PANELS_DETAILS = [
  {
    image: "cells.png",
    title: "Photovoltaic Cells",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    image: "panel.png",
    title: "Solar Panel Encapsulation",
    description:
      "Solar panels endure diverse conditions, shielded by encapsulation for longevity and efficiency.",
  },
  {
    image: "frame.png",
    title: "Frame and Backsheet",
    description:
      "Frame offers support; backsheet shields from elements, ensuring solar panel durability.",
  },
];
export const TECH_INFO_WHY_WE_ARE = "Why We are";
export const TECH_INFO_BEST_AT_THIS = "Best at This";
export const TECH_INFO_BENS = [
  {
    title: `Automation Systems`,
    description:
      "Stringent quality control measures are implemented at every stage of production to ensure that each solar module meets the highest standards of efficiency, durability, and performance.",
    image: "automation.svg",
  },
  {
    title: "German Manufacturer",
    description:
      "AESOLAR is a prominent German solar module manufacturer known for its precise and reliable engineering.",
    image: "manufacturer.png",
  },
  {
    title: "Advanced Technologies",
    description:
      "AESOLAR combines advanced technologies, superior quality, and sustainability to contribute to a more sustainable future by manufacturing solar modules.",
    image: "technologies.svg",
  },
  {
    title: "Energy Efficiency",
    description:
      "AESOLAR strives to set new industry benchmarks by focusing on energy efficiency, which not only reduces manufacturing costs but also minimizes the environmental impact.",
    image: "efficiency.svg",
  },
  {
    title: "Recyclable Materials",
    description:
      "The company is certified for sustainable production and adheres to German quality, labor, and environmental standards.",
    image: "materials.svg",
  },
];

export const REVIEWS_RAVE_REVIEWS = "Rave Reviews";
export const REVIEWS_SEE_WHY_WE_SHINE = "See Why We Shine";
export const REVIEWS_QUOTES_WITH_AUTHORS = [
  {
    quote:
      "1Thrilled with my new solar panels from AESolar! The efficiency and durability exceeded my expectations. Enjoying savings and environmental impact. Highly recommend!",
    author: "Emily Johnson",
    organisation: "Quantum Dynamics",
  },
  {
    quote:
      "2Thrilled with my new solar panels from AESolar! The efficiency and durability exceeded my expectations. Thrilled with my new solar panels from AESolar! The efficiency and durability exceeded my expectations. Enjoying savings and environmental impact. Highly recommend!",
    author: "Emily Johnson2",
    organisation: "Quantum Dynamics2",
  },
  {
    quote:
      "3Thrilled with my new solar panels from AESolar! The efficiency and durability exceeded my expectations. Enjoying savings and environmental impact. Highly recommend!",
    author: "Emily Johnson3",
    organisation: "Quantum Dynamics3",
  },
];

export const GET_IN_TOUCH_CLIENT_TYPE = ["Investor", "Partner", "Installer"];
export const GET_IN_TOUCH_ELEVATE_GROWTH = "Elevate growth together";
export const GET_IN_TOUCH_JOIN_US = (clientType: string) =>
  `Join as a ${clientType.toLowerCase()} in our solar vision`;
export const GET_IN_TOUCH_BECOME_A = "Become a ";

export const MAIN_PAGE_ACCORDION_DATA = [
  {
    question: "How do solar panels work?",
    answer: "How do solar panels work?",
  },
  {
    question: "What factors affect the efficiency of a solar system?",
    answer:
      "The efficiency of a solar system is influenced by sunlight exposure, shading, panel orientation, and temperature. Choosing high-quality panels and proper installation also impact overall performance.",
  },
  {
    question:
      "How long does it take to see a return on investment (ROI) for a solar system?",
    answer:
      "How long does it take to see a return on investment (ROI) for a solar system?",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "What maintenance is required for solar panels?",
  },
];
export const FAQ = "FAQ";

//FOOTER
export const FOOTER_LINKS_ARRAY = [
  {
    category: "Products",
    links: ["Aurora", "Comet", "Meteor", "Terra", "Neptune", "Hot-Spot Fee"],
  },
  {
    category: "Company",
    links: ["Overview", "Manufacturing", "News", "FAQ"],
  },
  {
    category: "Solution",
    links: ["Utility", "Residental", "NFC Anti-Piracy"],
  },
  {
    category: "Documents",
    links: [
      "Datasheet",
      "Certifications",
      "Manual",
      "Warranty",
      "Presentations",
    ],
  },
];
export const FOOTER_COPYRIGHT =
  "Copyright © 2023 AESolar. All rights reserved.";
export const POLICY_LINKS = ["Privacy Policy", "Terms of Use", "Legal"];
