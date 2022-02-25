import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Turnos.css'
import Turno from './Turno'
import TurnoInput from './TurnoInput'


const TurnosTable = ({turnos, DB, getApi}) => {
    return (
        <div>
        <Container className="py-5">
          <div className="d-flex align-items-center justify-content-between">
            <h1 >Turnos asignados:</h1>
          </div>
          <hr />
        
        <article>
            <TurnoInput DB={DB} ></TurnoInput>
        </article>
        
        <div className='d-flex justify-content-end'>
            <Link to='/turnoscreate'className=" form-style-newbtn ">Asignar un turno </Link>
            </div>
            {turnos.length>0 ?
          <Table bordered hover responsive className="table-style mt-3">
          
            <thead>
              <tr>
                <th>🐶 Nombre del paciente</th>
                <th>👩🏻‍⚕️ Veterinario</th>
               <th>📅 Fecha</th>
                <th>Acciones</th>
                 <th>⏰Hora</th>
              </tr>
            </thead>
            <tbody>
            {turnos.map((turno)=> (
              <Turno key={turno.id} turno={turno} DB={DB} getApi={getApi}/>))}
              
             
            </tbody>
          </Table>

          
       :
         
           <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1> No hay turnos asignados por el momento</h1>
          </div> 
}
  
        </Container>
      </div>
    );
};

export default TurnosTable;