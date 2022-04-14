import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faUserXmark } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="text-light text-center pt-5 footerStyle ">
        <Container>
          <Row>
          

            <Col sm={12} md={6}>
            <p className=" lead fs-5 text-black letra">
            &copy; Todos los derechos reservados P&C
          </p>
            </Col>

            <Col sm={12} md={6} className=" lead ">
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
