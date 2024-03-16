import { Model } from "@/app/[locale]/context/constructorContext";
import { ProductBentofoxes } from "@/app/[locale]/products/[id]/components/Customization/types";

export const PRODUCT_NAVIGATION = [
  {
    title: "Einführung",
    link: "introduction",
    position: "start",
  },
  {
    title: "Vorteile",
    link: "benefits",
    position: "start",
  },
  {
    title: "Bau",
    link: "construction",
    position: "start",
  },
  {
    title: "Abschluss",
    link: "conclusion",
    position: "start",
  },
];
export const PRODUCT_OVERVIEW = "Überblick:";
export const PRODUCT_PANEL_TITLES = {
  Aurora:
    "Das Licht der Sonne umarmen: Passivierte Emitter- und Rückseitenzellen (PERC) Technologie für überlegene Solarmodule",
  Comet:
    "Die Kraft der Sonne nutzen: Heterojunction-Technologie (HJT) für fortschrittliche Solarmodule",
  Meteor:
    "Entfesseln Sie das Potenzial der Sonne: Tunnel Oxide Passivated Contact (TOPCon) Technologie für Hochleistungs-Solarmodule",
  Terra: "Die Kraft der Sonne nutzen: Solare Lösungen für alle",
  Neptune:
    "Maximierung der Effizienz von Solarenergie: Nutzung der Photovoltaik-Thermal (PVT) Hybrid-Technologie für verbesserte Solarmodule",
  ShadeStar:
    "Kampf gegen Schatten: Smart-Cell-Technologie für innovative Solarmodule",
};
export const PRODUCT_PANEL_TECHNOLOGIES_AND_DESCRIPTIONS = {
  Aurora: {
    technology: `PERC: Führende Solartechnologie`,
    description: `PERC ist eine wegweisende Entwicklung in der Photovoltaik-Technologie, die die Leistung und Effizienz herkömmlicher Solarzellen verbessert. Sie führt eine zusätzliche Schicht auf der Rückseite einer herkömmlichen Solarzelle ein, eine Passivierungsschicht, die die Energieumwandlung verbessert, indem sie Licht einfängt, das sonst verloren gehen würde.
    Diese geniale Struktur optimiert die Leistung der Zelle und liefert hohe Umwandlungseffizienzen, die über herkömmlichen Solarzellen liegen.`,
  },
  Meteor: {
    technology: `Entfaltung von TOPCon`,
    description: `TOPCon ist ein innovativer Schritt nach vorne in der Photovoltaik, der die Kluft zwischen den Grenzen herkömmlicher Solarzellen und dem energiereichen Potenzial der Sonne überbrückt.
    Bei dieser Technologie wird eine dünne Schicht passivierenden Materials wie Siliziumdioxid oder Aluminiumoxid auf den kristallinen Silizium (c-Si)-Wafer aufgebracht, gefolgt von einer stark dotierten polykristallinen Siliziumschicht. Diese geniale Anordnung verbessert erheblich die Leistung und Effizienz der Solarzelle.`,
  },
  Comet: {
    technology: `Entfaltung von TOPCon`,
    description: `Die am häufigsten vorkommende, erneuerbare und kostenlose Energiequelle unseres Planeten liegt in unserem eigenen Stern - der Sonne. Solarenergie ist sauber, grün und umweltfreundlich. Aber wie erfassen wir am besten diese reichhaltige Ressource? Die Antwort liegt in fortschrittlichen Solartechnologien. Eine solche fortgeschrittene Technologie ist die Heterojunction-Technologie (HJT).`,
  },
  ShadeStar: {
    technology: `Smart Cell: Licht im Dunkeln`,
    description: `Smart Cells sind eine innovative Lösung in der Photovoltaik-Technologie, die auf eine gleichbleibende Leistung und Widerstandsfähigkeit unter teilweise beschatteten Bedingungen Wert legt.
    Durch die Integration einer Bypass-Diode für jede einzelne Solarzelle und drei zusätzliche Bypass-Dioden im Anschlusskasten sind Smart Cell-Module darauf ausgelegt, teilweise Beschattung ohne signifikanten Leistungsverlust zu überstehen.`,
  },
  Neptune: {
    technology: `PVT-Hybridtechnologie: Entfesselung von Doppelleistung`,
    description: `Die Brillanz der PVT-Hybridtechnologie liegt in ihrem dualen Ansatz, der photovoltaische (PV) und thermische Elemente in einem einzigen Modul kombiniert. Diese geniale Technologie nutzt Sonnenlicht, um Strom zu erzeugen, und verwendet Restwärme für thermische Anwendungen wie Raumheizung oder Warmwasser.
    Sie stellt eine neue Ära in der Solarenergie dar und bietet eine überragende Leistung, die weit über die herkömmlicher Solarmodule hinausgeht.`,
  },
  Terra: {
    technology: `Agrivoltaik – Energie kultivieren`,
    description: `Wir bringen Solarenergie auf aufregende Weise in den Alltag, so dass sie für Bauernhöfe, Städte und sogar um unsere Häuser herum funktioniert. Unsere intelligenten Designs helfen dabei, das Land besser zu nutzen und können Geld verdienen, indem sie beispielsweise den Anbau von Pflanzen mit der Nutzung von Sonnenlicht zur Energieerzeugung kombinieren.`,
  },
};
export const PRODUCT_INTRODUCTION = "Einführung";
export const PRODUCT_INTRODUCTION_DESCRIPTION = {
  Aurora: {
    title: "Vielfältige und dynamische Solarenergielösungen",
    description:
      "Wenn wir uns auf eine Zukunft zubewegen, in der nachhaltige Energie entscheidend ist, wenden wir uns der riesigen, erneuerbaren Energiequelle in unserem Kosmos zu - der Sonne. Die Nutzung von Solarenergie ist eine saubere, umweltfreundliche und nachhaltige Lösung. Der Schlüssel zur Nutzung dieser unerschöpflichen Energie liegt in der Verwendung innovativer Solartechnologien. Eine solche bahnbrechende Technologie ist PERC (passivierte Emitter- und Rückseitenzelle).",
  },
  Comet: {
    title: "Führende Effizienz, bei jedem Wetter",
    description:
      "Die reichlichste, erneuerbare und kostenlose Energiequelle auf der Erde ist unser eigener Stern - die Sonne. Solarenergie ist sauber, grün und umweltfreundlich. Aber wie nutzen wir diese reichhaltige Ressource am besten? Die Antwort liegt in fortschrittlichen Solartechnologien. Eine solche fortschrittliche Technologie ist die Heterojunction-Technologie (HJT).",
  },
  Meteor: {
    title: "Effizienz und Langlebigkeit in Harmonie",
    description:
      "Die Sonne - eine unerschöpfliche, reichlich vorhandene und kostenlose Energiequelle - beschenkt unseren Planeten ständig mit ihren kraftvollen Strahlen. Die Kunst, diese reichhaltige Energiequelle auf umweltfreundliche und effiziente Weise zu nutzen, liegt in den Fortschritten der Solartechnologie. Eine solche bahnbrechende Technologie, die an Bedeutung gewinnt, ist die Tunneloxid passivierte Kontakt (TOPCon) Technologie.",
  },
  ShadeStar: {
    title: "Intelligente Energie für jedes Dach",
    description:
      "Die immense, endlose Energie unserer Sonne bietet eine unvergleichliche erneuerbare Energiequelle. Sie ist sauber, grün und vor allem nachhaltig. Doch die Nutzung dieser unendlichen Energie ist nicht ohne Herausforderungen. Eine solche Herausforderung ist der Einfluss von Beschattung. Wie überwinden wir dieses Hindernis? Der Schlüssel liegt in einer neuen Technologie namens Smart-Cell-Technologie.",
  },
  Neptune: {
    title: "Die Zukunft der hybriden Solarenergie",
    description:
      "Die Sonne, unser mächtiger himmlischer Fackelträger, ist eine unermessliche Energiequelle. Sie versorgt uns mit einem immensen Reichtum an erneuerbarer, umweltfreundlicher Energie. Die Nutzung dieses riesigen Potenzials erfordert den Einsatz innovativer Solartechnologien. Und an vorderster Front dieser bahnbrechenden Lösungen steht die Photovoltaik-Thermal (PVT) Hybridtechnologie.",
  },
  Terra: {
    title: "Solarenergie für alle Anwendungen",
    description:
      "Die Sonne ist ein riesiger Energieball, der niemals versiegt und uns saubere Energie liefert, die gut für den Planeten ist. Wir nutzen diese Energie auf fünf coole Arten: Landwirtschaft mit Solarmodulen (Agrivoltaik), Anbringung von Solarmodulen an städtischen Lärmschutzwänden (PVNBs), Nutzung von Solarenergie für Zäune, Bau großer Solaprojekte zur Versorgung vieler Haushalte und Schaffung von Parkplätzen, die Autos schützen und Solarenergie sammeln (Solare Carports). Jede Idee zeigt, wie Solarenergie in verschiedene Bereiche unseres Lebens integriert werden kann und hilft dabei, eine Zukunft aufzubauen, die sich ganz um erneuerbare Energien dreht.",
  },
};
export const PRODUCT_BENEFITS = "Vorteile";
export const PRODUCT_WHAT_ARE_ITS = "Was sind die besten ";
export const PRODUCTS_BEST_FEATURES = "Eigenschaften dieser Technologien";

