import Button from "atoms/Button";
import Select from "atoms/Select";
import Image from "next/image";
import { Product } from "redux/features/api/productsApi";
import {
  ButtonsContainer,
  CardBadge,
  CardContainer,
  DescriptionText,
  ItemName,
} from "./styles";

type CardProps = {
  isLast?: boolean;
  name?: string;
  product?: Product;
};

function Card({ isLast, product }: CardProps) {
  return (
    <CardContainer>
      <CardBadge variant={product?.qty === 1 ? "secondary" : "primary"}>
        {product?.qty === 1 ? "LAST" : 5}
      </CardBadge>
      <Image
        objectFit="cover"
        alt="img"
        height={125}
        width={200}
        src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <ItemName>{product?.title}</ItemName>
      <DescriptionText>{product?.sku}</DescriptionText>
      <DescriptionText>Qty: {product?.qty}</DescriptionText>
      <DescriptionText>Price: {product?.price}</DescriptionText>
      <ButtonsContainer>
        <Select>
          <option value="0">Select car:</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
        </Select>
        <Button size="small" variant="primary">
          Add
        </Button>
      </ButtonsContainer>
    </CardContainer>
  );
}

export default Card;
