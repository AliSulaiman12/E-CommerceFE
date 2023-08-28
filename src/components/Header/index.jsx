import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Cart } from "react-bootstrap-icons";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Form } from 'react-bootstrap';

function Header()  {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              className="logo"
              src="data:image/png;base64,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"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" onClick={() => navigate("/cart")}>
          <Badge bg="warning">{cartItems.length}</Badge>
          <Cart />
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
