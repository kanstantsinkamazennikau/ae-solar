import {
  FilterCheckboxProps,
  PlaceToSearch,
  Technology,
} from "@/app/[locale]/catalogue/components/Catalogue/types";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";

export default function FilterCheckbox({
  placeToSearch,
  technology,
  title,
  showColorIcon,
  showModelIcon,
}: FilterCheckboxProps) {
  const { translation } = useContext(i18nProviderContext);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handleOnChange = (placeToSearch: string, technology: string) => {
    const techParams = params.get(placeToSearch);

    if (techParams?.includes(`${technology}`)) {
      const filteredTags = techParams
        .split("&")
        .filter((paramsTag) => paramsTag !== technology)
        .join("&");
      filteredTags
        ? params.set(placeToSearch, `${filteredTags}`)
        : params.delete(placeToSearch);
    } else {
      !techParams
        ? params.set(placeToSearch, `${technology}`)
        : params.set(placeToSearch, `${techParams}&${technology}`);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isChecked = !!params
    .get(placeToSearch)
    ?.split("&")
    .includes(technology);

  return (
    <div className="flex justify-between">
      <label
        className={`flex items-center w-full cursor-pointer`}
        htmlFor={technology + placeToSearch}
      >
        <input
          type="checkbox"
          name={technology}
          id={technology + placeToSearch}
          checked={isChecked}
          className={`
            grid
            place-content-center
            appearance-none
            before:shadow-[inset_1em_1em_#F6010
            before:content-['']
            before:rounded-[1px]
            before:scale-0
            before:transition-transform
            before:delay-150
            before:ease-in-out
            checked:before:scale-[1]
            disabled:border-dark-gray-650
            cursor-pointer
            bg-no-repeat
            bg-contain
            shrink-0 
          `}
          onChange={() =>
            handleOnChange(
              placeToSearch as PlaceToSearch,
              technology as Technology
            )
          }
        />
        <div className="flex">
          <div
            className="
              w-[16px]
              h-[16px]
              mr-2
              shrink-0 
            "
          >
            {isChecked ? (
              <Image
                src={`/images/option/checkboxRed.svg`}
                alt={"checkboxRed"}
                priority
                width={16}
                height={16}
              />
            ) : (
              <Image
                src={`/images/option/checkboxBlack.svg`}
                alt={"checkboxBlack"}
                priority
                width={16}
                height={16}
              />
            )}
          </div>
          {showModelIcon && (
            <Image
              src={`/images/models/${technology}.svg`}
              alt={technology}
              priority
              width={16}
              height={16}
              className="mr-1"
            />
          )}
          <span
            className={`
              font-semibold
              [font-size:_clamp(12px,2vw,14px)]
              capitalize
              leading-tight
            `}
          >
            {translation[title] || translation[title.toLowerCase()] || title}
          </span>
          {showColorIcon && (
            <Image
              src={`/images/option/${technology.toLowerCase()}.svg`}
              alt={technology}
              priority
              width={16}
              height={16}
              className="ml-[6px]"
            />
          )}
        </div>
      </label>
    </div>
  );
}
