import { Model } from "@/app/[locale]/context/constructorContext";
import { ProductBentofoxes } from "@/app/[locale]/products/[id]/components/Customization/types";

export const PRODUCT_NAVIGATION = [
  {
    title: "introduction",
    link: "introduction",
    position: "start",
  },
  {
    title: "benefits",
    link: "benefits",
    position: "start",
  },
  {
    title: "construction",
    link: "construction",
    position: "start",
  },
  {
    title: "conclusion",
    link: "conclusion",
    position: "start",
  },
];
export const PRODUCT_OVERVIEW = "Overview:";

export const PRODUCT_PANEL_TITLES = {
  Aurora: "ProductTitleAurora",
  Comet: "ProductTitleComet",
  Meteor: "ProductTitleMeteor",
  Terra: "ProductTitleTerra",
  Neptune: "ProductTitleNeptune",
  ShadeStar: "ProductTitleShadeStar",
};

export const PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS = {
  Aurora: {
    technology: "ProductTechAurora",
    description: "ProductTechDescriptionAurora",
  },
  Meteor: {
    technology: "ProductTechMeteor",
    description: "ProductTechDescriptionMeteor",
  },
  Comet: {
    technology: "ProductTechComet",
    description: "ProductTechDescriptionComet",
  },
  ShadeStar: {
    technology: "ProductTechShadeStar",
    description: "ProductTechDescriptionShadeStar",
  },
  Neptune: {
    technology: "ProductTechNeptune",
    description: "ProductTechDescriptionNeptune",
  },
  Terra: {
    technology: "ProductTechTerra",
    description: "ProductTechDescriptionTerra",
  },
};

export const PRODUCT_INTRODUCTION_DESCRIPTION = {
  Aurora: {
    title: "IntroductionTitleAurora",
    description: "IntroductionDescriptionAurora",
  },
  Comet: {
    title: "IntroductionTitleComet",
    description: "IntroductionDescriptionComet",
  },
  Meteor: {
    title: "IntroductionTitleMeteor",
    description: "IntroductionDescriptionMeteor",
  },
  ShadeStar: {
    title: "IntroductionTitleShadeStar",
    description: "IntroductionDescriptionShadeStar",
  },
  Neptune: {
    title: "IntroductionTitleNeptune",
    description: "IntroductionDescriptionNeptune",
  },
  Terra: {
    title: "IntroductionTitleTerra",
    description: "IntroductionDescriptionTerra",
  },
};

