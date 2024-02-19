export async function generateMetadata() {
  const title = `AE-Solar | Solutions`;
  const description = `AE-Solar | Discover AESOLAR–Your Partner for a Sustainable Future`;

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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
