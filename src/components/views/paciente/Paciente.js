import React from "react";
import { Form } from "react-bootstrap";
import './Paciente.css'

const paciente = () => {
  return (
    <section className="container mt-3  ">
      <article className="form-style-article ">
       
        <h1 className=" form-style-title">Administrador de pacientes 🐶🗒️</h1>
        <hr />
      </article>
      <article className="d-flex justify-content-center mb-5 mt-2">
        <Form className="mb-5 form_style">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Nombre del dueño*</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="Maria" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>DNI*</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="Maria" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="pawsandclaws@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono*</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="381-xxx-xxxx" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del paciente*</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="Pelusa" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Mascota*</Form.Label>
            <select className='form-stle-inner'>
              <option value="">Seleccione una especie</option>
              <option value="ave">Ave</option>
              <option value="gato">Gato</option>
              <option value="perro">Perro</option>
              <option value="pez">Pez</option>
              <option value="reptil">Reptil</option>
              <option value="roedor">Roedor</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="Labrador" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Raza</Form.Label>
            <input className='form-stle-inner' type="text" placeholder="Labrador" />
          </Form.Group>

          



          <div className="text-center mt-4">
            <button className="form-style-btn ">Cargar 🐾</button>
          </div>
          
        </Form>
      </article>
    </section>
  );
};

export default paciente;
