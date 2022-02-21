import "./Contacto.css"
import React from 'react';
import { Form } from "react-bootstrap";


const Contacto = () => {
    return (
        <div>
        <Form className="mb-5 my-5 form_style container" >
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Nombre y Apellido</Form.Label>
            <input className='form-stle-inner' type="text"  placeholder="Pablo Rodriguez"  />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <input  type="email" placeholder="pablo@gmail.com" className='form-stle-inner' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero de celular</Form.Label>
            <input  type="number" placeholder="3815784932" className='form-stle-inner' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form-stle-inner">Dejanos tu Consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="text-center mt-4">
            <button className="form-style-btn "> Enviar 🐾</button>
          </div>
          </Form>
        
            
    
      </div>
    );
};

export default Contacto;
