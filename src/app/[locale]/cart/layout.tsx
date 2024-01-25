import { Metadata } from "next";

const title = "AE-Solar | Cart";
const description =
  "Your models are ready for the next step. Please check out your order and we will finalize it.";

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

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
