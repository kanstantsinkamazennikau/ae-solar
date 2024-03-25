import GetInTouch from "@/app/[locale]/components/GetInTouch";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import ContactsList from "@/app/[locale]/contacts/components/ContactsList";
import {
  CONTACTS_CONTACT_US,
  CONTACTS_INFORMATION,
} from "@/app/[locale]/contacts/constants";
import { useServerTranslation } from "@/app/[locale]/i18n/server";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";

export default async function ContactsPage({
  params: { locale },
}: {
  params: { locale: LocaleTypes };
}) {
  const { t } = await useServerTranslation(locale, "translation");

  return (
    <>
      <HeadingWithBackground
        tierOneHeading={t("Contact Us")}
        tierTwoHeading={t("Information")}
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
