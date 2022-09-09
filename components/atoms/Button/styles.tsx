import styled from "styled-components";
import { Size, Variant } from "./Button";

export const Container = styled.button<{
  variant: Variant;
  size: Size;
  disabled?: boolean;
}>`
  width: ${({ size }) =>
    size === "huge" ? "150px" : size === "big" ? "100px" : "50px"};
  height: ${({ size }) => (size === "huge" ? "50px" : "30px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: ${({ size }) =>
    size === "huge" ? "1.5em" : size === "big" ? "1em" : "0.7em"};
  &:hover {
    filter: brightness(0.8);
  }
  background-color: ${({ variant }) =>
    variant === "primary" ? "#5f739b" : "#999999"};
`;
Container.displayName = "Container";
