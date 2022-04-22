import "./Contacto.css";
import React, { useState, useEffect } from "react";
import { Col, Form, Row, Container } from "react-bootstrap";
import {
  validateNames,
  validateNumber,
  validateEmail,
} from "../../../helpers/ValidateForms";
import Swal from "sweetalert2";
const Contacto = () => {
  // definimos states

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("");

  // definimos useEffect

  useEffect(() => {
    setName(document.getElementById("name"));
    setEmail(document.getElementById("email"));
    setPhone(document.getElementById("phone"));
    setInquiry(document.getElementById("inquiry"));
  }, []);

  const testName = () => {
    if (validateNames(name.value)) {
      name.className = "form-control is-valid";
      return true;
    } else {
      name.className = "form-control is-invalid";

      return false;
    }
  };
  const testEmail = () => {
    if (validateEmail(email.value)) {
      email.className = "form-control is-valid";
      return true;
    } else {
      email.className = "form-control is-invalid";

      return false;
    }
  };
  const testPhone = () => {
    if (validateNumber(phone.value) && phone.value.length > 0) {
      phone.className = "form-control is-valid";
      return true;
    } else {
      phone.className = "form-control is-invalid";

      return false;
    }
  };
  const testInquiry = () => {
    if (inquiry.value.length < 300 && inquiry.value.length > 5) {
      inquiry.className = "form-control is-valid";
      return true;
    } else {
      inquiry.className = "form-control is-invalid";
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (testName() && testEmail() && testPhone() && testInquiry()) {
      Swal.fire(
        'Consulta recibida"!',
        "El equipo de Paws and Claws se comunicara con vos a la brevedad.",
        "success"
      );

      setName((name.value = ""));
      setEmail((email.value = ""));
      setPhone((phone.value = ""));
      setInquiry((inquiry.value = ""));
      name.className = "form-control";
      email.className = "form-control";
      phone.className = "form-control";
      inquiry.className = "form-control";


    } else if (testPhone()) {
      phone.className = "form-control is-invalid";
    }else if (testEmail()) {
      email.className = "form-control is-invalid";
    } else if (testName()) {
      name.className = "form-control is-invalid";
    }else if(testInquiry()){
      inquiry.className='form-control is-invalid'
    }
  };

  return (
    <>
      <Container>
        <article className="text-center">
          <h1 className=" mt-4">
            Dejanos tu consulta y te respondemos a la brevedad
          </h1>
          <hr />
        </article>

        <Row className="d-flex justify-content-center align-items-center my-5">
          <Col sm={12} md={6}>
            <Form
              className="  form_style container w-100"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="etiqueta">Nombre y Apellido*</Form.Label>
                <Form.Control
                  id="name"
                  className="form-stle-inner"
                  type="text"
                  placeholder="Ingrese su nombre y apellido"
                  onChange={testName}
                  maxLength="23"
                  minLength="0"
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su nombre
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="etiqueta">Email*</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Ingrese su email"
                  className="form-stle-inner"
                  onChange={testEmail}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un email valido
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="etiqueta">Numero de celular*</Form.Label>
                <Form.Control
                  id="phone"
                  type="number"
                  placeholder="Ingrese su numero de telefono"
                  className="form-stle-inner"
                  onChange={testPhone}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un numero de telefono valido
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="etiqueta">
                  Dejanos tu Consulta*
                </Form.Label>
                <Form.Control
                  onChange={testInquiry}
                  id="inquiry"
                  as="textarea"
                  placeholder="Ingrese su consulta"
                  maxLength="300"
                  minLength="5"
                  rows={3}
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese su consulta, debe contener como maximo 300 caracteres
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center mt-4">
                <button className="btn-carga "> Enviar 🐾</button>
              </div>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <img
              className="w-100"
              src="https://blog.healthypawspetinsurance.com/wp-content/uploads/2019/02/GettyImages-853220430.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.900266303709!2d-65.20654788495656!3d-26.843124283157554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c082395e413%3A0xf654ef7d909e69d3!2sJuan%20Gregorio%20de%20las%20Heras%20852%2C%20T4000IDR%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1650544205879!5m2!1ses!2sar"
        className="w-100"
        height="400"
      ></iframe>
    </>
  );
};

export default Contacto;
