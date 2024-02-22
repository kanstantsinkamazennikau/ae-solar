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
  searchInputValue: "searchInputValue",
};

// NAVIGATION
export const HEADER_NAV_LINKS_ARRAY = [
  // {
  //   url: "/",
  //   text: "Home",
  // },
  {
    url: "/products",
    text: "Products",
    // subMenu: [
    //   { url: "/products", text: "All Products" },
    //   { url: "/products/Aurora", text: "Aurora" },
    //   { url: "/products/Meteor", text: "Meteor" },
    //   { url: "/products/Comet", text: "Comet" },
    //   { url: "/products/Terra", text: "Terra" },
    //   { url: "/products/ShadeStar", text: "ShadeStar" },
    //   { url: "/products/Neptune", text: "Neptune" },
    // ],
  },
  {
    url: "/company",
    text: "Company",
    subMenu: [
      { url: "/company/manufacturer", text: "Manufacturer" },
      { url: "/company/blog", text: "Blog" },
      { url: "/company/faq", text: "FAQ" },
    ],
  },
  // {
  //   url: "/info",
  //   text: "Info",
  //   subMenu: [
  //     {
  //       url: "/info/faq",
  //       text: "FAQ",
  //     },
  //     {
  //       url: "/info/publishers_info",
  //       text: "Publisher's Info",
  //     },
  //     {
  //       url: "/info/imprint",
  //       text: "Imprint Info",
  //     },
  //   ],
  // },
  {
    url: "/documents",
    text: "Documents",
  },
  {
    url: "/solutions",
    text: "Solutions",
  },
];
export const HEADER_CONTACT_US = "Contact Us";
export const HEADER_LANGUAGE = "Language";
export const HEADER_SUBNAVIGATION_PANELS_MODELS = [
  "Aurora.svg",
  "Meteor.svg",
  "Comet.svg",
  "Terra.svg",
  "ShadeStar.svg",
  "Neptune.svg",
];
export const HEADER_CONFIGURE_YOUR_MODEL = "Configure your model";
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
  "Meteor",
  "Comet",
  "Terra",
  "ShadeStar",
  "Neptune",
];
export const PRODUCT_INTRO_PANELS_VIDEOS = [
  "Aurora",
  "Meteor",
  "Comet",
  "Terra",
  "ShadeStar",
  "Neptune",
];
export const PRODUCT_INTRO_DETAILED_INFO = "Detailed Info";
export const PRODUCT_INTRO_PANELS = {
  Comet: {
    stats: {
      power: "200W",
      efficiency: "19.22%",
      voltage: "1000",
    },
    info: {
      icon: "Comet.svg",
      text: "Comet (HJT). Highlight Comet's unparalleled all-weather performance and cutting-edge technology, drawing a parallel with the relentless journey of a comet.",
    },
    advantages: [
      {
        title: "n-Type Heterojunction",
        description: "Advanced solar technology",
      },
      { title: "Reliability", description: "Exceptionally low degradation" },
      { title: "Temperature Stability", description: "Very low coefficient" },
      {
        title: "Low-Light Performance",
        description: "High output in dim conditions",
      },
      {
        title: "Extreme Climate Suitability",
        description: "Designed for harsh environments",
      },
      {
        title: "Closing Statement",
        description: `"Comet: Leading Efficiency, Whatever the Weather"`,
      },
    ],
  },
  Aurora: {
    stats: {
      power: "505W",
      efficiency: "22.47%",
      voltage: "1500",
    },
    info: {
      icon: "Aurora.svg",
      text: "Aurora (PERC). Redesigned with the Theme of Aurora Borealis. Reinvent Aurora as a solar module inspired by the dynamic and vibrant colors of the Northern Lights. Emphasize its versatility and aesthetic appeal, mirroring the ever-changing colors of auroras",
    },
    advantages: [
      { title: "Advanced Cells", description: "PERC and Topcon technology" },
      { title: "Size Variety", description: "small, medium, large modules" },
      { title: "Design Option", description: "Mono/Bifacial, color choices" },
      { title: "Custom Features", description: "Tailored material and power" },
      {
        title: "Climate Adaptability",
        description: "Suitable for extreme conditions",
      },
      {
        title: "Closing Statement",
        description: `"Aurora: Diverse and Dynamic Solar Solutions"`,
      },
    ],
  },
  Meteor: {
    stats: {
      power: "580W",
      efficiency: "22.47%",
      voltage: "1500",
    },
    info: {
      icon: "Meteor.svg",
      text: "Meteor (TOPCon). Focus on Meteor's ability to shine bright in low-light conditions, just like a meteor streaking across the night sky",
    },
    advantages: [
      { title: "TOPCon N-Type", description: "Superior efficiency technology" },
      {
        title: "Broad Customization",
        description: "Materials, power, dimensions",
      },
      { title: "Color Diversity", description: "Wide range of choices" },
      {
        title: "Resilient Performance",
        description: "Low degradation, high durability",
      },
      {
        title: "Climate Versatility",
        description: "Ideal for varied weather conditions",
      },
      {
        title: "Closing Statement",
        description: `"Meteor: Efficiency and Durability in Harmony"`,
      },
    ],
  },
  Terra: {
    stats: {
      power: "525W",
      efficiency: "21.95%",
      voltage: "1500",
    },
    info: {
      icon: "Terra.svg",
      text: "Versatile and Robust Solar Power. Terra (Agricultural Photovoltaic, Noise Barrier, and Solar Fence Applications) Showcase Terra's multifunctional applications, emphasizing its role in harmonizing with the Earth's needs.",
    },
    advantages: [
      { title: "n-Type TOPCon Tech", description: "Cutting-edge efficiency" },
      {
        title: "Application Flexibility",
        description: "Ideal for various installations",
      },
      {
        title: "Design Strength",
        description: "High wind and snow resistance",
      },
      { title: "Long-Term Reliability", description: "Minimal degradation" },
      {
        title: "Bifacial Efficiency",
        description: "Optimal energy capture",
      },
      {
        title: "Closing Statement",
        description: `"Terra: Adaptable Power for Every Environment"`,
      },
    ],
  },
  Neptune: {
    stats: {
      power: "380W",
      efficiency: "20.86%",
      voltage: "1500",
    },
    info: {
      icon: "Neptune.svg",
      text: "Neptune: Dual Power, Maximum Efficiency",
    },
    advantages: [
      {
        title: "Hybrid Energy",
        description: "Electricity and thermal production",
      },
      {
        title: "High Efficiency",
        description: "About 70% combined Efficiency",
      },
      {
        title: "Economic Benefit",
        description: "Long-term low LCOE",
      },
      { title: "Versatile Use", description: "Effective in various climates" },
      {
        title: "Sustainable Design",
        description: "Eco-conscious technology",
      },
      {
        title: "Closing Statement",
        description: `"Neptune: The Future of Hybrid Solar Energy"`,
      },
    ],
  },
  ShadeStar: {
    stats: {
      power: "200W",
      efficiency: "19.22%",
      voltage: "1000",
    },
    info: {
      icon: "ShadeStar.svg",
      text: `"ShadeStar: Light Where You Need It" (Smart Cell) Focus on ShadeStar resilience to partial shading, akin to a guardian in the cosmos`,
    },
    advantages: [
      {
        title: "Shade Resilience",
        description: "Maintains high output in shade",
      },
      {
        title: "Rooftop Optimization",
        description: "Ideal for limited space",
      },
      {
        title: "Economic Performance",
        description: "Low LCOE",
      },
      { title: "Smart Technology", description: "Advanced shade resistance" },
      {
        title: "Sustainable Solution",
        description: "Eco-friendly design",
      },
      {
        title: "Closing Statement",
        description: `"ShadeStar: Smart Energy for Every Roof"`,
      },
    ],
  },
};
export const PRODUCT_INTRO_LEARN_MORE = "Learn more";
export const PRODUCT_INTRO_CALCULATE_YOUR_MODEL = "Configure your model";

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

