"use client";

import Button from "@/app/components/Button";
import Logo from "@/app/components/Logo";
import { CONTACT_US, NAV_LINKS_ARRAY } from "@/app/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  url: string;
  text: string;
  isDropdown: boolean;
}

function NavLink({ url, text }: NavLinkProps) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex py-2 items-center text-base ${
          path === url && "border-base-red border-b-2 border-solid"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function NavDropdown({ url, text }: NavLinkProps) {
  return (
    <li className="flex">
      <Link href={url} className="flex items-center text-base">
        {text}
      </Link>
    </li>
  );
}

export default function Navigation() {
  return (
    <nav className="flex h-[120px] items-center justify-between relative z-40 font-normal">
      <Logo />
      <ul className="flex gap-8">
        {NAV_LINKS_ARRAY.map((navLink) =>
          !navLink.isDropdown ? (
            <NavLink key={navLink.url} {...navLink} />
          ) : (
            <NavDropdown key={navLink.url} {...navLink} />
          )
        )}
      </ul>

      <Button
        label={CONTACT_US}
        onClick={() => console.log("contact us")}
        small
      />
    </nav>
  );
}
