export default function Video() {
  return (
    <video
      width="1920"
      height="780"
      autoPlay
      muted
      onPlay={(event) => {
        console.log("play ✅");
        // console.log(event);
      }}
      onPause={(event) => {
        console.log("pause ✅✅");
        // console.log(event);
      }}
      onEnded={(event) => {
        console.log("ended ✅✅✅");
        // console.log(event)
      }}
      onLoadedData={(event) => {
        console.log("loadeddata 👻");
        // scrollToBottom();
      }}
      onError={(event) => {
        console.log("error ❌");
        // console.log(event);
      }}
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
      <source src="/videos/products/AuroraHeader.mp4" type="video/mp4" />
    </video>
  );
}
