import Loader from "@/app/[locale]/components/common/Loader";
import { VideoProps } from "@/app/[locale]/products/[id]/components/ProductsPanel/types";

export default function Video({ onLoaded, onEnded, id }: VideoProps) {
  return (
    <>
      <video
        width="1920"
        height="780"
        autoPlay
        muted
        onPlay={onLoaded}
        onEnded={onEnded}
        className="
          z-10
          relative
          md:scale-100
          min-[540px]:scale-[1.25]
          scale-[1.5]
          max-md:min-h-[630px]
          min-h-[700px]
          2xl:h-[1000px]
          min-[1360px]:h-[900px]
          xl:h-[850px]
          lg:h-[700px]
          h-[630px]
        "
      >
        <source src={`/videos/products/${id}Header.mp4`} type="video/mp4" />
      </video>
    </>
  );
}
