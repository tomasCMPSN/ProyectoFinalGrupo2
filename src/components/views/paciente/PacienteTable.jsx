import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Paciente from "./Paciente";
import "./Paciente.css";

const PacienteTable = ({ patients }) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Pacientes</h1>
          <Link
            to="/paciente/create"
            className="btn-yellow text-decoration-none text-center"
          >
            Nuevo Paciente
          </Link>
        </div>
        <hr />
        {/* Table of products */}

        <Table bordered hover responsive className="align-middle mt-3">
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
              {patients.map((paciente)=> <Paciente paciente={paciente}/> )}
          </tbody>
          
        </Table>
      </Container>
    </div>
  );
};

export default PacienteTable;
