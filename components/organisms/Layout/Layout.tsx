import Navbar from "organisms/Navbar";
import React from "react";
import { Container } from "./styles";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}

export default Layout;
