"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import ContactInfo from "@/app/[locale]/components/common/Footer/ContactInfo";
import { FooterCategory } from "@/app/[locale]/components/common/Footer/FooterCategory";
import PolicyLink from "@/app/[locale]/components/common/Footer/PolicyLink";
import Social from "@/app/[locale]/components/common/Footer/Social";
import { NavigationProps } from "@/app/[locale]/components/common/Footer/types";
import Logo from "@/app/[locale]/components/common/Logo";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import {
  FOOTER_LINKS_ARRAY,
  POLICY_LINKS,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Trans } from "react-i18next";

export default function Footer({
  footerAttributes,
}: {
  footerAttributes: NavigationProps;
}) {
  const pathname = usePathname();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col justify-center items-center relative max-w-[1920px] mx-auto bg-black">
      <BasicWidthContainer styles="bg-black">
        <footer className="text-sm bg-black bg-clip-content overflow-hidden">
          <Image
            src={`/images/glowFull.png`}
            alt="glow"
            priority
            width={1320}
            height={60}
            className="rotate-180 relative z-10"
          />
          <nav className="grid md:grid-cols-[auto_auto] min-[500px]:items-start gap-2 grid-cols-1 justify-between">
            {/* BACKGROUND */}
            <div className="md:flex justify-between w-full absolute top-0 left-0 mt-20 h-[calc(100%-80px)] items-center z-0 hidden">
              <Image
                src={`/images/footer/productLeft.png`}
                alt="productLeft"
                priority
                width={870}
                height={547}
                quality={100}
                className="md:max-w-[45%] md:h-full max-w-[40%] h-1/2"
              />
              <Image
                src={`/images/footer/productRight.png`}
                alt="productRight"
                priority
                width={800}
                height={547}
                quality={100}
                className="md:max-w-[45%] md:h-full max-w-[40%] h-1/2"
              />
            </div>

            {/* INFO */}
            <div className="flex gap-8 flex-col max-w-[203px] max-[500px]:max-w-full pb-3 z-10">
              <div className="flex flex-col w-fit">
                <Logo />
                <p className="text-base-red text-[10px] text-right">
                  {footerAttributes.logoText}
                </p>
              </div>
              <div
                className="
                  text-sm
                  font-normal
                  leading-[130%]
                  font-walsheim
                  text-[#747474]
                "
              >
                <Trans
                  components={{
                    bold: <span className="text-dark-gray-900 font-bold" />,
                  }}
                >
                  {t(footerAttributes.germanBrand)}
                </Trans>
              </div>
              <div className="min-[500px]:flex gap-8 flex-col hidden">
                <ContactInfo />
                <Social socialText={footerAttributes.weAreSocial} />
              </div>
            </div>
            {/* LINKS */}
            <div className="min-[500px]:justify-between min-w-0 lg:min-w-[720px] grid min-[500px]:grid-cols-4 grid-cols-1 w-full max-w-[900px] gap-[10px]">
              {FOOTER_LINKS_ARRAY.map(({ url, text, subMenu }) => (
                <FooterCategory
                  key={text}
                  url={url}
                  text={footerAttributes[text]}
                  subMenu={subMenu.map((item) => ({
                    ...item,
                    text: footerAttributes[item.text] || item.text,
                  }))}
                />
              ))}
            </div>
            <div className="min-[500px]:hidden gap-8 flex-col flex mt-8">
              <ContactInfo />
              <Social socialText={footerAttributes.weAreSocial} />
            </div>
          </nav>
          {/* POLICY */}
          <div className="relative z-10">
            <hr className="bg-dark-gray-800 h-[1px] border-none mb-3" />
            <div className="flex justify-between text-dark-gray-800 mb-5 text-[10px] min-[550px]:flex-row flex-col">
              <div>{footerAttributes.copyright}</div>
              <div className="flex last-of-type:[&>a]:pr-0 last-of-type:[&>div]:hidden min-[550px]:flex-row max-[550px]:gap-x-4 flex-wrap">
                {POLICY_LINKS.map(({ text, link }) => (
                  <PolicyLink
                    key={text}
                    link={link}
                    text={footerAttributes[text]}
                  />
                ))}
              </div>
            </div>
          </div>
        </footer>
      </BasicWidthContainer>
    </div>
  );
}
