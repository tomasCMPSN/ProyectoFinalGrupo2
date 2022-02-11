import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TurnosTable = () => {
    return (
        <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1>Turnos asignados:</h1>
            <Link to='/turnoscreate'className="btn-yellow text-decoration-none text-center">Asignar un turno </Link>
          </div>
          <hr />
        <input placeholder='Buscar' className='clase'/>
          
          <Table bordered hover responsive className="align-middle mt-3">
          
            <thead>
              <tr>
                <th>👨🏽‍🎤Nombre del dueño</th>
                <th>🐶Nombre del paciente</th>
                <th>👩🏻‍⚕️Veterinario</th>
                <th>Especie</th>
                <th>Fecha</th>
                <th>⏰Hora</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
          
       
         
           <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1> No hay turnos asignados por el momento</h1>
          </div> 

  
        </Container>
      </div>
    );
};

export default TurnosTable;