export const PRODUCT_BENEFITS_FOR_PANELS = {
  Aurora: [
    {
      benefitTitle: "Hohe Effizienz",
      benefitDescription:
        "Dank eines überlegenen Temperaturkoeffizienten bieten PERC-Solarzellen eine verbesserte Stromerzeugung auch in Regionen mit hohen Umgebungstemperaturen, was sie zu einer energieeffizienten Lösung macht.",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "Ausgezeichnete Leistung bei diffuser Beleuchtung",
      benefitDescription:
        "PERC-Solarmodule sind darauf ausgelegt, auch bei diffuser Lichtbedingungen hervorragende Leistungen zu erbringen und so die Energieausbeute selbst an bewölkten oder bei geringer Sonneneinstrahlung zu maximieren.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Niedrigere Lichtinduzierte Degradation (LID)",
      benefitDescription:
        "Im Gegensatz zu konventionellen PV-Zellen weisen PERC-Module eine signifikant geringere LID auf, was eine längere Spitzenleistung und bessere Erträge im Laufe der Zeit gewährleistet.",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "Verringerte Leistungsverluste",
      benefitDescription:
        "Die einzigartige Passivierungsschicht in PERC-Zellen minimiert die Rekombination von Elektronen, was zu geringeren Leistungsverlusten und einer insgesamt höheren Zelleneffizienz führt.",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "Umweltfreundlich",
      benefitDescription:
        "Dank ihrer hohen Effizienz benötigen PERC-Module weniger Platz, um die gleiche Menge an Elektrizität wie konventionelle Module zu erzeugen, was zu einer nachhaltigeren und umweltfreundlicheren Umgebung beiträgt.",
      benefitPicture: "leaf.svg",
    },
  ],
  Comet: [
    {
      benefitTitle: "Hohe Effizienz",
      benefitDescription:
        "HJT-Solarzellen zeichnen sich durch ihre herausragende Effizienz aus. Sie haben einen ausgezeichneten Temperaturkoeffizienten, der sie für Regionen mit hohen Umgebungstemperaturen geeignet macht. Dies bedeutet eine höhere Stromerzeugung selbst an heißen sonnigen Tagen.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Überlegene Leistung in schattigen Bereichen",
      benefitDescription:
        "HJT-Solarmodule zeigen außergewöhnliche Leistungen unter schattigen Bedingungen. Ihre überlegene Bifokalität ermöglicht es ihnen, Sonnenlicht von beiden Seiten aufzunehmen und so die Energieausbeute zu maximieren.",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "Leistung bei schwachem Licht",
      benefitDescription:
        "Im Gegensatz zu konventionellen PV-Zellen erzielen HJT-Module auch bei schwachen Lichtverhältnissen weiterhin optimale Leistungen. Ob bedeckter Tag, Dämmerung oder Morgendämmerung - Ihre Solarstromerzeugung muss nicht pausieren.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Langfristige Stabilität",
      benefitDescription:
        "Die Verschmelzung von kristallinem und amorphem Silizium verleiht HJT-Modulen eine langfristige Stabilität und macht sie zu einer Investition, die den Test der Zeit besteht.",
      benefitPicture: "longTerm.svg",
    },
    {
      benefitTitle: "Umweltfreundlich",
      benefitDescription:
        "HJT-Module benötigen weniger Energie zur Herstellung als konventionelle Solarzellen, was sie zu einer umweltfreundlicheren Alternative macht.",
      benefitPicture: "leaf.svg",
    },
  ],
  Meteor: [
    {
      benefitTitle: "Hervorragende Effizienz",
      benefitDescription:
        "TOPCon-Solarzellen werden für ihre herausragende Effizienz anerkannt. Sie sind so konzipiert, dass Leistungsverluste minimiert werden, was zu hohen Umwandlungseffizienzen führt, die konventionelle Solarzellen übertreffen.",
      benefitPicture: "lightning.svg",
    },
    {
      benefitTitle: "Ausgezeichnete Leistung bei schwachem Licht",
      benefitDescription:
        "Mit TOPCon-Modulen bedeutet ein bewölkter Tag nicht das Ende der Stromerzeugung. Sie arbeiten auch in suboptimalen Lichtverhältnissen weiterhin effizient, was sie zu einer zuverlässigen Wahl bei wechselnden Wetterbedingungen macht.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Robuster Temperaturkoeffizient",
      benefitDescription:
        "TOPCon-Module bieten einen beeindruckenden Temperaturkoeffizienten und behalten auch in Gebieten mit hohen Temperaturen eine hohe Effizienz bei. Dies bedeutet, dass Ihre Solarstromerzeugung auch an den heißesten Tagen optimal bleibt.",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "Verbesserte Haltbarkeit",
      benefitDescription:
        "Die passivierte Kontaktierungsschicht in TOPCon-Modulen gewährleistet ein robustes Design und eine verbesserte Haltbarkeit. Diese Technologie ist äußerst beständig gegen Degradation und sorgt dafür, dass Ihre Investition zukunftssicher ist.",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "Umweltfreundlich",
      benefitDescription:
        "Der Herstellungsprozess von TOPCon-Modulen ist energieeffizient und trägt zu einem kleineren CO2-Fußabdruck im Vergleich zu konventionellen Solarzellen bei.",
      benefitPicture: "leaf.svg",
    },
  ],
  Terra: [
    {
      benefitTitle: "Hohe Effizienz",
      benefitDescription:
        "Mit einem überlegenen Temperaturkoeffizienten bieten TOPCon-Solarzellen eine verbesserte Stromerzeugung, selbst in Regionen mit hohen Umgebungstemperaturen, was sie zu einer energieeffizienten Lösung macht.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Hervorragende Leistung bei diffusen Lichtverhältnissen",
      benefitDescription:
        "TOPCon-Solarmodule sind darauf ausgelegt, auch bei diffusen Lichtverhältnissen außergewöhnlich gut zu funktionieren und die Energieausbeute selbst an bewölkten Tagen oder bei niedrigem Sonnenstand zu maximieren.",
      benefitPicture: "brightness.svg",
    },
    {
      benefitTitle: "Niedrige Lichtinduzierte Degradation (LID)",
      benefitDescription:
        "Im Gegensatz zu konventionellen PV-Zellen zeigen PERC-Module eine deutlich geringere LID, was eine längere Spitzenleistung und bessere Renditen im Laufe der Zeit gewährleistet.",
      benefitPicture: "lightning2.svg",
    },
    {
      benefitTitle: "Verringerte Leistungsverluste",
      benefitDescription:
        "Die einzigartige Passivierungsschicht in TOPCon-Zellen minimiert die Rekombination von Elektronen, was zu geringeren Leistungsverlusten und einer insgesamt höheren Zelleneffizienz führt.",
      benefitPicture: "shield.svg",
    },
    {
      benefitTitle: "Umweltfreundlich",
      benefitDescription:
        "Aufgrund ihrer hohen Effizienz benötigen TOPCon-Module weniger Platz, um die gleiche Menge Strom zu erzeugen wie konventionelle Module, was zu einer nachhaltigeren und grüneren Umwelt beiträgt.",
      benefitPicture: "leaf.svg",
    },
  ],
  Neptune: [
    {
      benefitTitle: "Doppelfunktion, dreifacher Gewinn",
      benefitDescription:
        "Das PVT-System ist eine Zwei-in-Eins-Lösung, die Sonnenlicht gleichzeitig in Strom umwandelt und Wärme einfängt. Diese doppelte Wirkung maximiert den Energieertrag und fördert die Effizienz.",
      benefitPicture: "double.svg",
    },
    {
      benefitTitle: "Das Beste aus der Wärme herausholen",
      benefitDescription:
        "Im Gegensatz zu Standard-PV-Zellen, die an Effizienz verlieren, wenn sie sich erwärmen, nutzen PVT-Module diese Wärme produktiv und verwandeln einen potenziellen Nachteil in einen starken Vorteil.",
      benefitPicture: "heat.svg",
    },
    {
      benefitTitle: "Hohe Effizienz in verschiedenen Klimazonen",
      benefitDescription:
        "Ob an einem kühlen Frühlingstag oder an einem heißen Sommernachmittag, PVT-Module liefern dank ihrer einzigartigen Fähigkeit, sowohl Sonnen- als auch thermische Energie zu nutzen, eine gleichbleibende Leistung.",
      benefitPicture: "temperature.svg",
    },
    {
      benefitTitle: "Langlebigkeit und Robustheit",
      benefitDescription:
        "Der kühlende Effekt des thermischen Systems auf die PV-Zellen in einem PVT-Modul erhöht die Lebensdauer und Leistung des Systems, was es zu einer zuverlässigen und langfristigen Investition macht.",
      benefitPicture: "shield2.svg",
    },
    {
      benefitTitle: "Umweltbewusst",
      benefitDescription:
        "Mit einem effizienten Design, das Abwärme reduziert und Sonnenenergie vollständig nutzt, verkörpern PVT-Module die Prinzipien nachhaltiger und grüner Energie.",
      benefitPicture: "leaf.svg",
    },
  ],
  ShadeStar: [
    {
      benefitTitle: "Beeindruckende Schattenbeständigkeit",
      benefitDescription:
        "Smart Cell Solar Module bieten außergewöhnliche Beständigkeit gegen teilweisen Schatten. Selbst wenn nur 50% des Moduls beschattet sind, verhindern Smart Cell Module den Leistungsverlust, der bei anderen PV-Systemen üblich ist.",
      benefitPicture: "performance.svg",
    },
    {
      benefitTitle: "Überragende Energieausbeute",
      benefitDescription:
        "Smart Cell Module zeichnen sich durch ihre Fähigkeit aus, auch unter anspruchsvollen Bedingungen eine hohe Leistung zu erbringen. Sie können unter teilweisen Schattenbedingungen eine um bis zu 80% höhere Energieproduktion erreichen.",
      benefitPicture: "power.svg",
    },
    {
      benefitTitle: "Erhöhte Installationskapazität",
      benefitDescription:
        "Die Smart Cell-Technologie ermöglicht es Ihnen, mehr Module auf begrenzter Dachfläche zu installieren. Dies bedeutet, dass Sie unter teilweisen Schattenbedingungen eine höhere Energieausbeute erzielen.",
      benefitPicture: "capacity.svg",
    },
    {
      benefitTitle: "Niedrigere Niveauebene der Energiekosten (LCOE)",
      benefitDescription:
        "Durch die Erhöhung der Energieausbeute pro Gesamtfläche maximieren Smart Cell Module nicht nur Ihre Energieproduktion, sondern reduzieren auch signifikant die Niveauebene der Energiekosten.",
      benefitPicture: "costEnergy.svg",
    },
    {
      benefitTitle: "Unvergleichliche Haltbarkeit",
      benefitDescription:
        "Durch umfangreiche Tests haben Smart Cell Module gezeigt, dass sie selbst nach 10.000 Zyklen des Umschaltens von negativer/positiver Vorspannung keinen Leistungsverlust aufweisen.",
      benefitPicture: "shield2.svg",
    },
  ],
};
export const PRODUCT_CREATE_YOUR = "Schaffe deinen";
export const PRODUCT_OWN_SPACE = "eigenen Raum";

