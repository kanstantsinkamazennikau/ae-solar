import { LoaderProps } from "@/app/[locale]/components/common/Loader/types";

export default function Loader({ externalStyle }: LoaderProps) {
  return (
    <div
      className={`${externalStyle} flex justify-center items-center md:h-[calc(100vh-210px)] h-[calc(100vh-145px)] w-full`}
      id="loader"
    >
      <div className="flex w-8 h-8 border-solid border-base-red border-4 border-r-transparent rounded-full animate-spin" />
    </div>
  );
}
