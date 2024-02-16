"use client";

import {
  DOCUMENTS_IMPRINT_INFO_CONTACTS,
  DOCUMENTS_IMPRINT_INFO_LEGAL,
  FOOTER_CONTACT_INFO,
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Imprint() {
  const router = useRouter();

  return (
    <div
      className="
        flex
        gap-[60px]
        relative
        min-[660px]:flex-row
        flex-col-reverse
        items-center
        max-[920px]:w-fit
        max-[920px]:mx-auto
      "
    >
      {/* CONTACTS */}
      <div className="flex flex-col sticky min-[920px]:top-[80px] top-[64px] w-full min-w-[300px] max-w-[300px]">
        <div
          className="
          py-10
          px-10
          border
          border-solid
        border-[#131313]
        bg-[#0D0D0D]
          rounded-xl
          font-semibold
          [font-size:_clamp(12px,1.5vw,16px)]
          leading-[120%]
          min-w-[300px]
          max-w-[300px]
          flex
          flex-col
          gap-4
        "
        >
          <p className="[font-size:_clamp(20px,1.5vw,24px)] font-semibold leading-[120%]">
            {DOCUMENTS_IMPRINT_INFO_CONTACTS}
          </p>
          <div>
            {styleMatchingText(
              FOOTER_GERMAN_BRAND,
              FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
              "text-sm font-normal leading-[130%] font-walsheim text-[#747474]",
              "text-dark-gray-900 font-bold"
            )}
          </div>
          <div className="mb-4 [font-size:_clamp(16px,2vw,24px)] font-semibold leading-[120%]">
            <div className="flex flex-col gap-[10px]">
              {FOOTER_CONTACT_INFO.map(({ icon, info, linkTo }) => {
                return (
                  <div
                    key={info}
                    className="
                      flex
                      items-start
                      leading-[130%]
                      font-normal
                      font-walsheim
                      gap-1
                      [font-size:_clamp(14px,1.5vw,20px)]
                    "
                  >
                    <Image
                      src={`/images/footer/${icon}`}
                      alt={icon}
                      width={20}
                      height={20}
                      priority
                      className="w-5 h-5"
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
          </div>
        </div>
      </div>

      {/* LEGAL */}
      <div className="flex flex-col gap-14 max-w-[760px] max-[920px]:self-start">
        <div className="flex flex-col gap-6">
          <div className="[font-size:_clamp(20px,1.5vw,24px)] font-semibold leading-[120%]">
            {DOCUMENTS_IMPRINT_INFO_LEGAL.title}
          </div>
          <div className="flex flex-col">
            {DOCUMENTS_IMPRINT_INFO_LEGAL.registration.map(
              (registration: string) => (
                <div
                  key={registration}
                  className={`
                  font-walsheim
                  [font-size:_clamp(12px,1.5vw,20px)]
                  leading-[150%]
                  font-normal
                `}
                >
                  {registration}
                </div>
              )
            )}
          </div>
          <div>
            {DOCUMENTS_IMPRINT_INFO_LEGAL.address.map(
              (registration: string) => (
                <div
                  key={registration}
                  className={`
                  font-walsheim
                  [font-size:_clamp(12px,1.5vw,20px)]
                  leading-[150%]
                  font-normal
                `}
                >
                  {registration}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