export const MAIN_PAGE_NEWS_INSIGHTS = "News and Insights";
export const MAIN_PAGE_COMPANY = "of Our Company ";

export const GET_IN_TOUCH_CLIENT_TYPE = ["investor", "partner", "installer"];
export const GET_IN_TOUCH_ELEVATE_GROWTH = "Elevate growth together";
export const GET_IN_TOUCH_JOIN_US = "Join as ";
export const GET_IN_TOUCH_OUR_VISION = " in our solar vision";
export const GET_IN_TOUCH_BECOME_A = "Become ";

export const FAQ_ACCORDION_DATA = [
  {
    question: "How do solar panels work?",
    answer:
      "Solar panels work by converting sunlight into electricity through a process called the photovoltaic effect. The solar cells within the panels absorb sunlight, and the energy from the absorbed light creates an electric current.",
  },
  {
    question: "What factors affect the efficiency of a solar system?",
    answer:
      "The efficiency of a solar system is influenced by sunlight exposure, shading, panel orientation, and temperature. Choosing high-quality panels and proper installation also impact overall performance.",
  },
  {
    question: "What is usual estimated time of delivery?",
    answer:
      "You can purchase directly from stocks of our local distributor at your country . Or you can place order for manufacturing and ETA will depend on destination, quantity and other order details.Usually by order ETA is from 30 to 60 days.",
  },
  {
    question: "How to become your distributor?",
    answer:
      "Please contact our sales office, send us your company presentation and get Distributorship terms and conditions from dedicated to your country Regional Manager.",
  },
];
export const FAQ_QUESTION = "Have a Question?";
export const FAQ_SOLUTIONS = "We have solutions";
export const FAQ_MORE_SOLUTIONS = "More solutions";

