"use client";

import {
  DOCUMENTS_IMPRINT_INFO_CONTACTS,
  DOCUMENTS_IMPRINT_INFO_LEGAL,
  FOOTER_CONTACT_INFO,
} from "@/app/[locale]/utils/constants";
import { useRouter } from "next/navigation";

export default function Imprint() {
  const router = useRouter();

  return (
    <div className="flex gap-[60px] relative">
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
        "
        >
          <div className="mb-4 [font-size:_clamp(16px,2vw,24px)] font-semibold leading-[120%]">
            {DOCUMENTS_IMPRINT_INFO_CONTACTS}
          </div>
          <div>
            {FOOTER_CONTACT_INFO.slice(1).map(({ info, linkTo }) => {
              return (
                <div
                  key={info}
                  className="
                  leading-[150%]
                  font-normal
                  font-walsheim
                  gap-1
                  [font-size:_clamp(12px,1.5vw,20px)]
                "
                >
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

      {/* LEGAL */}
      <div className="flex flex-col gap-14 max-w-[760px]">
        <div className="flex flex-col gap-6">
          <div className="[font-size:_clamp(16px,2vw,24px)] font-semibold leading-[120%]">
            {DOCUMENTS_IMPRINT_INFO_LEGAL.title}
          </div>
          <div>
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
