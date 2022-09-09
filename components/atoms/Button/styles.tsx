import styled from "styled-components";
import { Size, Variant } from "./Button";

export const Container = styled.button<{ variant: Variant; size: Size }>`
  width: ${({ size }) => (size === "big" ? "100px" : "50px")};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: ${({ size }) => (size === "big" ? "1em" : "0.7em")};
  &:hover {
    filter: brightness(0.8);
  }
  background-color: ${({ variant }) =>
    variant === "primary" ? "#5f739b" : "#999999"};
`;
Container.displayName = "Container";
