import { FormFileds } from "@/app/[locale]/components/common/BuyerForm/types";
import {
  DocumentsTypesOther,
  DocumentsTypesPresentation,
  DocumentsTypesWithSubCategories,
} from "@/app/[locale]/documents/components/types";

export const FORM_FIELDS_INPUT_TYPES = {
  input: "input",
  phone: "phone",
  picker: "picker",
  dropdown: "dropdown",
  textarea: "textarea",
};

export const FORMS_FIELDS = {
  name: "name",
  email: "email",
  phone: "phone",
  code: "code",
  budget: "budget",
  capacity: "capacity",
  service: "service",
  interest: "interest",
  comment: "comment",
  searchInputValue: "searchInputValue",
};

// NAVIGATION
export const HEADER_NAV_LINKS_ARRAY = [
  {
    url: "/company",
    text: "Company",
    subMenu: [
      { url: "/company/manufacturer", text: "Manufacturer" },
      { url: "/company/news", text: "News" },
      { url: "/company/faq", text: "FAQ" },
    ],
  },
  {
    url: "/products",
    text: "Products",
    stickyProducts: true,
    subMenu: [
      { url: "/products", text: "All Modules" },
      { url: "/products/Aurora", text: "Aurora" },
      { url: "/products/Meteor", text: "Meteor" },
      { url: "/products/Comet", text: "Comet" },
      { url: "/products/Terra", text: "Terra" },
      { url: "/products/ShadeStar", text: "ShadeStar" },
      { url: "/products/Neptune", text: "Neptune" },
      { url: "/catalogue", text: "Choose Your Module" },
    ],
  },
  {
    url: "/documents",
    text: "Documents",
  },
  // {
  //   url: "/catalogue",
  //   text: "Catalogue",
  // },
  {
    url: "/solutions",
    text: "B2B Solutions",
  },
];
export const HEADER_LANGUAGE = "Language";
export const HEADER_SUBNAVIGATION_PANELS_MODELS = [
  "Aurora.svg",
  "Meteor.svg",
  "Comet.svg",
  "Terra.svg",
  "ShadeStar.svg",
  "Neptune.svg",
];
export const HEADER_CALCULATE = "Calculate";

//MAIN PAGE
export const AWARDS_AND_STATS_STATS_WITH_DETAILS = [
  { stat: "2003", details: "experience", initialValue: "2023" },
  {
    stat: "3200",
    details: "installations",
    initialValue: "3100",
    sign: "+",
  },
  { stat: "100", details: "countries", initialValue: "50", sign: "+" },
];
export const AWARDS_AND_STATS_AWARDS_IMAGES = [
  "badge1.png",
  "badge2.png",
  "badge3.png",
  "badge4.png",
  "badge5.png",
  "badge6.png",
  "badge7.png",
  "badge8.png",
  "badge9.png",
  "badge10.png",
  "badge11.png",
  "badge12.png",
];

