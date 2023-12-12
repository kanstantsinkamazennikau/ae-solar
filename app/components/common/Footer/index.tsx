import { FooterCategory } from "@/app/components/common/Footer/FooterCategory";
import PolicyLink from "@/app/components/common/Footer/PolicyLink";
import Logo from "@/app/components/common/Logo";
import {
  FOOTER_COPYRIGHT,
  FOOTER_LINKS_ARRAY,
  POLICY_LINKS,
} from "@/app/utils/constants";

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
