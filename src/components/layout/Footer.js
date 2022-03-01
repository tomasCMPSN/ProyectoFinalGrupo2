import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../../components/img/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

/*

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
*/

const Footer = () => {
  return (
    <>
      <section className=" color-navbar text-light text-center pt-5 ">
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <h5 className="lead text-black letra">Seguinos en Nuestras redes:</h5>
              <Link to="*" className="text-decoration-none text-black">
                {" "}
                <i className="fab fa-2x  p-1 fa-instagram"></i>{" "}
              </Link>
              <Link to="*" className="text-decoration-none text-black">
                {" "}
                <i class="fa-brands fa-facebook"></i>
              </Link>
              <Link to="*" className="text-decoration-none text-black">
                {" "}
                <i className="fab fa-2x  p-1 fa-twitter-square"></i>
              </Link>
            </Col>

            <Col sm={12} md={4}>
            <p className=" fs-5 text-black letra">
            &copy; Todos los derechos reservados P&C
          </p>
            </Col>

            <Col sm={12} md={4}>
              <p className="fs-5 text-black letra">
                Las Heras 852,San Miguel de Tucumán.
              </p>
              <p className="fs-5 text-black letra text-center">
                Teléfono: 0381-6497933
              </p>
              <p className="fs-5 text-black letra text-center">
                Info@pawsclaws.com
              </p>
            </Col>
            
          </Row>
          
        </Container>
      </section>
    </>
  );
};

export default Footer;
