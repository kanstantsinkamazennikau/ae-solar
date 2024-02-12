import { ProductsPanelProps } from "@/app/[locale]/products/[id]/components/ProductsPanel/types";
import { PRODUCT_PANEL_TITLES } from "@/app/[locale]/products/[id]/constants";
import Image from "next/image";

export default function ProductsPanel({ id }: ProductsPanelProps) {
  return (
    <div className="w-full flex justify-center items-center relative -top-[64px] h-screen">
      <Image
        src={`/images/products/${id}ProductBackground.png`}
        alt={`${id}ProductBackground`}
        priority
        width={1920}
        height={780}
        quality={100}
        className="object-cover h-[780px] w-full relative -top-[64px] "
      />

      {/* BACKGROUND IMAGE */}
      <div className="absolute bottom-[6%]">
        <Image
          src="/images/products/moduleProducts.png"
          alt="moduleProducts"
          priority
          width={1582}
          height={701}
          quality={100}
          className="z-10 relative"
        />
        <Image
          src="/images/products/bottomLight.svg"
          alt="bottomLight"
          width={1582}
          height={480}
          className="absolute bottom-[calc(-39%+4px)]"
        />
        <div className="fade-strip-bottom !z-0 !h-[112px] !from-[#0000006e] !bottom-[0] rotate-180"></div>
        {/* PANEL DESCRIPTION */}
        <div
          className="
            xl:pt-10
            xl:pb-[60px]
            xl:px-[60px]
            md:pt-[30px]
            md:pb-[45px]
            md:px-[45px]
            pt-[20px]
            pb-[30px]
            px-[30px]
            inline-flex
            flex-col
            items-center         
            absolute
            max-w-[770px]
            bottom-[20%]
            left-[50%]
            -translate-x-1/2
            z-10
          "
        >
          <Image
            src="/images/awards/dividerSmall.svg"
            alt="dividerSmall"
            width={30}
            height={30}
            className="absolute top-0 left-0"
          />
          <Image
            src="/images/awards/dividerSmall.svg"
            alt="dividerSmall"
            width={30}
            height={30}
            className="absolute bottom-0 right-0 rotate-180"
          />
          <div className="flex flex-col items-center gap-3 w-min">
            <Image
              src={`/images/models/${id}.svg`}
              alt={id}
              priority
              width={120}
              height={120}
              className="xl:w-[120px] xl:h-[120px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
            />
            <div
              className="
                [font-size:_clamp(40px,8.5vw,170px)]
                drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                font-bold
                leading-[100%]
                -tracking-[5.1px]
              "
            >
              {id}
            </div>
            <p className="font-walsheim [font-size:_clamp(12px,1.5vw,24px)] leading-[150%] font-medium text-center max-w-[650px]">
              {PRODUCT_PANEL_TITLES[id]}
            </p>
          </div>
        </div>
      </div>
      <div
        className="
          flex
          items-center
          flex-col
          gap-4
          absolute
          bottom-[50px]
          left-2/4
          -translate-x-2/4
          text-centerfade 
          font-semibold
          text-xl
        "
      >
        <span>{"Scroll to the future"}</span>
        <Image
          src="/images/arrowFuture.svg"
          alt="arrow"
          width={23}
          height={24}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
