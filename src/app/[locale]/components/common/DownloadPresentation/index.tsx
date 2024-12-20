"use client";

import { DownloadPresentationProps } from "@/app/[locale]/components/common/DownloadPresentation/types";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useContext } from "react";

export default function DownloadPresentation({
  link,
  title = "PROJECT REFERENCE",
}: DownloadPresentationProps) {
  const { translation } = useContext(i18nProviderContext);

  return (
    <div
      className="
        flex
        flex-col
        min-[920px]:gap-6
        gap-4
        px-10
        pt-10
        border
        border-solid
      border-[#131313]
      bg-[#0D0D0D]
        relative
        -top-[10px]
        rounded-xl
        font-semibold
        leading-[120%]
        border-b-0
      "
      id="presentation"
    >
      <div className="flex min-[920px]:gap-2 gap-1 min-[920px]:items-start items-end">
        <Image
          src="/images/downloadFile.svg"
          alt="downloadFile"
          width={18}
          height={18}
          className="min-[920px]:block hidden"
        />
        <Image
          src="/images/downloadFileGrey.svg"
          alt="downloadFile"
          width={18}
          height={18}
          className="min-[920px]:hidden block"
        />

        <div className="min-[920px]:text-2xl text-[13px] font-semibold min-[920px]:leading-[120%] leading-[100%] capitalize">
          {translation.downloadPresentation}
        </div>
        <Image
          src="/images/arrowFutureRed.svg"
          alt="downloadFile"
          width={16}
          height={16}
          className="min-[920px]:hidden block -rotate-[135deg] ml-1"
        />
      </div>
      <a href={link} target="_blank">
        <div
          className="
            w-[220px]
            min-h-[124px]
            rounded-t-lg
            border
            border-solid
            border-transparent
            [box-shadow:_0px_0px_35px_-10px_rgba(246,1,9,0.30)]
            pl-4
            pt-4
            !bg-cover
            [background:url('/images/downloadPresentationBg.webp')_padding-box_no-repeat,linear-gradient(180deg,_rgba(227,_34,_34,_82%)_0%,_#131313_100%)_border-box]
          "
        >
          <Image
            src="/logo.svg"
            alt="ae-solar logo"
            width={92}
            height={12}
            className="mb-4"
          />
          <div className="h-auto relative flex items-start py-2 mb-2">
            <div className="w-8 h-full bg-base-red absolute top-0" />
            <span className="uppercase font-extrabold [font-size:_clamp(16px,1.5vw,24px)] ml-3 leading-[100%] z-10">
              {title}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
