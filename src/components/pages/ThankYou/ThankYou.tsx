import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCart,
  useTotalQuantity,
} from "../../../redux/features/cart/cartSlice";
import Button from "../../atoms/Button";
import { Container, SecondaryContainer } from "./styles";

function ThankYou() {
  const quantity = useTotalQuantity();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const buyMoreHandler = () => {
    dispatch(deleteCart());
    navigate("/");
  };
  return (
    <Container>
      <SecondaryContainer>
        <h2>Thank you!</h2>
        <h3>
          Your {quantity} product{quantity > 1 ? "s" : ""} will be shipped soon!
        </h3>
        <Button size="huge" onClick={buyMoreHandler}>
          Buy more
        </Button>
      </SecondaryContainer>
    </Container>
  );
}

export default ThankYou;
