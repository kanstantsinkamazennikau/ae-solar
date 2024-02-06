import GetInTouch from "@/app/[locale]/components/GetInTouch";
import HeadingWithBackground from "@/app/[locale]/components/common/HeadingWithBackground";
import ContactsList from "@/app/[locale]/contacts/ContactsList";
import {
  CONTACTS_CONTACT_US,
  CONTACTS_INFORMATION,
} from "@/app/[locale]/contacts/constants";

export default function ContactsPage() {
  return (
    <>
      <HeadingWithBackground
        tierOneHeading={CONTACTS_CONTACT_US}
        tierTwoHeading={CONTACTS_INFORMATION}
        backgroundImage="/images/contacts/contactsBackground.png"
      />
      <div className="flex w-full justify-center flex-col items-center">
        <ContactsList />
        <div className="w-full 2xl:-mb-60 lg:-mb-40 md:mt-20 lg:mt-0 mt-32">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
