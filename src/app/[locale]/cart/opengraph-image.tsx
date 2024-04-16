import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { fetchAPI } from "@/app/[locale]/utils/fetch-api";
import { getOpengraphMetadata } from "@/app/[locale]/utils/getOpengraphMetadata";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AE Solar";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const interSemiBold = fetch(
    new URL("../fonts/Criteria CF/Criteria CF Medium.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const metadata = await getOpengraphMetadata(locale);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        AE Solar | {metadata?.opengraphCart}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
