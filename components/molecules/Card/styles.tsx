import Badge from "atoms/Badge";
import { Variant } from "atoms/Badge/Badge";
import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 300px;
  background-color: white;
  border: 2px solid #dcdcdc;
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;
CardContainer.displayName = "CardContainer";

export const ItemName = styled.p`
  border-top: 2px solid #dcdcdc;
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;
ItemName.displayName = "ItemName";

export const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9em;
  line-height: 0px;
`;
DescriptionText.displayName = "DescriptionText";

export const ButtonsContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;
ButtonsContainer.displayName = "ButtonsContainer";

export const CardBadge = styled(Badge)<{ variant?: Variant }>`
  position: absolute;
  ${({ variant }) =>
    variant === "primary"
      ? `top: -10px; right: -10px;`
      : `top: -10px; left: -10px;`};
  font-size: ${({ variant }) => (variant === "primary" ? `0.7em;` : `0.5em;`)};
  z-index: 100;
`;
CardBadge.displayName = "CardBadge";
