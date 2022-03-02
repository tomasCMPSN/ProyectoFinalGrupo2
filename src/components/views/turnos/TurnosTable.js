import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Turnos.css";
import Turno from "./Turno";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus,faHouseUser } from "@fortawesome/free-solid-svg-icons";

const TurnosTable = ({ turnos, DB, getApi }) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Turnos asignados:</h1>
          <Row>


          <div>
<Link 
          to="/admin">

          <FontAwesomeIcon icon={faHouseUser}
            className="btn-addplus text-decoration-none text-center"
            />        
            </Link>
</div>
<div>
<Link 
          to="/turnoscreate">

          <FontAwesomeIcon icon={faCalendarPlus}
            className="btn-addplus text-decoration-none text-center"
            />        
            </Link>
</div>

          </Row>
        </div>
        <hr />
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
