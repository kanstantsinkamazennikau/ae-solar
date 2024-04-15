import Catalogue from "@/app/[locale]/catalogue/components/Catalogue";
import CatalogueHeroSection from "@/app/[locale]/catalogue/components/CatalogueHeroSection";
import PerfectlyAlignedOptions from "@/app/[locale]/catalogue/components/CatalogueHeroSection/PerfectlyAlignedOptions";
import I18nProvider from "@/app/[locale]/i18nProvider";
import { PanelsListResponseAttributes } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import { PanelsListPrettyfiedResponse } from "@/app/[locale]/products/[id]/types";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getPanelsList = async () => {
  try {
    const path = `/modules`;
    const urlParamsObject = {
      populate: "*",
      pagination: {
        pageSize: 100,
      },
    };
    const { data } = await fetchAPI(path, urlParamsObject);
    if (data.length) {
      return data.map(({ attributes }: PanelsListResponseAttributes) => ({
        model: attributes.model,
        powerRange: attributes.powerRange,
        moduleColor: attributes.moduleColor.data.attributes.color,
        moduleDimension: {
          ...attributes.moduleDimension,
        },
        links: attributes.links,
        frameColor: attributes.frameColor.data.attributes.color,
        cellType: attributes.cellType.data.attributes.cell,
        moduleDesign: attributes.moduleDesign.data.attributes.design,
        backCover: attributes.backCover.data.attributes.cover,
        applications: attributes.applications.data.attributes.application,
        techName: attributes.techName.data.attributes.techName,
      })) as PanelsListPrettyfiedResponse[];
    }
    return null;
  } catch (error) {
    return null;
  }
};

const getTranslation = async () => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };
  const pageTranslationApiPath = `/catalogue`;
  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObject),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function CataloguePage() {
  const panelsList = await getPanelsList();
  const [pageI18n, commonI18n] = await getTranslation();

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data?.attributes,
        ...commonI18n.data?.attributes,
      }}
    >
      <CatalogueHeroSection />
      <div className="relative">
        <PerfectlyAlignedOptions />
        <Catalogue panelsList={panelsList} />
      </div>
    </I18nProvider>
  );
}
