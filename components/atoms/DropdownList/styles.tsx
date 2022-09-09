import styled from "styled-components";

export const Container = styled.div`
  width: 80px;
  height: 30px;
  position: relative;
`;
Container.displayName = "Container";

export const BaseButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  cursor: pointer;
  border: 1px solid #b7b7b7;
  font-size: 0.7em;
  border-radius: 5px;
  background: white;
  color: ${({ theme }) => theme.colors.secondary};
`;
BaseButton.displayName = "BaseButton";

export const DropdownButton = styled(BaseButton)`
  width: 100%;
  height: 30px;
`;
DropdownButton.displayName = "DropdownButton";

export const DropdownButtonAltBorder = styled(DropdownButton)<{
  isOpen?: boolean;
}>``;
DropdownButtonAltBorder.displayName = "DropdownButtonAltBorder";

export const ListContainer = styled.div`
  width: 100%;
  max-height: 160px;
  border-radius: 10px;
  background: white;
`;
ListContainer.displayName = "ListContainer";

export const ItemContainer = styled(BaseButton)`
  width: 100%;
  background-color: white;
  border: 1px solid #b7b7b7;
  display: flex;
  align-content: center;
  width: 80px;
  height: 30px;

  &:hover {
    filter: brightness(0.9);
  }
`;
ItemContainer.displayName = "ItemContainer";
