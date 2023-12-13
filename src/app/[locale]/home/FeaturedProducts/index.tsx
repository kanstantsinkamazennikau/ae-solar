import {
  FEATURED_PRODUCTS_HIGH_QUALITY,
  FEATURED_PRODUCTS_THE_NEXT_LEVEL_OF_PANELS_PHRASE_ARRAY,
} from "@/app/[locale]/utils/constants";

export default function FeaturedProducts() {
  return (
    <div
      className="bg-[url('/images/featuredProducts.png')] 
      object-fill 
      w-full
      h-screen 
      bg-no-repeat 
      bg-contain 
      bg-center 
      justify-center 
      flex 
      items-end
      bg-fixed
      px-5
      "
    >
      <div className="text-center pb-[174px]">
        {FEATURED_PRODUCTS_THE_NEXT_LEVEL_OF_PANELS_PHRASE_ARRAY.map(
          (phrase) => {
            return (
              <div
                key={phrase}
                className={`
                text-[64px] 
                font-bold 
                leading-normal 
                `}
              >
                {phrase
                  .split(
                    new RegExp(`(${FEATURED_PRODUCTS_HIGH_QUALITY})`, "gi")
                  )
                  .map((part, i) => (
                    <span
                      key={i}
                      className={`${
                        part.toLowerCase() ===
                        FEATURED_PRODUCTS_HIGH_QUALITY.toLowerCase()
                          ? "bg-base-red"
                          : ""
                      }
                  `}
                    >
                      {part}
                    </span>
                  ))}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
