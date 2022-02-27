import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PacienteCreate = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Nuevo Paciente</h1>
          <hr />
          <Link
            to="/paciente/table"
            className="btn-yellow text-decoration-none text-center"
          >
            Volver a Pacientes
          </Link>
        </div>
        {/* Form Product */}
        <Form className="my-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Paciente*</Form.Label>
            <Form.Control type="text" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie*</Form.Label>
            <Form.Select>
              <option value="">Selecciona una opción</option>
              <option value="bebida-caliente">Perro</option>
              <option value="bebida-fria">Gato</option>
              <option value="sandwitch">Conejo</option>
              <option value="dulce">Ave</option>
              <option value="salado">Otros</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Raza*</Form.Label>
            <Form.Control type="text" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Edad*</Form.Label>
            <Form.Control type="numer" placeholder="..." />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Peso*</Form.Label>
            <Form.Control type="text" placeholder="..." />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Dueño*</Form.Label>
            <Form.Control type="text" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" placeholder="..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control type="number" placeholder="..." />
          </Form.Group>

          <div className="text-end">
            <Button className="btn-yellow">Guardar</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default PacienteCreate;
