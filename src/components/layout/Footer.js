import React from "react";
import { Container } from "react-bootstrap";
import logo from '../../components/img/logo.png'

const Footer = () => {
  return (
    <div className="color-navbar">
      <Container className="p-3">
          <img className="logo mx-auto d-block" src={logo} alt="logo" />
      </Container>
    </div>
  );
};

export default Footer;
