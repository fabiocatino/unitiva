import { useState, useEffect } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdRemoveCircleOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addItem,
  CartProducts,
  deleteItem,
} from "../../../redux/features/cart/cartSlice";
import { Product } from "../../../types/products";
import TableBody from "../../atoms/TableBody";
import TableCell from "../../atoms/TableCell";
import TableHead from "../../atoms/TableHead";
import TableHeader from "../../atoms/TableHeader";
import TableRow from "../../atoms/TableRow";
import { Button, Container, TableContainer } from "./styles";

type TableProps = {
  cart: CartProducts[];
};
function Table({ cart }: TableProps) {
  const dispatch = useDispatch();
  const [list, setList] = useState(cart);
  const [isAsc, setIsAsc] = useState(true);
  const [isLowest, setIsLowest] = useState(true);

  const IncreaseQtyHandler = (product: CartProducts) => {
    const itemInCart = cart?.find((item: Product) => item.id === product.id);
    if (itemInCart?.cartQty === product.qty) {
      return;
    }
    dispatch(
      addItem({
        ...product,
        cartQty: 1,
      })
    );
  };
  useEffect(() => {
    setList(cart);
  }, [cart]);
  const removeHandler = (item: CartProducts) => {
    dispatch(deleteItem(item));
  };

  const sortAlphabetically = () => {
    setIsAsc((prev) => !prev);
    const sortedArr = [...cart];
    sortedArr?.sort((a, b) =>
      isAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setList(sortedArr);
  };

  const sortByPrice = () => {
    setIsLowest((prev) => !prev);
    const sortedArr = [...cart];
    sortedArr?.sort((a, b) =>
      isLowest ? (a.price > b.price ? 1 : -1) : a.price < b.price ? 1 : -1
    );
    setList(sortedArr);
  };
  return (
    <Container>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableHeader>
              <span>
                Model <BiSortAlt2 size={30} onClick={sortAlphabetically} />
              </span>
            </TableHeader>
            <TableHeader>SKU</TableHeader>
            <TableHeader>Size</TableHeader>
            <TableHeader>Qty</TableHeader>
            <TableHeader>
              <span>
                Price <BiSortAlt2 size={30} onClick={sortByPrice} />
              </span>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {list?.map((item: CartProducts) => (
            <TableRow key={item?.id}>
              <TableCell>
                {item?.title}
                <Button onClick={() => removeHandler(item)}>
                  Remove <MdRemoveCircleOutline size={20} />
                </Button>
              </TableCell>

              <TableCell>{item?.sku}</TableCell>
              <TableCell>{item?.size}</TableCell>
              <TableCell>
                {item?.cartQty}
                <Button id="add-btn" onClick={() => IncreaseQtyHandler(item)}>
                  Add <IoIosAddCircleOutline size={20} />
                </Button>
              </TableCell>
              <TableCell>€{item?.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}

export default Table;
