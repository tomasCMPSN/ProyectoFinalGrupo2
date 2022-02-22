import React from "react";
import { Link } from "react-router-dom";

const Turno = ({ turno }) => {

  
  return (
    <tr>
      <td>{turno.petName}</td>

      <td>{turno.vet}</td>

      <td> {turno.date}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/turnosedit/${turno.id}`}>Editar</Link>
          <button onClick={()=>{handleDelete()}}>Borrar</button>
        </div>
      </td>
    </tr>
  );
};

export default Turno;
