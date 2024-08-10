import React from "react";
import Cart from "./Cart";
import products from "../products";
import Container from "./Container";
const CardSection = () => {
  const my_carts = [
    {
      id: 1,
      product: products[1],
    },
    {
      id: 2,
      product: products[6],
    },
  ];
  return (
    <Container>
      {my_carts.map((cart) => {
        return <Cart key={cart.id} cart={cart} />;
      })}
    </Container>
  );
};

export default CardSection;
