import ClientLayout from "@/app/[locale]/documents/components/ClientLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClientLayout apiRoute="/imprints/1">{children}</ClientLayout>;
}
