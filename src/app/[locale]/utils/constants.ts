import {
  ApplicationStandard,
  ModelsSpecs,
  PanelParams,
} from "@/app/[locale]/calculate/components/ChooseModel/types";
import { FormFileds } from "@/app/[locale]/components/common/BuyerForm/types";

export const FORM_FIELDS_INPUT_TYPES = {
  input: "input",
  phone: "phone",
  picker: "picker",
  dropdown: "dropdown",
};

export const FORMS_FIELDS = {
  name: "name",
  email: "email",
  phone: "phone",
  code: "code",
  budget: "budget",
  service: "service",
};

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
    url: "/about",
    text: "About us",
    // subMenu: [
    //   {
    //     url: "/solutions4",
    //     text: "Solutions4",
    //   },
    //   {
    //     url: "/solutions5",
    //     text: "Solutions5",
    //   },
    //   {
    //     url: "/solutions6",
    //     text: "Solutions6",
    //   },
    // ],
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
  "Neptune.svg",
  "HSF.svg",
];
export const HEADER_CHOOSE_YOUR_MODEL = "Choose your model";
export const HEADER_CALCULATE = "Calculate";

//MAIN PAGE
export const HERO_SECTION_SLOGAN =
  "We are TIER1 Manufacturer of High-Quality Solar Panels";
export const HERO_SECTION_SCROLL_TO_THE_FUTURE = "Scroll to the future";

