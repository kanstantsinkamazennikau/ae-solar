"use client";

import {
  MANUFACTURER_ARTICLE,
  MANUFACTURER_ARTICLE_STATS,
} from "@/app/[locale]/company/manufacturer/constants";
import { i18nProviderContext } from "@/app/[locale]/i18nProvider";
//@ts-ignore
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Trans } from "react-i18next";

const ArtcileHeading = ({ heading }: { heading: string }) => {
  return (
    <p className="[font-size:_clamp(36px,3vw,48px)] leading-[120%] -tracking-[0.36px] max-w-[650px] ">
      {heading}
    </p>
  );
};

const ArticleStats = () => {
  const { translation } = useContext(i18nProviderContext);
  console.log(translation);

  return (
    <div
      className="
        mt-4
        bg-[url('/images/about/manufacturer/test.png')]
        min-h-[324px]
        max-w-[650px]
        lg:bg-auto
        min-[600px]:bg-contain
        bg-top
        bg-no-repeat
        [background-size:340px_500px]
        mb-10
      "
    >
      <div
        className="
          grid
          grid-cols-1
          min-[600px]:grid-cols-2
          justify-between
          items-start
          content-start
          min-[600px]:gap-y-5
          gap-y-2
          gap-x-[30px]
          self-center
          flex-wrap
          md:pt-[120px]
          pt-[60px]
        "
      >
        {MANUFACTURER_ARTICLE_STATS.map(({ description, title }) => (
          <div
            key={title}
            className="
              lg:py-10
              md:py-7
              py-4
              flex
              flex-col
              items-start
              min-[600px]:gap-5
              gap-2
              border-b-2
              border-solid
              border-[#191919]
              min-[600px]:max-w-[310px]
              h-full
            "
          >
            <p className="[font-size:_clamp(24px,3vw,48px)] font-semibold leading-[100%] -tracking-[0.48px]">
              {title}
            </p>
            <p className="[font-size:_clamp(16px,1.5vw,20px)] font-normal leading-[120%] -tracking-[0.2px] font-walsheim text-[#505050]">
              {translation[description]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArticleParagraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="[font-size:_clamp(16px,1.5vw,20px)] font-walsheim leading-[150%] -tracking-[0.36px] font-normal max-w-[650px] ">
      {paragraph}
    </p>
  );
};

const ArticleStroke = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="[font-size:_clamp(24px,3vw,48px)] leading-[110%] font-semibold text-base-red">
      <Trans
        components={{
          stroke: <span className="manufacturer_stroke text-black" />,
        }}
      >
        {paragraph}
      </Trans>
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
  const { translation } = useContext(i18nProviderContext);

  return (
    <div className="flex flex-col gap-[30px] w-full max-[920px]:mx-auto max-xl:max-w-[650px]">
      {MANUFACTURER_ARTICLE.map(({ paragraphHeading, paragraphs }) => (
        <Fragment key={paragraphHeading}>
          <ArtcileHeading heading={translation[paragraphHeading]} />
          {paragraphs.map((paragraph, index) => {
            if (paragraph.type === "text")
              return (
                <ArticleParagraph
                  paragraph={translation[paragraph.value]}
                  key={index}
                />
              );
            if (paragraph.type === "image")
              return <ImagesSlider key={index} images={paragraph.src} />;
            if (paragraph.type === "stats") return <ArticleStats key={index} />;
            if (paragraph.type === "stroke")
              return (
                <ArticleStroke
                  paragraph={translation[paragraph.value]}
                  key={index}
                />
              );
          })}
        </Fragment>
      ))}
    </div>
  );
}
