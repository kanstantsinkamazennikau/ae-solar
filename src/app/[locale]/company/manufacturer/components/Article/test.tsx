import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";
import Image from "next/image";
import React, { ReactNode, useEffect, useRef } from "react";

export default function ThumbnailsExample() {
  /**
   * The main Splide component.
   */
  const mainRef = useRef<Splide>();

  /**
   * The thumbnail Splide component.
   */
  const thumbsRef = useRef<Splide>();

  /**
   * Set the sync target right after the component is mounted.
   */
  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: false,
  };

  const thumbsOptions: Options = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    width: 650,
  };

  /**
   * Render the component.
   *
   * @return A React node.
   */

  return (
    <div className="flex flex-col gap-4 h-[650px]">
      <Splide
        options={mainOptions}
        //@ts-ignore
        ref={mainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        {["Img.png", "Img1.png", "Img2.png", "Img3.png", "Img4.png"].map(
          (slide) => (
            <SplideSlide key={slide}>
              <Image
                src={`/images/about/manufacturer/${slide}`}
                alt="articleImg1"
                quality={100}
                width={650}
                height={360}
              />
            </SplideSlide>
          )
        )}
      </Splide>

      <Splide
        options={thumbsOptions}
        //@ts-ignore
        ref={thumbsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        className=" max-h-[100px]"
      >
        {["Img.png", "Img1.png", "Img2.png", "Img3.png", "Img4.png"].map(
          (slide) => (
            <SplideSlide key={slide}>
              <Image
                src={`/images/about/manufacturer/${slide}`}
                alt="articleImg1"
                quality={100}
                width={650}
                height={360}
              />
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
}
