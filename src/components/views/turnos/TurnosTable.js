import React, { useEffect } from "react";
import { Container, Row, Table , Breadcrumb} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Turnos.css";
import Turno from "./Turno";

const TurnosTable = ({ turnos, DB, getApi }) => {
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
      <Container className="py-2">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">
          Administrador
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Turnos asignados</Breadcrumb.Item>
      </Breadcrumb>
      
      <article className="title-style-form">
        <h1 className="title-h1">Turnos asigandos</h1>
        <hr />
      </article>
        <article className="d-flex justify-content-end">
        <Link to="/turnoscreate" className="my-2 ">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text ml-5">Nuevo turno</span>
          </button>
        </Link>
      </article>

         
    
        {turnos.length > 0 ? (
          <Table bordered hover responsive className="table-style mt-3">
            <thead>
              <tr>
                <th>🐶 Nombre del paciente</th>
                <th>👩🏻‍⚕️ Veterinario</th>
                <th>📅 Fecha</th>
                <th>⏰Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <Turno key={turno._id} turno={turno} DB={DB} getApi={getApi} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="no-products-found d-flex align-items-center justify-content-center">
            <h1> No hay turnos asignados por el momento</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default TurnosTable;
