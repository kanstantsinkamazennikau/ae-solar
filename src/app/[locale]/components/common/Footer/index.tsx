"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { FooterCategory } from "@/app/[locale]/components/common/Footer/FooterCategory";
import PolicyLink from "@/app/[locale]/components/common/Footer/PolicyLink";
import Input from "@/app/[locale]/components/common/Input";
import Logo from "@/app/[locale]/components/common/Logo";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_COPYRIGHT,
  FOOTER_GERMAN_BRAND,
  FOOTER_LINKS_ARRAY,
  FOOTER_SUBSCRIBE,
  FOOTER_SUBSCRIBE_NEWSLETTER,
  FOOTER_YOUR_EMAIL,
  POLICY_LINKS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
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
        <nav className="flex justify-between items-start">
          <div className="flex gap-8 flex-col max-w-[203px]">
            <Logo />
            <p className="text-sm font-normal leading-[130%] font-walsheim text-[#747474]">
              {FOOTER_GERMAN_BRAND}
            </p>
          </div>

          <div className="flex flex-wrap justify-center">
            {FOOTER_LINKS_ARRAY.map(({ category, links }) => (
              <FooterCategory
                key={category}
                category={category}
                links={links}
              />
            ))}
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="px-6 flex flex-col gap-[10px]">
              {FOOTER_CONTACT_INFO.map(({ icon, info, linkTo }) => {
                return (
                  <div
                    key={icon}
                    className="flex items-start text-sm leading-[130%] font-normal font-walsheim gap-1 max-w-[185px]"
                  >
                    <Image
                      src={`images/footer/${icon}`}
                      alt={icon}
                      width={16}
                      height={16}
                      priority
                    />
                    <div
                      onClick={() => {
                        if (linkTo) router.push(linkTo);
                      }}
                      className={`${linkTo ? "cursor-pointer" : ""}`}
                    >
                      {info}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex p-6 flex-col gap-4 bg-[#0D0D0D] border border-solid border-[#191919] rounded-xl">
              <p className="text-base leading-[120%] text-dark-gray-900">
                {FOOTER_SUBSCRIBE_NEWSLETTER}
              </p>
              <Input placeholder={FOOTER_YOUR_EMAIL} />
              <Button
                onClick={() => console.log("subscribe")}
                color="transparent"
                size="extrasmall"
              >
                {FOOTER_SUBSCRIBE}
              </Button>
            </div>
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
    </BasicWidthContainer>
  );
}
