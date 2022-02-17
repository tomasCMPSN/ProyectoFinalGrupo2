import React from "react";
import { Form } from "react-bootstrap";
import {validateNames, validateVet} from '../../helpers/ValidateForms'
import './Turnos.css'

const Turnos = () => {
  





  return (
    <section className='container mt-5 '>
        <article >
        <h1 className='form-style-title '>Administrador de turnos 📝</h1>
      

        </article>
        
     
     <article className='d-flex justify-content-center mb-5 ' >

        <Form className="mb-5 form_style">
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>🐶Nombre del paciente*</Form.Label>
            <input className='form-stle-inner' type="text"  placeholder="Puki" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>👨🏽‍🎤Nombre del dueño *</Form.Label>
            <input  type="text" placeholder="Lucas" className='form-stle-inner'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>👨🏽‍🎤DNI *</Form.Label>
            <input  type="text" placeholder="Lucas" className='form-stle-inner'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label >👩🏻‍⚕️Veterinario*</Form.Label>
            <select className='form-stle-inner' >
              <option value="">Seleccione un profesional </option>
              <option value="emilse">Dra. Emilse Arias</option>
              <option value="jony">Dr. Jonathan Plodzien </option>
            </select>
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>🐰Especie*</Form.Label>
            <select className='form-stle-inner' >
              <option value="">Seleccione una especie</option>
              <option value="ave">Ave</option>
              <option value="gato">Gato</option>
              <option value="perro">Perro</option>
              <option value="pez">Pez</option>
              <option value="reptil">Reptil</option>
              <option value="roedor">Roedor</option>
            </select>
          </Form.Group>
          {/* <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Label>📅 Fecha </Form.Label>
            <input className='form-stle-inner' type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>⏰ Horario </Form.Label>
            <select className='form-stle-inner' >
              <option value="">Seleccione un horario</option>
              <option value="">08:00</option>
              <option value="">08:30</option>
              <option value="">09:00</option>
              <option value="">09:30</option>
              <option value="">10:00</option>
              <option value="">10:30</option>
              <option value="">11:00</option>
              <option value="">11:30</option>
              <option value="">12:00</option>
              <option value="">12:30</option>
              <option value="">13:00</option>
              <option value="">17:00</option>
              <option value="">17:30</option>
              <option value="">18:00</option>
              <option value="">18:30</option>
              <option value="">19:00</option>
              <option value="">19:30</option>
              <option value="">20:00</option>
       
              
            </select>
 
           
          </Form.Group> */}

        
        <div className="text-center mt-4">
            <button className="form-style-btn ">Cargar 🐾</button>
          </div>
        </Form>
        </article>
     
    </section>
  );
};

export default Turnos;
