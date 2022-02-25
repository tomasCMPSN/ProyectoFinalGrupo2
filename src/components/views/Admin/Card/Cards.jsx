import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Card from './index'
import Admin_pacientes from "../../../img/admin_pacientes.jpg";
import Admin_turnos from '../../../img/vet_office.jpeg'



const arrayCard = [
    {
        id: 1,
        title: 'Pacientes',
        description: 'Listado de Pacientes registrados',
        img: Admin_pacientes,
        url: "/",
        
    },
    {
        id: 2,
        title: 'Turnos',
        description: 'Listado de Turnos',
        img: Admin_turnos,
        url: "/",
    }
]

const Cards = () => {
    return (
        <Container className=''>

            <Row sm={1} md={2} className="g-2 ">
  {arrayCard.map((item, idx) => (
    <Col>
      <Card title={item.title} description={item.description} img={item.img} url={item.url}></Card>
    </Col>
  ))}
</Row>
        </Container>
);
        
};

export default Cards;