import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="ae-solar logo"
      className="w-[184px] pr-3"
      width={180}
      height={24}
      priority
    />
  );
}
