"use client";
import { FOOTER_CONTACT_INFO } from "@/app/[locale]/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactInfo() {
  const router = useRouter();

  return (
    <div
      className="
        flex
        min-[650px]:flex-col
        gap-6
        items-center
        justify-between
        flex-row
        col-start-1
        col-end-3
        min-[650px]:col-end-auto 
        min-[650px]:col-start-auto
        max-[500px]:col-start-auto
        max-[500px]:col-end-auto
        max-[500px]:flex-col
        max-[500px]:items-start
      "
    >
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
                [font-size:_clamp(14px,1vw,14px)]
              "
            >
              <Image
                src={`/images/footer/${icon}`}
                alt={icon}
                width={16}
                height={16}
                // priority
                className="w-4 h-4"
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
  );
}
