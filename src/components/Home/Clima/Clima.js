import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Clima = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="align-items-center">
        <Col>
          <p className="mt-3">Belgrano</p>
        </Col>
        <Col>
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Clima" />
        </Col>
        <Col>25ºC</Col>
        <Col>Sunny</Col>
      </Row>
    </Container>
  );
};

export default Clima;