//FOOTER
export const FOOTER_LINKS_ARRAY = [
  {
    category: { title: "Products", link: "/products" },
    links: [
      { title: "Aurora", link: "/products/Aurora" },
      { title: "Meteor", link: "/products/Meteor" },
      { title: "Comet", link: "/products/Comet" },
      { title: "Terra", link: "/products/Terra" },
      { title: "ShadeStar", link: "/products/ShadeStar" },
      { title: "Neptune", link: "/products/Neptune" },
    ],
  },
  {
    category: { title: "About Us", link: "/company" },
    links: [
      { title: "Company", link: "/company" },
      { title: "Manufacturer", link: "/company/manufacturer" },
      { title: "Solutions", link: "/solutions" },
      { title: "Contacts", link: "/contacts" },
      { title: "Blog", link: "/company/blog" },
      { title: "FAQ", link: "/company/faq" },
    ],
  },
  {
    category: { title: "Legal Info", link: "/company/imprint" },
    links: [
      { title: "Imprint", link: "/company/imprint" },
      { title: "Publisher's", link: "/company/publishers_info" },
    ],
  },
  {
    category: { title: "Documents", link: "/documents" },
    links: [
      { title: "Datasheet", link: "/documents" },
      // { title: "Certifications", link: "/documents" },
      // { title: "Manual", link: "/documents" },
      // { title: "Warranty", link: "/documents" },
      // { title: "Presentations", link: "/documents" },
      // { title: "FAQ", link: "/info/faq" },
    ],
  },
];
export const FOOTER_GERMAN_BRAND =
  "German brand in the renewable energy industry, providing high-quality products and services since 2003.";
