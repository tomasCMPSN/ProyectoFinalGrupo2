import React, { useState, useEffect, useReducer } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
} from "../../../helpers/ValidateForms";
import bcrypt from "bcryptjs/dist/bcrypt";
import Swal from "sweetalert2";
import "./Login.css";

const Login = ({ user }) => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");

  let session = false;
  const navigate = useNavigate();

  useEffect(() => {
    setInEmail(document.getElementById("inEmail"));
    setInPassword(document.getElementById("inPassword"));
    console.log(user);
  }, []);

  // test de email

  const testEmail = () => {
    if (validateEmail(inEmail.value)) {
      inEmail.className = "form-control is-valid";
      return true;
    } else {
      inEmail.className = "form-control is-invalid";
      return false;
    }
  };

  // test de contraseña

  const testPassword = () => {
    if (validatePassword(inPassword.value)) {
      inPassword.className = "form-control is-valid";
      return true;
    } else {
      inPassword.className = "form-control is-invalid";
      return false;
    }
  };

  // test general

  const gralTesting = () => {
    if (
      logEmail === user[0].email &&
      bcrypt.compareSync(logPassword, user[0].password)
    ) {
      console.log("validado");

      return true;
    } else {
      console.log("no cumple validacion");

      return false;
    }
  };

  // handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (gralTesting()) {
      session = true;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
      Swal.fire(
        'Bienvenido "ADMINISTRADOR"!',
        "Veterinaria PawsAndClaws v.2.0.0",
        "success"
      );

      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } else if (testEmail()) {
      Swal.fire("Ops!", "Por favor ingrese un email valido", "error");
      inEmail.className = "form-control is-invalid";
    } else if (testPassword()) {
      Swal.fire("Ops!", "Por favor ingrese una contraseña valida", "error");
      inPassword.className = "form-control is-invalid";
    } else {
      Swal.fire("Ops", "Debe completar todos los campos", "error");
      inEmail.className = "form-control is-invalid";
      inPassword.className = "form-control is-invalid";
    }
  };

  return (
  
     
      <Container className="login-style">
        <Form className="mt-5 login_form " onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="etiqueta">Email*</Form.Label>
            <Form.Control
              className="input-deco"
              type="email"
              placeholder="Ingrese su email"
              id="inEmail"
              required
              onChange={({ target }) => {
                setLogEmail(target.value.trimStart());
                testEmail();
              }}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese un email valido
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="etiqueta">Contraseña*</Form.Label>
            <Form.Text className="text-muted d-flex">
              La contraseña debe contener al menos 8 caracteres, una mayuscula,
              una minuscula y un numero.
            </Form.Text>
            <Form.Control
              type="password"
              placeholder="Ingrese la contraseña"
              id="inPassword"
              required
              minLength={8}
              maxLength={30}
              onChange={({ target }) => {
                setLogPassword(target.value.trimStart());
                testPassword();
              }}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese una contraseña valida
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button className="form-style-btn" type="submit">
              Ingresar
            </Button>
          </div>
        </Form>
      </Container>
     
  );
};

export default Login;
