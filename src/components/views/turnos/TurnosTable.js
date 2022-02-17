import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Turnos.css'
import Turno from './Turno'


const TurnosTable = ({turnos}) => {
    return (
        <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1 >Turnos asignados:</h1>
          </div>
          <hr />
        <input placeholder='Buscar' className='form-stle-inner mb-5'/>
        <div className='d-flex justify-content-end'>
            <Link to='/turnoscreate'className=" form-style-newbtn ">Asignar un turno </Link>
            </div>
          <Table bordered hover responsive className="table-style mt-3">
          
            <thead>
              <tr>
                <th>🐶 Nombre del paciente</th>
                <th>👨🏽‍🎤 Nombre del dueño</th>
                <th>🆔 DNI</th>
                <th>👩🏻‍⚕️ Veterinario</th>
                <th>🐰 Especie</th>
                {/* <th>📅Fecha</th>
                <th>⏰Hora</th> */}
              </tr>
            </thead>
            <tbody>
            {turnos.map((turnos)=> (
            <Turno key={turnos.dni} turnos={turnos}/>))}
              
             
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