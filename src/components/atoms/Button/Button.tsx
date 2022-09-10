import React from "react";
import { Container } from "./styles";

export type Variant = "primary" | "secondary" | "tertiary";
export type Size = "huge" | "big" | "small";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
}

function Button({
  children,
  variant = "primary",
  size = "big",
  ...props
}: ButtonProps) {
  return <Container {...{ variant, size, ...props }}>{children}</Container>;
}

export default Button;
