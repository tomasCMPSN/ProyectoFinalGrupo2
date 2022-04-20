import React from "react";
import {Container,Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./card-style.css";

const CardUI = (props) => {
  return (





    <Container className='d-flex justify-content-center'>

      <Card className="text-center">
        
          <Card.Img src={props.img} variant='top' className='' />
        
        <Card.Body className="card-body text-dark">
          <Card.Title className="card-title ">{props.title}</Card.Title>
          <Card.Text className="card-text text-secondary">{props.description}</Card.Text>
          <Link to={props.url}>
            <button className="btn-carga">Ir a</button>
          </Link>
        </Card.Body>
      </Card>
    
    </Container>



  );
};

export default CardUI;

