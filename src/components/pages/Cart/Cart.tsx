import { useSelector } from "react-redux";
import {
  useTotalPrice,
  useTotalQuantity,
} from "../../../redux/features/cart/cartSlice";
import { CartState } from "../../../types/cartProductState";
import Table from "../../organisms/Table";
import { Container } from "../Home/styles";
import { PriceContainer, Total } from "./styles";

function Cart() {
  const cart = useSelector((state: CartState) => state.cart);
  const quantity = useTotalQuantity();
  const totalPrice = useTotalPrice();

  return (
    <>
      <Container>
        <h1>CART</h1>
        <span>{quantity} products added</span>
      </Container>
      <PriceContainer>
        {quantity >= 1 ? (
          <Table {...{ cart: cart.cartItems }} />
        ) : (
          <h1>Your basket is empty!</h1>
        )}
        <Total>
          <p>Total Pieces:____{quantity}</p>
          <p>Total Price:____€{totalPrice}</p>
        </Total>
      </PriceContainer>
    </>
  );
}

export default Cart;
