"use client";

import GetInTouch from "@/app/[locale]/components/GetInTouch";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import ContactsList from "@/app/[locale]/contacts/components/ContactsList";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import { useContext } from "react";
import { Trans } from "react-i18next";

export default function ClientContactsPage() {
  const { translation } = useContext(i18nProviderContext);

  return (
    <>
      <HeadingWithBackground
        tierOneHeading={
          <Trans
            components={{
              red: (
                <span
                  className="
                    text-[#B30006]
                    block
                    [font-size:_clamp(32px,4vw,64px)]
                    font-medium
                    leading-[100%]
                  "
                />
              ),
            }}
          >
            {translation.contactInformation}
          </Trans>
        }
        backgroundImage="/images/contacts/contactsBackground.png"
      />
      <div className="flex w-full justify-center flex-col items-center mb-20">
        <ContactsList />
        <div className="w-full 2xl:-mb-60 lg:-mb-20 md:mb-10 md:mt-32 lg:mt-0 mt-10 min-[560px]:-mb-16 min-[560px]:-mt-10 -mb-20">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
