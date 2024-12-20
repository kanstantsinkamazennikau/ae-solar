"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import DownloadPresentation from "@/app/[locale]/components/common/DownloadPresentation";
import ConsultForm from "@/app/[locale]/contacts/components/ConsultForm";
import { CONTACTS_OFFICES } from "@/app/[locale]/contacts/constants";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function ContactsList() {
  const router = useRouter();
  const { translation } = useContext(i18nProviderContext);

  return (
    <BasicWidthContainer>
      <div className="flex lg:gap-[60px] min-[920px]:gap-[20px] gap-[60px] relative min-[920px]:flex-row flex-col">
        <div>
          <div className="flex min-[920px]:flex-col flex-col-reverse sticky min-[920px]:top-[100px] top-[80px] w-full min-w-[300px] max-w-[300px] gap-6 mx-auto ">
            <DownloadPresentation link="/documents/presentation.pdf" />
            <div
              className="
                p-7
                text-sm
                font-normal
                leading-[150%]
                font-walsheim
                text-[#747474]
                min-[920px]:pt-0
                max-[920px]:border
                max-[920px]:border-solid
                max-[920px]:border-b-0
                max-[920px]:border-[#131313]
                max-[920px]:bg-[#0D0D0D]
                rounded-xl
                -mb-12
                z-10
              "
            >
              <Trans
                components={{
                  bold: <span className="text-dark-gray-900 font-bold" />,
                }}
              >
                {translation.germanBrand}
              </Trans>
              <hr className="mt-6 border-[#131313] min-[920px]:hidden" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <ConsultForm />
          {CONTACTS_OFFICES.map(({ office, contacts }) => (
            <div key={office} className="w-full mb-[40px]">
              <hr className="bg-[#131313] h-[1px] border-none mb-[60px]" />
              <div className="min-[560px]:grid grid-cols-[clamp(35%,20%,280px)_auto] gap-4 w-full max-[920px]:justify-center flex flex-col">
                <div className="[font-size:_clamp(20px,2.5vw,40px)] min-[560px]:[word-spacing:1000px] hyphens-auto">
                  {translation[office]}
                </div>
                <div className="flex flex-col">
                  {contacts.map(({ title, icon, info, linkTo }) => (
                    <div
                      key={info}
                      className="
                        min-[560px]:grid
                        grid-cols-[clamp(35%,20%,160px)_auto]
                        justify-start
                        min-[560px]:items-center
                        min-[560px]:gap-4
                        gap-1
                        mb-4
                        flex flex-col
                        items-start
                      "
                    >
                      <div className="flex items-baseline justify-start h-full min-[560px]:gap-2 gap-1 text-[#505050]">
                        <Image
                          src={`/images/footer/${icon}`}
                          alt={icon}
                          width={16}
                          height={16}
                          priority
                        />
                        <div className="[font-size:_clamp(11px,1.5vw,20px)] font-semibold hyphens-auto">
                          {translation[title]}
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
