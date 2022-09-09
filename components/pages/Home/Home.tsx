import Card from "molecules/Card";
import Footer from "organisms/Footer";
import { Product, useGetProductsQuery } from "redux/features/api/productsApi";
import { Container, SecondaryContainer } from "./styles";

type Props = {};

function Home({}: Props) {
  const { data } = useGetProductsQuery();
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
      <Footer />
    </>
  );
}

export default Home;
