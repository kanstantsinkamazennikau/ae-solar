import { SubMenuItemsProps } from "@/app/components/common/Navigation/types";
import Link from "next/link";

export default function SubMenuItems({
  subMenuArray,
  onLinkClick,
}: SubMenuItemsProps) {
  return (
    <ul className="bg-white p-5 flex flex-col">
      {subMenuArray.map(({ url, text }) => (
        <li className="text-sm text-gray-600 my-2.5" key={text}>
          <Link
            href={url}
            className="flex items-center text-base hover:text-primary"
            onClick={onLinkClick}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
