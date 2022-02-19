import React from "react";



const Turno = ({ turnos }) => {
  return (

      <tr>
        <td>{turnos.petName}</td>
        <td>{turnos.name}</td>
        <td>{turnos.dni}</td>
        <td>{turnos.vet}</td>
        <td> {turnos.specie}</td>
        <td> {turnos.date}</td>
        
      </tr>
 
  );
};

export default Turno;
