import React from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Servicios.css"


const Servicios = () => {
    return (
       
      <Row >
        <Col sm={12} md={6} className="mb-2">
        <div className="d-flex justify-content-center">
          <Card className="text-center sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/73/ed/68/73ed68a63912b33a46a4a2aefed2dce6.jpg"
              alt='perrito bañandose'
              className="img-responsive"
            />
                <Card.Title className="letra m-3"> <h4> Baño </h4></Card.Title>
             
              <Link to='*'  >
              
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col sm={12} md={6} className="mb-2 ">
        <div className="d-flex justify-content-center">
          <Card className="text-center  sombras">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://animalesmascotas.com//wp-content/uploads/2009/11/cortar-pelo-mascota.jpg"
              alt='perrito con corte de pelo'
              className="img-responsive"
            />
            <Card.Title className="letra m-3"> <h4> Corte </h4></Card.Title>
             
              <Link to='*' >
              <button className="btn"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <div className="mt-5 text-center">
        <Link to="*">
          <button className="btn btn-large "> <h4>Ver más servicios🐾</h4></button>
        </Link>
      </div>
      
        </Row>
        
         
    );
};

export default Servicios;

