import React from "react";
import { Form } from "react-bootstrap";

const paciente = () => {
  return (
    <section className="container mt-3  ">
      <article className="form-style-article ">
       
        <h1 className=" form-style-title">Administrador de pacientes 🐶🗒️</h1>
        <hr />
      </article>
      <article className="d-flex justify-content-center mb-5 mt-2">
        <Form className="mb-5 form_style_t">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Nombre del dueño*</Form.Label>
            <Form.Control type="text" placeholder="Maria" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="text" placeholder="pawsandclaws@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control type="text" placeholder="381-xxx-xxxx" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del paciente*</Form.Label>
            <Form.Control type="text" placeholder="Pelusa" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Mascota*</Form.Label>
            <Form.Select>
              <option value="">Seleccione una especie</option>
              <option value="ave">Ave</option>
              <option value="gato">Gato</option>
              <option value="perro">Perro</option>
              <option value="pez">Pez</option>
              <option value="reptil">Reptil</option>
              <option value="roedor">Roedor</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Raza</Form.Label>
            <Form.Control type="text" placeholder="Labrador" />
          </Form.Group>

          <div className="text-center mt-4">
            <button className="btn-save ">Cargar 🐾</button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default paciente;
