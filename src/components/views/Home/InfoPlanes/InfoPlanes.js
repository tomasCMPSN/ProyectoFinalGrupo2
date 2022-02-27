import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./InfoPlanes.css"

const InfoPlanes = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4} className="mb-3 ">
          <Card className="text-center sombras">
            <Card.Body>
              <Card.Title>PRIMEROS PASOS</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Ingresar 🐾</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <Card className="text-center sombras">
            <Card.Body>
              <Card.Title>MADURANDO</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Ingresar 🐾</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <Card className="text-center sombras">
            <Card.Body>
              <Card.Title>ADULTOS</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Ingresar 🐾</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoPlanes;
