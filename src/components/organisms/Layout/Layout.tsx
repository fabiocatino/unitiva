import Footer from "../Footer";
import Navbar from "../Navbar";
import { Container } from "./styles";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
