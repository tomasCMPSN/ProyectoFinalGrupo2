import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import "./card-style.css";

const CardUI = (props) => {
  return (
    <Container className='d-flex justify-content-center'>

      <Card className="text-center">
        
          <Card.Img src={props.img} variant='top' className='' />
        
        <Card.Body className="card-body text-dark">
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-text text-secondary">{props.description}</Card.Text>
          <a href="#" className="btn btn-outline-success">
            Ir a
          </a>
        </Card.Body>
      </Card>
    
    </Container>
  );
};

export default CardUI;
