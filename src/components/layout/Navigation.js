import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../components/img/logo.png'

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg"  className="color-navbar">
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block logo"
            />{" "}
            Paws & Claws
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="fs-4">Login</Nav.Link>
              <Nav.Link href="/admin" className="fs-4">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
