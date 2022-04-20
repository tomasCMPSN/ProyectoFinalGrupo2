import React, { useEffect } from "react";
import { Container, Row, Table, Breadcrumb } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Paciente from "./Paciente";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import "./Paciente.css";

const PacienteTable = ({ patients, DBP, getPatient }) => {
  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;

  const checkSession = () => {
    if (!session) {
      redirect("/Login");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <div className='style-appointment'>
      <Container className=" media-patient ">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">
          Administrador
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Lista de pacientes</Breadcrumb.Item>
      </Breadcrumb>
      
      <article className="title-style-form">
        <h1 className="title-h1">Lista de pacientes</h1>
        <hr />
      </article>
      <article className="boton-add">
        <Link to="/paciente/create" className="my-2 ">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text ml-5">Agregar paciente</span>
          </button>
        </Link>
      </article>


        <Table 
          bordered
          hover
          responsive
          className="table-style mt-3"
        >
          <thead>
            <tr>
        
              <th>🐶 Paciente</th>
              <th>🦄 Especie</th>
              <th>🐰 Raza</th>
              <th>👩🏽‍🎤 Dueño</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((paciente) => (
              <Paciente
                key={paciente._id}
                paciente={paciente}
                DBP={DBP}
                getPatient={getPatient}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PacienteTable;
