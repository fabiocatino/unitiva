import { SelectContainer } from "./styles";

export type Variant = "primary" | "secondary";

interface SelectProps {
  children: JSX.Element[] | string | number;
  variant?: Variant;
}

function Select({ children, variant = "primary", ...props }: SelectProps) {
  return (
    <SelectContainer {...{ variant, ...props }}>{children}</SelectContainer>
  );
}

export default Select;
