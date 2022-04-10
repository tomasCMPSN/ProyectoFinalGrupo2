import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import logo from "../../components/img/logo.png";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import "./Navigation.css";
import { Navb, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavItem, NavMenu } from "./NavigationStyle";

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

            <NavLinks className="nav-link fs-4" to="/">Home</NavLinks> 
            <NavLinks className="nav-link fs-4 " to="/SobreNosotros">Nosotros</NavLinks> 
            <NavLinks className="nav-link fs-4  text-warning" to="/login">Login</NavLinks> 
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{/* 
      <Navb>
        <NavbarContainer>
          <NavLogo to="/">
            <img alt="logo" src={logo} className=" logo " />{" "}
          </NavLogo>
          <MobileIcon>
            <FaBars />
            <NavMenu>
              <NavItem> 
              <NavLinks to="/">Home</NavLinks> 
              </NavItem>
            </NavMenu>
          </MobileIcon>
        </NavbarContainer>
      </Navb> */}
    </div>
  );
};

export default Navigation;
