import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  padding: 2rem;
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

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 0.5rem;
  cursor: pointer;
`;
BackContainer.displayName = "BackContainer";

export const ForwardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1rem;
`;
ForwardContainer.displayName = "ForwardContainer";
