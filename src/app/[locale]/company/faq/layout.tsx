import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}