import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      <Navbar className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/Store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/About" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/ContactUs" as={NavLink}>
              Contact Us
            </Nav.Link>
          </Nav>
          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-success"
            >
              <CartIcon />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
