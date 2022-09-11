import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteCart,
  useTotalQuantity,
} from "../../../redux/features/cart/cartSlice";
import Button from "../../atoms/Button";
import { BackContainer, Container, ForwardContainer } from "./styles";

function Footer() {
  const quantity = useTotalQuantity();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleNavigation = () => {
    location.pathname === "/"
      ? navigate("/cart")
      : location.pathname === "/cart"
      ? quantity >= 1 && navigate("/thank-you")
      : dispatch(deleteCart()) && navigate("/");
  };
  return (
    <Container>
      {location.pathname === "/cart" && (
        <BackContainer onClick={() => navigate(-1)}>
          <IoChevronBackCircleOutline size={25} /> Back
        </BackContainer>
      )}
      <ForwardContainer>
        {location.pathname !== "/thank-you" && `${quantity} products added`}
        <Button size="huge" onClick={handleNavigation}>
          {location.pathname === "/"
            ? "Go to Cart"
            : location.pathname === "/cart"
            ? "Checkout"
            : "Buy more"}
        </Button>
      </ForwardContainer>
    </Container>
  );
}

export default Footer;
