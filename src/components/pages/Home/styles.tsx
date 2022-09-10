import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-bottom: 3px solid #9a9a9a;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 10px;
`;
Container.displayName = "Container";

export const SecondaryContainer = styled.div`
  margin: auto;
  display: flex;
  gap: 2rem;
  padding: 2rem 0rem;
  color: black;
  width: 80%;
`;
SecondaryContainer.displayName = "SecondaryContainer";
