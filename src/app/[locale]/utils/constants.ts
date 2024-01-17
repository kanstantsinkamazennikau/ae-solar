import {
  ApplicationStandard,
  ModelsSpecs,
  PanelParams,
} from "@/app/[locale]/calculate/components/ChooseModel/types";
import { FormFileds } from "@/app/[locale]/components/common/BuyerForm/types";
import {
  DocumentsTypesOther,
  DocumentsTypesPresentation,
} from "@/app/[locale]/documents/components/types";

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
  interest: "interest",
  comment: "comment",
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
    url: "/about",
    text: "About us",
  },
  {
    url: "/news",
    text: "News",
  },
  {
    url: "/documents",
    text: "Documents",
    subMenu: [
      {
        url: "/documents",
        text: "Documents",
      },
      {
        url: "/documents/faq",
        text: "FAQ",
      },
      {
        url: "/documents/solutions3",
        text: "Solutions3",
      },
    ],
  },
  {
    url: "/join_us",
    text: "Join us",
  },
];
export const HEADER_CONTACT_US = "Contact Us";
export const HEADER_LANGUAGE = "Language";
export const HEADER_SUBNAVIGATION_PANELS_MODELS = [
  "Aurora.svg",
  "Comet.svg",
  "Meteor.svg",
  "Terra.svg",
  "Neptune.svg",
  "ShadeStar.svg",
];
export const HEADER_CHOOSE_YOUR_MODEL = "Choose your model";
export const HEADER_CALCULATE = "Calculate";
export const HEADER_CHOOSE_LANGUAGE = "Choose language";

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
export const PRODUCT_INTRO_MODULES = "Modules";
export const PRODUCT_INTRO_HIGH_QUALITY_SP = "High-Quality Solar Panels";
export const PRODUCT_INTRO_PANELS_MAPPING = {
  power: "Max. Power (up to)",
  efficiency: "Max. Effienciency (up to)",
  voltage: "Max. System Voltage",
};
export const PRODUCT_INTRO_PANELS_IMAGES = [
  "Aurora",
  "Comet",
  "Meteor",
  "Terra",
  "Neptune",
  "ShadeStar",
];
export const PRODUCT_INTRO_PANELS = {
  Comet: {
    stats: {
      power: "200W",
      efficiency: "19.22%",
      voltage: "1000",
    },
    info: {
      icon: "Comet.svg",
      text: "Propel into the future of solar energy with our Comet HJT. Superior performance under all conditions.",
    },
  },
  Aurora: {
    stats: {
      power: "505W",
      efficiency: "22.47%",
      voltage: "1500",
    },
    info: {
      icon: "Aurora.svg",
      text: "Experience minimum power loss and shine brightly even in low light conditions123123",
    },
  },
  Meteor: {
    stats: {
      power: "580W",
      efficiency: "22.47%",
      voltage: "1500",
    },
    info: {
      icon: "Meteor.svg",
      text: "Experience minimum power loss and shine brightly even in low light conditions Meteor",
    },
  },
  Terra: {
    stats: {
      power: "525W",
      efficiency: "21.95%",
      voltage: "1500",
    },
    info: {
      icon: "Terra.svg",
      text: "Experience123 minimum power loss and shine brightly even in low light conditions",
    },
  },
  Neptune: {
    stats: {
      power: "380W",
      efficiency: "20.86%",
      voltage: "1500",
    },
    info: {
      icon: "Neptune.svg",
      text: "Experience minimum power loss and shine brightly even in low light conditions",
    },
  },
  ShadeStar: {
    stats: {
      power: "200W",
      efficiency: "19.22%",
      voltage: "1000",
    },
    info: {
      icon: "ShadeStar.svg",
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
    title: `Unmatched Precision in Solar Engineering`,
    description:
      "AESOLAR stands as a paragon of German precision, leading the charge in the solar module manufacturing sector. Our Tier 1 status is a testament to our relentless pursuit of innovation and excellence.",
    image: "automation.svg",
  },
  {
    title: "Crafting a Sustainable Tomorrow",
    description:
      "At AESOLAR, we merge advanced technology with unwavering quality and sustainability, forging ahead in our quest for excellence. We’re not just creating solar modules; we’re sculpting a greener future.",
    image: "manufacturer.png",
  },
  {
    title: "Quality Without Compromise",
    description:
      "Adherence to AAA+ standards and meticulous quality checks are the cornerstones of our process, reflecting our dedication to outstanding quality and customer satisfaction.",
    image: "technologies.svg",
  },
  {
    title: "Excellence in Manufacturing",
    description:
      "Our cutting-edge facilities boast smart automation, ensuring every solar module is a product of precision and cost-efficiency. Rigorous quality controls are integral to our manufacturing ethos, guaranteeing superior efficiency, resilience, and functionality in every product.",
    image: "efficiency.svg",
  },
  {
    title: "Setting Industry Benchmarks",
    description:
      "AESOLAR is driven to elevate industry standards by enhancing energy efficiency. This not only reduces manufacturing expenses and ecological footprints but also provides our customers with the best total cost of ownership.",
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
      "Why do I like working with the company AE Solar...🤔. Quite simply because it's awesome. Great team, great products, great service. All-round carefree package. There are no problems with the employees, there are only solutions and that for every customer of ours. Just German quality.",
    author: "Thomas Schneider",
    organisation: "Purchasing, sales, consulting at the company SVM Solar",
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

export const GET_IN_TOUCH_CLIENT_TYPE = ["investor", "partner", "installer"];
export const GET_IN_TOUCH_ELEVATE_GROWTH = "Elevate growth together";
export const GET_IN_TOUCH_JOIN_US = "Join as ";
export const GET_IN_TOUCH_OUR_VISION = " in our solar vision";
export const GET_IN_TOUCH_BECOME_A = "Become ";

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
export const FAQ_MORE_SOLUTIONS = "More solutions";

//FOOTER
export const FOOTER_LINKS_ARRAY = [
  {
    category: "Products",
    links: ["Aurora", "Comet", "Meteor", "Terra", "Neptune", "ShadeStar"],
  },
  {
    category: "Company",
    links: ["About Us", "Manufacturing", "News", "Blog"],
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
      "FAQ",
    ],
  },
];
export const FOOTER_GERMAN_BRAND =
  "German brand in the renewable energy industry, providing high-quality products and services since 2003.";
export const FOOTER_GERMAN_BRAND_WORDS_TO_BOLD = ["German brand", "since 2003"];
export const FOOTER_WE_ARE_SOCIAL = "We are social";
export const FOOTER_SOCIAL = [
  { icon: "linkedin.svg", link: "https://www.linkedin.com/company/ae-solar/" },
  { icon: "facebook.svg", link: "https://www.facebook.com/aesolarenergy/" },
  { icon: "twitter.svg", link: "https://twitter.com/aesolar_energy/" },
  { icon: "youtube.svg", link: "https://www.youtube.com/@AESOLAR/featured/" },
];
export const FOOTER_SAVE_THE_WORLD = "It's time to save the world!";
export const FOOTER_CONTACT_INFO = [
  {
    icon: "location.svg",
    info: "AE Alternative Energy GMBH Messerschmittring 5486343 Königsbrunn Germany",
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
export const FOOTER_SUBSCRIBE_NEWSLETTER = "Subscribe to Our Newsletter";
export const FOOTER_COPYRIGHT =
  "Copyright © 2023 AESolar. All rights reserved.";
export const FOOTER_YOUR_EMAIL = "your e-mail";
export const FOOTER_SUBSCRIBE = "Subscribe";
export const POLICY_LINKS = ["Privacy Policy", "Terms of Use", "Legal"];

export const CONSTRUCTOR_OPTION_LINES = [
  {
    panelName: "Aurora",
    position: "8%",
  },
  {
    panelName: "Comet",
    position: "21%",
  },
  {
    panelName: "Terra",
    position: "37%",
  },
  {
    panelName: "Eclipse",
    position: "50%",
  },
  {
    panelName: "Meteor",
    position: "64%",
  },
  {
    panelName: "ShadeStar",
    position: "77%",
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
  ShadeStar: {
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
      value: "495W—505W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "21.70%—22.47%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1500 (V)",
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
      value: "190W—200W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "18.26%—19.22%",
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
      value: "15 years",
    },
  },
  Meteor: {
    powerRange: {
      parameter: "Power range",
      value: "560W—580W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "21.70%—22.47%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "15 years",
    },
  },
  Terra: {
    powerRange: {
      parameter: "Power range",
      value: "505W—525W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "21.12%—21.95%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "15 years",
    },
  },
  Neptune: {
    powerRange: {
      parameter: "Power range",
      value: "370W—380W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "20.31%—20.86%",
    },
    aximumSystemVoltage: {
      parameter: "Maximum system voltage",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Performance Guarantee",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Product Warranty",
      value: "15 years",
    },
  },
  ShadeStar: {
    powerRange: {
      parameter: "Power range",
      value: "190W—200W",
    },
    efficiencyRange: {
      parameter: "Efficiency range",
      value: "18.26%—19.22%",
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
      value: "15 years",
    },
  },
};

export const CONSTRUCTOR_MODELS_SHORT_DETAILS = "Short Details";
export const CONSTRUCTOR_ADD_TO_BAG = "Add to Bag";
export const CONSTRUCTOR_MODELS_ADVANTAGES = {
  Aurora: [
    {
      advantageCategory: "Benefit",
      advantageDescription:
        "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        { datasheet: "AE CMD-108 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDS 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDE 415W-435W Black", link: "" },
        { datasheet: "AE CMD-108E 415W-435W Black", link: "" },
        { datasheet: "AE CMD-120 465W-485W", link: "" },
        { datasheet: "AE CMD-120BDS 465W-485W", link: "" },
      ],
    },
  ],
  Comet: [
    {
      advantageCategory: "Benefit",
      advantageDescription:
        "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        { datasheet: "AE CMD-108 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDS 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDE 415W-435W Black", link: "" },
        { datasheet: "AE CMD-108E 415W-435W Black", link: "" },
        { datasheet: "AE CMD-120 465W-485W", link: "" },
        { datasheet: "AE CMD-120BDS 465W-485W", link: "" },
      ],
    },
  ],
  Meteor: [
    {
      advantageCategory: "Benefit",
      advantageDescription:
        "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        { datasheet: "AE CMD-108 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDS 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDE 415W-435W Black", link: "" },
        { datasheet: "AE CMD-108E 415W-435W Black", link: "" },
        { datasheet: "AE CMD-120 465W-485W", link: "" },
        { datasheet: "AE CMD-120BDS 465W-485W", link: "" },
      ],
    },
  ],
  Terra: [
    {
      advantageCategory: "Benefit",
      advantageDescription:
        "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        { datasheet: "AE CMD-108 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDS 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDE 415W-435W Black", link: "" },
        { datasheet: "AE CMD-108E 415W-435W Black", link: "" },
        { datasheet: "AE CMD-120 465W-485W", link: "" },
        { datasheet: "AE CMD-120BDS 465W-485W", link: "" },
      ],
    },
  ],
  Neptune: [
    {
      advantageCategory: "Benefit",
      advantageDescription:
        "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        { datasheet: "AE CMD-108 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDS 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDE 415W-435W Black", link: "" },
        { datasheet: "AE CMD-108E 415W-435W Black", link: "" },
        { datasheet: "AE CMD-120 465W-485W", link: "" },
        { datasheet: "AE CMD-120BDS 465W-485W", link: "" },
      ],
    },
  ],
  ShadeStar: [
    {
      advantageCategory: "Benefit",
      advantageDescription:
        "Lining with international standards, AE Solar Photovoltaic modules are tested and certified under extreme stress conditions and it can bear harsh environment influences.",
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        { datasheet: "AE CMD-108 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDS 420W-440W", link: "" },
        { datasheet: "AE CMD-108BDE 415W-435W Black", link: "" },
        { datasheet: "AE CMD-108E 415W-435W Black", link: "" },
        { datasheet: "AE CMD-120 465W-485W", link: "" },
        { datasheet: "AE CMD-120BDS 465W-485W", link: "" },
      ],
    },
  ],
};

