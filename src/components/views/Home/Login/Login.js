import "./Login.css" 
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [arregloLogin, setArregloLogin] = useState([]);
  const [input, setImput] = useState("");

  const hundleSubmit = (e)=>{e.preventDefault()
// guardar inputs en arreglo
 setArregloLogin([...arregloLogin, input])

};
  
  return (
    <div>
        
     <div className="animación my-5">
      <h1 className="text1">Bienvenido</h1>
      <h1 className="text2">.</h1>
      <h1 className="text3">Tomás</h1>
     </div>
      <Form className="my-5 container" onSubmit = {hundleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserte su e-mail"
            onChange={(e) => {
             setArregloLogin(e.target.value);
            }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
             onChange={(e) => {
              setImput(e.target.value);
            }} 
          />
          </Form.Group>
          
        <button className="btn-neon" type="submit">  
            Ingresar
          </button>
          
      </Form>
    </div>
  );
};

export default Login;

