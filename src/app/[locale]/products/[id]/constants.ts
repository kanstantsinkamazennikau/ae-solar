import { Model } from "@/app/[locale]/context/constructorContext";
import { ProductBentofoxes } from "@/app/[locale]/products/[id]/components/Customization/types";

export const PRODUCT_NAVIGATION = [
  {
    title: "Introduction",
    link: "introduction",
    position: "start",
  },
  {
    title: "Benefits",
    link: "benefits",
    position: "start",
  },
  {
    title: "Construction",
    link: "construction",
    position: "start",
  },
  {
    title: "Conclusion",
    link: "conclusion",
    position: "center",
  },
];
export const PRODUCT_OVERVIEW = "Overview:";
export const PRODUCT_PANEL_TITLES = {
  Aurora:
    "Embracing the Light of the Sun: Passivated Emitter and Rear Cell (PERC) Technology for Superior Solar Modules",
  Comet:
    "Harnessing the Power of the Sun: Heterojunction Technology (HJT) for Advanced Solar Modules",
  Meteor:
    "Unleashing the Potential of the Sun: Tunnel Oxide Passivated Contact (TOPCon) Technology for High-Performance Solar Modules",
  Terra:
    "Harnessing the Power of the Sun: Innovative Solar Applications for Agriculture, Noise Barriers, and Fencing",
  Neptune:
    "Maximizing Solar Power Efficiency: Harnessing Photovoltaic Thermal (PVT) Hybrid Technology for Enhanced Solar Modules",
  ShadeStar:
    "Tackling Shadows: Smart Cell Technology for Innovative Solar Modules",
};
export const PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS = {
  Aurora: {
    technology: `PERC: The Solar Tech Vanguard`,
    description: `PERC is a cutting-edge evolution in photovoltaic technology, elevating the power and efficiency of conventional solar cells. It introduces an additional layer at the back of a traditional solar cell, a passivation layer that enhances energy conversion by capturing light that would otherwise be wasted. 
    This ingenious structure optimizes the cell's performance, offering high conversion efficiency beyond the reach of ordinary solar cells.`,
  },
  Meteor: {
    technology: `Unfolding TOPCon`,
    description: `TOPCon is an innovative leap in photovoltaics, bridging the gap between the limits of conventional solar cells and the energy-rich potential of the Sun. 
    This technology deploys a thin layer of passivating material, such as silicon dioxide or aluminum oxide, on the crystalline silicon (c-Si) wafer, followed by a highly-doped polycrystalline silicon layer. This ingenious setup greatly enhances the performance and efficiency of the solar cell.`,
  },
  Comet: {
    technology: `Unfolding TOPCon`,
    description: `Our earth's most abundant, renewable, and free energy source lies in our very own star - the Sun. Solar energy is clean, green, and environmentally friendly. But how do we best capture this bountiful resource? The answer lies in advanced solar technologies. One such cutting-edge technology is Heterojunction Technology (HJT).`,
  },
  ShadeStar: {
    technology: `Smart Cell: Shining Light on the Dark`,
    description: `Smart Cell is an inventive solution in the photovoltaic technology realm that prioritizes power consistency and resilience under partially shaded conditions. 
    By incorporating a bypass diode for each individual solar cell and three additional bypass diodes in the junction box, Smart Cell modules are designed to withstand partial shading without any substantial power loss.`,
  },
  Neptune: {
    technology: `PVT Hybrid Technology: Unleashing Dual Efficiency`,
    description: `The brilliance of PVT Hybrid technology lies in its twin-function approach, combining photovoltaic (PV) and thermal elements in a single module. This ingenious technology harnesses sunlight for electricity generation and uses residual heat for thermal applications, such as space heating or water warming. 
    It signifies a new dawn in the realm of solar energy, offering superior performance that far outstrips conventional solar modules.`,
  },
  Terra: {
    technology: `Agrivoltaics—Cultivating Energy`,
    description: `Agrivoltaics, a fusion of agriculture and photovoltaics, is a game-changing solution that allows both farming and power generation to co-exist harmoniously. 
    Our innovative agrivoltaic design not only increases land use efficiency but also offers new revenue opportunities for farmers and landowners, merging food production with clean energy generation. `,
  },
};
export const PRODUCT_INTRODUCTION = "Introduction";
export const PRODUCT_INTRODUCTION_DESCRIPTION = {
  Aurora: {
    title: "Diverse and Dynamic Solar Solutions",
    description:
      "As we forge ahead into a future where sustainable energy is crucial, we turn our gaze towards the vast, renewable power source in our cosmos—the Sun. Capturing solar energy is a clean, eco-friendly, and sustainable solution. The key to making the most of this inexhaustible energy lies in leveraging innovative solar technologies. One such breakthrough technology is Passivated Emitter and Rear Cell (PERC).",
  },
  Comet: {
    title: "Leading Efficiency, Whatever the Weather",
    description:
      "Our earth's most abundant, renewable, and free energy source lies in our very own star—the Sun. Solar energy is clean, green, and environmentally friendly. But how do we best capture this bountiful resource? The answer lies in advanced solar technologies. One such cutting-edge technology is Heterojunction Technology (HJT).",
  },
  Meteor: {
    title: "Efficiency and Durability in Harmony",
    description:
      "The Sun—an inexhaustible, abundant, and cost-free source of energy, continually showers our planet with its potent rays. The art of harnessing this rich energy source in an eco-friendly and efficient way lies in the advancements in solar technology. One such breakthrough that is gaining ground is Tunnel Oxide Passivated Contact (TOPCon) technology. ",
  },
  ShadeStar: {
    title: "Smart Energy for Every Roof",
    description:
      "The vast, endless energy of our sun provides an unparalleled renewable power source. It's clean, it's green, and most importantly, it's sustainable. But harnessing this infinite energy is not without its challenges. One such challenge is the impact of shading. So how do we overcome this obstacle? The key lies in a novel technology called Smart Cell Technology. ",
  },
  Neptune: {
    title: "The Future of Hybrid Solar Energy",
    description:
      "The Sun, our mighty celestial torchbearer, is a source of energy beyond measure. It bestows upon us an immense wealth of renewable, eco-friendly power. Tapping into this vast potential necessitates the use of innovative solar technologies. And standing at the forefront of these pioneering solutions is Photovoltaic Thermal (PVT) Hybrid Technology.",
  },
  Terra: {
    title: "Adaptable Power for Every Environment",
    description:
      "The sun, a colossal sphere of hot plasma, is the most abundant and reliable energy source for our planet. With its capacity to provide clean, sustainable, and eco-friendly energy, solar power is the future of global energy needs. But how do we optimize the extraction of this bountiful resource? The answer lies in the innovation of solar applications. We present three cutting-edge solar technologies: Agrivoltaics, Photovoltaic Noise Barriers (PVNBs), and Solar Fencing.",
  },
};
export const PRODUCT_BENEFITS = "Benefits";
export const PRODUCT_WHAT_ARE_ITS = "What Are Its ";
export const PRODUCTS_BEST_FEATURES = "Best Features";

