"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import {
  CONTACTS_CONTACT_US,
  CONTACTS_INFORMATION,
  CONTACTS_OFFICES,
} from "@/app/[locale]/contacts/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactsPage() {
  const router = useRouter();

  return (
    <>
      <HeadingWithBackground
        tierOneHeading={CONTACTS_CONTACT_US}
        tierTwoHeading={CONTACTS_INFORMATION}
        backgroundImage="/images/contacts/contactsBackground.png"
      />
      <div className="flex w-full justify-center">
        <BasicWidthContainer>
          <div className="flex gap-[60px] relative">
            <div>
              <div className="flex flex-col sticky min-[920px]:top-[100px] top-[80px] w-full min-w-[300px] max-w-[300px]">
                <div
                  className="
                    px-7
                    py-7
                    border
                    border-solid
                  border-[#131313]
                  bg-[#0D0D0D]
                    relative
                    -top-[10px]
                    rounded-xl
                    font-semibold
                    [font-size:_clamp(12px,1.5vw,16px)]
                    leading-[120%]
                    min-w-[300px]
                    max-w-[300px]
                  "
                >
                  Download Presentation
                </div>
              </div>
            </div>
            <div className="w-full">
              {CONTACTS_OFFICES.map(({ office, contacts }) => (
                <div key={office} className="w-full mb-[40px]">
                  <hr className="bg-[#131313] h-[1px] border-none mb-[60px]" />
                  <div className="grid grid-cols-[280px_auto] gap-4 w-full">
                    <div className="[font-size:_clamp(20px,2.5vw,40px)] [word-spacing:100px]">
                      {office}
                    </div>
                    <div className="flex flex-col">
                      {contacts.map(({ title, icon, info, linkTo }) => (
                        <div
                          key={info}
                          className="grid grid-cols-[160px_auto] justify-start items-center gap-4 mb-4"
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
                              {info}
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
      </div>
    </>
  );
}
