import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { useTotalQuantity } from "../../../redux/features/cart/cartSlice";
import Button from "../../atoms/Button";
import { BackContainer, Container, ForwardContainer } from "./styles";

function Footer() {
  const quantity = useTotalQuantity();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    location.pathname === "/"
      ? navigate("/cart")
      : location.pathname === "/cart"
      ? navigate("/thank-you")
      : navigate("/");
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
