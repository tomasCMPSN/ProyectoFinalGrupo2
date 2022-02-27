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
          <Navbar.Brand href="#home" className="fs-2 letra">
            <img
              alt="logo"
              src={logo}
              className="d-inline-block logo letra"
            />{" "}
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

               <Link className="nav-link fs-4 letra" to="/login">Login</Link> 
               <Link className="nav-link fs-4 letra" to="/contacto">Contacto</Link> 
              <Link to="/admin" className="nav-link fs-4" >Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
