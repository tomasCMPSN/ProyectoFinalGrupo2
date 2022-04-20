import React, {useEffect} from "react";
import { Container, Table } from "react-bootstrap";
import Cards from "./Card/Cards";
import {useNavigate} from 'react-router-dom'
import { IoMdImage } from "react-icons/io";
import Appointment from './Appointment'


const AdminHome = ({getApi, DB, turnos}) => {

  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;

  const checkSession=()=>{
    if (!session) {
      redirect("/Login");
    }      
  }

  useEffect(()=>{
    checkSession();
  },[]);

  return (
    <Container className="mb-1 mt-5">
       <article className="title-style-form">
        <h1 className="title-h1">Turnos asignados:</h1>
        <hr />
      </article>
     
       {turnos.length > 0 ? (
          <Table bordered hover responsive className="table-style mt-3">
            <thead>
              <tr>
                <th>🐶 Nombre del paciente</th>
                <th>👩🏻‍⚕️ Veterinario</th>
                <th>📅 Fecha</th>
                <th>⏰Hora</th>
            
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <Appointment key={turno._id} turno={turno} DB={DB} getApi={getApi} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1> No hay turnos asignados por el momento</h1>
          </div>
        )}
    
      <div className="media-card">
       
        <Cards></Cards>
      </div>
    </Container>
  );
};

export default AdminHome;
