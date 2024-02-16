export async function generateMetadata() {
  const title = `AE-Solar | Blog`;
  const description = `AE-Solar | Read Our Thoughts On the Blog`;

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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
