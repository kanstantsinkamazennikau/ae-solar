"use client";

import { BlogPostImageProps } from "@/app/[locale]/about/blog/components/BlogPostImage/types";
import LightBoxImage from "@/app/[locale]/components/common/LightBoxImage";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function BlogPostImage({ image }: BlogPostImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="cursor-pointer flex justify-center mb-9">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        carousel={{ finite: true }}
        slides={[{ src: `/images/about/blog/${image.src}` }]}
        plugins={[Zoom]}
        controller={{
          closeOnPullDown: true,
          closeOnBackdropClick: true,
          closeOnPullUp: true,
        }}
        render={{
          slide: LightBoxImage,
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        styles={{
          container: {
            backgroundColor: "rgb(25, 25, 25, 0.5)",
            backdropFilter: "blur(10px)",
          },
        }}
      />
      <Image
        src={`/images/about/blog/${image.src}`}
        alt={image.src}
        width={image.width}
        height={image.height}
        quality={100}
        className="inline-block"
        onClick={() => setOpen(true)}
      />
    </div>
  );
}
