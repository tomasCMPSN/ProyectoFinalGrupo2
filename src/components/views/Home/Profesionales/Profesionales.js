import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Profesionales = () => {
  return (
    <Container className="mb-3">
      <Row>
        <Col md={12} lg={6} className="mb-4">
          <Col xs={12} className="text-center">
            <img
              className="rounded img-profesionales"
              src="https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg?format=2500w"
              alt="foto"
            />
          </Col>
          <Col xs={12} className="text-center">
            <p className="display-4">Marta Minujin</p>
            <p className="lead fs-4">8 años de experiencia</p>
          </Col>
        </Col>
        <Col md={12} lg={6} className="mb-4">
          <Col xs={12} className="text-center">
            <img
              className="rounded img-profesionales"
              src="https://www.bethesdaheadshots.com/wp-content/uploads/2015/07/HAMZA_5496pF800x1000.jpg"
              alt="foto"
            />
          </Col>
          <Col xs={12} className="text-center">
            <p className="display-4">Jorge Ignacio</p>
            <p className="lead fs-4">12 años de experiencia</p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Profesionales;
