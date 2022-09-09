import styled from "styled-components";
import { Size, Variant } from "./Button";

export const Container = styled.button<{ variant: Variant; size: Size }>`
  width: ${({ size }) => (size === "big" ? "150px" : "50px")};
  height: ${({ size }) => (size === "big" ? "50px" : "30px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: ${({ size }) => (size === "big" ? "1.5em" : "0.7em")};
  &:hover {
    filter: brightness(0.8);
  }
  background-color: ${({ variant }) =>
    variant === "primary" ? "#5f739b" : "secondary"};
`;
Container.displayName = "Container";
