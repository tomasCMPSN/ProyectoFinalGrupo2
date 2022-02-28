import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./Profesionales.css";

const Profesionales = () => {
  return (
    <Container className="mb-3">
      <Row>
        <Col sm={12} md={3} className="mb-2">
          <Card
            style={{ width: "18rem", height: "35rem" }}
            className="sombras"
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7474560/pexels-photo-7474560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Dra.Minujin"
              img="img-responsive"
            />
            <Card.Body>
              <Card.Title className="text-center letra ">
               <h3> Dra. Marta Minujin </h3>{" "}
              </Card.Title>
              <Card.Text className="text-center">
              <strong> Apasionada por su profesión, siempre dispuesta a dar lo mejor para tu mascota.</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={3} className="mb-2">
          <Card
            style={{ width: "18rem", height: "35rem" }}
            className="sombras"
          >
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/7407058/pexels-photo-7407058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Dr.Ignacio Jorge"
              img="img-responsive"
            />
            <Card.Body>
              <Card.Title className=" text-center letra ">
                <h3> Dr. Ignacio Jorge </h3>{" "}
              </Card.Title>
              <Card.Text className="text-center">
               <strong> El amor por los animales lo llevó a dedicar su vida a ellos, recibe con dulzura a tus mascotas. </strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={3} className="mb-2">
          <Card
          
            style={{ width: "18rem", height: "35rem" }}
            className="sombras"
          >
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/be/70/2b/be702bb57ab80fadc1cf992b4f4d254a.jpg"
              alt="estudiante de veterinaria"
              img="img-responsive"
            />
            <Card.Body>
              <Card.Title className="text-center letra ">
                <h3>Paula Medina</h3> {" "}
              </Card.Title>
              <Card.Text className="text-center">
              <strong>Estudiante de veterinaria, ama aprender y colaborar en Paws & Claws.</strong> 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={3} className="mb-2">
          <Card
            style={{ width: "18rem", height: "35rem" }}
            className="sombras"
          >
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/18/2a/e3/182ae3164f00363493af983f07cd9e70.jpg"
              alt="estudiante de veterinaria"
              img="img-responsive"
            />
            <Card.Body>
              <Card.Title className="text-center letra">
              <h3> Micaela Arana </h3>
              </Card.Title>
              <Card.Text className="text-center">
               <strong> Estudiante de veterinaria, feliz de seguir aprender día a día en Paws & Claws.</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profesionales;