export const PRODUCT_BENEFITS_FOR_PANELS = {
  Aurora: [
    {
      benefitTitle: "benefitTitle1",
      benefitDescription: "benefitDescription1",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "benefitTitle2",
      benefitDescription: "benefitDescription2",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "benefitTitle3",
      benefitDescription: "benefitDescription3",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "benefitTitle4",
      benefitDescription: "benefitDescription4",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "benefitTitle5",
      benefitDescription: "benefitDescription5",
      benefitPicture: "leaf.svg",
    },
  ],
  Comet: [
    {
      benefitTitle: "benefitTitle1",
      benefitDescription: "benefitDescription1",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "benefitTitle2",
      benefitDescription: "benefitDescription2",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "benefitTitle3",
      benefitDescription: "benefitDescription3",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "benefitTitle4",
      benefitDescription: "benefitDescription4",
      benefitPicture: "longTerm.svg",
    },
    {
      benefitTitle: "benefitTitle5",
      benefitDescription: "benefitDescription5",
      benefitPicture: "leaf.svg",
    },
  ],
  Meteor: [
    {
      benefitTitle: "benefitTitle1",
      benefitDescription: "benefitDescription1",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "benefitTitle2",
      benefitDescription: "benefitDescription2",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "benefitTitle3",
      benefitDescription: "benefitDescription3",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "benefitTitle4",
      benefitDescription: "benefitDescription4",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "benefitTitle5",
      benefitDescription: "benefitDescription5",
      benefitPicture: "leaf.svg",
    },
  ],
  Terra: [
    {
      benefitTitle: "benefitTitle1",
      benefitDescription: "benefitDescription1",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "benefitTitle2",
      benefitDescription: "benefitDescription2",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "benefitTitle3",
      benefitDescription: "benefitDescription3",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "benefitTitle4",
      benefitDescription: "benefitDescription4",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "benefitTitle5",
      benefitDescription: "benefitDescription5",
      benefitPicture: "leaf.svg",
    },
  ],
  Neptune: [
    {
      benefitTitle: "benefitTitle1",
      benefitDescription: "benefitDescription1",
      benefitPicture: "double.svg",
    },
    {
      benefitTitle: "benefitTitle2",
      benefitDescription: "benefitDescription2",
      benefitPicture: "heat.svg",
    },
    {
      benefitTitle: "benefitTitle3",
      benefitDescription: "benefitDescription3",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "benefitTitle4",
      benefitDescription: "benefitDescription4",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "benefitTitle5",
      benefitDescription: "benefitDescription5",
      benefitPicture: "leaf.svg",
    },
  ],
  ShadeStar: [
    {
      benefitTitle: "benefitTitle1",
      benefitDescription: "benefitDescription1",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "benefitTitle2",
      benefitDescription: "benefitDescription2",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "benefitTitle3",
      benefitDescription: "benefitDescription3",
      benefitPicture: "capacity.svg",
    },
    {
      benefitTitle: "benefitTitle4",
      benefitDescription: "benefitDescription4",
      benefitPicture: "costEnergy.svg",
    },
    {
      benefitTitle: "benefitTitle5",
      benefitDescription: "benefitDescription5",
      benefitPicture: "shield2.svg",
    },
  ],
};

