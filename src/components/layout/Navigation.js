import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../components/img/logo.png'
import { Link } from "react-router-dom";


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
              <Link className="fs-4 nav-link" to='/'>Login</Link>
              <Link className="fs-4 nav-link" to='../Admin/AdminHome.js'>Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
