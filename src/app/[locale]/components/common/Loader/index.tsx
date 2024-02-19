export default function Loader() {
  return (
    <div
      className="flex justify-center items-center md:h-[calc(100vh-210px)] h-[calc(100vh-145px)] w-full"
      id="loader"
    >
      <div className="flex w-8 h-8 border-solid border-base-red border-4 border-r-transparent rounded-full animate-spin"></div>
    </div>
  );
}
