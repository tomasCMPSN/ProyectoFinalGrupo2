import React ,{useEffect}from "react";
import { Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Paciente from "./Paciente";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faHouseUser } from "@fortawesome/free-solid-svg-icons";
import "./Paciente.css";

const PacienteTable = ({ patients, DBP , getPatient}) => {

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
    <div>
      <Container className="py-5 media-patient ">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Pacientes</h1>

          <Row>
<div>
<Link 
          to="/admin">

          <FontAwesomeIcon icon={faHouseUser}
            className="btn-addplus text-decoration-none text-center"
            />        
            </Link>
</div>

          <div >
              <Link 
          to="/paciente/create">

          <FontAwesomeIcon icon={faUserPlus}
            className="btn-addplus text-decoration-none text-center"
            />        
            </Link>
          
              </div>
            </Row>
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
              {patients.map((paciente)=> <Paciente key={paciente._id} paciente={paciente} DBP={DBP} getPatient={getPatient}/> )}
          </tbody>
          
        </Table>
      </Container>
    </div>
  );
};

export default PacienteTable;
