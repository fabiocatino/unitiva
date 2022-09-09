import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  DropdownButton,
  ItemContainer,
  ListContainer,
} from "./styles";

type List = (number | string | undefined)[];

interface DropdownListProps {
  list?: List;
}

export default function DropdownList({
  list = [],
}: DropdownListProps): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [curSelection, setCurSelection] = useState<List>(["Select size"]);

  const dropdownRef = useRef<null | HTMLDivElement>(null);

  const handleClickOut = useCallback(
    (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    },
    [setOpen, dropdownRef]
  );
  console.log(curSelection);
  useEffect(() => {
    window.removeEventListener("mousedown", handleClickOut);
    window.addEventListener("mousedown", handleClickOut);
    return () => {
      window.removeEventListener("mousedown", handleClickOut);
    };
  }, [handleClickOut]);

  const clickHandler = (item: List) => {
    setCurSelection(item), setOpen(false);
  };

  return (
    <Container ref={dropdownRef}>
      <DropdownButton onClick={() => setOpen((prev) => !prev)}>
        <p>{curSelection}</p>
      </DropdownButton>
      {isOpen && (
        <ListContainer>
          {list.map((item: any, key) => {
            return (
              <ItemContainer key={key} onClick={() => clickHandler(item)}>
                {item}
              </ItemContainer>
            );
          })}
        </ListContainer>
      )}
    </Container>
  );
}
