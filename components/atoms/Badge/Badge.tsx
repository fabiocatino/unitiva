import { BadgeContainer } from "./styles";

export type Variant = "primary" | "secondary";

interface BadgeProps {
  children: JSX.Element | string | number | undefined;
  variant?: Variant;
}

function Badge({ children, variant = "primary", ...props }: BadgeProps) {
  return <BadgeContainer {...{ variant, ...props }}>{children}</BadgeContainer>;
}

export default Badge;