export const PRODUCT_BENEFITS_FOR_PANELS = {
  Aurora: [
    {
      benefitTitle: "High Efficiency",
      benefitDescription:
        "With a superior temperature coefficient, PERC solar cells offer enhanced electricity production even in regions with high ambient temperatures, making them a power-efficient solution.",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "Excellent Performance in Diffuse Light",
      benefitDescription:
        "PERC solar modules are designed to perform exceptionally well in diffused light conditions, maximizing energy output even on overcast days or when the sun is low.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Lower Light-Induced Degradation (LID)",
      benefitDescription:
        "Unlike conventional PV cells, PERC modules experience significantly lower LID, ensuring a prolonged peak performance lifespan and better returns over time.",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "Reduced Power Loss",
      benefitDescription:
        "The unique passivation layer in PERC cells minimizes the recombination of electrons, reducing power loss, and enhancing overall cell efficiency.",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "Due to their high efficiency, PERC modules require less space to produce the same amount of power as traditional modules, contributing to a more sustainable and greener environment.",
      benefitPicture: "leaf.svg",
    },
  ],
  Comet: [
    {
      benefitTitle: "High Efficiency",
      benefitDescription:
        "HJT solar cells are recognized for their outstanding efficiency. They provide an excellent temperature coefficient, making them suitable for regions with high ambient temperatures. This means more electricity production, even on hot sunny days.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Superior Performance in Shaded Conditions",
      benefitDescription:
        "HJT solar modules perform exceptionally well under shaded conditions. Thanks to their superior bifaciality, they can absorb sunlight from both sides, maximizing energy output. ",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "Low Light Performance",
      benefitDescription:
        "Unlike conventional PV cells, HJT modules continue to perform optimally even under low light conditions. So, whether it's an overcast day or dawn/dusk, your solar power generation doesn't need to pause. ",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Long-Term Stability",
      benefitDescription:
        "The amalgamation of crystalline and amorphous silicon gives HJT modules long-term stability, making them an investment that stands the test of time. ",
      benefitPicture: "longTerm.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "HJT modules require less energy for manufacturing than conventional solar cells, making them a greener alternative.",
      benefitPicture: "leaf.svg",
    },
  ],
  Meteor: [
    {
      benefitTitle: "Outstanding Efficiency",
      benefitDescription:
        "TOPCon solar cells are recognized for their superior efficiency. They are designed to minimize power loss, resulting in a high conversion efficiency that outshines traditional solar cells.",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "Excellent Low-Light Performance",
      benefitDescription:
        "With TOPCon modules, a cloudy day doesn't spell the end of power generation. They continue to function efficiently even in suboptimal light conditions, making them a reliable choice in varying weather. ",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Robust Temperature Coefficient",
      benefitDescription:
        "TOPCon modules offer an impressive temperature coefficient, maintaining high efficiency even in high-temperature zones. Thus, your solar power generation remains optimal even on sweltering days. ",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "Enhanced Durability",
      benefitDescription:
        "The passivated contact layer in TOPCon modules ensures a robust design and improved durability. This technology boasts high resistance to degradation, ensuring your investment is future-proof.",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "The manufacturing process of TOPCon modules is energy-efficient, contributing to a smaller carbon footprint compared to conventional solar cells.",
      benefitPicture: "leaf.svg",
    },
  ],
  Terra: [
    {
      benefitTitle: "High Efficiency",
      benefitDescription:
        "With a superior temperature coefficient, PERC solar cells offer enhanced electricity production even in regions with high ambient temperatures, making them a power-efficient solution.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Excellent Performance in Diffuse Light",
      benefitDescription:
        "PERC solar modules are designed to perform exceptionally well in diffused light conditions, maximizing energy output even on overcast days or when the sun is low.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Lower Light-Induced Degradation (LID)",
      benefitDescription:
        "Unlike conventional PV cells, PERC modules experience significantly lower LID, ensuring a prolonged peak performance lifespan and better returns over time.",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "Reduced Power Loss",
      benefitDescription:
        "The unique passivation layer in PERC cells minimizes the recombination of electrons, reducing power loss, and enhancing overall cell efficiency.",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "Due to their high efficiency, PERC modules require less space to produce the same amount of power as traditional modules, contributing to a more sustainable and greener environment.",
      benefitPicture: "leaf.svg",
    },
  ],
  Neptune: [
    {
      benefitTitle: "Double Duty, Double Gain",
      benefitDescription:
        "The PVT system is a two-in-one solution, converting sunlight into electricity while simultaneously capturing heat. This dual action maximizes energy yield and promotes efficiency.",
      benefitPicture: "double.svg",
    },
    {
      benefitTitle: "Optimal Utilization of Heat",
      benefitDescription:
        "Unlike standard PV cells, which lose efficiency as they heat up, PVT modules make productive use of this heat, turning a potential disadvantage into a powerful benefit.",
      benefitPicture: "heat.svg",
    },
    {
      benefitTitle: "High Efficiency in Various Climates",
      benefitDescription:
        "Regardless of whether it's a chilly winter day or a sweltering summer afternoon, PVT modules deliver consistent performance, thanks to their unique ability to utilize both solar and thermal energy.",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "Longevity and Durability",
      benefitDescription:
        "The cooling effect of the thermal system on the PV cells in a PVT module enhances the lifespan and performance of the system, making it a reliable and long-term investment.",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "Eco-Conscious",
      benefitDescription:
        "With an efficient design that reduces waste heat and makes full use of solar energy, PVT modules embody the principles of sustainable and green energy.",
      benefitPicture: "leaf.svg",
    },
  ],
  ShadeStar: [
    {
      benefitTitle: "Impressive Shade Resistance",
      benefitDescription:
        "Smart Cell solar modules offer extraordinary resistance to partial shading. Even when just 5% of the module is shaded, Smart Cell modules prevent the power loss which is commonplace in other PV systems.",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "Superior Energy Output",
      benefitDescription:
        "Smart Cell modules shine in their ability to deliver high power output even under challenging conditions. They can achieve up to 80% higher power production under partial shading conditions.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Increased Installation Capacity",
      benefitDescription:
        "With the Smart Cell technology, you can install more modules on limited rooftop areas. This means you get more energy yield under partial shading conditions.",
      benefitPicture: "capacity.svg",
    },
    {
      benefitTitle: "Lower Levelized Cost of Energy (LCOE)",
      benefitDescription:
        "By enhancing the energy output per total area, Smart Cell modules not only maximize your energy production but also significantly reduce the levelized cost of energy.",
      benefitPicture: "costEnergy.svg",
    },
    {
      benefitTitle: "Unmatched Durability",
      benefitDescription:
        "Through extensive testing, Smart Cell modules have shown no power loss even after 10,000 cycles of negative/positive bias switching.",
      benefitPicture: "shield2.svg",
    },
  ],
};
export const PRODUCT_CREATE_YOUR = "Create Your";
export const PRODUCT_OWN_SPACE = "Own Space";

