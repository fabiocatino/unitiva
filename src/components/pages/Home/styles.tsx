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

  @media all and (max-width: 780px) {
    h1 {
      font-size: 0.7em;
    }
    span {
      font-size: 0.6em;
    }
  }
`;
Container.displayName = "Container";

export const SecondaryContainer = styled.div`
  margin: auto;
  display: flex;
  gap: 2rem;
  padding: 2rem 0rem;
  color: black;
  width: 80%;

  @media all and (max-width: 780px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;
SecondaryContainer.displayName = "SecondaryContainer";