export const AWARDS_AND_STATS_STATS_WITH_DETAILS = [
  { stat: "2003", details: "experience since", initialValue: "2023" },
  {
    stat: "3200",
    details: "successful PV installations",
    initialValue: "3100",
    sign: "+",
  },
  { stat: "100", details: "countries", initialValue: "50", sign: "+" },
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

export const PRODUCT_INTRO_THE_NEXT_LEVEL_OF = "The Next Level of";
export const PRODUCT_INTRO_HIGH_QUALITY_SP = "High-Quality Solar Panels";
export const PRODUCT_INTRO_PANELS_MAPPING = {
  power: "Max. Power (up to)",
  efficiency: "Max. Effienciency (up to)",
  voltage: "Max. System Voltage",
};
export const PRODUCT_INTRO_PANELS = {
  Comet: {
    stats: {
      power: "440W",
      efficiency: "22.57%",
      voltage: "1000",
    },
    info: {
      icon: "Comet.svg",
      text: "Propel into the future of solar energy with our Comet HJT. Superior performance under all conditions.",
    },
  },
  Aurora: {
    stats: {
      power: "441W",
      efficiency: "22.57%",
      voltage: "1000",
    },
    info: {
      icon: "Aurora.svg",
      text: "Experience minimum power loss and shine brightly even in low light conditions123123",
    },
  },
  Meteor: {
    stats: {
      power: "44W",
      efficiency: "22.57%",
      voltage: "1000",
    },
    info: {
      icon: "Meteor.svg",
      text: "Experience minimum power loss and shine brightly even in low light conditions Meteor",
    },
  },
  Terra: {
    stats: {
      power: "20W",
      efficiency: "22.57%",
      voltage: "1000",
    },
    info: {
      icon: "Terra.svg",
      text: "Experience123 minimum power loss and shine brightly even in low light conditions",
    },
  },
  Neptune: {
    stats: {
      power: "1000W",
      efficiency: "22.57%",
      voltage: "1000",
    },
    info: {
      icon: "Neptune.svg",
      text: "Experience minimum power loss and shine brightly even in low light conditions",
    },
  },
  HSF: {
    stats: {
      power: "HSF",
      efficiency: "22.57%",
      voltage: "1000",
    },
    info: {
      icon: "HSF.svg",
      text: "Experience minimum power loss and shine brightly even in low light Smart",
    },
  },
};
export const PRODUCT_INTRO_LEARN_MORE = "Learn more";
export const PRODUCT_INTRO_CALCULATE_YOUR_MODEL = "Calculate your model";

export const FEATURED_PRODUCTS_HIGH_QUALITY = "High-Quality";

export const TECH_INFO_THE_HIDDEN_LAYERS = "The Hidden Layers";
export const TECH_INFO_A_CLOSE_LOOK_AT = "A Close Look at";
export const TECH_INFO_PANELS_DETAILS = [
  {
    title: "Photovoltaic Cells",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Solar Panel Encapsulation",
    description:
      "Solar panels endure diverse conditions, shielded by encapsulation for longevity and efficiency.",
  },
  {
    title: "Frame and Backsheet",
    description:
      "Frame offers support; backsheet shields from elements, ensuring solar panel durability.",
  },
];
export const TECH_INFO_PANELS = ["structure.png", "frame.png", "panel.png"];
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
export const TECH_INFO_READ_MORE = "Read more";
export const TECH_INFO_INNOVATIVE = "Innovative. Stylish. Essential:";
export const TECH_INFO_EXPLORE = "Explore Our Product Range";

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

export const FAQ_ACCORDION_DATA = [
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
export const FAQ_QUESTION = "Have a Question?";
export const FAQ_SOLUTIONS = "We have solutions";
export const FAQ_MORE_QUESTIONS = "More questions";

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
export const FOOTER_GERMAN_BRAND =
  "German brand in the renewable energy industry, providing high-quality products and services since 2003.";
export const FOOTER_CONTACT_INFO = [
  {
    icon: "location.svg",
    info: "AE Alternative Energy GMBH Messerschmittring 5486343 Koenigsbrunn Germany",
  },
  {
    icon: "phone.svg",
    info: "+49 8231 978268 0",
    linkTo: "tel:+4982319782680",
  },
  {
    icon: "letter.svg",
    info: "info@ae-solar.com",
    linkTo: "mailto:info@ae-solar.com",
  },
  {
    icon: "letter.svg",
    info: "sales@ae-solar.com",
    linkTo: "mailto:sales@ae-solar.com",
  },
];
export const FOOTER_SUBSCRIBE_NEWSLETTER = "Subscribe to newsletter";
export const FOOTER_COPYRIGHT =
  "Copyright © 2023 AESolar. All rights reserved.";
export const FOOTER_YOUR_EMAIL = "your e-mail";
export const FOOTER_SUBSCRIBE = "Subscribe";
export const POLICY_LINKS = ["Privacy Policy", "Terms of Use", "Legal"];

export const CONSTRUCTOR_OPTION_LINES = [
  {
    panelName: "Aurora",
    lineHeight: 200,
    position: "11%",
  },
  {
    panelName: "Comet",
    lineHeight: 200,
    position: "23%",
  },
  {
    panelName: "Terra",
    lineHeight: 250,
    position: "38%",
  },
  {
    panelName: "Eclipse",
    lineHeight: 250,
    position: "49.5%",
  },
  {
    panelName: "Meteor",
    lineHeight: 300,
    position: "62.5%",
  },
  {
    panelName: "HSF",
    lineHeight: 300,
    position: "74%",
  },
];

export const CONSTRUCTOR_MODELS_SPEC: PanelParams = {
  Aurora: {
    panelTechnology: "PERc Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["PERc"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Black", icon: "black.svg" },
          { color: "Silver", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "4000",
          measure2: "W(mm)",
          upperLimit: "5000",
          name1: "length",
          name2: "width",
        },
      },
      powerRange: {
        type: "range/power",
        text: "Power Range (W)",
        values: {
          measure1: "from",
          measure2: "to",
          lowerLimit: "100",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Applications.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
  Comet: {
    panelTechnology: "HJT Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["HJT"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Bi-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Black", icon: "black.svg" },
          { color: "Silver", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "4000",
          measure2: "W(mm)",
          upperLimit: "5000",
          name1: "length",
          name2: "width",
        },
      },
      powerRange: {
        type: "range/power",
        text: "Power Range (W)",
        values: {
          measure1: "from",
          measure2: "to",
          lowerLimit: "100",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Applications.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
  Meteor: {
    panelTechnology: "TOPCon Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["TOPCon"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Black", icon: "black.svg" },
          { color: "Silver", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "4000",
          measure2: "W(mm)",
          upperLimit: "5000",
          name1: "length",
          name2: "width",
        },
      },
      powerRange: {
        type: "range/power",
        text: "Power Range (W)",
        values: {
          measure1: "from",
          measure2: "to",
          lowerLimit: "100",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Applications.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
  Terra: {
    panelTechnology: "Wind/Snow Resistant Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["PERc", "TOPCon"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Black", icon: "black.svg" },
          { color: "Silver", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "4000",
          measure2: "W(mm)",
          upperLimit: "5000",
          name1: "length",
          name2: "width",
        },
      },
      powerRange: {
        type: "range/power",
        text: "Power Range (W)",
        values: {
          measure1: "from",
          measure2: "to",
          lowerLimit: "100",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Applications.",
        clarification: "Standard",
        values: ["Agri-Voltaics"],
      },
    },
  },
  Neptune: {
    panelTechnology: "PV-Thermal Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["PERc", "TOPCon", "HJT"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Black", icon: "black.svg" },
          { color: "Silver", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "4000",
          measure2: "W(mm)",
          upperLimit: "5000",
          name1: "length",
          name2: "width",
        },
      },
      powerRange: {
        type: "range/power",
        text: "Power Range (W)",
        values: {
          measure1: "from",
          measure2: "to",
          lowerLimit: "100",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Applications.",
        clarification: "Standard",
        values: ["PV-Thermal"],
      },
    },
  },
  HSF: {
    panelTechnology: "Shede Resident Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["PERc"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Mono-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Black", icon: "black.svg" },
          { color: "Silver", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "4000",
          measure2: "W(mm)",
          upperLimit: "5000",
          name1: "length",
          name2: "width",
        },
      },
      powerRange: {
        type: "range/power",
        text: "Power Range (W)",
        values: {
          measure1: "from",
          measure2: "to",
          lowerLimit: "100",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Applications.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
};

export const CONSTRUCTOR_APPLICATIONS_STANDARDS: ApplicationStandard[] = [
  {
    type: "Shade Resistant",
    clarification: "Shade ResistantShade ResistantShade Resistant",
  },
  {
    type: "Carport",
    clarification:
      "CarportCarport Carport CarportCarport CarportCarport CarportCarport",
  },
  {
    type: "PV-Thermal",
    clarification: "PV-Thermal",
  },
  {
    type: "Agri-Voltaics",
    clarification: "Agri-VoltaicsAgri-VoltaicsAgri-Voltaics",
  },
];
export const SEQUENCE_ANIMATION_TEXT = [
  {
    title: "Front cover",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Front encapsulation",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Solar cells",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Rear encapsulation",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Back cover",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Frame",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
  {
    title: "Connector",
    description:
      "Semiconductor photovoltaic cells convert sunlight into electricity, crucial for solar panels.",
  },
];

export const CONSTRUCTOR_MODEL = "Model.";
export const CONSTRUCTOR_WHICH_IS_BEST = "Which is best for you?";
export const CONSTRUCTOR_CUSTOMIZE = "Customize.";
export const CONSTRUCTOR_YOUR_MODEL = "Your model";
export const CONSTRUCTOR_APPLICATIONS = "Applications.";
export const CONSTRUCTOR_STANDARD = "Standard";
export const CONSTRUCTOR_GENERATE_YOUR_MODEL = "Generate your model";
export const CONSTRUCTOR_YOUR_MODEL_IS = "Your model is";
export const CONSTRUCTOR_MODELS_SHORT_DETAILS_SPECS = {
  Aurora: {
    powerRange: {
      parameter: "Power range",
      value: "320W—335W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "19.01%—19.90%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1000 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "12 years",
    },
  },
  Comet: {
    powerRange: {
      parameter: "Power range",
      value: "3201W—335W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "19.031%—19.90%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "10002 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "304 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "12 years",
    },
  },
  Meteor: {
    powerRange: {
      parameter: "Power range",
      value: "3250W—335W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "197.01%—19.90%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "10007 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "307 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "12 years",
    },
  },
  Terra: {
    powerRange: {
      parameter: "Power range",
      value: "320W—335W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "195.01%—19.90%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1000 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "12 years",
    },
  },
  Neptune: {
    powerRange: {
      parameter: "Power range",
      value: "32W—335W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "11.01%—19.90%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1001 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "14 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "132 years",
    },
  },
  HSF: {
    powerRange: {
      parameter: "Power range",
      value: "350W—370W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "19.11%—20.90%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "100 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "300 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "121 years",
    },
  },
};

export const CONSTRUCTOR_MODELS_SHORT_DETAILS = "Short Details";
export const CONSTRUCTOR_ADD_TO_BAG = "Add to Bag";
export const CONSTRUCTOR_MODELS_ADVANTAGES = [
  {
    icon: "sun.svg",
    advantageCategory: "Temperature",
    advantageDescription:
      "Hot spot temperature lower than 85°C. The IEC61215 test shows that with a zero percentage, a small and a 100 percentage of shaded area, respectively hot spots will not exceed 85°C, which is the maximum operating condition.",
  },
  {
    icon: "shield.svg",
    advantageCategory: "Safety",
    advantageDescription:
      "Instantly reduced temperature, thus elimination material hazard and ensuring more safery of the module, preventing fire risks caused by hot spots.",
  },
  {
    icon: "euro.svg",
    advantageCategory: "High returns",
    advantageDescription:
      "This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
  },
  {
    icon: "award.svg",
    advantageCategory: "Certificates",
    advantageDescription:
      "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
  },
];

export const CONSTRUCTOR_MODELS_SPECS: ModelsSpecs = {
  Aurora: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono-crystalline 158.75 x 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60 (6 x 10)",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1690 × 996 × 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "19.0 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 67 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind load",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanical load",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
    dimensionsImage: "AuroraDimensions.png",
    certificates:
      "certificates certificates certificates certificates certificates",
  },
  Comet: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono-crystalline 158.75 x 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60 (6 x 10)",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1690 × 996 × 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "19.0 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 67 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind load",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanical load",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
    dimensionsImage: "AuroraDimensions.png",
    certificates:
      "certificates certificates certificates certificates certificates",
  },
  Meteor: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono-crystalline 158.75 x 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60 (6 x 10)",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1690 × 996 × 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "19.0 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 67 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind load",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanical load",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
    dimensionsImage: "AuroraDimensions.png",
    certificates:
      "certificates certificates certificates certificates certificates",
  },
  Terra: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono-crystalline 158.75 x 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60 (6 x 10)",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1690 × 996 × 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "19.0 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 67 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind load",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanical load",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
    dimensionsImage: "AuroraDimensions.png",
    certificates:
      "certificates certificates certificates certificates certificates",
  },
  Neptune: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono-crystalline 158.75 x 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60 (6 x 10)",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1690 × 996 × 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "19.0 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 67 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind load",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanical load",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
    dimensionsImage: "AuroraDimensions.png",
    certificates:
      "certificates certificates certificates certificates certificates",
  },
  HSF: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono-crystalline 158.75 x 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60 (6 x 10)",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1690 × 996 × 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "19.0 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 67 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind load",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanical load",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations. This new technology prevents instant falls in the module output, thus increasing the performance ratio up to 30% and return for all types of installations.",
    dimensionsImage: "AuroraDimensions.png",
    certificates:
      "certificates certificates certificates certificates certificates",
  },
};

