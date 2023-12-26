import { InputProps } from "@/app/[locale]/components/common/Input/types";

export default function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className="bg-transparent border-b-2 border-solid border-base-red outline-none"
      placeholder={placeholder}
      {...props}
    ></input>
  );
}
