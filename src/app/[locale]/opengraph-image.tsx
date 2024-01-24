import { ImageResponse } from "next/og";

// Route segment config
// export const runtime = "edge";

// Image metadata
export const alt = "AE-Solar";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const criteriaMedium = fetch(
    new URL("./fonts/GTWalsheim/GTWalsheimPro-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <>
        <div
          tw="text-9xl bg-white font-sans"
          // style={{
          //   fontSize: 128,
          //   background: "white",
          //   width: "100%",
          //   height: "100%",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
          High-Quality
        </div>
        <div
          tw="text-9xl bg-white"
          // style={{
          //   fontSize: 128,
          //   background: "white",
          //   width: "100%",
          //   height: "100%",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
          High-Quality
        </div>
      </>
    ),
    // ImageResponse options

    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Criteria CF",
          data: await criteriaMedium,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
