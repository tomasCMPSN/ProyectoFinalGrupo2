import React from 'react';
import { Card, Button,Row,Col, } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./Productos.css"

const Productos = () => {
    return (
        <div>
  
      <Row>
        <Col sm={12} md={4} className="mb-3">
        <div className="d-flex justify-content-center">
          <Card className="text-center sombras">
            <Card.Body >
            <Card.Img
              variant="top"
              src="https://www.dhresource.com/0x0/f2/albu/g10/M00/6C/69/rBVaVl0uiT6ACZfEAANjch4Trf4448.jpg/1pc-cartoon-pet-dog-toys-puppy-chew-squeaker.jpg"
              alt='perro mirando al frente del Plan Madurando'
              ClassName= "img-responsive"
            />
              <Card.Title>PRIMEROS PASOS</Card.Title>
             
              <Card.Text>
                Servicios para mascotas de 0 a 5 años.
              </Card.Text>
              <Link to='*' variant="light" >
              
              <button className="btn"> Comprar🐾</button>
              </Link>
              
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col sm={12} md={4} className="mb-3 ">
        <div className="d-flex justify-content-center">
          <Card className="text-center sombras ">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://img.bestdealplus.com/ae04/kf/HTB18qSicBGw3KVjSZFDq6xWEpXa6.jpg"
              alt='perro mirando al frente del Plan Madurando'
              ClassName= "img-responsive"
            />
              <Card.Title>MADURANDO</Card.Title>
              <Card.Text>
                Servicios para mascotas de 5 a 10 años.
              </Card.Text>
              <Link to='*' >
              
              <button className="btn"> Comprar🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col sm={12} md={4} className="mb-3">
        <div className="d-flex justify-content-center">
          <Card className="text-center sombras">
            <Card.Body>
              <Card.Img
              variant="top"
              src="https://ae01.alicdn.com/kf/Hc744d7197a90439299938fb58982fd54S/S-3XL-cachorro-coj-n-de-cama-de-perro-sof-camas-para-mascotas-para-perros-impermeable.jpg"
              alt='perro mirando al frente del Plan Madurando'
              ClassName= "img-responsive"
            />
              <Card.Title>ADULTOS</Card.Title>
              <Card.Text>
                Servicios para mascotas de más de 10 años.
              </Card.Text>
              <Link to='*' >
              
              <button className="btn"> Comprar🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
      </Row>
   
      <div className="mt-5 text-center">
          <Link to='*' >
              
              <button className="btn btn-large "> Ver más productos🐾</button>
              </Link>
              </div>


        </div>
    );
};

export default Productos;