import "./Login.css" 
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import {useNavigate} from 'react-router-dom'
import bcrypt from "bcryptjs/dist/bcrypt";

import { validateEmail,validatePassword  } from "../../../helpers/ValidateForms";

const Login = ({user}) => {
  const [inEmail, setinEmail] = useState('');
  const [inPass, setinPass] = useState("");

  const [logEmail, setLogEmail]= useState('');
  const[logPass, setLogPass]=useState('')

  useEffect(()=>{
    setLogEmail(document.getElementById('logEmail'))
    setLogPass(document.getElementById('logPass'))
  
  },[])

  let session = false;
  const navigate = useNavigate();



// validamos el email
  const testEmail = ()=>{
    if(validateEmail(logEmail.value)){
      logEmail.className = "form-control is-valid"
    }else{
      logEmail.className ="form-control is-invalid";
      return false
    }
  }
  // validamos la contraseña

  const testPassword =()=>{
    if(validatePassword(logPass.value)){
      logPass.className="form-contro is-valid"

    }else{
      logPass.className = 'form-control is-invalid'
    }
  }

  // validacion general

  const allGood=()=>{
    if(
      bcrypt.compareSync(inEmail, user[0].email)
&& bcrypt.compareSync(inPass, user[0].password)    )
  
{
  return true
}else{
  return false;
}

}

  const hundleSubmit = (e)=>{e.preventDefault()
// guardar inputs en arreglo
 e.preventDefault();
if(allGood()){
  session = true;
  sessionStorage.setItem('stateSession', JSON.stringify(session));
  console.log('tamo adentro')
}else if(testEmail()){
  console.log('ingrese un mail valido')
}else if(testPassword()){
  console.log('ingrese una contrasena valida')
  logPass.className="form-control is-invalid"
}else{
  console.log("falta todo")
}

 

};
  
  return (

    
<Row className="foot-login">
  <Col sm={12} md={12}>
  <div class="d-flex justify-content-center">
      
    
      <Form className="m-5 form-style " onSubmit = {hundleSubmit}>
           <Form.Group className="mb-3 " controlId="formBasicEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control className='form-stle-inner' id='logEmail' type="email"  placeholder="@pawsclaws.com" onChange={({target}) => {
              setinEmail(target.value.trimStart())
              testEmail()
             }} ></Form.Control>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Contraseña</Form.Label>
             <input  type="text" id='logPass'placeholder="********" className='form-stle-inner' onChange={({target}) => {
               setinPass(target.value)
               testPassword()
             }} />
           </Form.Group>
           <div className="text-center mt-4">
          
             <Button className="form-style-btn "> Ingresar 🐾</Button>
          
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

