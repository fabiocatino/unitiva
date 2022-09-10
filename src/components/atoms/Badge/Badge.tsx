import { BadgeContainer } from "./styles";

export type Variant = "primary" | "secondary";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
}

function Badge({ children, variant = "primary", ...props }: BadgeProps) {
  return <BadgeContainer {...{ variant, ...props }}>{children}</BadgeContainer>;
}

export default Badge;