export const PRODUCT_BENTOBOXES: ProductBentofoxes = {
  Aurora: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_d_c""e_e_f_f""e_e_f_f"] [grid-template-areas:"a_a""b_b""c_d""e_e""f_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/diffuse.png')",
        shortDescription: "Excellent Performance in Diffuse Light",
        gridArea: "a",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sizes.png')",
        shortDescription: `Size Variety: small, medium, large`,
        gridArea: "b",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Suitable for Extreme Conditions",
        gridArea: "c",
      },
      {
        type: "warranty",
        gridArea: "d",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/point.png')",
        longDescription: {
          title: "Tailored Material and Performance",
          description: "AuroraBentoDesc1",
        },
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells2.png')",
        shortDescription: "Advanced Cells: PERC and Topcon technology",
        gridArea: "f",
      },
    ],
  },
  Comet: {
    areaTemplate: `md:[grid-template-areas:"a_b_d_d""c_c_d_d""e_e_f_f""e_e_g_g"] [grid-template-areas:"a_b""c_c""d_d""e_e""f_f""g_g"]`,
    structure: [
      {
        type: "warranty",
        gridArea: "a",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Suitable for Extreme Conditions",
        gridArea: "b",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sizes2.png')",
        shortDescription: "Color Diversity: Wide range of choices",
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/nType.png')",
        shortDescription: "N-Type Heterojunction: Advanced solar technology",
        gridArea: "d",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/snow.png')",
        shortDescription:
          "Extreme Climate Suitability: Designed for harsh environments",
        gridArea: "e",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/lowLight.png')",
        shortDescription:
          "Low-Light Performance: High output in dim conditions",
        gridArea: "f",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/temperature.png')",
        shortDescription: "Temperature Stability: Very low coefficient",
        gridArea: "g",
      },
    ],
  },
  Meteor: {
    areaTemplate: `md:[grid-template-areas:"b_b_f_f""b_b_f_f""a_a_c_d""a_a_e_e"] [grid-template-areas:"b_b""f_f""a_a""e_e""c_d"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/topCon.png')",
        shortDescription: "TOPCon N-Type: Superior efficiency technology",
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/panels2.png')",
        longDescription: {
          title: "Broad Customization",
          description: "MeteorBentoDesc1",
        },
        gridArea: "f",
      },
      {
        type: "warranty",
        gridArea: "c",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Ideal for varied weather conditions",
        gridArea: "d",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/frame.png')",
        shortDescription: "Different Frame Colors",
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/performance.png')",
        shortDescription:
          "Resilient Performance: Low degradation, high durability",
        gridArea: "b",
      },
    ],
  },
  Terra: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_b_b""c_c_d_d""e_f_d_d"] [grid-template-areas:"a_a""b_b""c_c""d_d""e_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/capture.png')",
        shortDescription: "Bifacial Efficiency: Optimal energy capture",
        gridArea: "a",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/flexibility.png')",
        shortDescription:
          "Application Flexibility: Ideal for various installations",
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/reliability.png')",
        longDescription: {
          title: "Long-Term Reliability",
          description: "TerraBentoDesc1",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/edgeEfficiency1.png')",
        shortDescription: "N-Type TOPCon Tech: Cutting-edge efficiency",
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },

      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Ideal for varied weather conditions",
        gridArea: "f",
      },
    ],
  },
  Neptune: {
    areaTemplate: `md:[grid-template-areas:"c_c_a_a""c_c_a_a""e_f_b_b""d_d_b_b"] [grid-template-areas:"c_c""a_a""e_f""b_b""d_d"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/neptuneFuture.png')",
        shortDescription: "Neptune: The Future of Hybrid Solar Energy",
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/electricity.png')",
        longDescription: {
          title: "Electricity and Heat production",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/edgeEfficiency.png')",
        longDescription: {
          title: "Around 70% combined Efficiency",
          description: "NeptuneBentoDesc1",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/benefit.png')",
        shortDescription: "Economic Benefit: Low Long-Term LCOE",
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },

      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Versatile Use: Effective in multiple applications",
        gridArea: "f",
      },
    ],
  },
  ShadeStar: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_b_b""c_c_d_d""c_c_e_f"] [grid-template-areas:"a_a""b_b""c_c""d_d""e_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/smartTech.png')",
        shortDescription: "Smart Technology: Advanced shade resistance",
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/resilence.png')",
        longDescription: {
          title: "Shade Resilience",
          description: "ShadeStarBentoDesc1",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/rooftop.png')",
        longDescription: {
          title: "Rooftop Optimization",
          description: "ShadeStarBentoDesc2",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sustainable.png')",
        shortDescription: "Sustainable Solution: Eco-friendly design",
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Economic Performance: Low LCOE",
        gridArea: "f",
      },
    ],
  },
};

export const PRODUCT_CONCLUSION_FOR_PANELS = {
  Aurora: `ConclusionAurora`,
  Meteor: `ConclusionMeteor`,
  Comet: `ConclusionComet`,
  Terra: `ConclusionTerra`,
  ShadeStar: `ConclusionShadeStar`,
  Neptune: `ConclusionNeptune`,
};

export const PRODUCT_CONCLUSION_TABLE_HEADERS = [
  `moduleName`,
  `cellType`,
  `moduleDesign`,
  `powerRangeW`,
  `moduleColor`,
  `frameColor`,
  `datasheets`,
  ``,
];

