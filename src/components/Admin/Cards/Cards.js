import React from "react";
import Card from "./Card";
import { Container, Col, Row , CardGroup} from "react-bootstrap";

const Cards = () => {
  return (
   

<Row xs={1} md={3} className="g-4">
{Array.from({ length: 3 }).map((_, idx) => (
  <Card></Card>
  
))}
</Row>

    

    
  );
};

export default Cards;
