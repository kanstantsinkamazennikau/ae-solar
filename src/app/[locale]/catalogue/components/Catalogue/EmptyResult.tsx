import Button from "@/app/[locale]/components/common/Button";
import { ConstructorContext } from "@/app/[locale]/context/ConstructorContext";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

export default function EmptyResult() {
  const { translation } = useContext(i18nProviderContext);
  const { setIsResetFilter } = useContext(ConstructorContext);

  const pathname = usePathname();
  const { replace } = useRouter();

  const onReset = () => {
    replace(pathname, { scroll: false });
    setIsResetFilter(true);
  };

  return (
    <div className="max-w-[400px] flex flex-col text-center mx-auto gap-5 items-center mt-16">
      <Image
        src="/images/option/emptyResult.svg"
        alt="emptyResult"
        width={118}
        height={104}
        priority
        className="h-[104px] w-[118px] object-cover"
      />
      <p className="[font-size:_clamp(20px,2vw,24px)] md:-tracking-[0.24px] leading-[120%] font-bold">
        {translation.couldNotFindResult}
      </p>
      <p className="[font-size:_clamp(14px,2vw,20px)] font-walsheim leading-[150%] text-dark-gray-900">
        {translation.tryNewFilter}
      </p>

      <Button style="textOnly" onClick={onReset}>
        <span className="font-semibold [font-size:_clamp(12px,1.5vw,16px)] text-base-red capitalize">
          {translation.resetFilter}
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
