import { useGetProductsQuery } from "../../../redux/features/api/productsApi";
import { Product } from "../../../types/products";
import Card from "../../molecules/Card/Card";
import { Container, SecondaryContainer } from "./styles";

function Home() {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <>
      <Container>
        <h1>LAST PRODUCTS AVAILABLE</h1>
        <span>{data?.length} products available</span>
      </Container>
      <SecondaryContainer>
        {isLoading
          ? "Loading..."
          : data?.map((product: Product) => (
              <Card key={product.id} {...{ product }} />
            ))}
      </SecondaryContainer>
    </>
  );
}

export default Home;
