import React from "react";
import { Col, Container, Row,Card} from "react-bootstrap";
import "./Comentarios.css";




const Comentarios = () => {
  return (
    <Container>
      <Row className="justify-content-around  ">
        <Col sm={12} md={4}>
          <div className="text-center container-fluid">
            {" "}
            <img src= "https://drive.google.com/uc?export=download&id=1ErWDjD-VQDgHY4SqAUiFLT58lBt6jo7d" alt="foto de Romina" className=" w-75 img img-fluid rounded-circle" />{" "}
          </div>

          <Card.Body>
            <Card.Text className="text-center fst-italic">
              "La mejor atención y los mejores profesionales toda la ciudad.
              100% recomendado"
            </Card.Text>
            <Card.Title className="text-center text-danger fw-bold">
              Romina González
            </Card.Title>
            <p className="text-center fw-lighter">Dueña de Firulais</p>
          </Card.Body>
        </Col>
        <Col sm={12} md={4}>
          <div className="text-center container-fluid">
            {" "}
            <img src= "https://drive.google.com/uc?export=download&id=1ZTvNq0PbOQtRh_uiRFeV45pdPL2XBuF4" alt="foto de Bautista" className="w-75 opacity img img-fluid rounded-circle" />{" "}
          </div>

          <Card.Body>
            <Card.Text className="text-center fst-italic">
              "Amo como tratan tanto a las mascotas como a las personas"
            </Card.Text>
            <Card.Title className="text-center text-danger fw-bold">
              Damián Petrelli
            </Card.Title>
            <p className="text-center fw-lighter">Dueño de Bobby</p>
          </Card.Body>
        </Col>
        <Col sm={12} md={4}>
          <div className="text-center container-fluid">
            {" "}
            <img src= "https://drive.google.com/uc?export=download&id=1V_W92wbqQ7qSilKkAKHwkTXVpVG4vM_O" alt="foto de lorena" className="w-75 img img-fluid rounded-circle" />{" "}
          </div>

          <Card.Body>
            <Card.Text className="text-center fst-italic">
              "Tengo muchos gatitos que amo y los llevo siempre al mejor lugar,
              RollingVet"
            </Card.Text>
            <Card.Title className="text-center text-danger fw-bold">
              Lorena Nelegatti
            </Card.Title>
            <p className="text-center fw-lighter">Dueña de Michifuz</p>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default Comentarios;