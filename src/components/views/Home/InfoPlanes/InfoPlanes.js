import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./InfoPlanes.css"

const InfoPlanes = () => {
  return (
    
      <Row>
        <Col sm={12} md={4} className="mb-3 ">
          <Card className="text-center sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/69371/pexels-photo-69371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt='perro mirando al frente del Plan Madurando'
              ClassName= "img-responsive"
            />
              <Card.Title>PRIMEROS PASOS</Card.Title>
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <Card className="text-center sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt='perro mirando al frente del Plan Madurando'
              ClassName= "img-responsive"
            />
              <Card.Title>MADURANDO</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <Card className="text-center sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt='perro mirando al frente del Plan Madurando'
              ClassName= "img-responsive"
            />
              <Card.Title>ADULTOS</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
  );
};

export default InfoPlanes;