export const FOOTER_GERMAN_BRAND_WORDS_TO_BOLD = ["German brand", "since 2003"];
export const FOOTER_WE_ARE_SOCIAL = "We are social";
export const FOOTER_SOCIAL = [
  { icon: "facebook.svg", link: "https://www.facebook.com/aesolarenergy/" },
  { icon: "linkedin.svg", link: "https://www.linkedin.com/company/ae-solar/" },
  { icon: "instagram.svg", link: "https://www.instagram.com/aesolarenergy/" },
  { icon: "twitter.svg", link: "https://twitter.com/aesolar_energy/" },
  { icon: "youtube.svg", link: "https://www.youtube.com/@AESOLAR/featured/" },
];
export const FOOTER_SAVE_THE_WORLD = "It's time to save the world!";
export const FOOTER_CONTACT_INFO = [
  {
    icon: "location.svg",
    info: "AE Alternative Energy GMBH Messerschmittring 54 Königsbrunn 86343 Germany",
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
        values: ["Mono C-Si", "P type PERC"],
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
        values: ["Glass", "Backsheet", "Double-Glass"],
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
          lowerLimit: "1",
          measure2: "W(mm)",
          // upperLimit: "5000",
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
          lowerLimit: "1",
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
        values: ["Mono C-Si", "N type TOPCon"],
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
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet", "Double-Glass"],
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
          lowerLimit: "1",
          measure2: "W(mm)",
          // upperLimit: "5000",
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
          lowerLimit: "1",
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
        values: ["Mono C-Si", "N type HJT"],
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
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet", "Double-Glass"],
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
          lowerLimit: "1",
          measure2: "W(mm)",
          // upperLimit: "5000",
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
          lowerLimit: "1",
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
        values: ["Mono C-Si", "N type TOPCon"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Module Specifation",
        values: ["Bi-Facial"],
      },
      moduleColor: {
        type: "color",
        text: "Module Color",
        values: [{ color: "Transparent", icon: "transparent.svg" }],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet", "Double-Glass"],
      },
      frameColor: {
        type: "color",
        text: "Frame Color",
        values: [
          { color: "Silver", icon: "silver.svg" },
          { color: "Without Frame", icon: "transparent.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Module Dimension.",
        clarification: "L (mm) x W (mm)",
        values: {
          measure1: "L(mm)",
          lowerLimit: "1",
          measure2: "W(mm)",
          // upperLimit: "5000",
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
          lowerLimit: "1",
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
  ShadeStar: {
    panelTechnology: "Shede Resident Technology",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solar Cell Technology",
        values: ["Mono C-Si", "P type PERC"],
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
          { color: "Black", icon: "black.svg" },
          { color: "White", icon: "white.svg" },
        ],
      },
      backCover: {
        type: "slider",
        text: "Back Cover",
        values: ["Glass", "Backsheet", "Double-Glass"],
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
          lowerLimit: "1",
          measure2: "W(mm)",
          // upperLimit: "5000",
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
          lowerLimit: "1",
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
          lowerLimit: "1",
          measure2: "W(mm)",
          // upperLimit: "5000",
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
          lowerLimit: "1",
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
};

export const CONSTRUCTOR_APPLICATIONS_STANDARDS: ApplicationStandard[] = [
  {
    type: "Shade Resistant",
    clarification: `"Shade resistant" for solar panels means the ability to operate efficiently in shaded conditions, ensuring electricity generation even with partial shading`,
  },
  {
    type: "Carport",
    clarification: `"Carport" for solar panels is a structure resembling a canopy or veranda positioned over a parking area`,
  },
  {
    type: "PV-Thermal",
    clarification:
      "Solar energy combines photovoltaics and heat to generate electricity and provide heating with one system",
  },
  {
    type: "Agri-Voltaics",
    clarification: `"Agri Voltaics" is the use of solar panels on agricultural lands to simultaneously provide energy and protect crops`,
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
export const CONSTRUCTOR_CONFIGURE_YOUR_MODEL = "Configure your model";
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
export const CONSTRUCTOR_ADD = "Add";
export const CONSTRUCTOR_MODELS_ADVANTAGES = {
  Aurora: [
    {
      advantageCategory: "Benefit",
      advantageDescription: [
        "PERC Technology",
        "Wide range of choices for: Bill of matorrals, Power, Dimensinns, High durability",
        "Colors",
        "Variants for extreme climates of high durability ",
      ],
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        {
          datasheet: "AE ME-132 640W-660W",
          link: "/documents/solar_panels/Aurora/AE ME-132 640W-660W.pdf",
        },
        {
          datasheet: "AE MD-108BD 395W-415W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-108BD_395W-415W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-108E 395W-415W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-108E_395W-415W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-108 395W-415W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-108_395W-415W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-120BD 440W-460W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-120BD_440W-460W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-120E 440W-460W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-120E_440W-460W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-120 440W-460W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-120_440W-460W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-132BD 485W-505W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-132BD_485W-505W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-132E 485W-505W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-132E_485W-505W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-144BD 530W-550W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-144BD_530W-550W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-144 530W-550W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_MD-144_530W-550W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE ME-132BD 640W-660W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_ME-132BD_640W-660W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE ME-132 640W-660W Ver24.1.1",
          link: "/documents/solar_panels/Aurora/AE_ME-132_640W-660W_Ver24.1.1.pdf",
        },
      ],
    },
  ],
  Comet: [
    {
      advantageCategory: "Benefit",
      advantageDescription: [
        "PERC Technology",
        "Wide range of choices for: Bill of matorrals, Power, Dimensinns, High durability",
        "Colors",
        "Variants for extreme climates of high durability ",
      ],
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        {
          datasheet: "AE TMC-120BDS 380W-400W 202309-1",
          link: "/documents/solar_panels/Comet/AE_TMC-120BDS_380W-400W_202309-1.pdf",
        },
        {
          datasheet: "AE TMC-144BDS 460W-480W 202309-1",
          link: "/documents/solar_panels/Comet/AE_TMC-144BDS_460W-480W_202309-1.pdf",
        },
        {
          datasheet: "AE TME-110BDS 560W-580W Ver24.1.1",
          link: "/documents/solar_panels/Comet/AE_TME-110BDS_560W-580W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE TME-120BDS 615W-635W Ver24.1.1",
          link: "/documents/solar_panels/Comet/AE_TME-120BDS_615W-635W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE TME-132BDS 680W-700W Ver24.1.1",
          link: "/documents/solar_panels/Comet/AE_TME-132BDS_680W-700W_Ver24.1.1.pdf",
        },
      ],
    },
  ],
  Meteor: [
    {
      advantageCategory: "Benefit",
      advantageDescription: [
        "PERC Technology",
        "Wide range of choices for: Bill of matorrals, Power, Dimensinns, High durability",
        "Colors",
        "Variants for extreme climates of high durability ",
      ],
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        {
          datasheet: "AE CMD-108BDE 415W-435W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-108BDE_415W-435W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CMD-108BDS 420W-440W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-108BDS_420W-440W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CMD-108E 415W-435W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-108E_415W-435W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CMD-108 420W-440W Ver24.1.1 (1)",
          link: "/documents/solar_panels/Meteor/AE_CMD-108_420W-440W_Ver24.1.1 (1).pdf",
        },
        {
          datasheet: "AE CMD-120BDS 465W-485W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-120BDS_465W-485W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CMD-120 465W-485W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-120_465W-485W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CMD-144BDS 560W-580W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-144BDS_560W-580W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CMD-144 560W-580W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CMD-144_560W-580W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CME-132BDS 680W-700W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CME-132BDS_680W-700W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE CME-132 680W-700W Ver24.1.1",
          link: "/documents/solar_panels/Meteor/AE_CME-132_680W-700W_Ver24.1.1.pdf",
        },
      ],
    },
  ],
  Terra: [
    {
      advantageCategory: "Benefit",
      advantageDescription: [
        "PERC Technology",
        "Wide range of choices for: Bill of matorrals, Power, Dimensinns, High durability",
        "Colors",
        "Variants for extreme climates of high durability ",
      ],
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        {
          datasheet: "AE CMD-L132BD 505W-525W Ver24.1.1",
          link: "/documents/solar_panels/Terra/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE MD-L132BD 495W-505W Ver24.1.1",
          link: "/documents/solar_panels/Terra/AE_MD-L132BD_495W-505W_Ver24.1.1.pdf",
        },
      ],
    },
  ],
  Neptune: [
    {
      advantageCategory: "Benefit",
      advantageDescription: [
        "PERC Technology",
        "Wide range of choices for: Bill of matorrals, Power, Dimensinns, High durability",
        "Colors",
        "Variants for extreme climates of high durability ",
      ],
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        {
          datasheet: "AE PV-380WtAYThermal-964W-5",
          link: "/documents/solar_panels/Neptune/AE_PV-380WtAYThermal-964W-5.pdf",
        },
      ],
    },
  ],
  ShadeStar: [
    {
      advantageCategory: "Benefit",
      advantageDescription: [
        "PERC Technology",
        "Wide range of choices for: Bill of matorrals, Power, Dimensinns, High durability",
        "Colors",
        "Variants for extreme climates of high durability ",
      ],
    },
    {
      advantageCategory: "Documentation (pdf)",
      advantageDescription: [
        {
          datasheet: "AE SMB-60 320W-335W Ver24.1.1",
          link: "/documents/solar_panels/ShadeStar/AE_SMB-60_320W-335W_Ver24.1.1.pdf",
        },
        {
          datasheet: "AE SMD-108E 395W-410W Ver24.1.1",
          link: "/documents/solar_panels/ShadeStar/AE_SMD-108E_395W-410W_Ver24.1.1.pdf",
        },
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
    certificates: [
      {
        certificate: "IEC-Cert TUV-Rheinland",
        link: "/documents/certificates/IEC-Cert_TUV-Rheinland.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD TUNDERECLIPSE",
        link: "/documents/certificates/IEC-Cert_TUV-NORD_TUNDERECLIPSE.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD",
        link: "/documents/certificates/IEC-Cert_TUV-NORD.pdf",
      },
      { certificate: "VDE", link: "/documents/certificates/VDE.pdf" },
      {
        certificate: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE-Mark-Compliance-Certificate.pdf",
      },
      {
        certificate: "Management System Certificate",
        link: "/documents/certificates/Management-System-Certificate.pdf",
      },
    ],
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
    dimensionsImage: "CometDimensions.png",
    certificates: [
      {
        certificate: "IEC-Cert TUV-Rheinland",
        link: "/documents/certificates/IEC-Cert_TUV-Rheinland.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD TUNDERECLIPSE",
        link: "/documents/certificates/IEC-Cert_TUV-NORD_TUNDERECLIPSE.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD",
        link: "/documents/certificates/IEC-Cert_TUV-NORD.pdf",
      },
      { certificate: "VDE", link: "/documents/certificates/VDE.pdf" },
      {
        certificate: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE-Mark-Compliance-Certificate.pdf",
      },
      {
        certificate: "Management System Certificate",
        link: "/documents/certificates/Management-System-Certificate.pdf",
      },
    ],
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
    dimensionsImage: "MeteorDimensions.png",
    certificates: [
      {
        certificate: "IEC-Cert TUV-Rheinland",
        link: "/documents/certificates/IEC-Cert_TUV-Rheinland.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD TUNDERECLIPSE",
        link: "/documents/certificates/IEC-Cert_TUV-NORD_TUNDERECLIPSE.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD",
        link: "/documents/certificates/IEC-Cert_TUV-NORD.pdf",
      },
      { certificate: "VDE", link: "/documents/certificates/VDE.pdf" },
      {
        certificate: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE-Mark-Compliance-Certificate.pdf",
      },
      {
        certificate: "Management System Certificate",
        link: "/documents/certificates/Management-System-Certificate.pdf",
      },
    ],
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
    dimensionsImage: "TerraDimensions.png",
    certificates: [
      {
        certificate: "IEC-Cert TUV-Rheinland",
        link: "/documents/certificates/IEC-Cert_TUV-Rheinland.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD TUNDERECLIPSE",
        link: "/documents/certificates/IEC-Cert_TUV-NORD_TUNDERECLIPSE.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD",
        link: "/documents/certificates/IEC-Cert_TUV-NORD.pdf",
      },
      { certificate: "VDE", link: "/documents/certificates/VDE.pdf" },
      {
        certificate: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE-Mark-Compliance-Certificate.pdf",
      },
      {
        certificate: "Management System Certificate",
        link: "/documents/certificates/Management-System-Certificate.pdf",
      },
    ],
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
    dimensionsImage: "NeptuneDimensions.png",
    certificates: [
      {
        certificate: "IEC-Cert TUV-Rheinland",
        link: "/documents/certificates/IEC-Cert_TUV-Rheinland.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD TUNDERECLIPSE",
        link: "/documents/certificates/IEC-Cert_TUV-NORD_TUNDERECLIPSE.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD",
        link: "/documents/certificates/IEC-Cert_TUV-NORD.pdf",
      },
      { certificate: "VDE", link: "/documents/certificates/VDE.pdf" },
      {
        certificate: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE-Mark-Compliance-Certificate.pdf",
      },
      {
        certificate: "Management System Certificate",
        link: "/documents/certificates/Management-System-Certificate.pdf",
      },
    ],
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
    dimensionsImage: "ShadeStarDimensions.png",
    certificates: [
      {
        certificate: "IEC-Cert TUV-Rheinland",
        link: "/documents/certificates/IEC-Cert_TUV-Rheinland.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD TUNDERECLIPSE",
        link: "/documents/certificates/IEC-Cert_TUV-NORD_TUNDERECLIPSE.pdf",
      },
      {
        certificate: "IEC-Cert TUV-NORD",
        link: "/documents/certificates/IEC-Cert_TUV-NORD.pdf",
      },
      { certificate: "VDE", link: "/documents/certificates/VDE.pdf" },
      {
        certificate: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE-Mark-Compliance-Certificate.pdf",
      },
      {
        certificate: "Management System Certificate",
        link: "/documents/certificates/Management-System-Certificate.pdf",
      },
    ],
  },
};

export const CART_MODELS_ARE_READY = "Your modules";
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
export const CONSULT_AGREEMENT = "I agree to the processing of personal data";

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
  // {
  //   category: "Presentation",
  //   type: "Presentation",
  //   data: [
  //     {
  //       title: "Company Profile",
  //       linkTitle: "Company Profile (EN)",
  //       link: "link",
  //     },
  //     {
  //       title: "Main Product Catalogue",
  //       linkTitle: "Main Product Catalogue",
  //       link: "link",
  //     },
  //     {
  //       title: "ShadeStar Introduction",
  //       linkTitle: "ShadeStar Introduction",
  //       image: "Aurora.png",
  //       link: "link",
  //       tags: ["ShadeStar"],
  //     },
  //     {
  //       title: "ShadeStar case study",
  //       linkTitle: "ShadeStar case study",
  //       image: "Aurora.png",
  //       link: "link",
  //       tags: ["ShadeStar"],
  //     },
  //     {
  //       title: "ShadeStar Presentation (EN)",
  //       linkTitle: "ShadeStar Presentation (EN)",
  //       image: "Aurora.png",
  //       link: "link",
  //       tags: ["ShadeStar"],
  //     },
  //     {
  //       title: "ShadeStar Presentation (PT)",
  //       linkTitle: "ShadeStar Presentation (PT)",
  //       image: "Aurora.png",
  //       link: "link",
  //     },
  //     {
  //       title: "Production Process",
  //       linkTitle: "Production Process",
  //       link: "link",
  //       tags: ["Aurora", "Comet", "Meteor", "Terra", "Neptune", "ShadeStar"],
  //     },
  //     {
  //       title: "Terra",
  //       linkTitle: "Dr Hamed Hanifi Terra",
  //       image: "Aurora.png",
  //       link: "link",
  //       tags: ["Terra"],
  //     },
  //   ],
  // },
  {
    category: "Datasheets",
    type: "Text",
    data: [
      {
        linkTitle: "AE ME-132 640W-660W",
        link: "/documents/solar_panels/Aurora/AE ME-132 640W-660W.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-108BD 395W-415W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-108BD_395W-415W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-108E 395W-415W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-108E_395W-415W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-108 395W-415W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-108_395W-415W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-120BD 440W-460W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-120BD_440W-460W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-120E 440W-460W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-120E_440W-460W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-120 440W-460W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-120_440W-460W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-132BD 485W-505W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-132BD_485W-505W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-132E 485W-505W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-132E_485W-505W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-144BD 530W-550W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-144BD_530W-550W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE MD-144 530W-550W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_MD-144_530W-550W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE ME-132BD 640W-660W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_ME-132BD_640W-660W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE ME-132 640W-660W Ver24.1.1",
        link: "/documents/solar_panels/Aurora/AE_ME-132_640W-660W_Ver24.1.1.pdf",
        tags: ["Aurora"],
      },
      {
        linkTitle: "AE TMC-120BDS 380W-400W 202309-1",
        link: "/documents/solar_panels/Comet/AE_TMC-120BDS_380W-400W_202309-1.pdf",
        tags: ["Comet"],
      },
      {
        linkTitle: "AE TMC-144BDS 460W-480W 202309-1",
        link: "/documents/solar_panels/Comet/AE_TMC-144BDS_460W-480W_202309-1.pdf",
        tags: ["Comet"],
      },
      {
        linkTitle: "AE TME-110BDS 560W-580W Ver24.1.1",
        link: "/documents/solar_panels/Comet/AE_TME-110BDS_560W-580W_Ver24.1.1.pdf",
        tags: ["Comet"],
      },
      {
        linkTitle: "AE TME-120BDS 615W-635W Ver24.1.1",
        link: "/documents/solar_panels/Comet/AE_TME-120BDS_615W-635W_Ver24.1.1.pdf",
        tags: ["Comet"],
      },
      {
        linkTitle: "AE TME-132BDS 680W-700W Ver24.1.1",
        link: "/documents/solar_panels/Comet/AE_TME-132BDS_680W-700W_Ver24.1.1.pdf",
        tags: ["Comet"],
      },
      {
        linkTitle: "AE CMD-108BDE 415W-435W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-108BDE_415W-435W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-108BDS 420W-440W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-108BDS_420W-440W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-108E 415W-435W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-108E_415W-435W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-108 420W-440W Ver24.1.1 (1)",
        link: "/documents/solar_panels/Meteor/AE_CMD-108_420W-440W_Ver24.1.1 (1).pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-120BDS 465W-485W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-120BDS_465W-485W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-120 465W-485W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-120_465W-485W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-144BDS 560W-580W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-144BDS_560W-580W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-144 560W-580W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CMD-144_560W-580W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CME-132BDS 680W-700W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CME-132BDS_680W-700W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CME-132 680W-700W Ver24.1.1",
        link: "/documents/solar_panels/Meteor/AE_CME-132_680W-700W_Ver24.1.1.pdf",
        tags: ["Meteor"],
      },
      {
        linkTitle: "AE CMD-L132BD 505W-525W Ver24.1.1",
        link: "/documents/solar_panels/Terra/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
        tags: ["Terra"],
      },
      {
        linkTitle: "AE MD-L132BD 495W-505W Ver24.1.1",
        link: "/documents/solar_panels/Terra/AE_MD-L132BD_495W-505W_Ver24.1.1.pdf",
        tags: ["Terra"],
      },
      {
        linkTitle: "AE PV-380WtAYThermal-964W-5",
        link: "/documents/solar_panels/Neptune/AE_PV-380WtAYThermal-964W-5.pdf",
        tags: ["Neptune"],
      },
      {
        linkTitle: "AE SMB-60 320W-335W Ver24.1.1",
        link: "/documents/solar_panels/ShadeStar/AE_SMB-60_320W-335W_Ver24.1.1.pdf",
        tags: ["ShadeStar"],
      },
      {
        linkTitle: "AE SMD-108E 395W-410W Ver24.1.1",
        link: "/documents/solar_panels/ShadeStar/AE_SMD-108E_395W-410W_Ver24.1.1.pdf",
        tags: ["ShadeStar"],
      },
    ],
  },
  {
    category: "References",
    type: "Text",
    data: [{ linkTitle: "Company Profile", link: "/documents/references.pdf" }],
  },
  // {
  //   category: "Technical Data",
  //   type: "Text",
  //   data: [
  //     { linkTitle: "Technical Data1", link: "link" },
  //     { linkTitle: "Technical Data2", link: "link" },
  //     { linkTitle: "Technical Data3", link: "link" },
  //     { linkTitle: "Technical Data4", link: "link" },
  //     { linkTitle: "Technical Data5", link: "link" },
  //     { linkTitle: "Technical Data6", link: "link" },
  //   ],
  // },
  // {
  //   category: "Certification",
  //   type: "Text",
  //   data: [
  //     { linkTitle: "Certification1", link: "link" },
  //     { linkTitle: "Certification2", link: "link" },
  //     { linkTitle: "Certification3", link: "link" },
  //     { linkTitle: "Certification4", link: "link" },
  //     { linkTitle: "Certification5", link: "link" },
  //     { linkTitle: "Certification6", link: "link" },
  //   ],
  // },
  // {
  //   category: "Warranty",
  //   type: "Text",
  //   data: [
  //     { linkTitle: "Warranty1", link: "link" },
  //     { linkTitle: "Warranty2", link: "link" },
  //     { linkTitle: "Warranty3", link: "link" },
  //     { linkTitle: "Warranty4", link: "link" },
  //     { linkTitle: "Warranty5", link: "link" },
  //     { linkTitle: "Warranty6", link: "link" },
  //   ],
  // },
  // {
  //   category: "Videos",
  //   type: "Text",
  //   data: [
  //     { linkTitle: "Videos1", link: "link" },
  //     { linkTitle: "Videos2", link: "link" },
  //     { linkTitle: "Videos3", link: "link" },
  //     { linkTitle: "Videos4", link: "link" },
  //     { linkTitle: "Videos5", link: "link" },
  //     { linkTitle: "Videos6", link: "link" },
  //     { linkTitle: "Videos7", link: "link" },
  //     { linkTitle: "Videos8", link: "link" },
  //     { linkTitle: "Videos9", link: "link" },
  //     { linkTitle: "Videos10", link: "link" },
  //     { linkTitle: "Videos11", link: "link" },
  //     { linkTitle: "Videos12", link: "link" },
  //   ],
  // },
];

export const DOCUMENTS_FAQ_HAVE_A_QUESTION = "Have a Question?";
export const DOCUMENTS_FAQ_WE_HAVE_SOLUTIONS = "We Have Solutions";
export const DOCUMENTS_FAQ_FILES = [
  {
    category: "AESOLAR Company and Product Overview",
    data: [
      {
        question: "What does TIER 1 mean?",
        answer:
          "The Bloomberg New Energy Finance (BNEF) ranking allows for a transparent differentiation among the numerous PV manufacturers in the market. The title Tier-1 manufacturer is one of the highest distinctions in the industry.",
      },
      {
        question: "Is AESOLAR listed as TIER 1?",
        answer: "Yes",
      },
      {
        question: "What modules does AESOLAR produce?",
        answer:
          "AESOLAR offers a wide range of solar modules, including monocrystalline, polycrystalline, PERC, TOPCon, and HJT modules.",
      },
      {
        question: "What is the production capacity of AESOLAR?",
        answer:
          "Our annual production capacity is 2 gigawatts, with expansion plans for the future",
      },
      {
        question: "Where does AESOLAR produce?",
        answer:
          "Our production facilities are located in China and Turkey, supplemented by planned production facilities in Germany.",
      },
      {
        question: "Why buy AESOLAR modules?",
        answer:
          "AESOLAR modules are characterized by high quality, efficiency, reliability, excellent warranty terms, and outstanding customer service.",
      },
      {
        question:
          "How does AESOLAR's quality differ from other TIER 1 manufacturers?",
        answer:
          "AESOLAR stands out from other TIER 1 manufacturers due to our advanced technology, rigorous quality controls, and innovation. This justifies the higher price of our products, reflecting superior performance and durability.",
      },
      {
        question: "Does AESOLAR produce cells?",
        answer:
          "No, AESOLAR does not produce solar cells itself. However, we exclusively offer a wide range of solar cells of all technologies, from which our latest and most advanced modules result.",
      },
      {
        question: "Why do you have a polar bear as a mascot?",
        answer:
          "The polar bear symbolizes our commitment to environmental protection and the fight against climate change. It represents our dedication to sustainability and renewable energies.",
      },
    ],
  },
  {
    category: "Product Specifications and Technologies",
    data: [
      {
        question: "What is PERC?",
        answer:
          "Passivated Emitter and Rear Cell is a technology designed to enhance the efficiency of solar cells.",
      },
      {
        question: "What is TOPCon?",
        answer:
          "Tunnel Oxide Passivated Contact - is an advanced technology aimed at improving the efficiency and lifespan of solar cells",
      },
      {
        question: "What is HJT??",
        answer:
          "Heterojunction Technology combines monocrystalline and amorphous silicon to increase efficiency",
      },
      {
        question: "What is BIPV?",
        answer:
          "Building Integrated Photovoltaics refers to the integration of solar technology into building structures.",
      },
      {
        question: "What does PVT mean?",
        answer:
          "Photovoltaic Thermal denotes the combination of photovoltaic and thermal energy generation, as seen in our Neptune series..",
      },
      {
        question: "Are there colored modules?",
        answer: "Yes, we offer colored modules to meet aesthetic requirements.",
      },
      {
        question: "What does Weak Light and Low-Temperature Performance mean?",
        answer:
          "These terms describe the performance of solar modules under conditions of low sunlight and at low temperatures. AESOLAR modules are designed to operate efficiently even under such conditions.",
      },
    ],
  },
  {
    category: "Purchase and Availability",
    data: [
      {
        question: "Where can I buy AESOLAR modules?",
        answer:
          "Our modules are available through a network of distributors and dealers. Please contact us directly for more information.",
      },
    ],
  },
  {
    category: "Market Strategy and Partnerships",
    data: [
      {
        question: "What is your market strategy?",
        answer:
          "Our strategy focuses on providing high-quality solar modules, building strong partnerships, and concentrating on innovation and customer service.",
      },
      {
        question: "How many distribution partners do you have per country?",
        answer:
          "The number of distribution partners varies depending on the market size and dynamics.",
      },
      {
        question:
          "How can we protect our market share if we become your distribution partner?",
        answer:
          "Through exclusive distribution territories, marketing support, and product training, we offer our partners the opportunity to effectively protect and expand their market share.",
      },
    ],
  },
  {
    category: "General information about solar panels",
    data: [
      {
        question: "What is a solar panel and how does it work?",
        answer:
          "A solar panel converts sunlight into electricity based on the photovoltaic effect.",
      },
      {
        question: "How long do solar panels last?",
        answer:
          "Typically, 25 to 30 years, with a slight decrease in efficiency over time.",
      },
      {
        question: "How much do solar panels cost?",
        answer: "Costs vary depending on size, type, and manufacturer.",
      },
      {
        question: "Can solar panels generate energy in any weather?",
        answer:
          "Yes, even in cloudy weather, although efficiency is higher in direct sunlight.",
      },
      {
        question: "Do I need a permit to install solar panels?",
        answer: "Often, a permit is required depending on local regulations.",
      },
      {
        question:
          "How does the installation of solar panels affect the value of my home?",
        answer:
          "The installation can increase the value of a home, especially through improved energy efficiency.",
      },
      {
        question: "How environmentally friendly are solar panels?",
        answer:
          "Solar panels are highly environmentally friendly, as they utilize renewable energy and produce no greenhouse gases.",
      },
      {
        question: "Can I install solar panels myself?",
        answer:
          "Installation is possible, but professional installation is recommended.",
      },
      {
        question: "How maintenance-intensive are solar panels?",
        answer:
          "Solar panels require little maintenance, making them a practical solution for sustainable energy.",
      },
    ],
  },
];
export const DOCUMENTS_FILTER = "Filter";
export const DOCUMENTS_NO_RESULT = "No result for: ";
export const DOCUMENTS_RESET = "Reset";

export const DOCUMENTS_IMPRINT_INFO_IMPRINT = "Imprint";
export const DOCUMENTS_IMPRINT_INFO_INFORMATION = "Information";
export const DOCUMENTS_IMPRINT_INFO_LEGAL = {
  title: "Legal",
  registration: [
    `Steuernummer: 102/121/20478AE`,
    `Alternative Energy GmbH`,
    `WEEE-Reg.-Nr. DE 20958316`,
    `Vorgangs-ID: RV-201601-001190`,
  ],
  address: [
    `Geschäftsführer: Alexander Maier`,
    `Registrierungsnummer gem ElektroG:`,
    `VAT no.: DE268975577`,
    `Registration no. UID: DE268975577`,
    `Messerschmittring 54`,
    `86343 Königsbrunn`,
    `Germany`,
  ],
};
export const DOCUMENTS_IMPRINT_INFO_CONTACTS = "Contacts";
