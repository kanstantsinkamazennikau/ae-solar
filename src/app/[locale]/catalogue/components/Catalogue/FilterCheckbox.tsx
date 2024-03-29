import {
  FilterCheckboxProps,
  PlaceToSearch,
  Technology,
} from "@/app/[locale]/catalogue/components/Catalogue/types";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function FilterCheckbox({
  placeToSearch,
  technology,
  title,
  showColorIcon,
  showModelIcon,
}: FilterCheckboxProps) {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

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

  return (
    <div className="flex justify-between">
      <label
        className={`flex items-center w-full cursor-pointer gap-2`}
        htmlFor={technology + placeToSearch}
      >
        <input
          type="checkbox"
          name={technology}
          id={technology + placeToSearch}
          checked={!!params.get(placeToSearch)?.split("&").includes(technology)}
          className={`
            grid
            place-content-center
            appearance-none
            w-5
            h-5
            before:shadow-[inset_1em_1em_#F6010
            before:content-['']
            before:w-2
            before:h-2
            before:rounded-[1px]
            before:scale-0
            before:transition-transform
            before:delay-150
            before:ease-in-out
            checked:before:scale-[1]
            disabled:border-dark-gray-650
            cursor-pointer
            bg-[url('/images/option/checkboxBlack.svg')]
            checked:bg-[url('/images/option/checkboxRed.svg')]
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
            {t(title)}
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
