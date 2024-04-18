import { fetchAPI } from "@/app/[locale]/utils/fetch-api";

export const getOpengraphMetadata = async (locale: string) => {
  try {
    const urlParamsObject = {
      //TODO
      // locale,
    };
    //TODO
    const metadataApiPath = `/metadatas/1`;
    const { data } = await fetchAPI(metadataApiPath, urlParamsObject);

    return data?.attributes;
  } catch (error) {
    return {};
  }
};
