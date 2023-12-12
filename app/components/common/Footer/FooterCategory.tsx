import { FooterCategoryProps } from "@/app/components/common/Footer/types";
import Link from "next/link";

export function FooterCategory({ category, links }: FooterCategoryProps) {
  return (
    <div className="flex flex-col w-[200px]">
      <div className="text-dark-gray-900 text-2xl mb-6">{category}</div>
      {links.map((link) => (
        <Link href={link.toLowerCase()} className="text-base mb-4" key={link}>
          {link}
        </Link>
      ))}
    </div>
  );
}
