import React from "react";
import { Form, FormControl } from "react-bootstrap";

const Planes = () => {
  return (
    <section className="container">
      {/* cards */}
      <article className="mt-3 article-form">
        <h1 className="text-center">Tenes dudas sobre que plan contratar?</h1>
        <div className='d-flex justify-content-center'>
        <p className='form-style-p w-75'>
        Estamos aca para ayudarte, dejanos tus datos y un mensaje, y
          en breve alguien de nuestro equipo se pondra en contacto con vos para ayudarte a
          elegir el plan que mejor se ajuste a vos y tu mascota.
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
            className='form-stle-inner'
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
