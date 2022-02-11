import React from "react";
import admin_paciente from "../../img/admin_paciente.jpg";
import {Card,Button} from "react-bootstrap";

const CardAd = () => {
  return (
    <div className="text-center">
      <Card style={{ width: "18rem" }} className="bg-dark">
        <Card.Img variant="top" src={admin_paciente} />
        <Card.Body>
          <Card.Title className="text-white">Card Title</Card.Title>
          <Card.Text className="text-secondary">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="btn btn-outline-secondary rounded-0">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardAd;
