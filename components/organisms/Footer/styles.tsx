import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  padding: 2rem;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  font-size: 1em;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  border: 1px solid black;
  color: ${({ theme }) => theme.colors.secondary};
`;

Container.displayName = "Container";
