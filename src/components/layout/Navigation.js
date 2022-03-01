import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../components/img/logo.png'
import {Link} from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg"  className="color-navbar">
        <Container>
          <Navbar.Brand href="/" className="fs-2 ">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block logo "
            />{" "}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto letra-nav ">

            <Link className="nav-link fs-4 " to="/">Home</Link> 
            <Link className="nav-link fs-4 " to="/login">Login</Link> 
            <Link className="nav-link fs-4 " to="/contacto">Contacto</Link> 
            <Link className="nav-link fs-4 " to="/SobreNosotros">Sobre nosotros</Link> 
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