export const PRODUCT_CONCLUSION_TABLE_BODY = {
  Aurora: {
    modules: [
      {
        techName: "Aurora",
        model: "AE×××ME-132",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "640-660",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2383",
          width: "1302",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_ME-132_640W-660W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-144",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "530-550",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2278",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-144_530W-550W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-132",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "485-505",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2094",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "Datasheet",
          //   link: "",
          //   icon: "/images/option/download.svg",
          // },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-120",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "440-460",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1902",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-120_440W-460W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-108",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-415",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-108_395W-415W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××ME-132BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "640-660",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2383",
          width: "1302",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_ME-132BD_640W-660W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-144BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "530-550",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2278",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-144BD_530W-550W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-132BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "485-505",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2094",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-132BD_485W-505W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-120BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "440-460",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1902",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-120BD_440W-460W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-108BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "395-415",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-108BD_395W-415W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-132E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "485-505",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2094",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-132E_485W-505W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-120E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "440-460",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1902",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-120E_440W-460W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Aurora",
        model: "AE×××MD-108E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-415",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Aurora/AE_MD-108E_395W-415W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
    ],
  },
  Comet: {
    modules: [
      {
        techName: "Comet",
        model: "AE×××TME-132BDS",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "680-700",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2383",
          width: "1302",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Comet/AE_TME-132BDS_680W-700W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Comet",
        model: "AExxxTMD-144BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "570-590",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "2278",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "Datasheet",
          //   link: "",
          //   icon: "/images/option/download.svg",
          // },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Comet",
        model: "AExxxTMD-120BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "480-500",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1902",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "Datasheet",
          //   link: "",
          //   icon: "/images/option/download.svg",
          // },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Comet",
        model: "AExxxTMD-108BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "420-440",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: "Agri-Voltaics",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "Datasheet",
          //   link: "",
          //   icon: "/images/option/download.svg",
          // },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
    ],
  },
  Terra: {
    modules: [
      {
        techName: "Terra",
        model: "AE×××CMD-L132BD",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "505-525",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Snow Resistant",
        moduleDimension: {
          length: "1070",
          width: "2235",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Terra/AE_CMD-L132BD_505W-525W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
    ],
  },
  ShadeStar: {
    modules: [
      {
        techName: "ShadeStar",
        model: "AE×××SMB-60",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "320-335",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Shade Resistant",
        moduleDimension: {
          length: "1690",
          width: "996",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/ShadeStar/AE_SMB-60_320W-335W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "ShadeStar",
        model: "AE×××SMD-108E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-410",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: "Shade Resistant",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/ShadeStar/AE_SMD-108E_395W-410W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
    ],
  },
  Neptune: {
    modules: [
      {
        techName: "Neptune",
        model: "AE×××PV-120",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "370-380",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "PV-Thermal",
        moduleDimension: {
          length: "1755",
          width: "1038",
          height: "35",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Neptune/AE_PV-380WtAYThermal-964W-5.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
    ],
  },
  Meteor: {
    modules: [
      {
        techName: "Meteor",
        model: "AE×××CMD-108BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "420-440",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-108BDS_420W-440W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-120BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "465-485",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "1902",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-120BDS_465W-485W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-144BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "560-580",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "2278",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-144BDS_560W-580W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-108BDE",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "415-435",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-108BDE_415W-435W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-108",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "420-440",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Carport",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-108_420W-440W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-120",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "465-485",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Carport",
        moduleDimension: {
          length: "1902",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-120_465W-485W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-144",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "560-580",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: "Carport",
        moduleDimension: {
          length: "2278",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-144_560W-580W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMD-108E",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "415-435",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: "Carport",
        moduleDimension: {
          length: "1721",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CMD-108E_415W-435W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CME-132",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "680-700",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: "Carport",
        moduleDimension: {
          length: "2383",
          width: "1302",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CME-132_680W-700W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CME-132BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "680-700",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "2383",
          width: "1302",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "Datasheet",
            link: "/documents/solar_panels/Meteor/AE_CME-132BDS_680W-700W_Ver24.1.1.pdf",
            icon: "/images/option/download.svg",
          },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMER-132BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "600-620",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "2383",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "Datasheet",
          //   link: "",
          //   icon: "/images/option/download.svg",
          // },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
      {
        techName: "Meteor",
        model: "AE×××CMDR-120BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "480-500",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: "Carport",
        moduleDimension: {
          length: "2077",
          width: "1133",
          height: "30",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "Datasheet",
          //   link: "",
          //   icon: "/images/option/download.svg",
          // },
          // {
          //   tooltip: "certificate",
          //   link: "",
          //   icon: "/images/option/award.svg",
          // },
          // {
          //   tooltip: "warranty",
          //   link: "",
          //   icon: "/images/option/shield.svg",
          // },
        ],
      },
    ],
  },
};

export const PRODUCTS_SEQUENCE_ANIMATION_TEXT_NEPTUNE = {
  title: "SequenceAnimationTitle7",
  description: "SequenceAnimationDescription7",
};
