import { InputProps } from "@/app/[locale]/components/common/Input/types";

export default function TextArea({
  placeholder,
  register,
  externalStyle,
  externalContainerStyle,
  error,
  showDot,
  ...props
}: InputProps) {
  return (
    <div
      className={`relative min-[640px]:w-auto w-full ${externalContainerStyle} flex`}
    >
      <textarea
        className={`
          bg-transparent
          border-b-2
          border-solid
          border-base-red
          outline-none 
          ${externalStyle}
          w-full
          placeholder:flex
          placeholder:justify-end
        `}
        placeholder={placeholder}
        {...register}
        {...props}
      />
      {showDot && <p>.</p>}

      {error && (
        <p className="text-xs text-base-red absolute bottom-0 translate-y-full">
          {error.message!.toString()}
        </p>
      )}
    </div>
  );
}