export const CART_MODELS_ARE_READY = "Your models are ready for the next step";
export const CART_PLEASE_CHECKOUT =
  "Please check out your order and we will finalize it.";
export const CART_CHECK_OUT = "Check Out";
export const CART_REMOVE = "Remove";
export const CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING = {
  solarCellTechnology: "Solar Cell Technology",
  moduleSpecification: "Module Specifation",
  moduleColor: "Module Color",
  backCover: "Back Cover",
  frameColor: "Frame Color",
  moduleDimension: "Module Dimension",
  powerRange: "Power Range",
  applications: "Applications",
};
export const CART_ADD_ONE_MORE_PANEL = "Add one more panel";
export const CART_BAG_IS_EMPTY = "Bag is empty";
export const CART_SUCCESSFULLY_ADDED = "Successfully added to bag";
export const CART_LOCALSTORAGE = "cart";

export const CHECKOUT_FILL_OUT = `Fill out Your
Order Information`;
export const CHECKOUT_THANK_YOU = `Thank You
We are Contact 
You Soon`;
export const CHECKOUT_GO_TO_HOME_PAGE = "Go to Homepage";
export const CHECKOUT_FORM_FIELDS: FormFileds[] = [
  {
    formTitle: "My name is",
    placeholder: "first and last",
    name: "name",
    type: "input",
  },
  {
    formTitle: "Please, contact me at",
    placeholder: "your e-mail",
    name: "email",
    type: "input",
  },
  {
    formTitle: "My phone number",
    placeholder: "phone number",
    name: "phone",
    type: "phone",
  },
];
export const CHECKOUT_SEND_REQUEST = "Send Request";

