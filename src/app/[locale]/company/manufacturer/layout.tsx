export async function generateMetadata() {
  const title = `AE-Solar | Hersteller`;
  const description = `AE-Solar | Qualität, die jedes Mal geliefert wird.`;

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
