import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  
  
} from "react-bootstrap";
import "./Profesionales.css"



const Profesionales = () => {
  return (
    
    <Container className="mb-3">
      <Row className="d-flex justify-content-around">
      <Col sm={12} md={6} className="mb-2">
        <Card border="light" style={{ width: "18rem", height: "35rem" }} className="sombras">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7474560/pexels-photo-7474560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="perrito siendo acariciado por una mujer"
              img="img-responsive"
            />
            <Card.Body>
              <Card.Title className="text-center text-danger fw-bold">Dra Liza Morgan </Card.Title>
              <Card.Text className="text-center">
                Más de 5 años de experiencia en oncología.
  
                
              </Card.Text>
             
              
            </Card.Body>

          </Card>
          
        </Col>
       
       

        <Col sm={12} md={6} className="mb-2">
        <Card border="light" style={{ width: "18rem", height: "35rem" }} className="sombras">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7468981/pexels-photo-7468981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="perro siendo acariciado por veterinario"
              img="img-responsive"
            />
            <Card.Body>
              <Card.Title className="text-center text-danger fw-bold">Dr Adrián Muñoz</Card.Title>
              <Card.Text className="text-center">
              6 años de experiencia en cirugía canina. 
              </Card.Text>
              
            </Card.Body>

          </Card>
          </Col>
          </Row>
    </Container>
    
  );
};

export default Profesionales;