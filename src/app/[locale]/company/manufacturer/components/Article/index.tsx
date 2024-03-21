"use client";

import { MANUFACTURER_ARTICLE } from "@/app/[locale]/company/manufacturer/constants";
import { useClientTranslation } from "@/app/[locale]/i18n/client";
import { LocaleTypes } from "@/app/[locale]/i18n/settings";
//@ts-ignore
import { Splide, SplideSlide, Options } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

const ArtcileHeading = ({ heading }: { heading: string }) => {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <p className="[font-size:_clamp(36px,3vw,48px)] leading-[120%] -tracking-[0.36px] max-w-[650px] ">
      {t(heading)}
    </p>
  );
};

const ArticleParagraph = ({ paragraph }: { paragraph: string }) => {
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useClientTranslation(locale, "translation");

  return (
    <p className="[font-size:_clamp(16px,1.5vw,20px)] font-walsheim leading-[150%] -tracking-[0.36px] font-normal max-w-[650px] ">
      {t(paragraph)}
    </p>
  );
};

const ImagesSlider = ({ images }: { images: string[] }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [scrollStarted, setScrollStarted] = useState(false);

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: false,
  };

  const mainRef = useRef<Splide>(null);

  const handleThumbs = (id: number) => {
    setSlideIndex(id);
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };

  const handleClickScroll = () => {
    if (!scrollStarted) return;
    const element = document.getElementById(images[slideIndex]);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    handleClickScroll();
    if (slideIndex > images.length - 1) {
      mainRef?.current?.go(0);
      setSlideIndex(0);
      return;
    }

    if (slideIndex < 0) {
      mainRef?.current?.go(images.length - 1);
      setSlideIndex(images.length - 1);
      return;
    }

    if (mainRef.current) {
      setScrollStarted(true);
      mainRef?.current?.go(slideIndex);
    }
  }, [images.length, slideIndex]);

  const nextSlide = () => {
    setScrollStarted(true);
    setSlideIndex((prevState) => prevState + 1);
  };

  const prevSlide = () => {
    setScrollStarted(true);
    setSlideIndex((prevState) => prevState - 1);
  };

  return (
    <div className="flex gap-4 xl:h-[360px] xl:flex-row flex-col max-xl:max-w-[650px]">
      <Splide options={mainOptions} ref={mainRef} className="max-w-[650px]">
        {images.map((image) => (
          <SplideSlide key={image}>
            <Image
              src={`/images/about/manufacturer/${image}`}
              alt="articleImg1"
              quality={100}
              width={650}
              height={360}
            />
          </SplideSlide>
        ))}
      </Splide>

      <div className="flex xl:flex-col h-full justify-center items-center">
        <Image
          src={`/images/redArrowRight.svg`}
          alt="redArrowRight"
          quality={100}
          width={16}
          height={16}
          className="xl:-rotate-90 rotate-180 cursor-pointer mb-1 mr-1"
          onClick={prevSlide}
        />
        <div className="xl:overflow-y-scroll max-xl:overflow-x-scroll sliderScroll flex ">
          <div
            className={`transition-all duration-300 max-xl:inline-flex max-xl:max-w-[320px] max-xl:w-auto xl:gap-0 gap-4 p-0 flex xl:flex-col flex-row `}
          >
            {images.map((thumbnail, index) => (
              <button
                onClick={() => handleThumbs(index)}
                key={index}
                id={thumbnail}
                className={`
                  max-xl:shrink-0
                  
                  shrink-0
                  mb-[1px]
                  h-[70px]
                `}
              >
                <Image
                  src={`/images/about/manufacturer/${thumbnail}`}
                  alt="articleImg1"
                  quality={100}
                  width={100}
                  height={100}
                  className={`object-contain rounded-lg h-[55px] opacity-60 ${
                    index === slideIndex &&
                    "border border-solid border-[#B30006] object-cover rounded-lg !opacity-100 [box-shadow:0px_4px_12px_0px_rgba(246,1,9,0.60)]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        <Image
          src={`/images/redArrowRight.svg`}
          alt="redArrowRight"
          quality={100}
          width={16}
          height={16}
          className="xl:rotate-90 cursor-pointer mt-1 ml-1"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default function Artcile() {
  return (
    <div className="flex flex-col gap-[30px] w-full max-[920px]:mx-auto max-xl:max-w-[650px]">
      {MANUFACTURER_ARTICLE.map(({ paragraphHeading, paragraphs }) => (
        <Fragment key={paragraphHeading}>
          <ArtcileHeading heading={paragraphHeading} />
          {paragraphs.map((paragraph, index) => {
            if (paragraph.type === "text")
              return (
                <ArticleParagraph paragraph={paragraph.value} key={index} />
              );
            if (paragraph.type === "image")
              return <ImagesSlider key={index} images={paragraph.src} />;
          })}
        </Fragment>
      ))}
    </div>
  );
}
