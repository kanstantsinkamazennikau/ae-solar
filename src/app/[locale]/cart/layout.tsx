import { Metadata } from "next";

const title = "AE-Solar | Cart";
const description =
  "Ihre Modelle sind bereit für den nächsten Schritt. Bitte überprüfen Sie Ihre Bestellung und wir werden sie abschließen.";

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
