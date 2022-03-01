import "./Login.css" 
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [arregloLogin, setArregloLogin] = useState([]);
  const [input, setImput] = useState("");

  const hundleSubmit = (e)=>{e.preventDefault()
// guardar inputs en arreglo
 setArregloLogin([...arregloLogin, input])

 

};
  
  return (

    
<Row className="foot-login">
  <Col sm={12} md={12}>
  <div class="d-flex justify-content-center">
      
    
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
             <Link to="/admin">
             <Button className="form-style-btn "> Ingresar 🐾</Button>
             </Link>
           </div>
           </Form>
 
 
   </div>

  </Col>
  <Col sm={12} md={12}>
  </Col>
  




</Row>



      
  );
};

export default Login;

