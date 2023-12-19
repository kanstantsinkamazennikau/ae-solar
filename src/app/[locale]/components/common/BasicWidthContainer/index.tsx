export default function BasicWidthContainer({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <div className={`max-w-[1360px] w-full px-5 ${styles ?? ""}`}>
      {children}
    </div>
  );
}