export const CONSULT_READY_TO_CONSULT = `Hey! We are Ready
to Consult You`;
export const CONSULT_FORM_FIELDS: FormFileds[] = [
  {
    formTitle: "My name is",
    placeholder: "first and last",
    name: "name",
    type: "input",
  },
  {
    formTitle: "I’m interested in",
    placeholder: "services name",
    name: "service",
    type: "dropdown",
  },
  {
    formTitle: "My budget",
    name: "budget",
    type: "picker",
  },
  {
    formTitle: "Please, contact me at",
    placeholder: "your e-mail",
    name: "email",
    type: "input",
  },
  {
    formTitle: "My phone number",
    placeholder: "phone number",
    name: "phone",
    type: "phone",
  },
];
export const DROPDOWN_INPUT_VALUES = {
  [FORMS_FIELDS.service]: [
    { label: "Service A", value: "Service A" },
    { label: "Service B", value: "Service B" },
    { label: "Service C", value: "Service C" },
  ],
};

export const PICKER_INPUT_VALUES = {
  [FORMS_FIELDS.budget]: ["$1…5k", "$5…10k", "$10…20k", "$20…50k", "> $50k"],
};

export const ABOUT_SUSTAINABLE = `Sustainable
Since 2003`;
export const ABOUT_COMPANY_FOUNDATION =
  "AE Solar TIER1 Company was founded by Dr. Alexander Maier and his brothers in Königsbrunn, Germany. AE Solar is one of the award-winning leading brands in the renewable energy industry, providing high-quality new renewable energy products and services since 2003.";
