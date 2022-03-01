

import React from "react";
import {
  Form,
  FormControl,
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./Planes.css"

const Planes = () => {
  return (
    <section>
     
      <article className="container">
        <img src="https://petdoctors.co.uk/wp-content/uploads/sites/5/2018/04/springer-spaniel-cross-with-vet.jpg" className="form-style-img" alt="" />
        <h1 className="text-center">Conoce nuestros planes</h1>
      </article>

      <article className="container mt-5 card-plan-style">
        <Row xs={1} md={3} className="g-4 ">
          <Col>
            <Card className="text-center sombras-planes">
              <Card.Body>
                <Card.Title> <strong>Cachorro</strong> </Card.Title>
                <Card.Text>Para mascotas de 0 a 5 años</Card.Text>
                <ListGroup>
                  <ListGroupItem>Internacion</ListGroupItem>
                  <ListGroupItem>Consultas clinicas</ListGroupItem>
                  <ListGroupItem>Responsabilidad civil</ListGroupItem>
                  <ListGroupItem>Estudios</ListGroupItem>
                  <ListGroupItem>Intervenciones quirurgicas</ListGroupItem>
                  <ListGroupItem>Tratamientos</ListGroupItem>
                  <ListGroupItem>Emergencias</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center sombras-planes">
              <Card.Body>
                <Card.Title > <strong> Adulto</strong> </Card.Title>
                <Card.Text>Para mascotas de 5 a 10 años</Card.Text>
                <ListGroup>
                  <ListGroupItem>Internacion</ListGroupItem>
                  <ListGroupItem>Consultas clinicas</ListGroupItem>
                  <ListGroupItem>Responsabilidad civil</ListGroupItem>
                  <ListGroupItem>Estudios</ListGroupItem>
                  <ListGroupItem>Intervenciones quirurgicas</ListGroupItem>
                  <ListGroupItem>Tratamientos</ListGroupItem>
                  <ListGroupItem>Emergencias</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="text-center sombras-planes">
              <Card.Body>
                <Card.Title> <strong>  Mayor</strong></Card.Title>
                <Card.Text>Para mascotas de mas de 10 años</Card.Text>
                <ListGroup>
                  <ListGroupItem>Internacion</ListGroupItem>
                  <ListGroupItem>Consultas clinicas</ListGroupItem>
                  <ListGroupItem>Responsabilidad civil</ListGroupItem>
                  <ListGroupItem>Estudios</ListGroupItem>
                  <ListGroupItem>Intervenciones quirurgicas</ListGroupItem>
                  <ListGroupItem>Tratamientos</ListGroupItem>
                  <ListGroupItem>Emergencias</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </article>

      {/* cards */}
      <article className="mt-5 article-form">
        <h1 className="text-center  form-style-t">
          ¿Tenés dudas sobre que plan contratar?
        </h1>
        <div className="d-flex justify-content-center">
          <p className="form-style-p w-75">
          ¡Estamos acá para ayudarte! Déjanos tus datos y tu consulta, y en breve alguien de nuestro equipo te contactara para ayudarte a elegir el plan que mejor se ajuste a vos y tu mascota.
          </p>
        </div>
      </article>
      <article className="d-flex justify-content-center">
        <Form className="my-5 form_style ">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Nombre y apellido*</Form.Label>
            <input
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese su nombre y apellido"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <input
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese su email"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <input
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese su numero de telefono"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Mascota</Form.Label>
            <select className="form-stle-inner">
              <option value="">Seleccione una especie</option>
              <option value="ave">Ave</option>
              <option value="gato">Gato</option>
              <option value="perro">Perro</option>
              <option value="pez">Pez</option>
              <option value="reptil">Reptil</option>
              <option value="roedor">Roedor</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Consulta*</Form.Label>

            <FormControl
              className="form-stle-inner"
              as="textarea"
              aria-label="With textarea"
              placeholder="Ingrese su consulta"
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <button className="form-style-btn mt-4">Enviar 🐾</button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default Planes;