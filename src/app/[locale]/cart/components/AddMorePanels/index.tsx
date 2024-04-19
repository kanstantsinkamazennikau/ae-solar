"use client";

import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";
import Button from "@/app/[locale]/components/common/Button";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";

export default function AddMorePanels() {
  const locale = useParams()?.locale as LocaleTypes;
  const { translation } = useContext(i18nProviderContext);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${locale}/catalogue`);
  };

  return (
    <BasicWidthContainer>
      <div className="w-full flex justify-center items-center min-[640px]:gap-2 min-[640px]:flex-row flex-col gap-5 pb-20">
        <Image
          src={`/images/cart/addMorePanels.svg`}
          alt={"addMorePanels"}
          priority
          width={118}
          height={168}
        />
        <Button onClick={handleClick} style="transparent" size="thin">
          <span className="font-semibold text-sm -tracking-[0.2px] leading-none">
            {translation.addMorePanels}
          </span>
        </Button>
      </div>
    </BasicWidthContainer>
  );
}
