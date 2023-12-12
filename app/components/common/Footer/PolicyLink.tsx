import { PolicyLinkProps } from "@/app/components/common/Footer/types";
import Link from "next/link";

export default function PolicyLink({ link }: PolicyLinkProps) {
  return (
    <>
      <Link className="px-3" href={link.toLowerCase()}>
        {link}
      </Link>
      <div className="w-[1px] h-5 bg-dark-gray-700 inline-block"></div>
    </>
  );
}
