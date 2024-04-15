import I18nProvider from "@/app/[locale]/i18nProvider";
import Benefits from "@/app/[locale]/products/[id]/components/Benefits";
import Conclusion from "@/app/[locale]/products/[id]/components/Conclusion";
import { PanelsListResponseAttributes } from "@/app/[locale]/products/[id]/components/Conclusion/types";
import Customization from "@/app/[locale]/products/[id]/components/Customization";
import LayersAnimation from "@/app/[locale]/products/[id]/components/LayersAnimation";
import PanelTechnology from "@/app/[locale]/products/[id]/components/PanelTechnology";
import ProductsPanel from "@/app/[locale]/products/[id]/components/ProductsPanel";
import VideoIntroduction from "@/app/[locale]/products/[id]/components/VideoIntroduction";
import {
  PanelsListPrettyfiedResponse,
  ProductPageProps,
} from "@/app/[locale]/products/[id]/types";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import getLocale from "@/app/[locale]/utils/getLocale";

const getPanelsList = async (id: string) => {
  try {
    const path = `/modules`;
    const urlParamsObject = {
      filters: {
        techName: {
          techName: {
            $eq: id,
          },
        },
      },
      populate: "*",
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

const getTranslation = async (id: string) => {
  const locale = getLocale();
  const urlParamsObject = {
    locale,
  };

  const urlParamsObjectModule = {
    filters: {
      module: {
        techName: {
          $eq: id,
        },
      },
    },
    populate: "*",
    locale,
  };
  const pageTranslationApiPath = `/individuals`;
  const commonPath = `/common`;
  const responseData = await Promise.all([
    fetchAPI(pageTranslationApiPath, urlParamsObjectModule),
    fetchAPI(commonPath, urlParamsObject),
  ]);
  return responseData;
};

export default async function Page({ params: { id } }: ProductPageProps) {
  const panelsList = await getPanelsList(id);
  const [pageI18n, commonI18n] = await getTranslation(id);

  return (
    <I18nProvider
      translate={{
        ...pageI18n.data[0]?.attributes,
        ...commonI18n.data?.attributes,
      }}
    >
      <div className="flex flex-col items-center w-full overflow-hidden">
        <ProductsPanel id={id} />
        <PanelTechnology id={id} />
        <VideoIntroduction id={id} />
        <Benefits id={id} />
        <LayersAnimation id={id} />
        <Customization id={id} />
        <Conclusion id={id} panelsList={panelsList} />
      </div>
    </I18nProvider>
  );
}
