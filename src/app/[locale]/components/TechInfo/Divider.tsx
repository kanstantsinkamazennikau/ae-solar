import Image from "next/image";

export default function Divider() {
  return (
    <Image
      src="/images/divider.svg"
      alt="divider"
      priority
      width={1320}
      height={1}
      className="mb-[200px]"
    />
  );
}
