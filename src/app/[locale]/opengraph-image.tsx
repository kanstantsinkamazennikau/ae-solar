/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
const fs = require("fs").promises;

// const getCriteriaMedium = async () => {
//   const response = await fetch(
//     new URL(`${process.env.VERCEL_URL}/Criteria CF Medium.otf`)
//   );
//   const interSemiBold = await response.arrayBuffer();

//   return interSemiBold;
// };
export const runtime = "nodejs";
export const contentType = "image/png";

// Image generation
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="256"
          height="256"
          src={`${process.env.VERCEL_URL}/images/featuredProducts.png`}
          alt="image"
        />
        <div tw="text-9xl">
          German TIER1 Manufacturer of High-Quality Solar Panels
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // fonts: [
      //   {
      //     name: "Criteria CF",
      //     data: await getCriteriaMedium(),
      //     style: "normal",
      //     weight: 500,
      //   },
      // ],
    }
  );
}
