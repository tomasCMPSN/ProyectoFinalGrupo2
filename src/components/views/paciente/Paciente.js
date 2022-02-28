import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';



const Paciente = ({paciente, DBP,getPatient}) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#56ced6",
      cancelButtonColor: "#ffc872",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${DBP}/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            
          });
          if (res.status === 200) {
            Swal.fire(
              "Eliminado!",
              "Paciente eliminado correctamente",
              "success"
            );
            getPatient();
           
          }
        } catch (error) {
          console.log(error);
        }
      }
    });

  }
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
         
          <FontAwesomeIcon icon={faUserXmark} className="btn btn-danger " onClick={() =>handleDelete(paciente.id)}/>
          
        </div>
      </td>
      </tr>
      
    
  );
};

export default Paciente;