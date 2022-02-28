import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Paciente from "./Paciente";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./Paciente.css";

const PacienteTable = ({ patients }) => {
  return (
    <div>
      <Container className="py-5 media-patient">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Pacientes</h1>

          <div >
              <Link 
          to="/paciente/create">

          <FontAwesomeIcon icon={faUserPlus}
            className="btn-addplus text-decoration-none text-center"
            />        
            </Link>
          
              </div>
        </div>
        <hr />
        {/* Table of products */}

        <Table bordered hover responsive className="align-middle mt-3 text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Paciente</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Dueño</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {patients.map((paciente)=> <Paciente key={paciente.id} paciente={paciente}/> )}
          </tbody>
          
        </Table>
      </Container>
    </div>
  );
};

export default PacienteTable;
