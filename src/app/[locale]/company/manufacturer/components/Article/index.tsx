"use client";

import { MANUFACTURER_ARTICLE } from "@/app/[locale]/company/manufacturer/constants";
import { Options } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import parse from "html-react-parser";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const ArtcileHeading = ({ heading }: { heading: string }) => {
  return (
    <p className="[font-size:_clamp(36px,3vw,48px)] leading-[120%] -tracking-[0.36px] max-w-[650px] ">
      {heading}
    </p>
  );
};

const ArticleParagraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <p className="[font-size:_clamp(16px,1.5vw,20px)] font-walsheim leading-[150%] -tracking-[0.36px] font-normal max-w-[650px] ">
      {parse(paragraph)}
    </p>
  );
};

const ImagesSlider = () => {
  const [index, setIndex] = useState(0);
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
    setIndex(id);
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };

  const images = [
    "Img.png",
    "Img1.png",
    "Img2.png",
    "Img3.png",
    "Img4.png",
    "Img5.png",
    "Img6.png",
    "Img7.png",
  ];

  useEffect(() => {
    console.log(index);

    if (index > images.length - 1) {
      if (mainRef.current) {
        mainRef.current.go(0);
        setIndex(0);
        return;
      }
    }

    if (index < 0) {
      if (mainRef.current) {
        mainRef.current.go(images.length - 1);
        setIndex(images.length - 1);
        return;
      }
    }
    if (mainRef.current) {
      mainRef.current.go(index);
    }
  }, [images.length, index]);

  const nextSlide = () => {
    setIndex((prevState) => prevState + 1);
  };

  const prevSlide = () => {
    setIndex((prevState) => prevState - 1);
  };

  return (
    <div className="flex gap-4 xl:h-[360px] xl:flex-row flex-col max-xl:max-w-[650px]">
      <Splide
        options={mainOptions}
        ref={mainRef}
        className="max-w-[650px]"
        key={"test"}
      >
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
          className="xl:-rotate-90 rotate-180 cursor-pointer"
          onClick={prevSlide}
        />
        <div className="overflow-hidden ">
          <div
            className={`transition-all duration-300 max-xl:hidden xl:block [transform:translateY(-${
              index * 56
            }px)]`}
            style={{
              transform: `translateY(-${index * 56}px)`,
            }}
          >
            {images.map((thumbnail, index) => (
              <div key={index} id={index.toString()}>
                <button onClick={() => handleThumbs(index)}>
                  <Image
                    src={`/images/about/manufacturer/${thumbnail}`}
                    alt="articleImg1"
                    quality={100}
                    width={100}
                    height={100}
                  />
                </button>
              </div>
            ))}
          </div>
          <div
            className={`transition-all duration-300 max-xl:flex hidden [transform:translateY(-${
              index * 56
            }px)]`}
            style={{
              transform: `translateX(-${index * 56}px)`,
            }}
          >
            {images.map((thumbnail, index) => (
              <div key={index} id={index.toString()}>
                <button onClick={() => handleThumbs(index)}>
                  <Image
                    src={`/images/about/manufacturer/${thumbnail}`}
                    alt="articleImg1"
                    quality={100}
                    width={100}
                    height={100}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={`/images/redArrowRight.svg`}
          alt="redArrowRight"
          quality={100}
          width={16}
          height={16}
          className="xl:rotate-90 cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default function Artcile() {
  return (
    <div className="flex flex-col gap-[30px] w-full max-[920px]:mx-auto">
      {MANUFACTURER_ARTICLE.map(({ paragraphHeading, paragraphs }) => (
        <Fragment key={paragraphHeading}>
          <ArtcileHeading heading={paragraphHeading} />
          {paragraphs.map((paragraph, index) => {
            if (paragraph.type === "text")
              return (
                <ArticleParagraph paragraph={paragraph.value} key={index} />
              );
            if (paragraph.type === "image") return <ImagesSlider key={index} />;
          })}
        </Fragment>
      ))}
    </div>
  );
}
