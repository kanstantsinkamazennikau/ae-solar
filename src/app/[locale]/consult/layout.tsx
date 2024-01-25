import { Metadata } from "next";

const title = "AE-Solar | Contact Us";
const description = "We are ready to consult You";

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

export default function ConsultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
