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
    position: "start",
  },
];
export const PRODUCT_OVERVIEW = "Overview:";
export const PRODUCT_PANEL_TITLES = {
  Aurora:
    "Embracing the light of the sun: Passivated Emitter and Rear Cell (PERC) Technology for Superior Solar Modules",
  Comet:
    "Harnessing the power of the sun: Heterojunction Technology (HJT) for advanced solar modules",
  Meteor:
    "Unleashing the potential of the sun: Tunnel Oxide Passivated Contact (TOPCon) Technology for high-performance solar modules",
  Terra: "Harnessing the sun: Solar solutions for everyone",
  Neptune:
    "Maximizing solar power efficiency: Harnessing Photovoltaic Thermal (PVT) Hybrid Technology for Improved Solar Modules",
  ShadeStar:
    "Fighting Shadows: Smart cell technology for innovative solar modules",
};
export const PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS = {
  Aurora: {
    technology: `PERC: Leading Solar Technology`,
    description: `PERC is a cutting-edge development in photovoltaic technology that boosts the performance and efficiency of conventional solar cells. It introduces an additional layer on the back of a conventional solar cell, a passivation layer, which increases energy conversion by capturing light that would otherwise be wasted. 
    This ingenious structure optimizes the cell's performance and delivers high conversion efficiencies beyond the reach of conventional solar cells.`,
  },
  Meteor: {
    technology: `Unfolding TOPCon`,
    description: `TOPCon is an innovative leap forward in photovoltaics, bridging the gap between the limits of conventional solar cells and the energy-rich potential of the sun. 
    In this technology, a thin layer of passivating material such as silicon dioxide or aluminium oxide is deposited on the crystalline silicon (c-Si) wafer, followed by a highly doped polycrystalline silicon layer. This ingenious arrangement greatly improves the performance and efficiency of the solar cell.`,
  },
  Comet: {
    technology: `Unfolding TOPCon`,
    description: `Our earth's most abundant, renewable, and free energy source lies in our very own star - the sun. Solar energy is clean, green, and environmentally friendly. But how do we best capture this bountiful resource? The answer lies in advanced solar technologies. One such advanced technology is Heterojunction Technology (HJT).`,
  },
  ShadeStar: {
    technology: `Smart Cell: Light in the Dark`,
    description: `Smart Cells are an innovative solution in photovoltaic technology that prioritises performance consistency and resilience in partially shaded conditions. 
    By incorporating a bypass diode for each individual solar cell and three additional bypass diodes in the junction box, Smart Cell modules are designed to withstand partial shading without significant power loss.`,
  },
  Neptune: {
    technology: `PVT Hybrid Technology: Unleashing Dual Power`,
    description: `The brilliance of PVT hybrid technology lies in its dual-function approach, combining photovoltaic (PV) and thermal elements in a single module. This ingenious technology harnesses sunlight to generate electricity and uses residual heat for thermal applications such as space heating or hot water. 
    It represents a new dawn in solar energy, offering superior performance that far exceeds that of conventional solar panels.`,
  },
  Terra: {
    technology: `Agrivoltaics—Cultivating Energy`,
    description: `We're bringing solar power into everyday life in exciting ways, making it work for farms, cities and even around our homes. Our smart designs help make better use of land and can make money by combining things like growing crops with capturing sunlight for energy. `,
  },
};
export const PRODUCT_INTRODUCTION = "Introduction";
export const PRODUCT_INTRODUCTION_DESCRIPTION = {
  Aurora: {
    title: "Diverse and Dynamic Solar Solutions",
    description:
      "As we move into a future where sustainable energy is critical, we are turning to the vast, renewable energy source in our cosmos - the sun. Harnessing solar energy is a clean, environmentally friendly and sustainable solution. The key to harnessing this inexhaustible energy lies in the use of innovative solar technologies. One such breakthrough technology is PERC (Passivated Emitter and Rear Cell).",
  },
  Comet: {
    title: "Leading Efficiency, Whatever the Weather",
    description:
      "The most abundant, renewable and free source of energy on earth is our own star - the sun. Solar energy is clean, green and environmentally friendly. But how do we best harness this bountiful resource? The answer lies in advanced solar technologies. One such advanced technology is Heterojunction Technology (HJT).",
  },
  Meteor: {
    title: "Efficiency and Durability in Harmony",
    description:
      "The sun - an inexhaustible, abundant and free source of energy - is constantly showering our planet with its powerful rays. The art of harnessing this rich source of energy in an environmentally friendly and efficient manner lies in advances in solar technology. One such breakthrough that is gaining ground is Tunnel Oxide Passivated Contact (TOPCon) technology.",
  },
  ShadeStar: {
    title: "Smart Energy for Every Roof",
    description:
      "The vast, endless energy of our sun provides an unparalleled renewable energy source. It's clean, it's green and, most importantly, it's sustainable. But harnessing this infinite energy is not without its challenges. One such challenge is the impact of shading. So how do we overcome this obstacle? The key lies in a new technology called Smart Cell Technology.",
  },
  Neptune: {
    title: "The Future of Hybrid Solar Energy",
    description:
      "The sun, our mighty celestial torchbearer, is a source of energy beyond measure. It provides us with an immense wealth of renewable, environmentally friendly power. Harnessing this vast potential requires the use of innovative solar technologies. And at the forefront of these pioneering solutions is Photovoltaic-Thermal (PVT) Hybrid technology.",
  },
  Terra: {
    title: "Solar Power for All Uses",
    description:
      "The sun is a giant ball of energy that never runs out, giving us clean energy that's good for the planet. We're harnessing this power in five cool ways: farming with solar panels (agrivoltaics), putting solar panels on city noise barriers (PVNBs), using solar power for fencing, building large solar projects to power many homes, and creating car parks that protect cars and collect solar energy (solar carports). Each idea shows how solar power can fit into different parts of our lives, helping to build a future that's all about renewable energy.",
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
        "With a superior temperature coefficient, PERC solar cells offer improved power generation even in regions with high ambient temperatures, making them an energy-efficient solution.",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "Excellent Diffuse Light Performance",
      benefitDescription:
        "PERC solar modules are designed to perform exceptionally well in diffuse light conditions, maximizing energy output even on cloudy or low sun days.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Lower Light Induced Degradation (LID)",
      benefitDescription:
        "Unlike conventional PV cells, PERC modules experience significantly lower LID, ensuring longer peak power output and better returns over time.",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "Reduced Power Loss",
      benefitDescription:
        "The unique passivation layer in PERC cells minimizes the recombination of electrons, reducing power loss and increasing overall cell efficiency.",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "Due to their high efficiency, PERC modules require less space to produce the same amount of electricity as conventional modules, contributing to a more sustainable and environmentally friendly environment.",
      benefitPicture: "leaf.svg",
    },
  ],
  Comet: [
    {
      benefitTitle: "High Efficiency",
      benefitDescription:
        "HJT solar cells are recognized for their outstanding efficiency. They have an excellent temperature coefficient, making them suitable for regions with high ambient temperatures. This means more power generation even on hot sunny days.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Superior Performance in Shaded Areas",
      benefitDescription:
        "HJT solar modules perform exceptionally well in shaded conditions. Their superior bifocality allows them to absorb sunlight from both sides, maximizing energy output.",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "Low Light Performance",
      benefitDescription:
        "Unlike conventional PV cells, HJT modules continue to perform optimally in low light conditions. So whether it's an overcast day or dusk or dawn, your solar power generation doesn't have to pause.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Long-Term Stability",
      benefitDescription:
        "The fusion of crystalline and amorphous silicon gives HJT modules long-term stability, making them an investment that stands the test of time.",
      benefitPicture: "longTerm.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "HJT modules require less energy to produce than conventional solar cells, making them a greener alternative.",
      benefitPicture: "leaf.svg",
    },
  ],
  Meteor: [
    {
      benefitTitle: "Outstanding Efficiency",
      benefitDescription:
        "TOPCon solar cells are recognized for their outstanding efficiency. They are designed to minimise power loss, resulting in high conversion efficiencies that outperform conventional solar cells.",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "Excellent Low Light Performance",
      benefitDescription:
        "With TOPCon modules, a cloudy day doesn't mean the end of power generation. They continue to operate efficiently even in sub-optimal light conditions, making them a reliable choice in changing weather conditions.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Robust Temperature Coefficient",
      benefitDescription:
        "TOPCon modules offer an impressive temperature coefficient, maintaining high efficiency even in high temperature zones. This means that your solar power generation remains optimal even on the hottest days.",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "Enhanced Durability",
      benefitDescription:
        "The passivated contact layer in TOPCon modules ensures a robust design and improved durability. This technology is highly resistant to degradation, ensuring that your investment is future-proof.",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "The manufacturing process of TOPCon modules is energy efficient, contributing to a smaller carbon footprint compared to conventional solar cells.",
      benefitPicture: "leaf.svg",
    },
  ],
  Terra: [
    {
      benefitTitle: "High Efficiency",
      benefitDescription:
        "With a superior temperature coefficient, TOPCon solar cells offer improved power generation even in regions with high ambient temperatures, making them an energy-efficient solution.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Excellent Diffuse Light Performance",
      benefitDescription:
        "TOPCon solar modules are designed to perform exceptionally well in diffuse light conditions, maximising energy output even on cloudy days or when the sun is low.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Lower Light Induced Degradation (LID)",
      benefitDescription:
        "Unlike conventional PV cells, PERC modules exhibit significantly lower LID, ensuring longer peak power output and better returns over time.",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "Reduced Power Loss",
      benefitDescription:
        "The unique passivation layer in TOPCon cells minimises the recombination of electrons, reducing power loss and increasing overall cell efficiency.",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "Environmentally Friendly",
      benefitDescription:
        "Because of their high efficiency, TOPCon modules require less space to produce the same amount of electricity as conventional modules, contributing to a more sustainable and greener environment.",
      benefitPicture: "leaf.svg",
    },
  ],
  Neptune: [
    {
      benefitTitle: "Double Duty, Triple Gain",
      benefitDescription:
        "The PVT system is a two-in-one solution, converting sunlight into electricity and capturing heat at the same time. This dual action maximize energy yield and promotes efficiency.",
      benefitPicture: "double.svg",
    },
    {
      benefitTitle: "Getting the Most Out of the Heat",
      benefitDescription:
        "Unlike standard PV cells, which lose efficiency as they heat up, PVT modules make productive use of this heat, turning a potential disadvantage into a powerful advantage.",
      benefitPicture: "heat.svg",
    },
    {
      benefitTitle: "High Efficiency in Different Climates",
      benefitDescription:
        "Whether it's a chilly spring day or a sweltering summer afternoon, PVT modules deliver consistent performance thanks to their unique ability to harness both solar and thermal energy.",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "Longevity and Durability",
      benefitDescription:
        "The cooling effect of the thermal system on the PV cells in a PVT module increases the life and performance of the system, making it a reliable and long-term investment.",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "Environmentally Friendly ",
      benefitDescription:
        "With an efficient design that reduces waste heat and makes full use of solar energy, PVT modules embody the principles of sustainable and green energy.",
      benefitPicture: "leaf.svg",
    },
  ],
  ShadeStar: [
    {
      benefitTitle: "Impressive Shade Resistance",
      benefitDescription:
        "Smart Cell solar modules offer exceptional resistance to partial shading. Even when only 50% of the module is shaded, Smart Cell modules prevent the power loss that is common with other PV systems.",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "Superior Energy Output",
      benefitDescription:
        "Smart Cell modules excel in their ability to deliver high power output even under challenging conditions. They can achieve up to 80% higher energy production under partial shading conditions.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Increased Installation Capacity",
      benefitDescription:
        "Smart Cell technology allows you to install more modules on a limited roof area. This means you get more energy output under partial shading conditions.",
      benefitPicture: "capacity.svg",
    },
    {
      benefitTitle: "Lower Levelized Cost of Energy (LCOE)",
      benefitDescription:
        "By increasing the energy output per total area, Smart Cell modules not only maximize your energy production, but also significantly reduce the levelized cost of energy.",
      benefitPicture: "costEnergy.svg",
    },
    {
      benefitTitle: "Unmatched Durability",
      benefitDescription:
        "Through extensive testing, Smart Cell modules have shown no power loss even after 10,000 cycles of negative/positive bias switching",
      benefitPicture: "shield2.svg",
    },
  ],
};
export const PRODUCT_CREATE_YOUR = "Create Your";
export const PRODUCT_OWN_SPACE = "Own Space";

