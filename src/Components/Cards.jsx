import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";

const Cards = ({ items }) => {
  return (
    <div className="contain">
      {items.map((item) => (
        <Card style={{ width: "18rem" }} key={item.title}>
          {" "}
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Card.Text>Quantity: {item.quantity}</Card.Text>{" "}
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
