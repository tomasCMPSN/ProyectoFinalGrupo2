import { React, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";


const WelcomeToast = () => {
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    // <Row>
    //   <Col xs={6}>
    //     <ToastContainer className="p-2" position="bottom-end">
    //       <Toast
    //         onClose={() => setShow(false)}
    //         show={show}
    //         delay={3000}
    //         autohide
    //       >
    //         <Toast.Header>
    //           <img
    //             src="holder.js/20x20?text=%20"
    //             className="rounded me-2"
    //             alt=""
    //           />
    //           <strong className="me-auto">Bootstrap</strong>
    //           <small>11 mins ago</small>
    //         </Toast.Header>
    //         <Toast.Body>
    //           Woohoo, you're reading this text in a Toast!
    //         </Toast.Body>
    //       </Toast>
    //     </ToastContainer>
    //   </Col>
    //   <Col xs={6}>
    //     <Button onClick={() => setShow(true)}>Show Toast</Button>
    //   </Col>
    // </Row>
    <ToastContainer className="p-2" position="bottom-center">

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
