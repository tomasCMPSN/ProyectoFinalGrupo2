import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import logo from "../../components/img/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="background-nav navbar-customclass"  >
        <Container>
          <Navbar.Brand href="/" className="fs-2 ">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block logo "
            />{" "}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto"> 
            <Nav.Link className="nav-link fs-4" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link fs-4" href="/SobreNosotros">Nosotros</Nav.Link>
            <Nav.Link className="nav-link fs-4 text-warning" href="/login">Login</Nav.Link>
            
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
