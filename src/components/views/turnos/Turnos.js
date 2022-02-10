import React from "react";
import { Form } from "react-bootstrap";

const Turnos = () => {
  return (
    <section className='container mt-5'>
        <article >
        <h1 className='text-center'>Administrador de turnos</h1>
        <hr />

        </article>
     
     <article className='d-flex justify-content-center mb-5' >

        <Form className="mb-5 form_style_t">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Nombre de la mascota*</Form.Label>
            <Form.Control type="text"  placeholder="Puki" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del dueño*</Form.Label>
            <Form.Control  type="text" placeholder="Lucas" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Select >
              <option value="">Seleccione un profesional</option>
              <option value="emilse">Dra. Emilse Arias</option>
              <option value="jony">Dr. Jonathan Plodzien </option>
            </Form.Select>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Mascota*</Form.Label>
            <Form.Select >
              <option value="">Seleccione una especie</option>
              <option value="ave">Ave</option>
              <option value="gato">Gato</option>
              <option value="perro">Perro</option>
              <option value="pez">Pez</option>
              <option value="reptil">Reptil</option>
              <option value="roedor">Roedor</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hora</Form.Label>
            <Form.Control type="time" />
          </Form.Group>

        
        <div className="text-center mt-4">
            <button className="btn-save ">Cargar 🐾</button>
          </div>
        </Form>
        </article>
     
    </section>
  );
};

export default Turnos;
