import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Productos.css";

const Productos = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={4} className="mb-3">
          <div className="d-flex justify-content-center">
            <Card className="text-center sombras">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://www.dhresource.com/0x0/f2/albu/g10/M00/6C/69/rBVaVl0uiT6ACZfEAANjch4Trf4448.jpg/1pc-cartoon-pet-dog-toys-puppy-chew-squeaker.jpg"
                  alt="juguetes para mascotas"
                  className="img-responsive"
                />
                <Card.Title className="letra m-3"> <h4>Kit de juguetes </h4></Card.Title>
                <Link to="*">
                  <button className="btn"> Comprar🐾</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm={12} md={4} className="mb-3 ">
          <div className="d-flex justify-content-center">
            <Card className="text-center sombras ">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://img.bestdealplus.com/ae04/kf/HTB18qSicBGw3KVjSZFDq6xWEpXa6.jpg"
                  alt="collar para mascotas"
                  className="img-responsive"
                />
                <Card.Title className="letra m-3"> <h4> Collar </h4></Card.Title>
                <Link to="*">
                  <button className="btn"> Comprar🐾</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col sm={12} md={4} className="mb-3">
          <div className="d-flex justify-content-center">
            <Card className="text-center sombras">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://ae01.alicdn.com/kf/Hc744d7197a90439299938fb58982fd54S/S-3XL-cachorro-coj-n-de-cama-de-perro-sof-camas-para-mascotas-para-perros-impermeable.jpg"
                  alt="cama para mascotas"
                  className="img-responsive"
                />
                <Card.Title className="letra m-3"> <h4> Cama de algodón</h4></Card.Title>
                <Link to="*">
                  <button className="btn ">  Comprar🐾 </button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <div className="mt-5 text-center">
        <Link to="*">
          <button className="btn btn-large "> <h4>Ver más productos🐾</h4></button>
        </Link>
      </div>
    </div>
  );
};

export default Productos;
