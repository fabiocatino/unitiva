import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import {
  Container,
  DropdownButton,
  ItemContainer,
  ListContainer,
} from "./styles";

interface DropdownListProps {
  list?: string[];
}

export default function DropdownList({
  list = [],
}: DropdownListProps): ReactElement {
  const [isOpen, setOpen] = useState(false);
  const [curSelection, setCurSelection] = useState<string[]>(["Select size"]);

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
  useEffect(() => {
    window.removeEventListener("mousedown", handleClickOut);
    window.addEventListener("mousedown", handleClickOut);
    return () => {
      window.removeEventListener("mousedown", handleClickOut);
    };
  }, [handleClickOut]);

  const clickHandler = (item: string) => {
    setCurSelection([item]);
    setOpen(false);
  };

  return (
    <Container ref={dropdownRef}>
      <DropdownButton onClick={() => setOpen((prev) => !prev)}>
        <p>{curSelection}</p>
      </DropdownButton>
      {isOpen && (
        <ListContainer>
          {list.map((item: string, key: number) => {
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
