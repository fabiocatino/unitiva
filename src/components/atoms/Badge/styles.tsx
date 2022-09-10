import styled from "styled-components";
import { Variant } from "./Badge";

export const BadgeContainer = styled.div<{ variant: Variant }>`
  border-radius: 50%;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#5f739b" : "#b55353"};
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
BadgeContainer.displayName = "BadgeContainer";
