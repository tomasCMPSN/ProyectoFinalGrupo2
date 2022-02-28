import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faUserXmark } from "@fortawesome/free-solid-svg-icons";



const Paciente = ({paciente}) => {
  return (
          <tr>
        <td>{paciente.id} </td>
        <td> {paciente.paciente} </td>
        <td>{paciente.especie} </td>
        <td>{paciente.raza} </td>
        <td>{paciente.duenio} </td>
        <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/paciente/edit/${paciente.id}`} > 
          <FontAwesomeIcon icon={faUserPen} className="btn btn-success mx-2" /> 
          </Link>
          <FontAwesomeIcon icon={faUserXmark} className="btn btn-danger"/>
          
        </div>
      </td>
      </tr>
      
    
  );
};

export default Paciente;