export const PRODUCT_INTRO_PANELS_MAPPING = {
  power: "Power (up to)",
  efficiency: "Effienciency (up to)",
  voltage: "System Voltage",
};
export const PRODUCT_INTRO_PANELS_IMAGES = [
  "Aurora",
  "Meteor",
  "Comet",
  "Terra",
  "ShadeStar",
  "Neptune",
];
export const PRODUCT_INTRO_PANELS = {
  Comet: {
    stats: {
      power: "720W",
      efficiency: "22.56%",
      voltage: "1500",
    },
    info: {
      icon: "Comet.svg",
      text: "CometDescription",
    },
    advantages: [
      {
        title: "CometAdvantage1",
        description: "CometAdvantageDescription1",
      },
      {
        title: "CometAdvantage2",
        description: "CometAdvantageDescription2",
      },
      { title: "CometAdvantage3", description: "CometAdvantageDescription3" },
      {
        title: "CometAdvantage4",
        description: "CometAdvantageDescription4",
      },
      {
        title: "CometAdvantage5",
        description: "CometAdvantageDescription5",
      },
      {
        title: "CometAdvantage6",
        description: "CometAdvantageDescription6",
      },
    ],
  },
  Aurora: {
    stats: {
      power: "660W",
      efficiency: "21.27%",
      voltage: "1500",
    },
    info: {
      icon: "Aurora.svg",
      text: "AuroraDescription",
    },
    advantages: [
      {
        title: "AuroraAdvantage1",
        description: "AuroraAdvantageDescription1",
      },
      {
        title: "AuroraAdvantage2",
        description: "AuroraAdvantageDescription2",
      },
      { title: "AuroraAdvantage3", description: "AuroraAdvantageDescription3" },
      {
        title: "AuroraAdvantage4",
        description: "AuroraAdvantageDescription4",
      },
      {
        title: "AuroraAdvantage5",
        description: "AuroraAdvantageDescription5",
      },
      {
        title: "AuroraAdvantage6",
        description: "AuroraAdvantageDescription6",
      },
    ],
  },
  Meteor: {
    stats: {
      power: "700W",
      efficiency: "22.57%",
      voltage: "1500",
    },
    info: {
      icon: "Meteor.svg",
      text: "MeteorDescription",
    },
    advantages: [
      {
        title: "MeteorAdvantage1",
        description: "MeteorAdvantageDescription1",
      },
      {
        title: "MeteorAdvantage2",
        description: "MeteorAdvantageDescription2",
      },
      { title: "MeteorAdvantage3", description: "MeteorAdvantageDescription3" },
      {
        title: "MeteorAdvantage4",
        description: "MeteorAdvantageDescription4",
      },
      {
        title: "MeteorAdvantage5",
        description: "MeteorAdvantageDescription5",
      },
      {
        title: "MeteorAdvantage6",
        description: "MeteorAdvantageDescription6",
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
      text: "TerraDescription",
    },
    advantages: [
      {
        title: "TerraAdvantage1",
        description: "TerraAdvantageDescription1",
      },
      {
        title: "TerraAdvantage2",
        description: "TerraAdvantageDescription2",
      },
      { title: "TerraAdvantage3", description: "TerraAdvantageDescription3" },
      {
        title: "TerraAdvantage4",
        description: "TerraAdvantageDescription4",
      },
      {
        title: "TerraAdvantage5",
        description: "TerraAdvantageDescription5",
      },
      {
        title: "TerraAdvantage6",
        description: "TerraAdvantageDescription6",
      },
    ],
  },
  Neptune: {
    stats: {
      power: "380W",
      efficiency: "75%",
      voltage: "1500",
    },
    info: {
      icon: "Neptune.svg",
      text: "NeptuneDescription",
    },
    advantages: [
      {
        title: "NeptuneAdvantage1",
        description: "NeptuneAdvantageDescription1",
      },
      {
        title: "NeptuneAdvantage2",
        description: "NeptuneAdvantageDescription2",
      },
      {
        title: "NeptuneAdvantage3",
        description: "NeptuneAdvantageDescription3",
      },
      {
        title: "NeptuneAdvantage4",
        description: "NeptuneAdvantageDescription4",
      },
      {
        title: "NeptuneAdvantage5",
        description: "NeptuneAdvantageDescription5",
      },
      {
        title: "NeptuneAdvantage6",
        description: "NeptuneAdvantageDescription6",
      },
    ],
  },
  ShadeStar: {
    stats: {
      power: "410W",
      efficiency: "21.03%",
      voltage: "1500",
    },
    info: {
      icon: "ShadeStar.svg",
      text: `ShadeStarDescription`,
    },
    advantages: [
      {
        title: "ShadeStarAdvantage1",
        description: "ShadeStarAdvantageDescription1",
      },
      {
        title: "ShadeStarAdvantage2",
        description: "ShadeStarAdvantageDescription2",
      },
      {
        title: "ShadeStarAdvantage3",
        description: "ShadeStarAdvantageDescription3",
      },
      {
        title: "ShadeStarAdvantage4",
        description: "ShadeStarAdvantageDescription4",
      },
      {
        title: "ShadeStarAdvantage5",
        description: "ShadeStarAdvantageDescription5",
      },
      {
        title: "ShadeStarAdvantage6",
        description: "ShadeStarAdvantageDescription6",
      },
    ],
  },
};

export const TECH_INFO_BENS = [
  {
    title: "BensTitle1",
    description: "BensDescription1",
    image: "automation.svg",
  },
  {
    title: "BensTitle2",
    description: "BensDescription2",
    image: "manufacturer.png",
  },
  {
    title: "BensTitle3",
    description: "BensDescription3",
    image: "technologies.svg",
  },
  {
    title: "BensTitle4",
    description: "BensDescription4",
    image: "efficiency.svg",
  },
  {
    title: "BensTitle5",
    description: "BensDescription5",
    image: "materials.svg",
  },
];

export const FAQ_ACCORDION_DATA = [
  {
    question: "FAQQuestion1",
    answer: "FAQAnswer1",
  },
  {
    question: "FAQQuestion2",
    answer: "FAQAnswer2",
  },
  {
    question: "FAQQuestion3",
    answer: "FAQAnswer3",
  },
  {
    question: "FAQQuestion4",
    answer: "FAQAnswer4",
  },
];

//FOOTER
export const FOOTER_LINKS_ARRAY = [
  {
    text: "products",
    url: "/products",
    subMenu: [
      { text: "Aurora", url: "/products/Aurora" },
      { text: "Meteor", url: "/products/Meteor" },
      { text: "Comet", url: "/products/Comet" },
      { text: "Terra", url: "/products/Terra" },
      { text: "ShadeStar", url: "/products/ShadeStar" },
      { text: "Neptune", url: "/products/Neptune" },
    ],
  },
  {
    text: "aboutUs",
    url: "/company",
    subMenu: [
      { text: "company", url: "/company" },
      { text: "manufacturer", url: "/company/manufacturer" },
      { text: "b2b", url: "/solutions" },
      { text: "contacts", url: "/contacts" },
      { text: "news", url: "/company/news" },
      { text: "faq", url: "/company/faq" },
    ],
  },
  {
    text: "legalInfo",
    url: "/company/imprint",
    subMenu: [
      { text: "imprint", url: "/company/imprint" },
      { text: "publishers", url: "/company/publishers_info" },
    ],
  },
  {
    text: "documents",
    url: "/documents",
    subMenu: [
      { text: "datasheet", url: "/documents" },
      { text: "warranty", url: "/documents" },
    ],
  },
];

export const FOOTER_SOCIAL = [
  { icon: "facebook.svg", link: "https://www.facebook.com/aesolarenergy/" },
  { icon: "linkedin.svg", link: "https://www.linkedin.com/company/ae-solar/" },
  { icon: "instagram.svg", link: "https://www.instagram.com/aesolarenergy/" },
  { icon: "twitter.svg", link: "https://twitter.com/aesolar_energy/" },
  { icon: "youtube.svg", link: "https://www.youtube.com/@AESOLAR/featured/" },
];
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
export const POLICY_LINKS = [
  { text: "policy", link: "/company/publishers_info" },
  { text: "terms", link: "/company/publishers_info" },
  { text: "legal", link: "/company/imprint" },
];

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

export const CONSTRUCTOR_APPLICATIONS_STANDARDS = [
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
    title: "SequenceAnimationTitle1",
    description: "SequenceAnimationDescription1",
  },
  {
    title: "SequenceAnimationTitle2",
    description: "SequenceAnimationDescription2",
  },
  {
    title: "SequenceAnimationTitle3",
    description: "SequenceAnimationDescription3",
  },
  {
    title: "SequenceAnimationTitle4",
    description: "SequenceAnimationDescription4",
  },
  {
    title: "SequenceAnimationTitle5",
    description: "SequenceAnimationDescription5",
  },
  {
    title: "SequenceAnimationTitle6",
    description: "SequenceAnimationDescription6",
  },
];

