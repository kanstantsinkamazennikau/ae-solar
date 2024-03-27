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

export default function EmptyResult() {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  const { setIsResetFilter } = useContext(ConstructorContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const onReset = () => {
    replace(pathname, { scroll: false });
    setIsResetFilter(true);
  };

  return (
    <div className="max-w-[400px] flex flex-col text-center mx-auto gap-5">
      <p className="[font-size:_clamp(20px,2vw,24px)] md:-tracking-[0.24px] leading-[120%] font-bold">
        {t("Could not find result")}
      </p>
      <p className="[font-size:_clamp(14px,2vw,20px)] font-walsheim leading-[150%] text-dark-gray-900">
        {t("Try new filter")}
      </p>

      <Button style="textOnly" onClick={onReset}>
        <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red">
          {t("Reset Filter")}
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
