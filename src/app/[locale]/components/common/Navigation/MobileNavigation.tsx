"use client";

import Cart from "@/app/[locale]/components/common/Navigation/Cart";
import NavLink from "@/app/[locale]/components/common/Navigation/NavLink";
import {
  FOOTER_CONTACT_INFO,
  HEADER_CONTACT_US,
  HEADER_LANGUAGE,
  HEADER_NAV_LINKS_ARRAY,
} from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileNavigation() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [subMenuHeading, setSubMenuHeading] = useState("");
  const params = useParams();
  const router = useRouter();

  const onSubMenuHeadingClick = (subMenuHeader: string) => {
    setSubMenuHeading(subMenuHeader);
  };

  const onLinkClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  const handleClick = () => {
    router.push(`/${params?.locale}/consult`);
  };

  return (
    <>
      <div className="min-[920px]:hidden flex items-center gap-5">
        <Cart />
        <div
          className="text-3xl cursor-pointer z-50 relative"
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
        >
          <div className="flex flex-col gap-[5px] relative h-[16px] w-[16px] justify-center items-center">
            {Array(2)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-0.5 bg-white rounded absolute translate-y-1/2 transition-all duration-200 ${
                    isHamburgerMenuOpen
                      ? `block ${
                          index === 1 ? "rotate-45" : "-rotate-45"
                        } animate-fadeIn`
                      : "hidden"
                  }`}
                />
              ))}
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-0.5 bg-white rounded ${
                    isHamburgerMenuOpen ? "hidden" : "block"
                  }`}
                />
              ))}
          </div>
        </div>
      </div>

      <div
        className={`
          min-[920px]:hidden 
          h-screen 
          bg-black 
          fixed 
          w-full 
          top-0 
          overflow-y-auto 
          bottom-0 
          px-4 
          py-[34px]
          duration-500 
          ${isHamburgerMenuOpen ? "left-0" : "left-[-100%]"}
        `}
      >
        <Image
          src={`/images/glowFull.png`}
          alt="glow"
          priority
          width={1320}
          height={30}
          className="mb-5"
        />
        <ul>
          {HEADER_NAV_LINKS_ARRAY.map((navLink) => (
            <NavLink
              key={navLink.url}
              subMenuHeading={subMenuHeading}
              onSubMenuHeadingClick={onSubMenuHeadingClick}
              onLinkClick={onLinkClick}
              {...navLink}
            />
          ))}
        </ul>
        <hr className="bg-[#131313] h-[1px] border-none mt-5 mb-5" />
        <div className="flex py-2 min-[920px]:items-center [font-size:_clamp(12px,1.5vw,16px)] leading-none justify-between cursor-pointer">
          {HEADER_LANGUAGE}
          <Image
            src="/images/navMenuTriangle.svg"
            alt="navMenuTriangle"
            width={8}
            height={8}
            className={`
              -rotate-90
              w-3
              h-3
            `}
          />
        </div>
        <hr className="bg-[#131313] h-[1px] border-none mt-5 mb-5" />
        <div
          className="flex pt-2 pb-5 min-[920px]:items-center [font-size:_clamp(12px,1.5vw,16px)] leading-none justify-between cursor-pointer"
          onClick={handleClick}
        >
          {HEADER_CONTACT_US}
        </div>
        {FOOTER_CONTACT_INFO.map(({ icon, info, linkTo }) => {
          if (icon === "location.svg") return;
          return (
            <div
              key={info}
              className="flex items-start leading-[130%] font-normal font-walsheim gap-1 max-w-[185px] [font-size:_clamp(12px,1vw,14px)]"
            >
              <Image
                src={`/images/footer/${icon}`}
                alt={icon}
                width={16}
                height={16}
                priority
                className="invert-[68%] sepia-0 saturate-[1954%] hue-rotate-[173deg] brightness-[91%] contrast-[85%]"
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
    </>
  );
}
