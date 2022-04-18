import React from "react";

const Appointment = ({ turno }) => {
  return (
    <tr>
      <td>{turno.petName}</td>

      <td>{turno.vet}</td>

      <td> {turno.date}</td>
      <td> {turno.time}</td>
    </tr>
  );
};

export default Appointment;
