import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Product from "./product";
import productsData from "../products.json";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const buyProduct = (productToBuy) => {
    setProducts(
      products.map((product) =>
        product.name === productToBuy.name && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    alert("You have purchased a product!");
  };

  const toggleLike = (name) => {
    setProducts(
      products.map((product) =>
        product.name === name
          ? { ...product, like: 1 } // Set like to 1 when "Like" is clicked
          : product
      )
    );
  };

  const toggleDislike = (name) => {
    setProducts(
      products.map((product) =>
        product.name === name
          ? { ...product, like: 0 } // Set like to 0 when "Dislike" is clicked
          : product
      )
    );
  };

  return (
    <Container>
      {showWelcome && <Alert variant="success">Bienvenue sur notre boutique en ligne !</Alert>}
      <Row>
        {products.map((product) => (
          <Col key={product.name}>
            <Product
              product={product}
              onBuy={buyProduct}
              onLike={toggleLike}
              onDislike={toggleDislike}
            />
            <p>Likes: {product.like}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
