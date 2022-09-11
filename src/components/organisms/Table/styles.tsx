import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 780px) {
    padding: 1rem 0;
  }
  #add-btn {
    color: #6b7da2;
  }
`;
Container.displayName = "Container";

export const TableContainer = styled.table`
  border-collapse: collapse;

  th {
    color: #9d9d9d;
    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        cursor: pointer;
      }
    }
  }

  td,
  th {
    border-right: 1px solid black;
    &:last-child {
      border-right: none;
    }

    text-align: left;
    padding: 1rem;

    @media screen and (max-width: 780px) {
      font-size: 0.7em;
      padding: 0.5rem;
    }

    &:first-child {
      width: 40%;
    }

    button {
      float: right;
      @media screen and (max-width: 780px) {
        font-size: 0.7em;
        padding: 0;
      }
    }
  }

  tr {
    border-top: 1px solid black;
    &:first-child {
      border-top: none;
      border-bottom: 1px solid black;
    }
  }
`;
TableContainer.displayName = "TableContainer";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #c46d6c;
  font-weight: 700;
  cursor: pointer;
`;
Button.displayName = "Button";
