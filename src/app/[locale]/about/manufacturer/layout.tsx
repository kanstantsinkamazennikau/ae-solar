export async function generateMetadata() {
  const title = `AE-Solar | Manufacturer`;
  const description = `AE-Solar | Manufacturer Quality Delivered Everytime`;

  return {
    title,
    description,
    keywords: [],
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function ManufacturerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
