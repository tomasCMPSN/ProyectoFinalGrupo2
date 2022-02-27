import React from 'react';

const Paciente = ({paciente}) => {
  return (
          <tr>
        <td>{paciente.legajo} </td>
        <td> {paciente.paciente} </td>
        <td>{paciente.especie} </td>
        <td>{paciente.raza} </td>
        <td>{paciente.dueño} </td>
      </tr>
    
  );
};

export default Paciente;