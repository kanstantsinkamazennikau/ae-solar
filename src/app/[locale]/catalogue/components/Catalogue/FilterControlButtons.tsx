"use client";

import { PAGE } from "@/app/[locale]/catalogue/constants";
import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/constructorContext";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
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

  const { setIsFilterModels, setIsResetFilter, error } =
    useContext(ConstructorContext);

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
  };

  const onReset = () => {
    replace(pathname, { scroll: false });
    setIsResetFilter(true);
    scrollToPanelsListTop();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Button
        externalStyle="!py-3"
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
          <span>{t("Filter Modules")}</span>
        </div>
      </Button>
      <Button style="textOnly" onClick={onReset}>
        <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red">
          {t("Reset")}
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
