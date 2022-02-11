import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TurnosTable = () => {
    return (
        <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1 >Turnos asignados:</h1>
          </div>
          <hr />
        <input placeholder='Buscar' className='form-stle-inner'/>
            <Link to='/turnoscreate'className=" form-style-btn text-decoration-none text-center d-flex justify-content-center my-3 ">Asignar un turno </Link>
          
          <Table bordered hover responsive className="table-style mt-3">
          
            <thead>
              <tr>
                <th>🐶Nombre del paciente</th>
                <th>👨🏽‍🎤Nombre del dueño</th>
                <th>👩🏻‍⚕️Veterinario</th>
                <th>🐰Especie</th>
                <th>📅Fecha</th>
                <th>⏰Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Firulais</td>
                <td>Marta</td>
                <td>Dra. Emilse Arias</td>
                <td>Perro</td>
                <td>07/03/2022</td>
                <td>18:30</td>
              </tr>
              
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