import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faUserXmark } from "@fortawesome/free-solid-svg-icons";

const Turno = ({ turno, DB, getApi }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar este turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#56ced6",
      cancelButtonColor: "#ffc872",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${DB}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire(
              "Eliminado",
              "Su turno fue eliminado correctamente",
              "success"
            );
            getApi();
          }
          
 
        
        
        } catch (error) {
          console.log(error)
          
        }


  }})
}
    


  return (
    <tr>
      <td>{turno.petName}</td>

      <td>{turno.vet}</td>

      <td> {turno.date}</td>
      <td> {turno.time}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/turnosedit/${turno.id}`}>
          <FontAwesomeIcon icon={faUserPen} className="btn btn-success mx-2" /> 
          </Link>
          <FontAwesomeIcon icon={faUserXmark} className="btn btn-danger " onClick={() =>handleDelete(turno.id)}/>
        </div>
      </td>
    </tr>
  );
};

export default Turno;