export const PRODUCT_CONCLUSION = "Conclusion";
export const PRODUCT_CHOOSE_READY_MODULES = `Choose 
 Your Ideal Product`;
export const PRODUCT_CONCLUSION_FOR_PANELS = {
  Aurora: `At AESOLAR, our commitment to a sustainable future is unwavering. Our PERC solar panels are more than just a product; they symbolize our dedication to advanced technology, exceptional quality and a cleaner, greener world. 
  We invite you to be part of this solar revolution by harnessing the power of the sun in the most efficient way possible with PERC.`,
  Meteor: `At AESOLAR, we are dedicated to driving a sustainable future. Our TOPCon solar modules symbolise our commitment to breakthrough technology, exceptional quality and the promise of a cleaner, brighter world. Join us in this solar revolution, where TOPCon harnesses the power of the sun with unrivalled efficiency. 
  We invite you to be part of this solar revolution by harnessing the power of the sun in the most efficient way possible with PERC.`,
  Comet: `At AESOLAR, we are committed to powering a sustainable future. Our HJT solar panels are not just a product, but an embodiment of our commitment to superior technology, exceptional quality and the promise of a cleaner, greener world. Join us in this solar revolution as we harness the power of the sun in the most efficient way possible with HJT. 
  We invite you to be part of this solar revolution, harnessing the power of the sun in the most efficient way possible with PERC.`,
  Terra: `At AESOLAR, we dream of a world where everyone has access to clean, renewable energy. Our innovative solutions, from solar-powered agriculture and soundproof solar barriers to eco-friendly fencing, large-scale solar projects and dual-use solar carports, demonstrate our commitment to creativity, high quality and sustainable living. This is our pledge to a brighter, greener future through the smart and efficient use of the sun's endless energy. 
  We invite you to be part of this green revolution by harnessing the power of the sun in the most effective way possible.`,
  ShadeStar: `We're pioneering a better, more sustainable future. Our Smart Cell solar modules embody our commitment to cutting-edge technology, superior quality and sustainable energy solutions. Be part of this revolution and shine a light on the shadows with our Smart Cell technology. Let's harness the power of the sun more intelligently and resiliently, bringing light to every corner of our world. 
  We invite you to be part of this solar revolution by harnessing the power of the sun in the most efficient way possible with PERC.`,
  Neptune: `Our commitment to a sustainable, energy-efficient future is unwavering. Our PVT Hybrid solar modules symbolize not just a product, but our commitment to pioneering technology, superior quality and the promise of a cleaner, more sustainable world. Join us in this solar energy transformation as we harness the power of the sun in the broadest possible way with PVT Hybrid technology. 
  We invite you to be part of this solar revolution by harnessing the power of the sun in the most efficient way.`,
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
        imageUrl: "url('/images/products/bentobox/diffuse.png')",
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
              and Performance`,
          description:
            "Customize your power solution with tailored materials and power options, ensuring precise alignment with your specific needs and preferences.",
        },
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells2.png')",
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
        imageUrl: "url('/images/products/bentobox/sizes2.png')",
        shortDescription: `Color Diversity:
        Wide range of choices`,
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/nType.png')",
        shortDescription: `N-Type Heterojunction:
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
        imageUrl: "url('/images/products/bentobox/temperature.png')",
        shortDescription: `Temperature Stability:
        Very low coefficient`,
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
        shortDescription: `TOPCon N-Type:
        Superior efficiency technology `,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/panels2.png')",
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
        imageUrl: "url('/images/products/bentobox/capture.png')",
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
            "Count on consistent performance and durability with minimal degradation, ensuring reliable operation over time.",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/edgeEfficiency1.png')",
        shortDescription: `N-Type TOPCon Tech:
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
    areaTemplate: `md:[grid-template-areas:"c_c_a_a""c_c_a_a""e_f_b_b""d_d_b_b"] [grid-template-areas:"c_c""a_a""e_f""b_b""d_d"]`,
    structure: [
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/neptuneFuture.png')",
        shortDescription: `Neptune: The Future of
        Hybrid Solar Energy`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/electricity.png')",
        longDescription: {
          title: `Electricity and Heat production`,
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/edgeEfficiency.png')",
        longDescription: {
          title: `Around 70%
          combined Efficiency`,
          description:
            "Unlock superior efficiency with our product that boasts an impressive combined efficiency of around 70%, ensuring optimum performance and energy output.",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/benefit.png')",
        shortDescription: `Economic Benefit:
        Low Long-Term LCOE`,
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },

      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: `Versatile Use: Effective in multiple applications`,
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
        shortDescription: `Smart Technology:
        Advanced shade resistance`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/resilence.png')",
        longDescription: {
          title: `Shade Resilience`,
          description:
            "Ensure continued high performance even in shaded conditions with our product's resilient design that guarantees consistent performance regardless of shade.",
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
        imageUrl: "url('/images/products/bentobox/sustainable.png')",
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
export const PRODUCT_CONCLUSION_TABLE_ADD_MOBILE = "Add To Cart";
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
  `Datasheets`,
  ``,
];

export const PRODUCT_CONCLUSION_TABLE_MOBILE_CELL_TYPE = "Cell type";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_DESIGN = "Module design";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_RANGE = "Power range, W";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_COLOR = "Module Color";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_FRAME_COLOR = "Frame Color";

export const PRODUCT_CONCLUSION_TABLE_BODY = {
  Aurora: {
    modules: [
      {
        model: "AE×××ME-132",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "640-660",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-144",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "530-550",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-132",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "485-505",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2094",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "datasheet",
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
        model: "AE×××MD-120",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "440-460",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-108",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-415",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××ME-132BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "640-660",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-144BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "530-550",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-132BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "485-505",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2094",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-120BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "440-460",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-108BD",
        cellType: "P type PERC",
        moduleDesign: "Bifacial",
        powerRange: "395-415",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-132E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "485-505",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2094",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-120E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "440-460",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××MD-108E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-415",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××TME-132BDS",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "680-700",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AExxxTMD-144BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "570-590",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "datasheet",
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
        model: "AExxxTMD-120BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "480-500",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "datasheet",
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
        model: "AExxxTMD-108BDE",
        cellType: "N type HJT",
        moduleDesign: "Bifacial",
        powerRange: "420-440",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          // {
          //   tooltip: "datasheet",
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
        model: "AE×××CMD-L132BD",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "505-525",
        moduleColor: "Transparent",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Agri-Voltaics"],
        moduleDimension: {
          length: "1070",
          width: "2235",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××SMB-60",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "320-335",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Shade Resistant"],
        moduleDimension: {
          length: "1690",
          width: "996",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××SMD-108E",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "395-410",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: ["Shade Resistant"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××PV-120",
        cellType: "P type PERC",
        moduleDesign: "Mono-facial",
        powerRange: "370-380",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["PV-Thermal"],
        moduleDimension: {
          length: "1755",
          width: "1038",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-108BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "420-440",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-120BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "465-485",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-144BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "560-580",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-108BDE",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "415-435",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-108",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "420-440",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Carport"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-120",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "465-485",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Carport"],
        moduleDimension: {
          length: "1902",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-144",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "560-580",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Foil",
        applications: ["Carport"],
        moduleDimension: {
          length: "2278",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMD-108E",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "415-435",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: ["Carport"],
        moduleDimension: {
          length: "1721",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CME-132",
        cellType: "N type TOPCon",
        moduleDesign: "Mono-facial",
        powerRange: "680-700",
        moduleColor: "Black",
        frameColor: "Black",
        backCover: "Foil",
        applications: ["Carport"],
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CME-132BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "680-700",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "2383",
          width: "1302",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
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
        model: "AE×××CMER-132BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "600-620",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "2383",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
            link: "",
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
        model: "AE×××CMDR-120BDS",
        cellType: "N type TOPCon",
        moduleDesign: "Bifacial",
        powerRange: "480-500",
        moduleColor: "White",
        frameColor: "Silver",
        backCover: "Double Glass",
        applications: ["Carport"],
        moduleDimension: {
          length: "2077",
          width: "1133",
        },
        links: [
          // {
          //   tooltip: "documents",
          //   link: "",
          //   icon: "/images/option/document.svg",
          // },
          {
            tooltip: "datasheet",
            link: "",
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
};

export const PRODUCTS_SEQUENCE_ANIMATION_TEXT_NEPTUNE = {
  title: "Thermal Tubes",
  description: "Tubes for collecting solar energy",
};
