"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import DownloadPresentation from "@/app/[locale]/components/common/DownloadPresentation";
import { CONTACTS_OFFICES } from "@/app/[locale]/contacts/constants";
import {
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactsList() {
  const router = useRouter();

  return (
    <BasicWidthContainer>
      <div className="flex gap-[60px] relative">
        <div>
          <div className="flex flex-col sticky min-[920px]:top-[100px] top-[80px] w-full min-w-[300px] max-w-[300px] gap-6">
            <DownloadPresentation link="" />
            <div
              className="
                p-7
                border
                border-solid
              border-[#131313]
              bg-[#0D0D0D]
                rounded-xl
                min-w-[300px]
                max-w-[300px]
              "
            >
              {styleMatchingText(
                FOOTER_GERMAN_BRAND,
                FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
                "text-sm font-normal leading-[130%] font-walsheim text-[#747474]",
                "text-dark-gray-900 font-bold"
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          {CONTACTS_OFFICES.map(({ office, contacts }) => (
            <div key={office} className="w-full mb-[40px]">
              <hr className="bg-[#131313] h-[1px] border-none mb-[60px]" />
              <div className="grid grid-cols-[clamp(100px,20%,280px)_auto] gap-4 w-full">
                <div className="[font-size:_clamp(20px,2.5vw,40px)] [word-spacing:1000px]">
                  {office}
                </div>
                <div className="flex flex-col">
                  {contacts.map(({ title, icon, info, linkTo }) => (
                    <div
                      key={info}
                      className="grid grid-cols-[clamp(100px,20%,160px)_auto] justify-start items-center gap-4 mb-4"
                    >
                      <div className="flex items-baseline justify-start h-full gap-2 text-[#505050]">
                        <Image
                          src={`/images/footer/${icon}`}
                          alt={icon}
                          width={16}
                          height={16}
                          priority
                        />
                        <div className="[font-size:_clamp(14px,1.5vw,20px)] font-semibold">
                          {title}
                        </div>
                      </div>
                      <div
                        className="
                        flex
                        items-start
                        leading-[150%]
                        font-normal
                        font-walsheim
                        gap-1
                        [font-size:_clamp(14px,1.5vw,20px)
                        max-w-[300px]
                      "
                      >
                        <div
                          onClick={() => {
                            if (linkTo) router.push(linkTo);
                          }}
                          className={`${linkTo ? "cursor-pointer" : ""}`}
                        >
                          {info.includes("(WhatsApp)")
                            ? info.split("(WhatsApp)").map((word) =>
                                word.length ? (
                                  word
                                ) : (
                                  <span
                                    key="(WhatsApp)"
                                    className="text-dark-gray-900"
                                  >
                                    {"(WhatsApp)"}
                                  </span>
                                )
                              )
                            : info}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BasicWidthContainer>
  );
}