export const CONSTRUCTOR_MODEL = "Model.";
export const CONSTRUCTOR_WHICH_IS_BEST = "Which is best for you?";
export const CONSTRUCTOR_CUSTOMIZE = "Customize.";
export const CONSTRUCTOR_YOUR_MODEL = "Your model";
export const CONSTRUCTOR_APPLICATIONS = "Applications.";
export const CONSTRUCTOR_STANDARD = "Standard";
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
export const CONSTRUCTOR_CONFIGURE = "Configure";
export const CONSTRUCTOR_CONFIGURE_MODULE = "Configure module";
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

export const CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING = {
  id: "Model",
  solarCellTechnology: "Solar Cell Technology",
  moduleSpecification: "Module Specifation",
  moduleColor: "Module Color",
  backCover: "Back Cover",
  frameColor: "Frame Color",
  moduleDimension: "Module Dimension",
  powerRange: "Power Range",
  applications: "Applications",
};
export const CART_LOCALSTORAGE = "cart";

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
  {
    formTitle: "I have a",
    placeholder: "comment or question, etc.",
    name: "comment",
    type: "textarea",
  },
];

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
    formTitle: "Capacity",
    placeholder: "kW",
    name: "capacity",
    type: "input",
  },
  {
    formTitle: "Contact me at",
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
    type: "textarea",
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
  [FORMS_FIELDS.interest]: ["installing", "partnership", "investing"],
};

