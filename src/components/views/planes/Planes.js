import React, { useRef } from "react";
import {
  Form,
  FormControl,
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import {useState} from 'react';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { validateEmail, validateNames, validateNumber, validateMesage } from "../../helpers/ValidateForms";
init("user_dvnJ38dESp4bV8SdcMD30");

const Planes = () => {

  // States

  const [name, setName] = useState('');
  const [email, setEmail]=useState('');
  const [mesage, setMesage]=useState('');
  const [phone, setPhone]= useState('');
  const [specie, setSpecie]= useState('');


  // EmailJs
const form =useRef()
   
    const handleSubmit = (e) => {
      e.preventDefault();

      // validamos datos
      if(!validateNames(name)|| !validateEmail(email)|| !validateNumber(phone) || !validateMesage(mesage)){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ingreso algun dato incorrecto, por favor revise el formulario",
        });
        
      }else {
 

      // Email js
      emailjs.sendForm('service_5kuzhii', 'template_t9etbyq', form.current)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('')
      setEmail('')
      setPhone('')
      setMesage('')
      setSpecie('')
      

      Swal.fire({
        icon: "succes",
        title: "Yay!",
        text: "Gracias por tu consulta, pronto nos pondremos en contacto con vos",
      });
      


    }
    }

  


  return (
    <section>
      <article>
        <img src="https://petdoctors.co.uk/wp-content/uploads/sites/5/2018/04/springer-spaniel-cross-with-vet.jpg" className="form-style-img" alt="" />
        <h1 className="form-style-mainT">Conoce nuestros planes</h1>
      </article>

      <article className="container mt-5 card-plan-style">
        <Row xs={1} md={3} className="g-4 ">
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Primeros pasos</Card.Title>
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
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Madurando</Card.Title>
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
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Adultos</Card.Title>
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
          Tenes dudas sobre que plan contratar?
        </h1>
        <div className="d-flex justify-content-center">
          <p className="form-style-p w-75">
            Estamos aca para ayudarte! Dejanos tus datos y tu consulta, y en
            breve alguien de nuestro equipo te contactara para ayudarte a elegir
            el plan que mejor se ajuste a vos y tu mascota.
          </p>
        </div>
      </article>
      <article className="d-flex justify-content-center">
        <Form className="my-5 form_style " onSubmit={handleSubmit} ref={form}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Nombre y apellido*</Form.Label>
            <input
            value={name}
            name='user_name'
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese su nombre y apellido"
              onChange={(e)=>setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <input
            value={email}
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese su email"
              name='user_email'
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <input
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese su numero de telefono"
              onChange={({target})=>setPhone(target.value)}
              value={phone}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Mascota</Form.Label>
            <select className="form-stle-inner" value={specie}>
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
            value={mesage}
              className="form-stle-inner"
              as="textarea"
              aria-label="With textarea"
              placeholder="Ingrese su consulta"
              onChange={(e)=>setMesage(e.target.value)}
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