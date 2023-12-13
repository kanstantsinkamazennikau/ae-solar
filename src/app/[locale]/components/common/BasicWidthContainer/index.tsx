export default function BasicWidthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-[1360px] w-full px-5">{children}</div>;
}
