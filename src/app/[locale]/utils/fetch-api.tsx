import qs from "qs";
const url = `${process.env.NEXT_PUBLIC_STRAPI_URL_PROTOCOL}://${
  process.env.NEXT_PUBLIC_STRAPI_URL
}:${process.env.NEXT_PUBLIC_STRAPI_URL_PORT ?? ""}`;

const getStrapiURL = (path = "") => {
  return `${url || "http://localhost:1337"}${path}`;
};

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options: RequestInit = {}
) {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_PUBLIC_TOKEN}`,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;
    console.log(requestUrl);

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}

export function getStrapiMedia(url: string | null) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}
