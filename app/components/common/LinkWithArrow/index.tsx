import { ButtonWithArrowProps } from "@/app/components/common/LinkWithArrow/types";
import Image from "next/image";
import Link from "next/link";

export default function LinkWithArrow({ label, href }: ButtonWithArrowProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link className="text-base-red" href={href}>
        {label}
      </Link>
      <Image
        src="/images/redArrowRight.svg"
        alt="arrow"
        width={8}
        height={8}
        priority
      />
    </div>
  );
}