export const ABOUT_COMPANY_FOUNDATION_WORDS_TO_HIGHLIGHT = [
  "was",
  "AE Solar is one of",
  "leading brands in the renewable energy industry, providing",
  "and services since 2003.",
];
export const ABOUT_DOWNLOAD_PRESENTATION = "Download AE Solar presentation";
export const ABOUT_WATCH_VIDEO = "Watch the video of our history";
export const ABOUT_MISSION = [
  {
    title: "Mission",
    description:
      "To Develop solar energy around the world by top expertise in PV.Serving our clients with cost-effective and efficient high-quality European products.Pioneering in innovative solutions for the whole solar industry",
  },
  {
    title: "Vision",
    description:
      "A superior eco-friendly, riskless clean approach and safe source of energy across the globe.",
  },
];
export const ABOUT_BUSINESS = "Business";
export const ABOUT_MAP = "Map";
export const ABOUT_MAP_DESIGNATIONS = [
  {
    icon: "germany.svg",
    designation: "Headquater",
    location: "Königsbrunn, Germany",
  },
  {
    icon: "office.svg",
    designation: "Branch office",
  },
  {
    icon: "base.svg",
    designation: "Manufacturing base",
  },
  {
    icon: "distributor.svg",
    designation: "Distributor",
  },
];
export const ABOUT_OUR_HISTORY = "Our History";
export const ABOUT_IN_NUMBERS = "in Numbers";
