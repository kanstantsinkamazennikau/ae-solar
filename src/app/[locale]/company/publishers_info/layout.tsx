import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout apiRoute="/publisher">{children}</ClientLayout>;
}
