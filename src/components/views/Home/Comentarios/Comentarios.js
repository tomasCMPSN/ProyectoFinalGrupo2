import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./Comentarios.css";

const Comentarios = () => {
  return (
    <Container>
      <Row className="justify-content-around  ">
        <Col sm={12} md={4}>
          <div className="text-center container-fluid">
            {" "}
            <img
              src="https://drive.google.com/uc?export=download&id=1ErWDjD-VQDgHY4SqAUiFLT58lBt6jo7d"
              alt="foto de Paula Carrizo"
              className=" w-75  img-fluid rounded-circle sombras"
            />{" "}
          </div>

          <Card.Body>
            <Card.Title className="letra m-3 text-center">
              {" "}
              <h4> Paula Carrizo </h4>
            </Card.Title>
            <Card.Text className="text-center ">
             <h5> "Valoro el compromiso de los doctores en cada consulta o emergencia, Bella siempre regresa feliz de sus visitas a Paws &  Claws"</h5>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col sm={12} md={4}>
          <div className="text-center container-fluid">
            {" "}
            <img
              src="https://drive.google.com/uc?export=download&id=1ZTvNq0PbOQtRh_uiRFeV45pdPL2XBuF4"
              alt="foto de Hernán Castro"
              className="w-75 img-fluid rounded-circle sombras"
            />{" "}
          </div>

          <Card.Body>
            <Card.Title className="letra m-3 text-center">
              {" "}
              <h4> Hernán Castro </h4>
            </Card.Title>
            <Card.Text className="text-center ">
              <h5> "Los doctores de Paws & Claws son los más dedicados y amorosos que conocí, gracias por cuidar a Fufi."</h5>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col sm={12} md={4}>
          <div className="text-center container-fluid">
            {" "}
            <img
              src="https://drive.google.com/uc?export=download&id=1V_W92wbqQ7qSilKkAKHwkTXVpVG4vM_O"
              alt="foto de Ana Miranda"
              className="w-75  img-fluid rounded-circle sombras"
            />{" "}
          </div>

          <Card.Body>
            <Card.Title className="letra m-3 text-center">
              {" "}
              <h4> Ana Miranda </h4>
            </Card.Title>
            <Card.Text className="text-center ">
              <h5> "Mi bebé es lo que más amo y por eso confio en Paws & Claws,los mejores siempre."</h5>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default Comentarios;