export const PRODUCT_CONCLUSION = "Conclusion";
export const PRODUCT_CHOOSE_READY_MODULES = `or 
Choose ready-made Modules`;
export const PRODUCT_CONCLUSION_FOR_PANELS = {
  Aurora: `At AESOLAR, we are unwavering in our commitment to a sustainable future. Our PERC solar modules represent more than just a product; they symbolize our devotion to advanced technology, exceptional quality, and a cleaner, greener world. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
  Meteor: `At GreenSolar, we are dedicated to propelling a sustainable future. Our TOPCon solar modules symbolize our commitment to ground-breaking technology, exceptional quality, and the promise of a cleaner, brighter world. Stand with us in this solar revolution, where we harness the Sun's power with unrivaled efficiency using TOPCon. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
  Comet: `At AESOLAR, we are committed to powering a sustainable future. Our HJT solar modules are not just a product, but an embodiment of our dedication to superior technology, exceptional quality, and the promise of a cleaner, greener world. Join us in this solar revolution, where we capture the sun's power in the most efficient way possible with HJT. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
  Terra: `At AESOLAR, we strive for a future where clean, renewable energy is accessible to all. Our agrivoltaic systems, photovoltaic noise barriers, and solar fences represent our commitment to innovative design, superior quality, and sustainable living. Join us in this solar revolution, where we capture the sun's power in the most creative and efficient way possible. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
  ShadeStar: `We're pioneering a brighter, more sustainable future. Our Smart Cell solar modules embody our commitment to cutting-edge technology, superior quality, and sustainable energy solutions. Be a part of this revolution and shine a light on the shadows with our Smart Cell technology. Let's harness the sun's power more intelligently and resiliently, bringing light into every corner of our world. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
  Neptune: `We are unwavering in our commitment to a sustainable, energy-efficient future. Our PVT Hybrid solar modules symbolize not just a product, but our dedication to pioneering technology, superior quality, and the pledge of a cleaner, more sustainable world. Join us in this solar energy transformation, where we unlock the Sun's power in the most comprehensive way possible with PVT Hybrid technology. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
};
export const PRODUCT_DEFAULT_MODEL_PARAMS = {
  Aurora: {
    model: "Aurora",
    solarCellTechnology: "Gallium-doped Mono c-Si PERC, Half-cut cells",
    moduleSpecification: "AE650ME-132-650Wp",
    moduleColor: "Transparent / Black / White",
    backCover: "2.0 mm, high transmission solar glass, tempered",
    frameColor: "White Backsheet",
    moduleDimension: {
      length: "1302",
      width: "2383",
    },
    powerRange: {
      from: "640",
      to: "660",
    },
    applications: ["PV-Thermal"],
  },
  Comet: {
    model: "Comet",
    solarCellTechnology: "Silicon Heterojunction Technology, Half-cut cells",
    moduleSpecification: "AE685TME-132BDS-513Wp",
    moduleColor: "Transparent / Black / White",
    backCover: "2.0 mm white glazed glass, tempered",
    frameColor: "Backsheet",
    moduleDimension: {
      length: "1302",
      width: "2383",
    },
    powerRange: {
      from: "510",
      to: "525",
    },
    applications: ["PV-Thermal"],
  },
  Meteor: {
    model: "Meteor",
    solarCellTechnology: "n-Type TOPCon Technology, Half-cut cells",
    moduleSpecification: "AE425CMD-108-335.3Wp",
    moduleColor: "Transparent / Black / White",
    backCover: "White Backsheet",
    frameColor: "Backsheet",
    moduleDimension: {
      length: "1721",
      width: "1133",
    },
    powerRange: {
      from: "420",
      to: "440",
    },
    applications: ["PV-Thermal"],
  },
  Terra: {
    model: "Terra",
    solarCellTechnology: "Gallium-doped Mono c-Si PERC, Half-cut cells",
    moduleSpecification: "AE495MD-L132BD-377Wp",
    moduleColor: "Transparent / Black / White",
    backCover: "2.0 mm, high transmission solar glass, tempered",
    frameColor: "Backsheet",
    moduleDimension: {
      length: "2235",
      width: "1070",
    },
    powerRange: {
      from: "370",
      to: "377",
    },
    applications: ["Agri-Voltsics"],
  },
  ShadeStar: {
    model: "ShadeStar",
    solarCellTechnology: "Mono c-Si PERC, Full cells",
    moduleSpecification: "AE190SMB-395Wp",
    moduleColor: "Transparent / Black / White",
    backCover: "2.0 mm, high transmission solar glass, tempered",
    frameColor: "Backsheet",
    moduleDimension: {
      length: "1721",
      width: "1133",
    },
    powerRange: {
      from: "395",
      to: "410",
    },
    applications: ["Shade Resistant"],
  },
  Neptune: {
    model: "Neptune",
    solarCellTechnology: "Gallium-doped Mono c-Si PERC, Half-cut cells",
    moduleSpecification: "",
    moduleColor: "Transparent / Black / White",
    backCover: "White Backsheet",
    frameColor: "Backsheet",
    moduleDimension: {
      length: "1755",
      width: "1038",
    },
    powerRange: {
      from: "370",
      to: "380",
    },
    applications: ["PV-Thermal"],
  },
};

