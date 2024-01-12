"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import ContactInfo from "@/app/[locale]/components/common/Footer/ContactInfo";
import { FooterCategory } from "@/app/[locale]/components/common/Footer/FooterCategory";
import PolicyLink from "@/app/[locale]/components/common/Footer/PolicyLink";
import Logo from "@/app/[locale]/components/common/Logo";
import {
  FOOTER_COPYRIGHT,
  FOOTER_GERMAN_BRAND,
  FOOTER_LINKS_ARRAY,
  POLICY_LINKS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BasicWidthContainer>
        <footer className="text-sm pt-20 pb-5">
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="rotate-180"
          />
          <nav className="grid min-[650px]:grid-cols-[auto_auto_auto] min-[500px]:grid-cols-[auto_auto] min-[500px]:items-start gap-2 grid-cols-[auto]">
            <div className="flex gap-8 flex-col max-w-[203px] max-[500px]:max-w-full pb-3 z-10">
              <Logo />
              <p className="text-sm font-normal leading-[130%] font-walsheim text-[#747474]">
                {FOOTER_GERMAN_BRAND}
              </p>
            </div>

            <div className="flex min-[500px]:justify-center justify-start flex-wrap">
              {FOOTER_LINKS_ARRAY.map(({ category, links }) => (
                <FooterCategory
                  key={category}
                  category={category}
                  links={links}
                />
              ))}
            </div>
            <ContactInfo />
          </nav>
          <hr className="bg-dark-gray-800 h-[1px] border-none mt-10 mb-3" />
          <div className="flex justify-between text-dark-gray-800 mb-5 text-[10px] min-[550px]:flex-row flex-col">
            <div>{FOOTER_COPYRIGHT}</div>
            <div className="flex last-of-type:[&>a]:pr-0 last-of-type:[&>div]:hidden min-[550px]:flex-row flex-col">
              {POLICY_LINKS.map((link) => (
                <PolicyLink key={link} link={link} />
              ))}
            </div>
          </div>
        </footer>
      </BasicWidthContainer>
    </div>
  );
}
