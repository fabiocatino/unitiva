import { useNavigate } from "react-router-dom";
import { useTotalQuantity } from "../../../redux/features/cart/cartSlice";
import Button from "../../atoms/Button";
import { Container } from "./styles";

function ThankYou() {
  const quantity = useTotalQuantity();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h2>Thank you!</h2>
        <h3>
          Your {quantity} product{quantity > 1 ? "s" : ""} will be shipped soon!
        </h3>
        <Button size="huge" onClick={() => navigate("/")}>
          Buy more
        </Button>
      </Container>
    </>
  );
}

export default ThankYou;
