import React from "react";
import Container from "../../src/components/Container";
import BreadCrumb from "../../src/components/BreadCrumb";
import CardSection from "../components/CardSection";
const MyCart = () => {
  return (
    <Container>
      <BreadCrumb current_page="My Cart" />
      <CardSection />
    </Container>
  );
};

export default MyCart;
