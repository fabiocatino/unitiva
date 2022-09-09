import Button from "atoms/Button";
import React from "react";
import { Container } from "./styles";

type FooterProps = {};

function Footer({}: FooterProps) {
  return (
    <Container>
      0 products added{" "}
      <Button disabled size="huge">
        Go to Cart
      </Button>
    </Container>
  );
}

export default Footer;
