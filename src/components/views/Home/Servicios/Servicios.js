import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Servicios.css"


const Servicios = () => {
    return (
       
      <Row className="bg-primary">
        <Col sm={12} md={6} className="mb-2">
        <div className="d-flex justify-content-center">
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
              <Link to='*' variant="light" >
              
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col sm={12} md={6} className="mb-2 bg-danger">
        <div className="d-flex justify-content-center">
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
              <Link to='*' variant="light" >
              
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        </Row>
    
    );
};

export default Servicios;