export const CONSTRUCTOR_MODELS_SPECS: ModelsSpecs = {
  Aurora: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Gallium-doped Mono c-Si PERC, Half-cut cells, 182 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "120",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1902 mm x 1133 mm x 30 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "22.5 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4 mm², 350 mm length or customized",
      },
      connectorType: {
        characteristic: "Connector type",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hail resistance",
        value: "Max. ⌀ 25 mm at 23 m/s",
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
        value: "Silicon Heterojunction Technology, Half-cut cells, 210 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "110",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "2383 mm x 1095 mm x 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "32.5 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 350mm length or customised",
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
        value: "Mono c-Si PERC, Full cells, 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "60",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "2278 mm x 1133 mm x 30 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "26.5 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 350mm length or customised",
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
        value: "Gallium-doped Mono c-Si PERC, Half-cut cells, 182 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "132",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1070 mm x 2235 mm x 30 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "30.5 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 350mm length or customised",
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
        value: "Gallium-doped Mono c-Si PERC, Half-cut cells, 166 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "120",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1755 mm x 1038 mm x 35 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "33 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP 68 rated",
      },
      outputCable: {
        characteristic: "Output cable",
        value: "1 x 4.0mm2, 350mm length or customised",
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
  ShadeStar: {
    materialCharacteristics: {
      cellType: {
        characteristic: "Cell type",
        value: "Mono c-Si PERC, Full cells, 158.75 mm",
      },
      noOfCells: {
        characteristic: "No. of cells",
        value: "36",
      },
      dimensions: {
        characteristic: "Dimensions",
        value: "1530 mm x 680 mm x 30 mm",
      },
      weight: {
        characteristic: "Weight",
        value: "10.8 kg",
      },
      junctionBox: {
        characteristic: "Junction box",
        value: "IP68 rated, 2 Bypass Diodes",
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
export const CART_GET_A_QUOTE = "Get a quote";
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
    formTitle: "I’m interested in",
    name: "interest",
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
    name: "interest",
    type: "picker",
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
  {
    formTitle: "I have a",
    placeholder: "comment or question, etc.",
    name: "comment",
    type: "input",
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
  [FORMS_FIELDS.interest]: ["installing", "partnership", "investing"],
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

export const COOKIES_AESOLAR = "Cookies on AESolar";
export const COOKIES_WE_USE_COOKIES =
  "We use cookies and other tracking technologies to improve your browsing experience on our site, show personalized content and targeted ads, analyze site traffic, and understand where our audiences come from. To learn more or opt-out, read our Cookie Policy. Please also read our Privacy Notice and Terms of Use, which became effective December 20, 2019.";
export const COOKIES_LINKS = [
  "Cookie Policy",
  "Privacy Notice",
  "Terms of Use",
];
export const COOKIES_MATCH_TEXT_WITH_LINK = {
  "Cookie Policy": "policy",
  "Privacy Notice": "privacy",
  "Terms of Use": "terms",
};
export const COOKIES_BY_CHOOSING =
  "By choosing “I Accept”, you consent to our use of cookies and other tracking technologies.";
export const COOKIES_I_ACCEPT = "I accept";
export const COOKIES_I_DO_NOT_ACCEPT = "I do not accept";
export const COOKIES_USER_CONSENT_FLAG = "cookieConsentIsTrue";

export const DOCUMENTS_DOCUMENTS_HEADING = "Documents";
export const DOCUMENTS_YOU_NEED_TO_KNOW = "You Need to Know";
export const DOCUMENTS_CATEGORIES = "Categories";
export const DOCUMENTS_SEARCH = "Search";
export const DOCUMENTS_FILES: (
  | DocumentsTypesPresentation
  | DocumentsTypesOther
)[] = [
  {
    category: "Presentation",
    type: "Presentation",
    data: [
      {
        title: "Company Profile",
        linkTitle: "Company Profile (EN)",
        link: "link",
      },
      {
        title: "Main Product Catalogue",
        linkTitle: "Main Product Catalogue",
        link: "link",
      },
      {
        title: "ShadeStar Introduction",
        linkTitle: "ShadeStar Introduction",
        image: "Aurora.png",
        link: "link",
      },
      {
        title: "ShadeStar case study",
        linkTitle: "ShadeStar case study",
        image: "Aurora.png",
        link: "link",
      },
      {
        title: "ShadeStar Presentation (EN)",
        linkTitle: "ShadeStar Presentation (EN)",
        image: "Aurora.png",
        link: "link",
      },
      {
        title: "ShadeStar Presentation (PT)",
        linkTitle: "ShadeStar Presentation (PT)",
        image: "Aurora.png",
        link: "link",
      },
      {
        title: "Production Process",
        linkTitle: "Production Process",
        link: "link",
      },
      {
        title: "Terra",
        linkTitle: "Dr Hamed Hanifi Terra",
        image: "Aurora.png",
        link: "link",
      },
    ],
  },
  {
    category: "References",
    type: "Text",
    data: [
      { linkTitle: "References1", link: "link" },
      { linkTitle: "References2", link: "link" },
      { linkTitle: "References3", link: "link" },
      { linkTitle: "References4", link: "link" },
      { linkTitle: "References5", link: "link" },
      { linkTitle: "References6", link: "link" },
    ],
  },
  {
    category: "Technical Data",
    type: "Text",
    data: [
      { linkTitle: "Technical Data1", link: "link" },
      { linkTitle: "Technical Data2", link: "link" },
      { linkTitle: "Technical Data3", link: "link" },
      { linkTitle: "Technical Data4", link: "link" },
      { linkTitle: "Technical Data5", link: "link" },
      { linkTitle: "Technical Data6", link: "link" },
    ],
  },
  {
    category: "Certification",
    type: "Text",
    data: [
      { linkTitle: "Certification1", link: "link" },
      { linkTitle: "Certification2", link: "link" },
      { linkTitle: "Certification3", link: "link" },
      { linkTitle: "Certification4", link: "link" },
      { linkTitle: "Certification5", link: "link" },
      { linkTitle: "Certification6", link: "link" },
    ],
  },
  {
    category: "Warranty",
    type: "Text",
    data: [
      { linkTitle: "Warranty1", link: "link" },
      { linkTitle: "Warranty2", link: "link" },
      { linkTitle: "Warranty3", link: "link" },
      { linkTitle: "Warranty4", link: "link" },
      { linkTitle: "Warranty5", link: "link" },
      { linkTitle: "Warranty6", link: "link" },
    ],
  },
  {
    category: "Videos",
    type: "Text",
    data: [
      { linkTitle: "Videos1", link: "link" },
      { linkTitle: "Videos2", link: "link" },
      { linkTitle: "Videos3", link: "link" },
      { linkTitle: "Videos4", link: "link" },
      { linkTitle: "Videos5", link: "link" },
      { linkTitle: "Videos6", link: "link" },
      { linkTitle: "Videos7", link: "link" },
      { linkTitle: "Videos8", link: "link" },
      { linkTitle: "Videos9", link: "link" },
      { linkTitle: "Videos10", link: "link" },
      { linkTitle: "Videos11", link: "link" },
      { linkTitle: "Videos12", link: "link" },
    ],
  },
];

export const DOCUMENTS_FAQ_HAVE_A_QUESTION = "Have a Question?";
export const DOCUMENTS_FAQ_WE_HAVE_SOLUTIONS = "We Have Solutions";
export const DOCUMENTS_FAQ_FILES = [
  {
    category: "Unternehmens- und Produktüberblick",
    data: [
      { question: "Was bedeutet TIER 1?", answer: "link" },
      {
        question: "Ist AESOLAR TIER 1 gelistet?",
        answer: "Ist AESOLAR TIER 1 gelistet?",
      },
      {
        question: "Welche Module stellt AESOLAR her?",
        answer:
          "AESOLAR bietet eine breite Palette an Solarmodulen, darunter monokristalline, polykristalline, PERC-, TOPCon und HJT-Module.",
      },
      {
        question: "Wie groß ist die Produktionskapazität von AESOLAR?",
        answer: "Wie groß ist die Produktionskapazität von AESOLAR?",
      },
    ],
  },
  {
    category: "Produkt-Spezifikationen und Technologien",
    data: [
      { question: "Was bedeutet TIER 1?", answer: "link" },
      {
        question: "Ist AESOLAR TIER 1 gelistet?",
        answer: "Ist AESOLAR TIER 1 gelistet?",
      },
      {
        question: "Welche Module stellt AESOLAR her?",
        answer:
          "AESOLAR bietet eine breite Palette an Solarmodulen, darunter monokristalline, polykristalline, PERC-, TOPCon und HJT-Module.",
      },
      {
        question: "Wie groß ist die Produktionskapazität von AESOLAR?",
        answer: "Wie groß ist die Produktionskapazität von AESOLAR?",
      },
    ],
  },
  {
    category: "Kauf und Verfügbarkeit",
    data: [
      { question: "Was bedeutet TIER 1?", answer: "link" },
      {
        question: "Ist AESOLAR TIER 1 gelistet?",
        answer: "Ist AESOLAR TIER 1 gelistet?",
      },
      {
        question: "Welche Module stellt AESOLAR her?",
        answer:
          "AESOLAR bietet eine breite Palette an Solarmodulen, darunter monokristalline, polykristalline, PERC-, TOPCon und HJT-Module.",
      },
      {
        question: "Wie groß ist die Produktionskapazität von AESOLAR?",
        answer: "Wie groß ist die Produktionskapazität von AESOLAR?",
      },
    ],
  },
  {
    category: "Marktstrategie und Partnerschaften",
    data: [
      { question: "Was bedeutet TIER 1?", answer: "link" },
      {
        question: "Ist AESOLAR TIER 1 gelistet?",
        answer: "Ist AESOLAR TIER 1 gelistet?",
      },
      {
        question: "Welche Module stellt AESOLAR her?",
        answer:
          "AESOLAR bietet eine breite Palette an Solarmodulen, darunter monokristalline, polykristalline, PERC-, TOPCon und HJT-Module.",
      },
      {
        question: "Wie groß ist die Produktionskapazität von AESOLAR?",
        answer: "Wie groß ist die Produktionskapazität von AESOLAR?",
      },
    ],
  },
  {
    category: "Allgemeine Informationen zu Solarmodulen",
    data: [
      { question: "Was bedeutet TIER 1?", answer: "link" },
      {
        question: "Ist AESOLAR TIER 1 gelistet?",
        answer: "Ist AESOLAR TIER 1 gelistet?",
      },
      {
        question: "Welche Module stellt AESOLAR her?",
        answer:
          "AESOLAR bietet eine breite Palette an Solarmodulen, darunter monokristalline, polykristalline, PERC-, TOPCon und HJT-Module.",
      },
      {
        question: "Wie groß ist die Produktionskapazität von AESOLAR?",
        answer: "Wie groß ist die Produktionskapazität von AESOLAR?",
      },
    ],
  },
];
