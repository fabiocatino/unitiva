import Card from "molecules/Card";
import { Product, useGetProductsQuery } from "redux/features/api/productsApi";
import { Container, SecondaryContainer } from "./styles";

type Props = {};

function Home({}: Props) {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <>
      <Container>
        <h1>LAST PRODUCTS AVAILABLE</h1>
        <span>{data?.length} products available</span>
      </Container>
      <SecondaryContainer>
        {data?.map((product: Product) => (
          <Card key={product.id} {...{ product }} />
        ))}
      </SecondaryContainer>
    </>
  );
}

export default Home;