export const PRODUCT_CONCLUSION = "Schlussfolgerung";
export const PRODUCT_CHOOSE_READY_MODULES = `Wählen Sie 
Ihr ideales Produkt`;
export const PRODUCT_CONCLUSION_FOR_PANELS = {
  Aurora: `Bei AESOLAR sind wir unerschütterlich in unserem Engagement für eine nachhaltige Zukunft. Unsere PERC-Solarmodule repräsentieren mehr als nur ein Produkt; sie symbolisieren unsere Hingabe an fortschrittliche Technologie, außergewöhnliche Qualität und eine sauberere, grünere Welt.
  Wir laden Sie ein, Teil dieser Solarrevolution zu sein und die Kraft der Sonne auf effizienteste Weise mit PERC zu nutzen.`,
  Meteor: `Bei GreenSolar sind wir bestrebt, eine nachhaltige Zukunft voranzutreiben. Unsere TOPCon-Solarmodule symbolisieren unser Engagement für wegweisende Technologie, außergewöhnliche Qualität und das Versprechen einer saubereren, helleren Welt. Stehen Sie mit uns in dieser Solarrevolution, in der wir die Kraft der Sonne mit unübertroffener Effizienz nutzen.
  Wir laden Sie ein, Teil dieser Solarrevolution zu sein und die Kraft der Sonne auf effizienteste Weise mit TOPCon zu nutzen.`,
  Comet: `Bei AESOLAR sind wir entschlossen, eine nachhaltige Zukunft zu ermöglichen. Unsere HJT-Solarmodule sind nicht nur ein Produkt, sondern verkörpern unser Engagement für überragende Technologie, außergewöhnliche Qualität und das Versprechen einer saubereren, grüneren Welt. Schließen Sie sich uns in dieser Solarrevolution an, in der wir die Kraft der Sonne auf effizienteste Weise mit HJT einfangen.
  Wir laden Sie ein, Teil dieser Solarrevolution zu sein und die Kraft der Sonne auf effizienteste Weise mit PERC zu nutzen.`,
  Terra: `Bei AESOLAR streben wir nach einer Zukunft, in der saubere, erneuerbare Energie für alle zugänglich ist. Unsere Agrivoltaik-Systeme, photovoltaischen Lärmschutzwände und Solarzäune repräsentieren unser Engagement für innovative Gestaltung, überragende Qualität und nachhaltiges Leben. Schließen Sie sich uns in dieser Solarrevolution an, in der wir die Kraft der Sonne auf kreative und effiziente Weise einfangen.
  Wir laden Sie ein, Teil dieser Solarrevolution zu sein und die Kraft der Sonne auf effizienteste Weise mit PERC zu nutzen.`,
  ShadeStar: `Wir bahnen eine hellere, nachhaltigere Zukunft an. Unsere Smart-Cell-Solarmodule verkörpern unser Engagement für hochmoderne Technologie, überragende Qualität und nachhaltige Energielösungen. Seien Sie Teil dieser Revolution und bringen Sie mit unserer Smart-Cell-Technologie Licht in die Schatten. Lassen Sie uns die Kraft der Sonne intelligenter und widerstandsfähiger nutzen und Licht in jede Ecke unserer Welt bringen.
  Wir laden Sie ein, Teil dieser Solarrevolution zu sein und die Kraft der Sonne auf effizienteste Weise mit PERC zu nutzen.`,
  Neptune: `Wir sind unerschütterlich in unserem Engagement für eine nachhaltige, energieeffiziente Zukunft. Unsere PVT-Hybrid-Solarmodule symbolisieren nicht nur ein Produkt, sondern auch unsere Hingabe an wegweisende Technologie, überragende Qualität und das Versprechen einer saubereren, nachhaltigeren Welt. Schließen Sie sich uns in dieser Transformation der Solarenergie an, in der wir die Kraft der Sonne auf umfassendste Weise mit PVT-Hybridtechnologie erschließen.
  Wir laden Sie ein, Teil dieser Solarrevolution zu sein und die Kraft der Sonne auf effizienteste Weise mit PERC zu nutzen.`,
};
export const PRODUCT_DEFAULT_MODEL_PARAMS = {
  Aurora: {
    model: "Aurora",
    solarCellTechnology: "Gallium-doped Mono c-Si PERC, Half-cut cells",
    moduleSpecification: "AE650ME-132-650Wp",
    moduleColor: "Transparent / Schwarz / Weiß",
    backCover: "2,0 mm dickes, hochtransparentes Solarglas, gehärtet",
    frameColor: "Weiße Rückseitenfolie",
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
    moduleColor: "Transparent / Schwarz / Weiß",
    backCover: "2,0 mm dickes weißes glasiertes Glas, gehärtet",
    frameColor: "Rückseitenfolie",
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
    moduleColor: "Transparent / Schwarz / Weiß",
    backCover: "Weiße Rückseitenfolie",
    frameColor: "Rückseitenfolie",
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
    moduleColor: "Transparent / Schwarz / Weiß",
    backCover: "2,0 mm dickes, hochtransparentes Solarglas, gehärtet",
    frameColor: "Rückseitenfolie",
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
    moduleColor: "Transparent / Schwarz / Weiß",
    backCover: "2,0 mm dickes, hochtransparentes Solarglas, gehärtet",
    frameColor: "Rückseitenfolie",
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
    moduleColor: "Transparent / Schwarz / Weiß",
    backCover: "White Backsheet",
    frameColor: "Rückseitenfolie",
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
        shortDescription: `Hervorragende Leistung
        in diffusen Lichtverhältnissen`,
        gridArea: "a",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sizes.png')",
        shortDescription: `Größenvielfalt:
        klein, mittel, groß`,
        gridArea: "b",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Geeignet für extreme Bedingungen",
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
          title: `Maßgeschneidertes 
            Material und Leistung`,
          description:
            "Passen Sie Ihre Energielösung mit maßgeschneiderten Materialien und Leistungsoptionen an, um eine präzise Ausrichtung auf Ihre spezifischen Anforderungen und Präferenzen zu gewährleisten.",
        },
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/cells2.png')",
        shortDescription: `Fortgeschrittene Zellen:
        PERC-Technologie`,
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
        shortDescription: "Geeignet für extreme Bedingungen",
        gridArea: "b",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sizes2.png')",
        shortDescription: `Farbvielfalt:
        Breites Spektrum an Auswahlmöglichkeiten`,
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/nType.png')",
        shortDescription: `N-Typ-Heterojunction:
        Fortgeschrittene Solartechnologie`,
        gridArea: "d",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/snow.png')",
        shortDescription: `Klimatauglichkeit:
        Entwickelt für raue Umgebungen`,
        gridArea: "e",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/lowLight.png')",
        shortDescription: `Leistung bei schwachem Licht:
        Hoher Ertrag bei gedämpften Bedingungen`,
        gridArea: "f",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/temperature.png')",
        shortDescription: `Temperaturstabilität:
        Sehr niedriger Koeffizient`,
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
        shortDescription: `TOPCon N-Typ:
        Überlegene Effizienztechnologie`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/panels2.png')",
        longDescription: {
          title: `Umfassende 
          Anpassungsmöglichkeiten`,
          description:
            "Finden Sie die perfekte Farbkombination, um Ihren Inhalt mit austauschbaren Hintergründen und Rahmen zu ergänzen.",
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
        shortDescription: "Ideal für unterschiedliche Wetterbedingungen",
        gridArea: "d",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/frame.png')",
        shortDescription: `Verschiedene
        Rahmenfarben`,
        gridArea: "e",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/performance.png')",
        shortDescription: `Robuste Leistung:
        Geringe Degradation, hohe Haltbarkeit`,
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
        shortDescription: `Bifaziale Effizienz:
        Optimale Energieerfassung`,
        gridArea: "a",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/flexibility.png')",
        shortDescription: `Anwendungsflexibilität:
        Ideal für verschiedene Installationen`,
        gridArea: "c",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/reliability.png')",
        longDescription: {
          title: `Langfristige Zuverlässigkeit:`,
          description:
            "Verlassen Sie sich auf eine konstante Leistung und Haltbarkeit mit minimaler Degradation, die einen zuverlässigen Betrieb über die Zeit gewährleistet.",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/edgeEfficiency1.png')",
        shortDescription: `N-Typ TOPCon Technologie:
        Modernste Effizienz`,
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },

      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: "Ideal für unterschiedliche Wetterbedingungen",
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
        shortDescription: `Neptune: Die Zukunft 
        der Hybrid-Solarenergie`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/electricity.png')",
        longDescription: {
          title: `Strom- und Wärmeerzeugung`,
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/edgeEfficiency.png')",
        longDescription: {
          title: `Etwa 70% 
          kombinierte Effizienz`,
          description:
            "Entdecken Sie überlegene Effizienz mit unserem Produkt, das eine beeindruckende kombinierte Effizienz von etwa 70% bietet und so eine optimale Leistung und Energieausbeute gewährleistet.",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/benefit.png')",
        shortDescription: `Wirtschaftlicher Nutzen: 
        Niedrige Langzeit-LCOE`,
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },

      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: `Vielseitige Nutzung: Effektiv in mehreren Anwendungen`,
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
        shortDescription: `Smarte Technologie: 
        Fortschrittliche Schattenresistenz`,
        gridArea: "a",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/resilence.png')",
        longDescription: {
          title: `Schattenresistenz`,
          description:
            "Gewährleisten Sie auch bei beschatteten Bedingungen eine gleichbleibend hohe Leistung mit dem widerstandsfähigen Design unseres Produkts, das eine konstante Effizienz unabhängig vom Schatten sicherstellt.",
        },
        gridArea: "b",
      },
      {
        type: "full",
        imageUrl: "url('/images/products/bentobox/rooftop.png')",
        longDescription: {
          title: `Dachoptimierung`,
          description:
            "Maximieren Sie den Platz auf Ihrem Dach mit dem optimierten Design unseres Produkts, das ideal für kompakte Bereiche ist und eine effiziente Nutzung begrenzten Raums gewährleistet.",
        },
        gridArea: "c",
      },
      {
        type: "half",
        imageUrl: "url('/images/products/bentobox/sustainable.png')",
        shortDescription: `Nachhaltige Lösung:
        Umweltfreundliches Design`,
        gridArea: "d",
      },
      {
        type: "warranty",
        gridArea: "e",
      },
      {
        type: "quarter",
        imageUrl: "/images/products/bentobox/weather.svg",
        shortDescription: `Wirtschaftliche Leistung: 
        Niedrige LCOE`,
        gridArea: "f",
      },
    ],
  },
};
export const PRODUCT_CONCLUSION_TABLE_ADD = "Hinzufügen";
export const PRODUCT_CONCLUSION_TABLE_ADD_MOBILE = "In den §enkorb legen";
export const PRODUCT_CONCLUSION_TABLE_HEADERS = [
  `Modul
  name`,
  `Zellen
  typ`,
  `Modul
  gestaltung`,
  `Leistungs
  bereich, W`,
  `Modul
  farbe`,
  `Rahmen
  farbe`,
  `Daten
  blätter`,
  ``,
];

export const PRODUCT_CONCLUSION_TABLE_MOBILE_CELL_TYPE = "Zellentyp";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_DESIGN = "Modulgestaltung";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_RANGE = "Leistungsbereich, W";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_MODULE_COLOR = "Modulfarbe";
export const PRODUCT_CONCLUSION_TABLE_MOBILE_FRAME_COLOR = "Rahmenfarbe";

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
  title: "Thermoröhren",
  description: "Röhren zur Sammlung von Sonnenenergie",
};
