export interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  size?: "regular" | "small" | "extrasmall" | "normal" | "thin";
  showArrow?: boolean;
  style?: "secondary" | "outline" | "transparent" | "textOnly";
}