export const ABOUT_MAP_DESIGNATIONS = [
  {
    icon: "germany.svg",
    designation: "Headquater",
    location: ["Königsbrunn,", "Germany"],
  },
  {
    icon: "office.svg",
    designation: "Branch office",
    location: ["Georgia", "Brasil", "Colombia"],
  },
  {
    icon: "base.svg",
    designation: "Production site",
    location: ["Turkey", "China"],
  },
  {
    icon: "distributor.svg",
    designation: "Distributors",
    location: ["All around the World"],
  },
];

export const COOKIES_USER_CONSENT_FLAG = "cookieConsentIsTrue";

export const DOCUMENTS_FILES: (
  | DocumentsTypesPresentation
  | DocumentsTypesOther
  | DocumentsTypesWithSubCategories
)[] = [
  {
    category: "Presentation",
    type: "Text",
    data: [
      {
        linkTitle: "Company Profile 2024",
        link: "/documents/presentations/Company_Profile_EN_2024_JAN_v1.pdf",
      },
      {
        linkTitle: "AESOLAR HSF Presentation",
        link: "/documents/presentations/AE-Solar-HSF-Introduction-light.pdf",
      },

      {
        linkTitle: "Dr.Hamed Hanifi AESOLAR TERRA",
        link: "/documents/presentations/Dr-Hamed-Hanifi_AESOLAR_TERRA_.pdf",
      },

      {
        linkTitle: "Fraunhofer HSF Presentation",
        link: "/documents/presentations/Fraunhofer_HSF_Report_Presentation_2018.pdf",
      },

      {
        linkTitle: "Hot-Spot Fee case study",
        link: "/documents/presentations/Hot-Spot-Fee-case-study-2.pdf",
      },
      {
        linkTitle: "AESOLAR Smart Hot-Spot Free Presentation (EN)",
        link: "/documents/presentations/HSF-Presentation_04-1.pdf",
      },
      {
        linkTitle: "AESOLAR Smart Hot-Spot Free Presentation (PT)",
        link: "/documents/presentations/HSF_Portuguese-1.pdf",
      },
      {
        linkTitle: "Product Catalogue",
        link: "/documents/presentations/PRODUCT-CATALOGUE_OCT.pdf",
      },
      {
        linkTitle: "Production Process",
        link: "/documents/presentations/Production-process.pdf",
      },
    ],
  },
  {
    category: "Technical Data",
    type: "SubCategories",
    subCategories: [
      {
        category: "Datasheets",
        type: "Text",
        data: [
          {
            linkTitle: "AE ME-132 640W-660W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_ME-132_640W-660W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-144 530W-550W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-144_530W-550W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-120 440W-460W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-120_440W-460W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-108 395W-415W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-108_395W-415W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE ME-132BD 640W-660W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_ME-132BD_640W-660W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-144BD 530W-550W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-144BD_530W-550W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-132BD 485W-505W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-132BD_485W-505W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-120BD 440W-460W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-120BD_440W-460W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-108BD 395W-415W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-108BD_395W-415W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-132E 485W-505W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-132E_485W-505W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-120E 440W-460W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-120E_440W-460W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE MD-108E 395W-415W Ver24.1.1",
            link: "/documents/solar_panels/Aurora/AE_MD-108E_395W-415W_Ver24.1.1.pdf",
            tags: ["Aurora"],
          },
          {
            linkTitle: "AE TME-132BDS 680W-700W Ver24.1.1",
            link: "/documents/solar_panels/Comet/AE_TME-132BDS_680W-700W_Ver24.1.1.pdf",
            tags: ["Comet"],
          },
          {
            linkTitle: "AE CMD-108BDS 420W-440W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-108BDS_420W-440W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-120BDS 465W-485W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-120BDS_465W-485W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-144BDS 560W-580W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-144BDS_560W-580W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-108BDE 415W-435W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-108BDE_415W-435W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-108 420W-440W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-108_420W-440W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-120 465W-485W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-120_465W-485W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-144 560W-580W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-144_560W-580W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-108E 415W-435W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CMD-108E_415W-435W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CME-132 680W-700W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CME-132_680W-700W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CME-132BDS 680W-700W Ver24.1.1",
            link: "/documents/solar_panels/Meteor/AE_CME-132BDS_680W-700W_Ver24.1.1.pdf",
            tags: ["Meteor"],
          },
          {
            linkTitle: "AE CMD-L132BD 505W-525W Ver24.1.1",
            link: "/documents/solar_panels/Terra/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
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
        category: "Installation Manual",
        type: "Text",
        data: [
          {
            linkTitle: "Installation Manual (EN)",
            link: "/documents/installation_manual/MANUAL-REV-2023.1-2.pdf",
          },
          {
            linkTitle: "Betriebshandbuch (DE)",
            link: "/documents/installation_manual/MANUAL-REV-2023.1.DE.pdf",
          },
        ],
      },
      {
        category: "NFC-chips",
        type: "Text",
        data: [
          {
            linkTitle:
              "NFC-chips integrated solar panels and AE Solar APP (EN)",
            link: "/documents/NFC_chips/AE-Solar-APP-Unique-solution-against-piracy.pdf",
          },
          {
            linkTitle:
              "NFC-chips integrated solar panels and AE Solar APP (BRA)",
            link: "/documents/NFC_chips/Chips_NFC_integrados_aos_painéis_solares_e_APP_AE_Solar.pdf",
          },
        ],
      },
    ],
  },
  {
    category: "Certificates",
    type: "Text",
    data: [
      {
        linkTitle: "CB certificate IEC61215 Aurora Monofacial",
        link: "/documents/certificates/CB certificate IEC61215 Aurora Monofacial.pdf",
      },
      {
        linkTitle: "CB certificate IEC61730 Aurora Monofacial",
        link: "/documents/certificates/CB certificate IEC61730 Aurora Monofacial.pdf",
      },
      {
        linkTitle: "CE Mark Compliance Certificate",
        link: "/documents/certificates/CE Mark Compliance Certificate.pdf",
      },
      {
        linkTitle: "IEC 61215_61730",
        link: "/documents/certificates/IEC 61215_61730.pdf",
      },
      {
        linkTitle: "IEC 62716 Ammonia Resistance",
        link: "/documents/certificates/IEC 62716 Ammonia Resistance.pdf",
      },
      {
        linkTitle: "IEC Cert_TUV NORD TUNDER&ECLIPSE",
        link: "/documents/certificates/IEC Cert_TUV NORD TUNDER&ECLIPSE.pdf",
      },
      {
        linkTitle: "IEC Cert_TUV SUD COMET",
        link: "/documents/certificates/IEC Cert_TUV SUD COMET.pdf",
      },
      {
        linkTitle:
          "IEC Cert_TÜV Rheinland IEC 60068 Dust and Sand Aurora Bifacial",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 60068 Dust and Sand Aurora Bifacial.pdf",
      },
      {
        linkTitle: "IEC Cert_TÜV Rheinland IEC 61215&61730 Aurora Bifacial",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 61215&61730 Aurora Bifacial.pdf",
      },
      {
        linkTitle: "IEC Cert_TÜV Rheinland IEC 61215&61730 Aurora BS",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 61215&61730 Aurora BS.pdf",
      },
      {
        linkTitle:
          "IEC Cert_TÜV Rheinland IEC 61701 Salt Mist Corrosion Resistance Aurora Bifacial",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 61701 Salt Mist Corrosion Resistance Aurora Bifacial.pdf",
      },
      {
        linkTitle:
          "IEC Cert_TÜV Rheinland IEC 62716 Ammonia Resistance Aurora Bifacial",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 62716 Ammonia Resistance Aurora Bifacial.pdf",
      },
      {
        linkTitle: "IEC Cert_TÜV Rheinland IEC 62804 PID Aurora Bifacial",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 62804 PID Aurora Bifacial.pdf",
      },
      {
        linkTitle: "IEC Cert_TÜV Rheinland IEC 60068 Dust and Sand",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 60068 Dust and Sand.pdf",
      },
      {
        linkTitle: "IEC Cert_TÜV Rheinland IEC 62804 PID",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC 62804 PID.pdf",
      },
      {
        linkTitle:
          "IEC Cert_TÜV Rheinland IEC-61701 Salt Mist Corrosion Resistance",
        link: "/documents/certificates/IEC Cert_TÜV Rheinland IEC-61701 Salt Mist Corrosion Resistance.pdf",
      },
      {
        linkTitle: "IEC-Cert_TÜV-Rheinland IEC 60068 Dust and Sand Aurora BS",
        link: "/documents/certificates/IEC-Cert_TÜV-Rheinland IEC 60068 Dust and Sand Aurora BS.pdf",
      },
      {
        linkTitle:
          "IEC-Cert_TÜV-Rheinland IEC 61701 Salt Mist Resistance Aurora BS",
        link: "/documents/certificates/IEC-Cert_TÜV-Rheinland IEC 61701 Salt Mist Resistance Aurora BS.pdf",
      },
      {
        linkTitle:
          "IEC-Cert_TÜV-Rheinland IEC 62716 Ammonia Resistance Aurora BS",
        link: "/documents/certificates/IEC-Cert_TÜV-Rheinland IEC 62716 Ammonia Resistance Aurora BS.pdf",
      },
      {
        linkTitle: "IEC-Cert_TÜV-Rheinland IEC 62804 PID Aurora BS",
        link: "/documents/certificates/IEC-Cert_TÜV-Rheinland IEC 62804 PID Aurora BS.pdf",
      },
      {
        linkTitle: "Management System Certificate",
        link: "/documents/certificates/Management System Certificate.pdf",
      },
      {
        linkTitle: "PVEL 2023 Top Performer",
        link: "/documents/certificates/PVEL 2023 Top Performer.pdf",
      },
    ],
  },
  {
    category: "Warranty",
    type: "Text",
    data: [
      {
        linkTitle: "Warranty (EN)",
        link: "/documents/warranty/Warranty-EN.pdf",
      },
      {
        linkTitle: "Warranty (DE)",
        link: "/documents/warranty/Warranty-DE.pdf",
      },
      {
        linkTitle: "Garantía (SPA)",
        link: "/documents/warranty/Garantía-SPA.pdf",
      },
      {
        linkTitle: "Garantia (BRA)",
        link: "/documents/warranty/Garantia-BRA.pdf",
      },
      {
        linkTitle: "限定保証 (JP)",
        link: "/documents/warranty/限定保証-JP.pdf",
      },
    ],
  },
];

export const DOCUMENTS_FAQ_FILES = [
  {
    category: "FAQCategory1",
    data: [
      {
        question: "FAQCategory1Question1",
        answer: "FAQCategory1Answer1",
      },
      {
        question: "FAQCategory1Question2",
        answer: "FAQCategory1Answer2",
      },
      {
        question: "FAQCategory1Question3",
        answer: "FAQCategory1Answer3",
      },
      {
        question: "FAQCategory1Question4",
        answer: "FAQCategory1Answer4",
      },
      {
        question: "FAQCategory1Question5",
        answer: "FAQCategory1Answer5",
      },
      {
        question: "FAQCategory1Question6",
        answer: "FAQCategory1Answer6",
      },
      {
        question: "FAQCategory1Question7",
        answer: "FAQCategory1Answer7",
      },
      {
        question: "FAQCategory1Question8",
        answer: "FAQCategory1Answer8",
      },
      {
        question: "FAQCategory1Question9",
        answer: "FAQCategory1Answer9",
      },
    ],
  },
  {
    category: "FAQCategory2",
    data: [
      {
        question: "FAQCategory2Question1",
        answer: "FAQCategory2Answer1",
      },
      {
        question: "FAQCategory2Question2",
        answer: "FAQCategory2Answer2",
      },
      {
        question: "FAQCategory2Question3",
        answer: "FAQCategory2Answer3",
      },
      {
        question: "FAQCategory2Question4",
        answer: "FAQCategory2Answer4",
      },
      {
        question: "FAQCategory2Question5",
        answer: "FAQCategory2Answer5",
      },
      {
        question: "FAQCategory2Question6",
        answer: "FAQCategory2Answer6",
      },
      {
        question: "FAQCategory2Question7",
        answer: "FAQCategory2Answer7",
      },
    ],
  },
  {
    category: "FAQCategory3",
    data: [
      {
        question: "FAQCategory3Question1",
        answer: "FAQCategory3Answer1",
      },
    ],
  },
  {
    category: "FAQCategory4",
    data: [
      {
        question: "FAQCategory4Question1",
        answer: "FAQCategory4Answer1",
      },
      {
        question: "FAQCategory4Question2",
        answer: "FAQCategory4Answer2",
      },
      {
        question: "FAQCategory4Question3",
        answer: "FAQCategory4Answer3",
      },
    ],
  },
  {
    category: "FAQCategory5",
    data: [
      {
        question: "FAQCategory5Question1",
        answer: "FAQCategory5Answer1",
      },
      {
        question: "FAQCategory5Question2",
        answer: "FAQCategory5Answer2",
      },
      {
        question: "FAQCategory5Question3",
        answer: "FAQCategory5Answer3",
      },
      {
        question: "FAQCategory5Question4",
        answer: "FAQCategory5Answer4",
      },
      {
        question: "FAQCategory5Question5",
        answer: "FAQCategory5Answer5",
      },
      {
        question: "FAQCategory5Question6",
        answer: "FAQCategory5Answer6",
      },
      {
        question: "FAQCategory5Question7",
        answer: "FAQCategory5Answer7",
      },
      {
        question: "FAQCategory5Question8",
        answer: "FAQCategory5Answer8",
      },
      {
        question: "FAQCategory5Question9",
        answer: "FAQCategory5Answer9",
      },
    ],
  },
];

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
