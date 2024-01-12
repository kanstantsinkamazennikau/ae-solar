import { InputProps } from "@/app/[locale]/components/common/Input/types";

export default function Input({
  placeholder,
  register,
  externalStyle,
  error,
  ...props
}: InputProps) {
  return (
    <div className="relative min-[640px]:w-auto w-full">
      <input
        className={`bg-transparent border-b-2 border-solid border-base-red outline-none ${externalStyle} w-full`}
        placeholder={placeholder}
        {...register}
        {...props}
      />
      {error && (
        <p className="text-xs text-base-red absolute bottom-0 translate-y-full">
          {error.message!.toString()}
        </p>
      )}
    </div>
  );
}
