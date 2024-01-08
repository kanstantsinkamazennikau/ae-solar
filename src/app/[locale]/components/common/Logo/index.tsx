import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="ae-solar logo"
      width={180}
      height={24}
      priority
    />
  );
}
