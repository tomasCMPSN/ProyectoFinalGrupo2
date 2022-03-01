import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faUserXmark } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <section className=" color-navbar text-light text-center pt-5 ">
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <h5 className="lead text-black letra">Seguinos en Nuestras redes:</h5>
              <Link to="*" > 
              <FontAwesomeIcon icon="fa-brands fa-instagram" /> 
          </Link>
            </Col>

            <Col sm={12} md={4}>
            <p className=" lead fs-5 text-black letra">
            &copy; Todos los derechos reservados P&C
          </p>
            </Col>

            <Col sm={12} md={4} className=" lead ">
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
