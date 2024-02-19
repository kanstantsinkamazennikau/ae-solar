import ContactInfo from "@/app/[locale]/components/common/Footer/ContactInfo";
import {
  DOCUMENTS_IMPRINT_INFO_CONTACTS,
  FOOTER_GERMAN_BRAND,
  FOOTER_GERMAN_BRAND_WORDS_TO_BOLD,
} from "@/app/[locale]/utils/constants";
import { styleMatchingText } from "@/app/[locale]/utils/styleMatchingText";

export default function Contacts() {
  return (
    <div
      className="flex flex-col sticky min-[920px]:top-[80px] top-[64px] w-full min-w-[300px] max-w-[300px]"
      id="contacts"
    >
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
        <ContactInfo />
      </div>
    </div>
  );
}
