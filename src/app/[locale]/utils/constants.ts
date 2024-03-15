import {
  ApplicationStandard,
  ModelsSpecs,
  PanelParams,
} from "@/app/[locale]/calculate/components/ChooseModel/types";
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

export const HEADER_TIER1 = "Wir sind TIER1 Hersteller von ";
export const HEADER_TIER1_QUALITY = "hochqualitativen Solarmodulen";

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
  // {
  //   url: "/",
  //   text: "Home",
  // },

  {
    url: "/company",
    text: "Unternehmen",
    subMenu: [
      { url: "/company/manufacturer", text: "Hersteller" },
      { url: "/company/news", text: "Nachrichten" },
      { url: "/company/faq", text: "FAQ" },
    ],
  },
  {
    url: "/products",
    text: "Produkte",
    stickyProducts: true,
    subMenu: [
      { url: "/products", text: "Alle Module" },
      { url: "/products/Aurora", text: "Aurora" },
      { url: "/products/Meteor", text: "Meteor" },
      { url: "/products/Comet", text: "Comet" },
      { url: "/products/Terra", text: "Terra" },
      { url: "/products/ShadeStar", text: "ShadeStar" },
      { url: "/products/Neptune", text: "Neptune" },
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
  //       text: "Herausgebers",
  //     },
  //     {
  //       url: "/info/imprint",
  //       text: "Impressum",
  //     },
  //   ],
  // },
  {
    url: "/documents",
    text: "Dokumente",
  },
  {
    url: "/solutions",
    text: "B2B Lösungen",
  },
];
export const HEADER_CONTACT_US = "Kontaktieren Sie uns";
export const HEADER_LANGUAGE = "Sprache";
export const HEADER_SUBNAVIGATION_PANELS_MODELS = [
  "Aurora.svg",
  "Meteor.svg",
  "Comet.svg",
  "Terra.svg",
  "ShadeStar.svg",
  "Neptune.svg",
];
export const HEADER_SUBNAVIGATION_ALL_MODULES = "Alle Module";
export const HEADER_CONFIGURE_YOUR_MODEL = "All Produkte";
export const HEADER_CALCULATE = "Berechnen";
export const HEADER_CHOOSE_LANGUAGE = "Wählen Sie die Sprache";

//MAIN PAGE
export const HERO_SECTION_SLOGAN =
  "Wir sind ein TIER1 Hersteller von hochwertigen Solarmodulen";
export const HERO_SECTION_SCROLL_TO_THE_FUTURE = "Scrollen Sie in die Zukunft";

export const AWARDS_AND_STATS_STATS_WITH_DETAILS = [
  { stat: "2003", details: "Erfahrung seit", initialValue: "2023" },
  {
    stat: "3200",
    details: "erfolgreiche PV-Installationen",
    initialValue: "3100",
    sign: "+",
  },
  { stat: "100", details: "Länder", initialValue: "50", sign: "+" },
];
export const AWARDS_AND_STATS_GERMAN_ENGINEERING = "Deutsche Ingenieurskunst";
export const AWARDS_AND_STATS_PRODUCTION_PLANTS =
  "Produktionsanlagen in Europa und Asien";
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
export const AWARDS_AND_STATS_SEE_ALL_AWARDS = "Alle Auszeichnungen ansehen";

export const PRODUCT_INTRO_THE_NEXT_LEVEL_OF = "Die nächste Ebene der";
export const PRODUCT_INTRO_MODULES = "Module";
export const PRODUCT_INTRO_HIGH_QUALITY_SP = "Hochwertige Solarmodule";
export const PRODUCT_INTRO_PANELS_MAPPING = {
  power: "Max. Leistung (bis zu)",
  efficiency: "Max. Wirkungsgrad (bis zu)",
  voltage: "Max. Systemspannung",
};
export const PRODUCT_INTRO_PANELS_IMAGES = [
  "Aurora",
  "Meteor",
  "Comet",
  "Terra",
  "ShadeStar",
  "Neptune",
];
export const PRODUCT_INTRO_DETAILED_INFO = "Detaillierte Informationen";
export const PRODUCT_INTRO_PANELS = {
  Comet: {
    stats: {
      power: "200W",
      efficiency: "19.22%",
      voltage: "1000",
    },
    info: {
      icon: "Comet.svg",
      text: "Comet (HJT). Unterstreichen Sie die unvergleichliche Allwetterleistung und Spitzentechnologie von Comet, indem Sie eine Parallele zu der unaufhaltsamen Reise eines Kometen ziehen.",
    },
    advantages: [
      {
        title: "n-Typ-Heteroübergang",
        description: "Fortgeschrittene Solartechnologie",
      },
      {
        title: "Zuverlässigkeit",
        description: "Außergewöhnlich geringe Degradation",
      },
      {
        title: "Temperaturstabilität",
        description: "Sehr niedriger Koeffizient",
      },
      {
        title: "Leistung bei schwachem Licht",
        description: "Hohe Leistung bei schwachen Lichtverhältnissen",
      },
      {
        title: "Extreme Klimatauglichkeit",
        description: "Entwickelt für raue Umgebungen",
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
      text: "Aurora (PERC). Neu gestaltet mit dem Thema Aurora Borealis. Erfinden Sie Aurora als Solarmodul neu, inspiriert von den dynamischen und lebendigen Farben des Nordlichts. Betonen Sie seine Vielseitigkeit und ästhetische Anziehungskraft, die die sich ständig verändernden Farben der Aurora widerspiegeln.",
    },
    advantages: [
      {
        title: "Fortschrittliche Zellen",
        description: "PERC- und Topcon-Technologie",
      },
      {
        title: "Größenvielfalt",
        description: "kleine, mittlere, große Module",
      },
      { title: "Designoptionen", description: "Mono/Bifacial, Farbauswahl" },
      {
        title: "Individuelle Funktionen",
        description: "Maßgeschneidertes Material und Leistung",
      },
      {
        title: "Klimaanpassungsfähigkeit",
        description: "Geeignet für extreme Bedingungen",
      },
      {
        title: "Abschlussstatement",
        description: `"Aurora: Vielfältige und dynamische Solarlösungen"`,
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
      text: "Meteor (TOPCon). Konzentrieren Sie sich auf die Fähigkeit des Meteor, auch bei schwachem Licht hell zu leuchten, genau wie ein Meteor, der über den Nachthimmel zieht.",
    },
    advantages: [
      {
        title: "TOPCon N-Typ",
        description: "Technologie mit überragender Effizienz",
      },
      {
        title: "Umfassende Anpassungsmöglichkeiten",
        description: "Materialien, Leistung, Abmessungen",
      },
      {
        title: "Farbenvielfalt",
        description: "Breites Spektrum an Auswahlmöglichkeiten",
      },
      {
        title: "Robuste Leistung",
        description: "Geringe Degradation, hohe Haltbarkeit",
      },
      {
        title: "Klimavielseitigkeit",
        description: "Ideal für unterschiedliche Wetterbedingungen",
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
      text: "Vielseitige und robuste Solarenergie. Terra (Anwendungen in der Landwirtschaft, Lärmschutzwänden und Solargittern) Zeigen Sie die multifunktionalen Anwendungen von Terra und betonen Sie seine Rolle bei der Harmonisierung mit den Bedürfnissen der Erde.",
    },
    advantages: [
      { title: "n-Type TOPCon Tech", description: "Modernste Effizienz" },
      {
        title: "Anwendungsflexibilität",
        description: "Ideal für verschiedene Installationen",
      },
      {
        title: "Designstärke",
        description: "Hohe Wind- und Schneewiderstandsfähigkeit",
      },
      {
        title: "Langfristige Zuverlässigkeit",
        description: "Minimale Degradation",
      },
      {
        title: "Bifaziale Effizienz",
        description: "Optimale Energieerfassung",
      },
      {
        title: "Abschlussstatement",
        description: `"Terra: Anpassbare Energie für jede Umgebung"`,
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
      text: "Neptune: Doppelte Leistung, maximale Effizienz",
    },
    advantages: [
      {
        title: "Hybrid Energy",
        description: "Strom- und Wärmeerzeugung",
      },
      {
        title: "Hohe Effizienz",
        description: "Etwa 70% kombinierte Effizienz",
      },
      {
        title: "Wirtschaftlicher Nutzen",
        description: "Langfristig niedrige LCOE",
      },
      {
        title: "Vielseitige Nutzung",
        description: "Effektiv in verschiedenen Klimazonen",
      },
      {
        title: "Nachhaltiges Design",
        description: "Umweltbewusste Technologie",
      },
      {
        title: "Abschlussstatement",
        description: `"Neptune: Die Zukunft der hybriden Solarenergie"`,
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
      text: `"ShadeStar: Licht, wo Sie es brauchen" (Smart Cell). Konzentrieren Sie sich auf die Widerstandsfähigkeit von ShadeStar gegen teilweisen Schatten, vergleichbar mit einem Wächter im Kosmos`,
    },
    advantages: [
      {
        title: "Schattenresistenz",
        description: "Hohe Leistung auch im Schatten",
      },
      {
        title: "Optimierung für Dächer",
        description: "Ideal für begrenzten Platz",
      },
      {
        title: "Wirtschaftliche Leistung",
        description: "Niedrige LCOE",
      },
      {
        title: "Intelligente Technologie",
        description: "Fortgeschrittene Schattenresistenz",
      },
      {
        title: "Nachhaltige Lösung",
        description: "Umweltfreundliches Design",
      },
      {
        title: "Abschlussstatement",
        description: `"ShadeStar: Intelligente Energie für jedes Dach"`,
      },
    ],
  },
};
export const PRODUCT_INTRO_LEARN_MORE = "Erfahren Sie mehr";
export const HISTORY_READ_FULL_STORY = "Voll von Geschichte lesen";
export const PRODUCT_INTRO_CALCULATE_YOUR_MODEL = "All Produkte";

export const FEATURED_PRODUCTS_HIGH_QUALITY = "Hochwertig";

export const TECH_INFO_THE_HIDDEN_LAYERS = "Die verborgenen Schichten";
export const TECH_INFO_A_CLOSE_LOOK_AT = "Eine genaue Betrachtung von";
export const TECH_INFO_PANELS_DETAILS = [
  {
    title: "Photovoltaikzellen",
    description:
      "Halbleiter-Photovoltaikzellen wandeln Sonnenlicht in Elektrizität um, was für Solarpaneele entscheidend ist.",
  },
  {
    title: "Solarpanel-Ummantelung",
    description:
      "Solarpaneele ertragen verschiedene Bedingungen und werden durch Ummantelung geschützt, um Langlebigkeit und Effizienz zu gewährleisten.",
  },
  {
    title: "Rahmen und Rückseitenbeschichtung",
    description:
      "Der Rahmen bietet Unterstützung, während die Rückseitenbeschichtung vor den Elementen schützt und die Langlebigkeit des Solarpanels gewährleistet.",
  },
];
export const TECH_INFO_PANELS = ["structure.png", "frame.png", "panel.png"];
export const TECH_INFO_WHY_WE_ARE = "Warum wir darin";
export const TECH_INFO_BEST_AT_THIS = "am besten sind";
export const TECH_INFO_CLOSE = "Schließen";
export const TECH_INFO_BENS = [
  {
    title: `Führende Solartechnologie`,
    description:
      "AESOLAR, ein erstklassiger deutscher Hersteller von Solarmodulen, steht für Präzision und Zuverlässigkeit in der Technik. Wir sind an vorderster Front und nutzen fortschrittliche Technologie, um die Zukunft der Solarenergie zu gestalten. Unser Engagement für Innovation ebnet den Weg für spannende Entwicklungen in der Solartechnik.",
    image: "automation.svg",
    fullDescription: `Am 19. Februar 2024 veröffentlichte Bloomberg New Energy Finance (BNEF) den Ausblick auf den globalen PV-Markt für das 1. Quartal 2024. AESOLAR hat erneut seine Position in der Liste der Tier-1-Hersteller von PV-Modulen gesichert, und zwar zum 13. Mal in Folge seit dem 1. Quartal 2021. Als führende Solarmarke unterstreicht diese Anerkennung die gleichbleibende Qualität, die Glaubwürdigkeit der Marke und die hohe Bankfähigkeit von AESOLAR.
    Die Methodik von BNEF für Tier-1-PV-Modulhersteller ist streng und erfordert, dass die Hersteller in den letzten 2 Jahren Finanzierungen ohne Rückgriff von 6 verschiedenen kommerziellen Banken erhalten haben. Dieser Auswahlprozess zeigt die Bankfähigkeit der ausgewählten Marken und bietet einen zuverlässigen Referenzpunkt für den Markt.
    Besonders erwähnenswert ist, dass BNEF ab dem 1. Quartal 2024 die Projektschwelle von zuvor 1,5 MW auf 5 MW angehoben hat. Diese Änderung hat zu einer Verringerung der Anzahl der Unternehmen in der Tier-1-Liste im Vergleich zum vorherigen Quartal geführt (45 Unternehmen im 4. Quartal 2023 auf 26 Unternehmen im 1. Quartal 2024). Trotz dieser Änderung behält AESOLAR seine Position bei und zeigt erneut die Stärke und herausragende Glaubwürdigkeit des Unternehmens.
    BNEF kommentierte diese Änderung wie folgt: "Dies ist auf die zunehmende Größe der Solarindustrie zurückzuführen, bei der 5 MW kein besonders großes Projekt mehr sind, und Projekte unter 5 MW äußerst schwer mit unabhängigen Datenquellen zu überprüfen sind, wenn sie von Modulherstellern behauptet werden. Die Änderung reduziert erwartungsgemäß die Anzahl der Unternehmen in der Tier-1-Liste, aber die Gesamtkapazität beträgt immer noch 783 GW/Jahr, weit mehr als die weltweit erwartete Installation im Jahr 2024."
    Darüber hinaus erhielt AESOLAR ein '*' in der Liste, was bedeutet, dass ihr Untersuchungsbericht von PV Evolution Labs (PVEL) eingesehen werden kann. Das PV-Modul der Aurora-Serie von AESOLAR hat die von PVEL durchgeführten Tests bestanden und war 2023 unter den "Best Performers". Dies ist das Ergebnis des kontinuierlichen Fokus von AESOLAR auf Forschung und Entwicklung, technologische Innovation sowie die Verbesserung der Produktionsprozesse und der Qualitätsmanagement.`,
  },
  {
    title: "Den Aufbau einer grüneren Zukunft",
    description:
      "AESOLAR fertigt nicht nur Solarmodule; wir bauen eine nachhaltigere Zukunft auf. Durch die Kombination neuester Technologie mit hoher Qualität und unserer Hingabe zur Umwelt schaffen wir nicht nur Produkte - wir inspirieren eine Vision einer von erneuerbaren Energien angetriebenen Welt.",
    image: "manufacturer.png",
  },
  {
    title: "Qualitätsfertigung",
    description:
      "Unsere High-Tech-Fabriken nutzen intelligente Automatisierung für präzise und effiziente Montage, um Fehler zu minimieren. Qualität ist bei AESOLAR entscheidend. Wir stellen sicher, dass jedes Solarmodul in Effizienz, Haltbarkeit und Leistung erstklassig ist. Unsere gründlichen Kontrollen bei jedem Schritt zeigen unsere Hingabe zur Qualität und machen unsere Kunden zufrieden.",
    image: "technologies.svg",
  },
  {
    title: "Neue Effizienzstandards setzen",
    description:
      "Wir bei AESOLAR setzen uns dafür ein, die Messlatte in der Solarindustrie höher zu legen. Wir konzentrieren uns darauf, unsere Fertigung energieeffizienter zu gestalten, was Kosten senkt und unseren ökologischen Fußabdruck reduziert. Dies kommt auch unseren Kunden langfristig zugute. Und wir untermauern unser Qualitätsversprechen mit einer starken Produktgarantie.",
    image: "efficiency.svg",
  },
  {
    title: "Engagement für Nachhaltigkeit",
    description:
      "Nachhaltigkeit steht im Mittelpunkt unserer Aktivitäten bei AESOLAR. Wir versorgen unsere Einrichtungen mit unseren Solarmodulen und anderen grünen Energiequellen. Dieses Engagement spiegelt unseren Glauben an die saubere Energiebewegung wider. Wir achten auf die Lebenszyklen unserer Produkte, verwenden recycelbare Materialien und reduzieren den Energieverbrauch. Wir halten uns an strenge deutsche Standards für eine nachhaltige und verantwortungsvolle Produktion.",
    image: "materials.svg",
  },
];
export const TECH_INFO_READ_MORE = "Mehr lesen";
export const TECH_INFO_INNOVATIVE = "Innovativ. Stilvoll. Unverzichtbar:";
export const TECH_INFO_EXPLORE = "Entdecken Sie unser Produktsortiment.";

export const REVIEWS_RAVE_REVIEWS = "Rave Bewertungen";
export const REVIEWS_SEE_WHY_WE_SHINE = "Sehen Sie, warum wir glänzen";
export const REVIEWS_QUOTES_WITH_AUTHORS = [
  {
    quote:
      "Warum arbeite ich gerne mit der Firma AE Solar...🤔. Ganz einfach, weil sie großartig ist. Tolle Team, großartige Produkte, großartiger Service. Rundum sorglos Paket. Es gibt keine Probleme mit den Mitarbeitern, es gibt nur Lösungen und das für jeden unserer Kunden. Einfach deutsche Qualität.",
    author: "Thomas Schneider",
    organisation: "Einkauf, Vertrieb, Beratung bei der Firma SVM Solar.",
  },
  {
    quote:
      "Begeistert von meinen neuen Solarmodulen von AESolar! Die Effizienz und Haltbarkeit haben meine Erwartungen übertroffen. Genieße Einsparungen und Umweltauswirkungen. Sehr zu empfehlen!",
    author: "Emily Johnson",
    organisation: "Quantum Dynamics",
  },
  {
    quote:
      "Begeistert von meinen neuen Solarmodulen von AESolar! Die Effizienz und Haltbarkeit haben meine Erwartungen übertroffen. Genieße Einsparungen und Umweltauswirkungen. Sehr zu empfehlen!",
    author: "Emily Johnson",
    organisation: "Quantum Dynamics",
  },
];

export const MAIN_PAGE_NEWS_INSIGHTS = "Nachrichten und Einblicke";
export const MAIN_PAGE_COMPANY = "unseres Unternehmens ";
export const MAIN_PAGE_NEWS_READ_ALL = "Alle Nachrichten";

export const GET_IN_TOUCH_CLIENT_TYPE = ["investor", "partner", "installateur"];
export const GET_IN_TOUCH_ELEVATE_GROWTH = "Gemeinsames Wachstum fördern";
export const GET_IN_TOUCH_JOIN_US = "Schließen Sie sich ";
export const GET_IN_TOUCH_OUR_VISION = " unserer Vision für Solarenergie an";
export const GET_IN_TOUCH_BECOME_A = "Werden Sie ";

export const FAQ_ACCORDION_DATA = [
  {
    question: "Wie funktionieren Solarpaneele?",
    answer:
      "Solarpaneele funktionieren, indem sie Sonnenlicht durch einen Prozess namens photovoltaischer Effekt in Elektrizität umwandeln. Die Solarzellen in den Paneelen absorbieren Sonnenlicht, und die Energie aus dem absorbierten Licht erzeugt einen elektrischen Strom.",
  },
  {
    question: "Welche Faktoren beeinflussen die Effizienz einer Solaranlage?",
    answer:
      "Die Effizienz einer Solaranlage wird durch Sonneneinstrahlung, Schattierung, Ausrichtung der Paneele und Temperatur beeinflusst. Die Auswahl hochwertiger Paneele und eine ordnungsgemäße Installation beeinflussen ebenfalls die Gesamtleistung.",
  },
  {
    question: "Was ist die übliche geschätzte Lieferzeit?",
    answer:
      "Sie können direkt aus dem Lagerbestand unseres lokalen Vertriebspartners in Ihrem Land kaufen. Alternativ können Sie eine Bestellung zur Fertigung aufgeben, wobei die voraussichtliche Ankunftszeit (ETA) vom Zielort, der Menge und anderen Bestelldetails abhängt. In der Regel beträgt die ETA für Bestellungen 30 bis 60 Tage.",
  },
  {
    question: "Wie werde ich Ihr Vertriebspartner?",
    answer:
      "Bitte kontaktieren Sie unser Vertriebsbüro, senden Sie uns Ihre Unternehmenspräsentation und erhalten Sie die Vertriebsbedingungen vom für Ihr Land zuständigen Regionalmanager.",
  },
];
export const FAQ_QUESTION = "Haben Sie eine Frage?";
export const FAQ_SOLUTIONS = "Wir haben Lösungen.";
export const FAQ_MORE_SOLUTIONS = "Mehr Lösungen.";

//FOOTER
export const FOOTER_LINKS_ARRAY = [
  {
    category: { title: "Produkte", link: "/products" },
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
    category: { title: "Über uns", link: "/company" },
    links: [
      { title: "Unternehmen", link: "/company" },
      { title: "Hersteller", link: "/company/manufacturer" },
      { title: "B2B Lösungen", link: "/solutions" },
      { title: "Kontakte", link: "/contacts" },
      { title: "Nachrichten", link: "/company/news" },
      { title: "FAQ", link: "/company/faq" },
    ],
  },
  {
    category: { title: "Rechtliche Informationen.", link: "/company/imprint" },
    links: [
      { title: "Impressum", link: "/company/imprint" },
      { title: "Herausgeber", link: "/company/publishers_info" },
    ],
  },
  {
    category: { title: "Dokumente", link: "/documents" },
    links: [
      { title: "Datenblatt", link: "/documents" },
      { title: "Garantie", link: "/documents" },
      // { title: "Zertifizierungen", link: "/documents" },
      // { title: "Handbuch", link: "/documents" },

      // { title: "Präsentationen", link: "/documents" },
      // { title: "FAQ", link: "/info/faq" },
    ],
  },
];
export const FOOTER_GERMAN_BRAND =
  "Deutsche Marke in der erneuerbaren Energiebranche, die seit 2003 hochwertige Produkte und Dienstleistungen anbietet.";
export const FOOTER_GERMAN_BRAND_WORDS_TO_BOLD = [
  "Deutsche Marke",
  "seit 2003",
];
export const FOOTER_WE_ARE_SOCIAL = "Wir sind in den sozialen Medien";
export const FOOTER_SOCIAL = [
  { icon: "facebook.svg", link: "https://www.facebook.com/aesolarenergy/" },
  { icon: "linkedin.svg", link: "https://www.linkedin.com/company/ae-solar/" },
  { icon: "instagram.svg", link: "https://www.instagram.com/aesolarenergy/" },
  { icon: "twitter.svg", link: "https://twitter.com/aesolar_energy/" },
  { icon: "youtube.svg", link: "https://www.youtube.com/@AESOLAR/featured/" },
];
export const FOOTER_SAVE_THE_WORLD = "Es ist Zeit, die Welt zu retten!";
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
export const FOOTER_SUBSCRIBE_NEWSLETTER = "Abonnieren Sie unseren Newsletter.";
export const FOOTER_COPYRIGHT =
  "Urheberrecht © 2023 AESolar. Alle Rechte vorbehalten.";
export const FOOTER_YOUR_EMAIL = "Ihre E-Mail";
export const FOOTER_SUBSCRIBE = "Abonnieren";
export const POLICY_LINKS = [
  { text: "Datenschutzbestimmungen", link: "/company/publishers_info" },
  { text: "Nutzungsbedingungen", link: "/company/publishers_info" },
  { text: "Rechtliches", link: "/company/imprint" },
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

export const CONSTRUCTOR_MODELS_SPEC: PanelParams = {
  Aurora: {
    panelTechnology: "PERc Technologie",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solarzelle Technologie",
        values: ["Mono C-Si", "P type PERC"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Spezifikationen des Moduls.",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      backCover: {
        type: "slider",
        text: "Rückseite",
        values: ["Glas", "Rückseite", "Doppelglas"],
      },
      moduleColor: {
        type: "color",
        text: "Modulfarbe",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Schwarz", icon: "black.svg" },
          { color: "Weiß", icon: "white.svg" },
        ],
      },
      frameColor: {
        type: "color",
        text: "Rahmenfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Silber", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Modulabmessungen",
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
        text: "Leistungsbereich (W)",
        values: {
          measure1: "ab",
          measure2: "bis",
          lowerLimit: "1",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Anwendungen.",
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
        text: "Solarzelle Technologie",
        values: ["Mono C-Si", "N type TOPCon"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Modulspezifikation",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      backCover: {
        type: "slider",
        text: "Rückseite",
        values: ["Glas", "Rückseite", "Doppelglas"],
      },
      moduleColor: {
        type: "color",
        text: "Modulfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Weiß", icon: "white.svg" },
        ],
      },
      frameColor: {
        type: "color",
        text: "Rahmenfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Silber", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Modulabmessungen.",
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
        text: "Leistungsbereich (W)",
        values: {
          measure1: "ab",
          measure2: "bis",
          lowerLimit: "1",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Anwendungen.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
  Comet: {
    panelTechnology: "HJT Technologie",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solarzelle Technologie",
        values: ["Mono C-Si", "N type HJT"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Modulspezifikation",
        values: ["Bi-Facial"],
      },
      backCover: {
        type: "slider",
        text: "Rückseite",
        values: ["Glas", "Rückseite", "Doppelglas"],
      },
      moduleColor: {
        type: "color",
        text: "Modulfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Weiß", icon: "white.svg" },
        ],
      },
      frameColor: {
        type: "color",
        text: "Rahmenfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Silber", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Modulabmessungen.",
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
        text: "Leistungsbereich (W)",
        values: {
          measure1: "ab",
          measure2: "bis",
          lowerLimit: "1",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Anwendungen.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
  Terra: {
    panelTechnology: "Wind-/Schneeresistente Technologie",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solarzelle Technologie",
        values: ["Mono C-Si", "N type TOPCon"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Modulspezifikation",
        values: ["Bi-Facial"],
      },
      backCover: {
        type: "slider",
        text: "Rückseite",
        values: ["Glas", "Rückseite", "Doppelglas"],
      },
      moduleColor: {
        type: "color",
        text: "Modulfarbe",
        values: [{ color: "Transparent", icon: "transparent.svg" }],
      },
      frameColor: {
        type: "color",
        text: "Rahmenfarbe",
        values: [
          { color: "Silver", icon: "silver.svg" },
          { color: "Ohne Rahmen", icon: "transparent.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Modulabmessungen.",
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
        text: "Leistungsbereich (W)",
        values: {
          measure1: "ab",
          measure2: "bis",
          lowerLimit: "1",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Anwendungen.",
        clarification: "Standard",
        values: ["Agri-Voltaics"],
      },
    },
  },
  ShadeStar: {
    panelTechnology: "Schattenresistent Technologie",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solarzelle Technologie",
        values: ["Mono C-Si", "P type PERC"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Modulspezifikation",
        values: ["Mono-Facial"],
      },
      backCover: {
        type: "slider",
        text: "Rückseite",
        values: ["Glas", "Rückseite", "Doppelglas"],
      },
      moduleColor: {
        type: "color",
        text: "Modulfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Weiß", icon: "white.svg" },
        ],
      },
      frameColor: {
        type: "color",
        text: "Rahmenfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Silber", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Modulabmessungen.",
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
        text: "Leistungsbereich (W)",
        values: {
          measure1: "ab",
          measure2: "bis",
          lowerLimit: "1",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Anwendungen.",
        clarification: "Standard",
        values: ["Shade Resistant", "Carport", "PV-Thermal", "Agri-Voltaics"],
      },
    },
  },
  Neptune: {
    panelTechnology: "PV-Thermal Technologie",
    params: {
      solarCellTechnology: {
        type: "slider",
        text: "Solarzelle Technologie",
        values: ["PERc", "TOPCon", "HJT"],
      },
      moduleSpecification: {
        type: "slider",
        text: "Modulspezifikation",
        values: ["Mono-Facial", "Bi-Facial"],
      },
      backCover: {
        type: "slider",
        text: "Rückseite",
        values: ["Glas", "Rückseite"],
      },
      moduleColor: {
        type: "color",
        text: "Modulfarbe",
        values: [
          { color: "Transparent", icon: "transparent.svg" },
          { color: "Schwarz", icon: "black.svg" },
          { color: "Weiß", icon: "white.svg" },
        ],
      },
      frameColor: {
        type: "color",
        text: "Rahmenfarbe",
        values: [
          { color: "Schwarz", icon: "black.svg" },
          { color: "Silber", icon: "silver.svg" },
        ],
      },
      moduleDimension: {
        type: "range/dimension",
        text: "Modulabmessungen.",
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
        text: "Leistungsbereich (W)",
        values: {
          measure1: "ab",
          measure2: "bis",
          lowerLimit: "1",
          name1: "from",
          name2: "to",
        },
      },
      applications: {
        type: "applications",
        text: "Anwendungen.",
        clarification: "Standard",
        values: ["PV-Thermal"],
      },
    },
  },
};

export const CONSTRUCTOR_APPLICATIONS_STANDARDS: ApplicationStandard[] = [
  {
    type: "Shade Resistant",
    clarification: `"Schattenresistent" für Solarpaneele bedeutet die Fähigkeit, auch unter schattigen Bedingungen effizient zu arbeiten und eine Stromerzeugung auch bei teilweisem Schatten zu gewährleisten.`,
  },
  {
    type: "Carport",
    clarification: `"Carport" für Solarpaneele ist eine Struktur, die einem Überdach oder einer Veranda ähnelt und über einem Parkplatz positioniert ist.`,
  },
  {
    type: "PV-Thermal",
    clarification:
      "Solarenergie kombiniert Photovoltaik und Wärme, um Strom zu erzeugen und Heizung mit einem System zu liefern.",
  },
  {
    type: "Agri-Voltaics",
    clarification: `"Agri-Voltaik" bezeichnet die Verwendung von Solarpanelen auf landwirtschaftlichen Flächen, um gleichzeitig Energie zu erzeugen und die Ernte zu schützen.`,
  },
];
export const SEQUENCE_ANIMATION_TEXT = [
  {
    title: "Vorderseite",
    description: "Schützt das Panel vor äußeren Einflüssen.",
  },
  {
    title: "Vorderseitenverkapselung",
    description: "Schützt die Solarzellen, versiegelt das Panel.",
  },
  {
    title: "Solarzellen",
    description: "Wandelt Sonnenlicht in Strom um.",
  },
  {
    title: "Rückseitenverkapselung",
    description: "Bietet Isolierung und Schutz.",
  },
  {
    title: "Rückseite",
    description: "Schützt die Rückseite des Panels.",
  },
  {
    title: "Rahmen",
    description: "Strukturelle Unterstützung für das Solarmodul.",
  },
];

export const CONSTRUCTOR_MODEL = "Modell.";
export const CONSTRUCTOR_WHICH_IS_BEST = "Welches ist am besten für Sie?";
export const CONSTRUCTOR_CUSTOMIZE = "Anpassen.";
export const CONSTRUCTOR_YOUR_MODEL = "Ihr Modell";
export const CONSTRUCTOR_APPLICATIONS = "Anwendungen.";
export const CONSTRUCTOR_STANDARD = "Standard";
export const CONSTRUCTOR_CONFIGURE_YOUR_MODEL = "Konfigurieren Sie Ihr Modul.";
export const CONSTRUCTOR_YOUR_MODEL_IS = "Ihr Modell ist";
export const CONSTRUCTOR_MODELS_SHORT_DETAILS_SPECS = {
  Aurora: {
    powerRange: {
      parameter: "Leistungsbereich",
      value: "495W—505W",
    },
    efficiencyRange: {
      parameter: "Effizienzbereich",
      value: "21.70%—22.47%",
    },
    aximumSystemVoltage: {
      parameter: "Maximale Systemspannung",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Leistungsgarantie",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Produktgarantie",
      value: "12 years",
    },
  },
  Comet: {
    powerRange: {
      parameter: "Leistungsbereich",
      value: "190W—200W",
    },
    efficiencyRange: {
      parameter: "Effizienzbereich",
      value: "18.26%—19.22%",
    },
    aximumSystemVoltage: {
      parameter: "Maximale Systemspannung",
      value: "1000 (V)",
    },
    performanceGuarantee: {
      parameter: "Leistungsgarantie",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Produktgarantie",
      value: "15 years",
    },
  },
  Meteor: {
    powerRange: {
      parameter: "Leistungsbereich",
      value: "560W—580W",
    },
    efficiencyRange: {
      parameter: "Effizienzbereich",
      value: "21.70%—22.47%",
    },
    aximumSystemVoltage: {
      parameter: "Maximale Systemspannung",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Leistungsgarantie",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Produktgarantie",
      value: "15 years",
    },
  },
  Terra: {
    powerRange: {
      parameter: "Leistungsbereich",
      value: "505W—525W",
    },
    efficiencyRange: {
      parameter: "Effizienzbereich",
      value: "21.12%—21.95%",
    },
    aximumSystemVoltage: {
      parameter: "Maximale Systemspannung",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Leistungsgarantie",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Produktgarantie",
      value: "15 years",
    },
  },
  Neptune: {
    powerRange: {
      parameter: "Leistungsbereich",
      value: "370W—380W",
    },
    efficiencyRange: {
      parameter: "Effizienzbereich",
      value: "20.31%—20.86%",
    },
    aximumSystemVoltage: {
      parameter: "Maximale Systemspannung",
      value: "1500 (V)",
    },
    performanceGuarantee: {
      parameter: "Leistungsgarantie",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Produktgarantie",
      value: "15 years",
    },
  },
  ShadeStar: {
    powerRange: {
      parameter: "Leistungsbereich",
      value: "190W—200W",
    },
    efficiencyRange: {
      parameter: "Effizienzbereich",
      value: "18.26%—19.22%",
    },
    aximumSystemVoltage: {
      parameter: "Maximale Systemspannung",
      value: "1000 (V)",
    },
    performanceGuarantee: {
      parameter: "Leistungsgarantie",
      value: "30 years",
    },
    productWarranty: {
      parameter: "Produktgarantie",
      value: "15 years",
    },
  },
};

export const CONSTRUCTOR_MODELS_SHORT_DETAILS = "Kurze Details";
export const CONSTRUCTOR_ADD_TO_BAG = "In den Warenkorb legen";
export const CONSTRUCTOR_ADD = "Hinzufügen";
export const CONSTRUCTOR_CONFIGURE = "Konfigurieren";
export const CONSTRUCTOR_CONFIGURE_MODULE = "Modul konfigurieren";
export const CONSTRUCTOR_MODELS_ADVANTAGES = {
  Aurora: [
    {
      advantageCategory: "Nutzen",
      advantageDescription: [
        "PERC-Technologie",
        "Breites Spektrum an Auswahlmöglichkeiten für: Stückliste, Leistung, Abmessungen, hohe Haltbarkeit",
        "Farben",
        "Varianten für extreme Klimazonen mit hoher Haltbarkeit",
      ],
    },
    {
      advantageCategory: "Dokumentation (pdf)",
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
      advantageCategory: "Nutzen",
      advantageDescription: [
        "PERC-Technologie",
        "Breites Spektrum an Auswahlmöglichkeiten für: Stückliste, Leistung, Abmessungen, hohe Haltbarkeit",
        "Farben",
        "Varianten für extreme Klimazonen mit hoher Haltbarkeit",
      ],
    },
    {
      advantageCategory: "Dokumentation (pdf)",
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
      advantageCategory: "Nutzen",
      advantageDescription: [
        "PERC-Technologie",
        "Breites Spektrum an Auswahlmöglichkeiten für: Stückliste, Leistung, Abmessungen, hohe Haltbarkeit",
        "Farben",
        "Varianten für extreme Klimazonen mit hoher Haltbarkeit",
      ],
    },
    {
      advantageCategory: "Dokumentation (pdf)",
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
      advantageCategory: "Nutzen",
      advantageDescription: [
        "PERC-Technologie",
        "Breites Spektrum an Auswahlmöglichkeiten für: Stückliste, Leistung, Abmessungen, hohe Haltbarkeit",
        "Farben",
        "Varianten für extreme Klimazonen mit hoher Haltbarkeit",
      ],
    },
    {
      advantageCategory: "Dokumentation (pdf)",
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
      advantageCategory: "Nutzen",
      advantageDescription: [
        "PERC-Technologie",
        "Breites Spektrum an Auswahlmöglichkeiten für: Stückliste, Leistung, Abmessungen, hohe Haltbarkeit",
        "Farben",
        "Varianten für extreme Klimazonen mit hoher Haltbarkeit",
      ],
    },
    {
      advantageCategory: "Dokumentation (pdf)",
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
      advantageCategory: "Nutzen",
      advantageDescription: [
        "PERC-Technologie",
        "Breites Spektrum an Auswahlmöglichkeiten für: Stückliste, Leistung, Abmessungen, hohe Haltbarkeit",
        "Farben",
        "Varianten für extreme Klimazonen mit hoher Haltbarkeit",
      ],
    },
    {
      advantageCategory: "Dokumentation (pdf)",
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
        characteristic: "Zellentyp",
        value: "Gallium-doped Mono c-Si PERC, Half-cut cells, 182 mm",
      },
      noOfCells: {
        characteristic: "Anzahl der Zellen",
        value: "120",
      },
      dimensions: {
        characteristic: "Abmessungen",
        value: "1902 mm x 1133 mm x 30 mm",
      },
      weight: {
        characteristic: "Gewicht",
        value: "22.5 kg",
      },
      junctionBox: {
        characteristic: "Anschlussdose",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Ausgangskabel",
        value: "1 x 4 mm², 350 mm length or customized",
      },
      connectorType: {
        characteristic: "Steckertyp",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hagelbeständigkeit",
        value: "Max. ⌀ 25 mm at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind Belastung",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanische Belastung",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " Diese neue Technologie verhindert sofortige Leistungseinbußen im Modul, was den Leistungsverhältnis um bis zu 30 % erhöht und die Rendite für alle Arten von Installationen steigert.",
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
        characteristic: "Zellentyp",
        value: "Silicon Heterojunction Technology, Half-cut cells, 210 mm",
      },
      noOfCells: {
        characteristic: "Anzahl der Zellen",
        value: "110",
      },
      dimensions: {
        characteristic: "Abmessungen",
        value: "2383 mm x 1095 mm x 35 mm",
      },
      weight: {
        characteristic: "Gewicht",
        value: "32.5 kg",
      },
      junctionBox: {
        characteristic: "Anschlussdose",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Ausgangskabel",
        value: "1 x 4.0mm2, 350mm length or customised",
      },
      connectorType: {
        characteristic: "Steckertyp",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hagelbeständigkeit",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind Belastung",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanische Belastung",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " Diese neue Technologie verhindert sofortige Leistungseinbußen im Modul, was den Leistungsverhältnis um bis zu 30 % erhöht und die Rendite für alle Arten von Installationen steigert.",
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
        characteristic: "Zellentyp",
        value: "Mono c-Si PERC, Full cells, 158.75 mm",
      },
      noOfCells: {
        characteristic: "Anzahl der Zellen",
        value: "60",
      },
      dimensions: {
        characteristic: "Abmessungen",
        value: "2278 mm x 1133 mm x 30 mm",
      },
      weight: {
        characteristic: "Gewicht",
        value: "26.5 kg",
      },
      junctionBox: {
        characteristic: "Anschlussdose",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Ausgangskabel",
        value: "1 x 4.0mm2, 350mm length or customised",
      },
      connectorType: {
        characteristic: "Steckertyp",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hagelbeständigkeit",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind Belastung",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanische Belastung",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " Diese neue Technologie verhindert sofortige Leistungseinbußen im Modul, was den Leistungsverhältnis um bis zu 30 % erhöht und die Rendite für alle Arten von Installationen steigert.",
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
        characteristic: "Zellentyp",
        value: "Gallium-doped Mono c-Si PERC, Half-cut cells, 182 mm",
      },
      noOfCells: {
        characteristic: "Anzahl der Zellen",
        value: "132",
      },
      dimensions: {
        characteristic: "Abmessungen",
        value: "1070 mm x 2235 mm x 30 mm",
      },
      weight: {
        characteristic: "Gewicht",
        value: "30.5 kg",
      },
      junctionBox: {
        characteristic: "Anschlussdose",
        value: "IP68 rated, 3 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Ausgangskabel",
        value: "1 x 4.0mm2, 350mm length or customised",
      },
      connectorType: {
        characteristic: "Steckertyp",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hagelbeständigkeit",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind Belastung",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanische Belastung",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " Diese neue Technologie verhindert sofortige Leistungseinbußen im Modul, was den Leistungsverhältnis um bis zu 30 % erhöht und die Rendite für alle Arten von Installationen steigert.",
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
        characteristic: "Zellentyp",
        value: "Gallium-doped Mono c-Si PERC, Half-cut cells, 166 mm",
      },
      noOfCells: {
        characteristic: "Anzahl der Zellen",
        value: "120",
      },
      dimensions: {
        characteristic: "Abmessungen",
        value: "1755 mm x 1038 mm x 35 mm",
      },
      weight: {
        characteristic: "Gewicht",
        value: "33 kg",
      },
      junctionBox: {
        characteristic: "Anschlussdose",
        value: "IP 68 rated",
      },
      outputCable: {
        characteristic: "Ausgangskabel",
        value: "1 x 4.0mm2, 350mm length or customised",
      },
      connectorType: {
        characteristic: "Steckertyp",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hagelbeständigkeit",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind Belastung",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanische Belastung",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " Diese neue Technologie verhindert sofortige Leistungseinbußen im Modul, was den Leistungsverhältnis um bis zu 30 % erhöht und die Rendite für alle Arten von Installationen steigert.",
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
        characteristic: "Zellentyp",
        value: "Mono c-Si PERC, Full cells, 158.75 mm",
      },
      noOfCells: {
        characteristic: "Anzahl der Zellen",
        value: "36",
      },
      dimensions: {
        characteristic: "Abmessungen",
        value: "1530 mm x 680 mm x 30 mm",
      },
      weight: {
        characteristic: "Gewicht",
        value: "10.8 kg",
      },
      junctionBox: {
        characteristic: "Anschlussdose",
        value: "IP68 rated, 2 Bypass Diodes",
      },
      outputCable: {
        characteristic: "Ausgangskabel",
        value: "1 x 4.0mm2, 900mm length or customised",
      },
      connectorType: {
        characteristic: "Steckertyp",
        value: "MC 4 / MC 4 compatible",
      },
      hailResistance: {
        characteristic: "Hagelbeständigkeit",
        value: "Max. ⌀ 25 mm, at 23 m/s",
      },
      windLoad: {
        characteristic: "Wind Belastung",
        value: "2400 Pa / 244 kg/m2",
      },
      mechanicalLoad: {
        characteristic: "Mechanische Belastung",
        value: "5400 Pa / 550 kg/m2",
      },
    },
    packagingInformation:
      " Diese neue Technologie verhindert sofortige Leistungseinbußen im Modul, was den Leistungsverhältnis um bis zu 30 % erhöht und die Rendite für alle Arten von Installationen steigert.",
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

export const CART_MODELS_ARE_READY = "Ihre Module";
export const CART_PLEASE_CHECKOUT =
  "Bitte überprüfen Sie Ihre Bestellung, und wir werden sie abschließend bearbeiten.";
export const CART_GET_A_QUOTE = "Erhalten Sie ein Angebot";
export const CART_REMOVE = "Entfernen";
export const CART_CONSTRUCTOR_MODEL_TO_DETAILS_MAPPING = {
  solarCellTechnology: "Solarzelle Technologie",
  moduleSpecification: "Modulspezifikation",
  moduleColor: "Modulfarbe",
  backCover: "Hinterer Deckel",
  frameColor: "Rahmenfarbe",
  moduleDimension: "Modulabmessung",
  powerRange: "Leistungsbereich",
  applications: "Anwendungen",
};
export const CART_ADD_ONE_MORE_PANEL = "Fügen Sie ein weiteres Panel hinzu.";
export const CART_BAG_IS_EMPTY = "Der Warenkorb ist leer.";
export const CART_SUCCESSFULLY_ADDED = "Erfolgreich zum Warenkorb hinzugefügt";
export const CART_LOCALSTORAGE = "Warenkorb";

export const CHECKOUT_FILL_OUT = `Füllen Sie Ihre
Bestellinformationen aus`;
export const CHECKOUT_THANK_YOU = `Danke Ihnen.
Wir werden Sie 
bald kontaktieren`;
export const CHECKOUT_GO_TO_HOME_PAGE = "Zur Startseite";
export const CHECKOUT_FORM_FIELDS: FormFileds[] = [
  {
    formTitle: "Mein Name ist",
    placeholder: "Vor- und Nachname",
    name: "name",
    type: "input",
  },
  {
    formTitle: "Bitte kontaktieren Sie mich unter",
    placeholder: "Meine E-Mail-Adresse",
    name: "email",
    type: "input",
  },
  {
    formTitle: "Meine Telefonnummer",
    placeholder: "Telefonnummer",
    name: "phone",
    type: "phone",
  },
  {
    formTitle: "Ich habe",
    placeholder: "einen Kommentar oder eine Frage, usw.",
    name: "comment",
    type: "textarea",
  },
];
export const CHECKOUT_SEND_REQUEST = "Anfrage senden";

export const CONSULT_READY_TO_CONSULT = `Hallo! Wir sind bereit,
Sie zu beraten.`;
export const CONSULT_AGREEMENT =
  "Ich stimme der Verarbeitung personenbezogener Daten zu.";

export const CONSULT_FORM_FIELDS: FormFileds[] = [
  {
    formTitle: "Mein Name ist",
    placeholder: "Vor- und Nachname",
    name: "name",
    type: "input",
  },
  {
    formTitle: "Ich bin interessiert an",
    name: "interest",
    type: "picker",
  },
  {
    formTitle: "Kapazität",
    placeholder: "kW",
    name: "capacity",
    type: "input",
  },
  {
    formTitle: "Bitte kontaktieren Sie mich unter",
    placeholder: "Meine E-Mail-Adresse",
    name: "email",
    type: "input",
  },
  {
    formTitle: "Meine Telefonnummer",
    placeholder: "Telefonnummer",
    name: "phone",
    type: "phone",
  },
  {
    formTitle: "Ich habe",
    placeholder: "einen Kommentar oder eine Frage, usw.",
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
  [FORMS_FIELDS.budget]: ["$1…5k", "$5…10k", "$10…20k", "$20…50k", "> $50k"],
  [FORMS_FIELDS.interest]: ["installation", "partnerschaft", "investitionen"],
};

export const ABOUT_SUSTAINABLE = `Nachhaltig
Seit 2003`;
export const ABOUT_COMPANY_FOUNDATION =
  "Die AE Solar TIER1 Company wurde von Dr. Alexander Maier und seinen Brüdern in Königsbrunn, Deutschland, gegründet. AE Solar ist eine preisgekrönte führende Marke in der erneuerbaren Energiewirtschaft und bietet seit 2003 hochwertige neue Produkte und Dienstleistungen im Bereich erneuerbarer Energien an.";
export const ABOUT_COMPANY_FOUNDATION_WORDS_TO_HIGHLIGHT = [
  "wurde",
  "AE Solar ist eine",
  "preisgekrönte führende Marke in der erneuerbaren Energiewirtschaft",
  "und bietet seit 2003",
];

export const ABOUT_BUSINESS = "Geschäftskarte";
export const ABOUT_MAP = "Wo ist unsere Energie";
export const ABOUT_MAP_DESIGNATIONS = [
  {
    icon: "germany.svg",
    designation: "Hauptquartier",
    location: ["Königsbrunn,", "Deutschland"],
  },
  {
    icon: "office.svg",
    designation: "Niederlassung",
    location: ["Georgia", "Brasil", "Colombia"],
  },
  {
    icon: "base.svg",
    designation: "Fertigungsstandort",
    location: ["Turkey", "China"],
  },
  {
    icon: "distributor.svg",
    designation: "Verteiler",
    location: ["Rund um die Welt"],
  },
];
export const ABOUT_OUR_HISTORY = "Unsere Geschichte";
export const ABOUT_THROUGH = "Durch die Jahre";

export const COOKIES_AESOLAR = "Cookies auf AESolar";
export const COOKIES_WE_USE_COOKIES =
  "Wir verwenden Cookies und andere Tracking-Technologien, um Ihr Surferlebnis auf unserer Website zu verbessern, personalisierte Inhalte und zielgerichtete Anzeigen anzuzeigen, den Website-Verkehr zu analysieren und zu verstehen, woher unsere Zielgruppen kommen. Um mehr zu erfahren oder sich abzumelden, lesen Sie unsere Cookie-Richtlinie. Bitte lesen Sie auch unsere Datenschutzerklärung und Nutzungsbedingungen, die ab dem 20. Dezember 2019 in Kraft getreten sind.";
export const COOKIES_LINKS = [
  "Cookie-Richtlinie",
  "Datenschutzerklärung",
  "Nutzungsbedingungen",
];
export const COOKIES_MATCH_TEXT_WITH_LINK = {
  "Cookie-Richtlinie": "policy",
  Datenschutzerklärung: "privacy",
  Nutzungsbedingungen: "terms",
};
export const COOKIES_BY_CHOOSING =
  "Durch die Auswahl von 'Ich akzeptiere' stimmen Sie unserer Verwendung von Cookies und anderen Tracking-Technologien zu.";
export const COOKIES_I_ACCEPT = "Ich akzeptiere";
export const COOKIES_I_DO_NOT_ACCEPT = "Ich akzeptiere nicht";
export const COOKIES_USER_CONSENT_FLAG = "cookieConsentIsTrue";

export const DOCUMENTS_DOCUMENTS_HEADING = "Dokumente";
export const DOCUMENTS_YOU_NEED_TO_KNOW = "Sie müssen wissen";
export const DOCUMENTS_CATEGORIES = "Kategorien";
export const DOCUMENTS_SEARCH = "Suche";
export const DOCUMENT_SUBCATEGORIES_SPLITTER = "$";
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
        linkTitle: "Firmenprofil 2024",
        link: "/documents/presentations/Company_Profile_EN_2024_JAN_v1.pdf",
      },
      {
        linkTitle: "AESOLAR HSF Präsentation",
        link: "/documents/presentations/AE-Solar-HSF-Introduction-light.pdf",
      },

      {
        linkTitle: "Dr.Hamed Hanifi AESOLAR TERRA",
        link: "/documents/presentations/Dr-Hamed-Hanifi_AESOLAR_TERRA_.pdf",
      },

      {
        linkTitle: "Fraunhofer HSF Präsentation",
        link: "/documents/presentations/Fraunhofer_HSF_Report_Presentation_2018.pdf",
      },

      {
        linkTitle: "Fallstudie zur Hot-Spot-Gebühr",
        link: "/documents/presentations/Hot-Spot-Fee-case-study-2.pdf",
      },
      {
        linkTitle: "AESOLAR Smart Hot-Spot Free Präsentation (EN)",
        link: "/documents/presentations/HSF-Presentation_04-1.pdf",
      },
      {
        linkTitle: "AESOLAR Smart Hot-Spot Free Präsentation (PT)",
        link: "/documents/presentations/HSF_Portuguese-1.pdf",
      },
      {
        linkTitle: "Produktkatalog",
        link: "/documents/presentations/PRODUCT-CATALOGUE_OCT.pdf",
      },
      {
        linkTitle: "Herstellungsprozess",
        link: "/documents/presentations/Production-process.pdf",
      },
    ],
  },
  {
    category: "Technische Daten",
    type: "SubCategories",
    subCategories: [
      {
        category: "Datenblätter",
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
        category: "Installationsanleitung",
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
  // {
  //   category: "Technische Daten",
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
  //   category: "Garantie",
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

export const DOCUMENTS_FAQ_HAVE_A_QUESTION = "Eine Frage?";
export const DOCUMENTS_FAQ_WE_HAVE_SOLUTIONS = "Wir haben Lösungen";
export const DOCUMENTS_FAQ_FILES = [
  {
    category: "AESOLAR Unternehmens- und Produktübersicht",
    data: [
      {
        question: "Was bedeutet TIER 1?",
        answer:
          "Die Rangliste von Bloomberg New Energy Finance (BNEF) ermöglicht eine transparente Unterscheidung zwischen den zahlreichen PV-Herstellern auf dem Markt. Der Titel 'Tier-1-Hersteller' ist eine der höchsten Auszeichnungen in der Branche.",
      },
      {
        question: "Ist AESOLAR als TIER 1 gelistet?",
        answer: "Ja",
      },
      {
        question: "Welche Module produziert AESOLAR?",
        answer:
          "AESOLAR bietet eine breite Palette von Solarmodulen an, darunter monokristalline, polykristalline, PERC-, TOPCon- und HJT-Module.",
      },
      {
        question: "Was ist die Produktionskapazität von AESOLAR?",
        answer:
          "Unsere jährliche Produktionskapazität beträgt 2 Gigawatt, mit Expansionsplänen für die Zukunft.",
      },
      {
        question: "Wo produziert AESOLAR?",
        answer:
          "Unsere Produktionsstätten befinden sich in China und der Türkei, ergänzt durch geplante Produktionsstätten in Deutschland.",
      },
      {
        question: "Warum AESOLAR-Module kaufen?",
        answer:
          "AESOLAR-Module zeichnen sich durch hohe Qualität, Effizienz, Zuverlässigkeit, ausgezeichnete Garantiebedingungen und herausragenden Kundenservice aus.",
      },
      {
        question:
          "Wie unterscheidet sich die Qualität von AESOLAR von anderen Herstellern der TIER-1-Kategorie?",
        answer:
          "AESOLAR unterscheidet sich von anderen Herstellern der TIER-1-Kategorie durch unsere fortschrittliche Technologie, strenge Qualitätskontrollen und Innovation. Dies rechtfertigt den höheren Preis unserer Produkte, der eine überlegene Leistung und Haltbarkeit widerspiegelt.",
      },
      {
        question: "Produziert AESOLAR Zellen?",
        answer:
          "Nein, AESOLAR produziert keine Solarzellen selbst. Wir bieten jedoch ausschließlich eine breite Palette von Solarzellen aller Technologien an, aus denen unsere neuesten und fortschrittlichsten Module resultieren.",
      },
      {
        question: "Warum haben Sie einen Eisbären als Maskottchen?",
        answer:
          "Der Eisbär symbolisiert unser Engagement für den Umweltschutz und den Kampf gegen den Klimawandel. Er steht für unsere Hingabe zur Nachhaltigkeit und erneuerbaren Energien.",
      },
    ],
  },
  {
    category: "Produktspezifikationen und Technologien",
    data: [
      {
        question: "Was ist PERC?",
        answer:
          "Passivated Emitter and Rear Cell ist eine Technologie, die entwickelt wurde, um die Effizienz von Solarzellen zu verbessern.",
      },
      {
        question: "Was ist TOPCon?",
        answer:
          "Tunneloxid passivierter Kontakt (TOPCon) ist eine fortschrittliche Technologie, die darauf abzielt, die Effizienz und Lebensdauer von Solarzellen zu verbessern.",
      },
      {
        question: "Was ist HJT??",
        answer:
          "Die Heterojunction-Technologie kombiniert monokristallines und amorphes Silizium, um die Effizienz zu steigern.",
      },
      {
        question: "Was ist BIPV?",
        answer:
          "Gebäudeintegrierte Photovoltaik bezieht sich auf die Integration von Solartechnologie in Gebäudestrukturen.",
      },
      {
        question: "Was bedeutet PVT?",
        answer:
          "Photovoltaisch thermisch bezeichnet die Kombination von photovoltaischer und thermischer Energieerzeugung, wie sie in unserer Neptun-Serie zu sehen ist.",
      },
      {
        question: "Gibt es farbige Module?",
        answer:
          "Ja, wir bieten farbige Module an, um ästhetische Anforderungen zu erfüllen.",
      },
      {
        question: "Was bedeutet schwache Licht- und Niedertemperaturleistung?",
        answer:
          "Diese Begriffe beschreiben die Leistung von Solarmodulen unter Bedingungen mit wenig Sonnenlicht und bei niedrigen Temperaturen. AESOLAR-Module sind so konzipiert, dass sie auch unter solchen Bedingungen effizient arbeiten können.",
      },
    ],
  },
  {
    category: "Kauf und Verfügbarkeit",
    data: [
      {
        question: "Wo kann ich AESOLAR-Module kaufen?",
        answer:
          "Unsere Module sind über ein Netzwerk von Distributoren und Händlern erhältlich. Bitte kontaktieren Sie uns direkt für weitere Informationen.",
      },
    ],
  },
  {
    category: "Marktstrategie und Partnerschaften",
    data: [
      {
        question: "Was ist Ihre Marktstrategie?",
        answer:
          "Unsere Strategie konzentriert sich darauf, hochwertige Solarmodule anzubieten, starke Partnerschaften aufzubauen und sich auf Innovation und Kundenservice zu konzentrieren.",
      },
      {
        question: "Wie viele Vertriebspartner haben Sie pro Land?",
        answer:
          "Die Anzahl der Vertriebspartner variiert je nach Marktvolumen und Dynamik.",
      },
      {
        question:
          "Wie können wir unseren Marktanteil schützen, wenn wir Ihr Vertriebspartner werden?",
        answer:
          "Durch exklusive Vertriebsgebiete, Marketingunterstützung und Produktschulungen bieten wir unseren Partnern die Möglichkeit, ihren Marktanteil effektiv zu schützen und auszubauen.",
      },
    ],
  },
  {
    category: "Allgemeine Informationen über Solarmodule",
    data: [
      {
        question: "Was ist ein Solarmodul und wie funktioniert es?",
        answer:
          "Ein Solarmodul wandelt Sonnenlicht mithilfe des photovoltaischen Effekts in Elektrizität um.",
      },
      {
        question: "Wie lange halten Solarmodule?",
        answer:
          "Typischerweise 25 bis 30 Jahre, wobei die Effizienz im Laufe der Zeit leicht abnimmt.",
      },
      {
        question: "Wie viel kosten Solarmodule?",
        answer: "Die Kosten variieren je nach Größe, Typ und Hersteller.",
      },
      {
        question: "Können Solarmodule bei jedem Wetter Energie erzeugen?",
        answer:
          "Ja, auch bei bewölktem Wetter können Solarmodule Energie erzeugen, obwohl die Effizienz bei direktem Sonnenlicht höher ist.",
      },
      {
        question:
          "Brauche ich eine Genehmigung, um Solarmodule zu installieren?",
        answer:
          "Oft ist eine Genehmigung erforderlich, je nach den örtlichen Vorschriften.",
      },
      {
        question:
          "Wie wirkt sich die Installation von Solarmodulen auf den Wert meines Hauses aus?",
        answer:
          "Die Installation kann den Wert eines Hauses erhöhen, insbesondere durch verbesserte Energieeffizienz.",
      },
      {
        question: "Wie umweltfreundlich sind Solarmodule?",
        answer:
          "Solarmodule sind äußerst umweltfreundlich, da sie erneuerbare Energie nutzen und keine Treibhausgase produzieren.",
      },
      {
        question: "Kann ich Solarmodule selbst installieren?",
        answer:
          "Die Installation ist möglich, aber eine professionelle Installation wird empfohlen.",
      },
      {
        question: "Wie wartungsintensiv sind Solarmodule?",
        answer:
          "Solarmodule erfordern nur geringen Wartungsaufwand, was sie zu einer praktischen Lösung für nachhaltige Energie macht.",
      },
    ],
  },
];
export const DOCUMENTS_FILTER = "Filter";
export const DOCUMENTS_NO_RESULT = "Kein Ergebnis für: ";
export const DOCUMENTS_RESET = "Zurücksetzen";

export const DOCUMENTS_IMPRINT_INFO_IMPRINT = "Impressum";
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
export const DOCUMENTS_IMPRINT_INFO_CONTACTS = "Kontakte";
