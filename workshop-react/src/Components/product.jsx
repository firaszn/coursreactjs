import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ product, onBuy, onLike, onDislike }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Card.Text>Quantity Left: {product.quantity}</Card.Text>
        <Button
          variant="primary"
          onClick={() => onBuy(product)}
          disabled={product.quantity === 0}
        >
          {product.quantity === 0 ? "Out of Stock" : "Buy Product"}
        </Button>
        <Button
          variant="success"
          onClick={() => onLike(product.name)}
          style={{ marginLeft: "10px" }}
          disabled={product.like === 1} // Disable Like button if already liked
        >
          Like
        </Button>
        <Button
          variant="danger"
          onClick={() => onDislike(product.name)}
          style={{ marginLeft: "10px" }}
          disabled={product.like === 0} // Disable Dislike button if already disliked
        >
          Dislike
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