export const PRODUCT_BENTOBOXES: ProductBentofoxes = {
  Aurora: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_d_c""e_e_f_f""e_e_f_f"] [grid-template-areas:"a_a""b_b""c_d""e_e""f_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/houseFog.png')",
        shortDescription: `Excellent Performance
        in Diffuse Light`,
        gridArea: "a",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sizes.png')",
        shortDescription: `Size Variety: 
        small, medium, large`,
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
          title: `Tailored Material 
              and Power`,
        },
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells.png')",
        shortDescription: `Advanced Cells:
        PERC and Topcon technology`,
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
        imageUrl: "url('/images/products/bentobox/frame.png')",
        shortDescription: `Color Diversity:
        Wide range of choices `,
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells.png')",
        shortDescription: `n-Type Heterojunction:
        Advanced solar technology`,
        gridArea: "d",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/snow.png')",
        shortDescription: `Extreme Climate Suitability:
        Designed for harsh environments`,
        gridArea: "e",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/lowLight.png')",
        shortDescription: `Low-Light Performance:
        High output in dim conditions`,
        gridArea: "f",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/frame.png')",
        shortDescription: `Temperature Stability:
        Very low coefficient`,
        gridArea: "g",
      },
    ],
  },
  Meteor: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_b_b""c_d_f_f""e_e_f_f"] [grid-template-areas:"a_a""b_b""c_d""e_e""f_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells.png')",
        shortDescription: `TOPCon N-Type:
        Superior efficiency technology `,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/panels.png')",
        longDescription: {
          title: `Broad 
          Customization`,
          description:
            "Find the perfect color combination to complement your content with interchangeable backdrops and frames.",
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
        shortDescription: `Different
        Frame Colors`,
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/performance.png')",
        shortDescription: `Resilient Performance:
        Low degradation, high durability`,
        gridArea: "b",
      },
    ],
  },
  Terra: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_b_b""c_c_d_d""e_f_d_d"] [grid-template-areas:"a_a""b_b""c_c""d_d""e_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/efficiency.png')",
        shortDescription: `Bifacial Efficiency:
        Optimal energy capture`,
        gridArea: "a",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/flexibility.png')",
        shortDescription: `Application Flexibility:
        Ideal for various installations`,
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/reliability.png')",
        longDescription: {
          title: `Long-Term Reliability`,
          description:
            "Count on consistent performance and lasting durability with minimal degradation, guaranteeing reliable operation for the long haul.",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells.png')",
        shortDescription: `n-Type TOPCon Tech:
        Cutting-edge efficiency`,
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
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_b_b""c_c_d_d""c_c_e_f"] [grid-template-areas:"a_a""b_b""c_c""d_d""e_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells.png')",
        shortDescription: `Neptune: The Future of
        Hybrid Solar Energy`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/electricity.png')",
        longDescription: {
          title: `Electricity and thermal production`,
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/material.png')",
        longDescription: {
          title: `About 70%
          combined Efficiency`,
          description:
            "Unlock superior efficiency with our product boasting an impressive combined efficiency of approximately 70%, ensuring optimal performance and energy output.",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/frame.png')",
        shortDescription: `Economic Benefit:
        Long-term low LCOE`,
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },

      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: `Versatile Use: Effective in various climates`,
        gridArea: "f",
      },
    ],
  },
  ShadeStar: {
    areaTemplate: `md:[grid-template-areas:"a_a_b_b""a_a_b_b""c_c_d_d""c_c_e_f"] [grid-template-areas:"a_a""b_b""c_c""d_d""e_f"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells.png')",
        shortDescription: `Smart Technology:
        Advanced shade resistance`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/resilent.png')",
        longDescription: {
          title: `Shade Resilience`,
          description:
            "Ensure continuous high output even in shaded conditions with our product's resilient design, guaranteeing consistent performance regardless of shading.",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/rooftop.png')",
        longDescription: {
          title: `Rooftop Optimization`,
          description:
            "Maximize rooftop space with our product's optimized design, ideal for compact areas and ensuring efficient utilization of limited space.",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/frame.png')",
        shortDescription: `Sustainable Solution:
        Eco-friendly design`,
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: `Economic Performance:
        Low LCOE`,
        gridArea: "f",
      },
    ],
  },
};
export const PRODUCT_CONCLUSION_TABLE_ADD = "Add";
export const PRODUCT_CONCLUSION_TABLE_HEADERS = [
  `Module
  Name`,
  `Cell 
  type`,
  `Module 
  design`,
  `Power 
  range, W`,
  `Module
  Color`,
  `Frame
  Color`,
  `Links`,
  ``,
];
export const PRODUCT_CONCLUSION_TABLE_BODY = {
  Aurora: {
    modules: [
      {
        model: "AE×××ME-132",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "640-660",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-144",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "530-550",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-132",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "485-505",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2094",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-120",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "440-460",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-108",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-415",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××ME-132BD",
        cellType: "p type PERC",
        moduleDesign: "Bifacial",
        powerRange: "640-660",
        moduleColor: "Transparent",
        frameColor: "Silver",
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-144BD",
        cellType: "p type PERC",
        moduleDesign: "Bifacial",
        powerRange: "530-550",
        moduleColor: "Transparent",
        frameColor: "Silver",
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-132BD",
        cellType: "p type PERC",
        moduleDesign: "Bifacial",
        powerRange: "485-505",
        moduleColor: "Transparent",
        frameColor: "Silver",
        moduleDimension: {
          length: "2094",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-120BD",
        cellType: "p type PERC",
        moduleDesign: "Bifacial",
        powerRange: "440-460",
        moduleColor: "Transparent",
        frameColor: "Silver",
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-108BD",
        cellType: "p type PERC",
        moduleDesign: "Bifacial",
        powerRange: "395-415",
        moduleColor: "Transparent",
        frameColor: "Silver",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-132E",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "485-505",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "2094",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-120E",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "440-460",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××MD-108E",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-415",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
    ],
  },
  Comet: {
    modules: [
      {
        model: "AE×××TME-132BDS",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "680-700",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AExxxTMD-144BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "570-590",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AExxxTMD-120BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "480-500",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AExxxTMD-108BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "420-440",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
    ],
  },
  Terra: {
    modules: [
      {
        model: "AE×××CMD-L132BD",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "505-525",
        moduleColor: "Transparent",
        frameColor: "Silver",
        moduleDimension: {
          length: "1070",
          width: "2235",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
    ],
  },
  ShadeStar: {
    modules: [
      {
        model: "AE×××SMB-60",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "320-335",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1690",
          width: "996",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××SMD-108E",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-410",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
    ],
  },
  Neptune: {
    modules: [
      {
        model: "AE×××PV-120",
        cellType: "p type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "370-380",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1755",
          width: "1038",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
    ],
  },
  Meteor: {
    modules: [
      {
        model: "AE×××CMD-108BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "420-440",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-120BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "465-485",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-144BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "560-580",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-108BDE",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "415-435",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-108",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "420-440",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-120",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "465-485",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-144",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "560-580",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMD-108E",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "415-435",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CME-132",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "680-700",
        moduleColor: "Black",
        frameColor: "Black",
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CME-132BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "680-700",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMER-132BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "600-620",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2383",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
      {
        model: "AE×××CMDR-120BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "480-500",
        moduleColor: "White",
        frameColor: "Silver",
        moduleDimension: {
          length: "2077",
          width: "1133",
        },
        links: [
          {
            tooltip: "documents",
            link: "",
            icon: "/images/option/document.svg",
          },
          {
            tooltip: "datasheet",
            link: "",
            icon: "/images/option/download.svg",
          },
          {
            tooltip: "certificate",
            link: "",
            icon: "/images/option/award.svg",
          },
          {
            tooltip: "warranty",
            link: "",
            icon: "/images/option/shield.svg",
          },
        ],
      },
    ],
  },
};
