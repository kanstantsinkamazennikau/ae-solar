import { HTMLAttributes, InputHTMLAttributes } from "react";

export interface BasicWidthContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  styles?: string;
}

export default function BasicWidthContainer({
  children,
  styles,
  ...props
}: BasicWidthContainerProps) {
  return (
    <div className={`max-w-[1360px] w-full px-5 ${styles ?? ""}`} {...props}>
      {children}
    </div>
  );
}
