import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 80%;
  border: 1px solid #9a9a9a;
  border-radius: 12px;
  background-color: white;
  height: 600px;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 10px;
`;
Container.displayName = "Container";
