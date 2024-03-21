import { Model } from "@/app/[locale]/context/constructorContext";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "AE Solar";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params: { id },
}: {
  params: { id: Model };
}) {
  const interSemiBold = fetch(
    new URL("../../fonts/Criteria CF/Criteria CF Medium.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

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
        AE Solar | {id}
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
