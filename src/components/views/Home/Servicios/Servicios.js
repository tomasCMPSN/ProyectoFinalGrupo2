import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Servicios.css"


const Servicios = () => {
    return (
        <Container >
      <Row>
        <Col sm={12} md={6} className="mb-2">
          <Card className="text-center sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://st2.depositphotos.com/1063397/5982/i/600/depositphotos_59823897-stock-photo-bathing-a-dog-golden-retriever.jpg"
              alt='gatito tierno de Primeros pasos'
            />
              <Card.Title className='mt-2'>Corte</Card.Title>
              <Card.Text>
                hdfjhfjhf
              </Card.Text>
              <Link to="/planes/primerospasos"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} className="mb-2">
          <Card className="text-center  sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://animalesmascotas.com//wp-content/uploads/2009/11/cortar-pelo-mascota.jpg"
              alt='perro mirando al frente del Plan Madurando'
            />
              <Card.Title className='mt-2'>Corte</Card.Title>
              <Card.Text>
                gdgdsgsg
              </Card.Text>
              <Link to="/planes/madurando"> <Button variant="danger" className="color-navbar rounded-pill">Contratar</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>
    );
};

export default Servicios;

