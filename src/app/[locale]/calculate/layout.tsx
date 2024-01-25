import { Metadata } from "next";

const title = "AE-Solar | Constructor";
const description = "Create your own model";

export const metadata: Metadata = {
  title,
  description,
  keywords: [],
  metadataBase: new URL(
    `${
      process.env.NODE_ENV === "development"
        ? `http://${process.env.VERCEL_URL}`
        : `https://${process.env.VERCEL_URL}`
    }`
  ),
  openGraph: {
    title,
    description,
    type: "website",
  },
};

export default function CalculateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
