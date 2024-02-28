import { PanelVideoProps } from "@/app/[locale]/products/components/PanelsList/types";

export default function PanelVideo({ onLoaded, panel }: PanelVideoProps) {
  return (
    <>
      <video
        width="650"
        height="340"
        autoPlay
        loop
        muted
        onPlay={() => {
          onLoaded();
        }}
        className="w-[650px] max-md:min-h-[330px] max-md:object-cover"
      >
        <source src={`/videos/products/${panel}Choose.mp4`} type="video/mp4" />
      </video>
    </>
  );
}
