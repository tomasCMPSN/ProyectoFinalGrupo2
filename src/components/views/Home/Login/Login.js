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

  <div class="wrapper ">
      
    
     <Form className="m-5 form-style " onSubmit = {hundleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <input className='form-stle-inner' type="email"  placeholder="@pawsclaws.com" onChange={(e) => {
             setArregloLogin(e.target.value);
            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contraseña</Form.Label>
            <input  type="text" placeholder="********" className='form-stle-inner' onChange={(e) => {
              setImput(e.target.value);
            }} />
          </Form.Group>
          <div className="text-center mt-4">
            <Button className="form-style-btn "> Ingresar 🐾</Button>
          </div>
          </Form>


  </div>



      
  );
};

export default Login;

