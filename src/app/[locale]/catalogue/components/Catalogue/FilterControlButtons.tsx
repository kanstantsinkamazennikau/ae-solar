"use client";

import { PAGE } from "@/app/[locale]/catalogue/constants";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useContext } from "react";

export default function FilterControlButtons() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");
  const { translation } = useContext(i18nProviderContext);

  const {
    setIsFilterModels,
    setIsResetFilter,
    error,
    isShowFilterMenu,
    setIsShowFilterMenu,
  } = useContext(ConstructorContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const scrollToPanelsListTop = () => {
    document
      .getElementById("panelsList")
      ?.scrollIntoView({ behavior: "smooth", inline: "start" });
  };

  const onFilter = () => {
    params.set(PAGE, "1");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    setIsFilterModels(true);
    scrollToPanelsListTop();
    isShowFilterMenu && setIsShowFilterMenu(false);
  };

  const onReset = () => {
    replace(pathname, { scroll: false });
    setIsResetFilter(true);
    scrollToPanelsListTop();
    isShowFilterMenu && setIsShowFilterMenu(false);
  };

  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        max-[1380px]:mb-4
      "
    >
      <Button
        externalStyle="!py-[10px] !px-[18px]"
        onClick={onFilter}
        disabled={!!error.length}
      >
        <div className="flex gap-[6px] items-center">
          <Image
            src={`/images/option/filter.svg`}
            alt={"filter"}
            priority
            width={24}
            height={24}
          />
          <span className="font-semibold [font-size:_clamp(12px,2vw,16px)] contents capitalize">
            {translation.filterModules}
          </span>
        </div>
      </Button>
      <Button style="textOnly" onClick={onReset} externalStyle="pb-0">
        <span className="font-semibold [font-size:_clamp(12px,2vw,16px)] text-base-red">
          {translation.reset}
        </span>
        <Image
          alt="close"
          src={`/images/documents/closeRed.svg`}
          width={16}
          height={16}
        />
      </Button>
    </div>
  );
}
