import Logo from "@/app/components/common/Logo";
import {
  FOOTER_COPYRIGHT,
  FOOTER_LINKS_ARRAY,
  POLICY_LINKS,
} from "@/app/utils/constants";
import Link from "next/link";

interface FooterCategoryProps {
  category: string;
  links: string[];
}

interface PolicyLinkProps {
  link: string;
}

function FooterCategory({ category, links }: FooterCategoryProps) {
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

function PolicyLink({ link }: PolicyLinkProps) {
  return (
    <>
      <Link className="px-3" href={link.toLowerCase()}>
        {link}
      </Link>
      <div className="w-[1px] h-5 bg-dark-gray-700 inline-block"></div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="text-sm">
      <nav className="flex justify-between">
        <Logo />
        <div className="flex flex-wrap">
          {FOOTER_LINKS_ARRAY.map(({ category, links }) => (
            <FooterCategory key={category} category={category} links={links} />
          ))}
        </div>
      </nav>
      <hr className="bg-dark-gray-800 h-[1px] border-none mt-10 mb-3" />
      <div className="flex justify-between text-dark-gray-800 mb-5">
        {FOOTER_COPYRIGHT}
        <div className="flex last-of-type:[&>a]:pr-0 last-of-type:[&>div]:hidden">
          {POLICY_LINKS.map((link) => (
            <PolicyLink key={link} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
