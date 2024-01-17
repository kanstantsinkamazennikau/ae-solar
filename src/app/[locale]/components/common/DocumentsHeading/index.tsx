"use client";

import {
  DOCUMENTS_DOCUMENTS_HEADING,
  DOCUMENTS_FAQ_HAVE_A_QUESTION,
  DOCUMENTS_FAQ_WE_HAVE_SOLUTIONS,
  DOCUMENTS_YOU_NEED_TO_KNOW,
} from "@/app/[locale]/utils/constants";
import { usePathname } from "next/navigation";

const mapHeadingWithCategory = {
  documents: {
    tierOneHeading: DOCUMENTS_DOCUMENTS_HEADING,
    tierTwoHeading: DOCUMENTS_YOU_NEED_TO_KNOW,
  },
  faq: {
    tierOneHeading: DOCUMENTS_FAQ_HAVE_A_QUESTION,
    tierTwoHeading: DOCUMENTS_FAQ_WE_HAVE_SOLUTIONS,
  },
};

export default function DocumentsHeading() {
  const pathName = usePathname().split("/");
  const documentsCategory = pathName[pathName.length - 1];

  return (
    <div className="flex flex-col gap-4">
      <p
        className="
          [font-size:_clamp(24px,4vw,96px)]
          font-extrabold
          leading-[100%]
          -tracking-[2.88]
        "
      >
        {
          mapHeadingWithCategory[
            documentsCategory as keyof typeof mapHeadingWithCategory
          ].tierOneHeading
        }
      </p>
      <p
        className="
          [font-size:_clamp(16px,4vw,64px)]
          font-medium
          leading-[100%]
          -tracking-[1.92]
          text-base-red
        "
      >
        {
          mapHeadingWithCategory[
            documentsCategory as keyof typeof mapHeadingWithCategory
          ].tierTwoHeading
        }
      </p>
    </div>
  );
}
