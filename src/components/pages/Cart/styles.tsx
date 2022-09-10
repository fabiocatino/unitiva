import styled from "styled-components";
import { SecondaryContainer } from "../Home/styles";

export const Total = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1em;
  text-decoration: underline;
  align-self: flex-end;
`;
Total.displayName = "Total";

export const PriceContainer = styled(SecondaryContainer)`
  flex-direction: column;
`;
PriceContainer.displayName = "PriceContainer";
