import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-top: 3px solid #9a9a9a;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 10px;
`;
Container.displayName = "Container";

export const SecondaryContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  border: 1px solid #9a9a9a;
  border-radius: 12px;
  background-color: white;
  height: 500px;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 780px) {
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1em;
    }
  }
`;
SecondaryContainer.displayName = "SecondaryContainer";
