import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, CartProducts } from "../../../redux/features/cart/cartSlice";
import { Product } from "../../../types/products";
import Button from "../../atoms/Button";
import DropdownList from "../../atoms/DropdownList";

import {
  ButtonsContainer,
  CardBadge,
  CardContainer,
  DescriptionText,
  HighLightedText,
  ItemName,
} from "./styles";

type CardProps = {
  product?: Product;
};

function Card({ product }: CardProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cartItems);
  const isLast = product?.qty === 1;
  const [isOutOfStock] = useState(product?.qty === 0);

  const addItemHandler = (product: Product) => {
    const itemInCart = cart?.find(
      (item: CartProducts) => item.id === product.id
    );
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

  return (
    <CardContainer>
      <CardBadge variant={isLast ? "secondary" : "primary"}>
        {isLast ? "LAST" : product?.qty}
      </CardBadge>
      <img
        alt="img"
        height={125}
        width={200}
        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <ItemName>{product?.title}</ItemName>
      <DescriptionText>{product?.sku}</DescriptionText>
      <DescriptionText>
        Qty: {product?.qty}{" "}
        {product && product?.qty > 0 && product?.qty <= 3 && (
          <HighLightedText>
            Last piece{product?.qty > 1 && "s"}, buy it now!
          </HighLightedText>
        )}
      </DescriptionText>

      <DescriptionText>Price: €{product?.price.toFixed(2)}</DescriptionText>
      <ButtonsContainer {...{ isOutOfStock }}>
        {!isOutOfStock && <DropdownList list={[product!.size.toString()]} />}
        {isOutOfStock ? (
          <Button disabled size="big" variant="secondary">
            Added All
          </Button>
        ) : (
          <Button
            size="small"
            variant="primary"
            onClick={() => addItemHandler(product!)}
          >
            Add
          </Button>
        )}
      </ButtonsContainer>
    </CardContainer>
  );
}

export default Card;
