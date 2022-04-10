import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import "./InfoPlanes.css"

const InfoPlanes = () => {
  return (
    <div className="container-fluid mx-0 BoxInfoPlanes"> 
    <h1 className="text-center display-2 mb-5 letra-titulo">Planes</h1>
      <Row  >
        <Col sm={12} md={4} className="mb-3 mx-0 ">
        <div className="d-flex justify-content-center container">
          <Card className="text-center sombras-planes ">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/69371/pexels-photo-69371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt='cachorro'
              className= "img-responsive"
            />
              <Card.Title className=""> <h3> Cachorro </h3></Card.Title>
              <Card.Text> <strong>Plan para mascotas de 0 a 6 años. </strong>
               
              </Card.Text>
              <Link to='/planes' >
               <button className="btn-InfoPlanes"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col sm={12} md={4} className="mb-3 mx-0">
          <div className="d-flex justify-content-center container">
          <Card className="text-center sombras-planes">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt='perro adulto'
              className= "img-responsive"
            />
              <Card.Title className=""> <h3>Adulto </h3></Card.Title>
              <Card.Text> <strong>Plan para mascotas de 7 a 10 años. </strong>
               
              </Card.Text>
              <Link to='/planes' >         
              <button className="btn-InfoPlanes"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
        <Col sm={12} md={4} className="mb-3 mx-0">
     <div className="d-flex justify-content-center container">
          <Card className="text-center sombras-planes">
            <Card.Body>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt='perro mayor'
              className= "img-responsive"
            />
              <Card.Title className=""> <h3>Mayor </h3></Card.Title>
              <Card.Text>
                <strong> Plan mayores de 10 años. </strong>
              </Card.Text>
              <Link to='/planes' >
              <button className="btn-InfoPlanes"> Ver más🐾</button>
              </Link>
            </Card.Body>
          </Card>
          </div>
        </Col>
      </Row>
      </div>
    
  );
};

export default InfoPlanes;
