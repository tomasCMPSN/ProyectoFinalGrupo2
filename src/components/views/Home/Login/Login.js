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
    console.log()
  
  },[])

  let session = false;
  const navigate = useNavigate();



// validamos el email
  const testEmail = ()=>{
    if(validateEmail(logEmail.value)){
      logEmail.className = "form-control is-valid"
      return true
    }else{
      logEmail.className ="form-control is-invalid"
      return false
    }
  }
  // validamos la contraseña

  const testPassword =()=>{
    if(validatePassword(logPass.value)){
      logPass.className="form-control is-valid";
      
      return true;

    }else{
      logPass.className = 'form-control is-invalid'
      return false;
    }
  }

  // validacion general

  const allGood=()=>{
   
//       bcrypt.compareSync(inEmail, user[0].email)
// && bcrypt.compareSync(inPass, user[0].password) 
if(
user.email === logEmail
)
  
{
  return true
  console.log('entro')
}else{
  return false
  console.log('no entro')
}

}

  const hundleSubmit = (e)=>{

 e.preventDefault();
   console.log('apreto boton')
if(allGood()){
  session = true;
  sessionStorage.setItem('stateSession', JSON.stringify(session));
  console.log('tamo adentro')
}else if(testEmail()){
  console.log('ingrese un mail valido');
  logEmail.className= 'form-control is-invalid'
  
}else if(testPassword()){
  console.log('ingrese una contrasena valida')
  logPass.className="form-control is-invalid"
}else{
  console.log("falta todo");
  logEmail.className= 'form-control is-invalid';
  logPass.className="form-control is-invalid";
}

 

};
  
  return (

    
<Row className="foot-login">
  <Col sm={12} md={12}>
  <div class="d-flex justify-content-center">
      
    
      <Form className="m-5 form-style " onSubmit = {hundleSubmit}>
           <Form.Group className="mb-3 ">
             <Form.Label>Email</Form.Label>
             <Form.Control  id='logEmail' type="email"  placeholder="@pawsclaws.com" onChange={({target}) => {
              setinEmail(target.value.trimStart())
              testEmail()
             }} ></Form.Control>
               <Form.Control.Feedback type="invalid">
                    Ingrese una email valido
                  </Form.Control.Feedback>
           </Form.Group>
           <Form.Group className="mb-3" >
             <Form.Label>Contraseña</Form.Label>
             <Form.Text className="text-muted d-flex">
            La contraseña debe contener al menos 8 caracteres una mayuscula y una minuscula
    </Form.Text>
             
             <Form.Control  type="password" id='logPass'placeholder="********" required minLength={8} maxLength={30} onChange={({target}) => {
               setinPass(target.value.trimStart())
               testPassword()
             }} ></Form.Control>
               <Form.Control.Feedback type="invalid">
                    Ingrese una contraseña valida.
                  </Form.Control.Feedback>
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

