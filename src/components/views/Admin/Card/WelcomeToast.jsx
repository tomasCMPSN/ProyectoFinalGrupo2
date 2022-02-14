import { React, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";


const WelcomeToast = () => {
  
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    
    <ToastContainer className="p-2" position="top-end">

<Toast show={showA} delay={3000} autohide onClose={toggleShowA} className="bg-success">
  <Toast.Header>
    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    <strong className="me-auto ">Bienvenido</strong>
    <small>Paws & Claws</small>
  </Toast.Header>
  <Toast.Body className="text-white">Iniciaste sesión como Administrador</Toast.Body>
</Toast>
    </ToastContainer>
  );
};

export default WelcomeToast;
