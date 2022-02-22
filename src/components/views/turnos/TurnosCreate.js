import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  validateNames,
  validateVet,
  validateDate,
} from "../../helpers/ValidateForms";
import "./Turnos.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TurnosCreate = ({ DB, getApi }) => {
  // States

  const [petName, setPetName] = useState("");
  const [vet, setVet] = useState("");
  const [date, setDate] = useState("");

  //Use navigate
  const navigate = useNavigate();

  //Funcion para crear un turno
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (!validateNames(petName) || !validateVet(vet) || !validateDate(date)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingreso algun dato incorrecto, por favor revise el formulario",
      });
      return;
    }

    // Enviamos los datos para gaurdarlos

    const newAppointment = {
      petName,

      vet,

      date,
    };

    Swal.fire({
      title: "Esta seguro que quiere asignar este turno?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#56ced6",
      cancelButtonColor: "#ffc872",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(DB, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAppointment),
          });
          if (res.status === 201) {
            Swal.fire(
              "Creado!",
              "Su turno fue asignado correctamente",
              "success"
            );
            getApi();
            navigate("../turnostable");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
<<<<<<< HEAD
    <section className='container mt-5  '>
        <article className="text-center" >
        <h1 className='form-style-title '>Administrador de turnos 📝</h1>
        </article>
        
     
     <article className='d-flex justify-content-center mb-5 ' >
=======
    <section className="container mt-5 ">
      <article>
        <h1 className="form-style-title ">Administrador de turnos 📝</h1>
      </article>
>>>>>>> adminTurnos

      <article className="d-flex justify-content-center mb-5 ">
        <Form className="mb-5 form_style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>🐶 Nombre del paciente*</Form.Label>
            <input
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese nombre de la mascota"
              onChange={(e) => setPetName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>👩🏻‍⚕️ Veterinario*</Form.Label>
            <select
              className="form-stle-inner"
              onChange={({ target }) => setVet(target.value)}
            >
              <option value="">Seleccione un profesional </option>

              <option value="Dr Jorge Ignacio">Dr. Jorge Ignacio</option>
              <option value="Dra Marta Minujin">Dra. Marta Minujin </option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>📅 Fecha </Form.Label>
            <input
              className="form-stle-inner"
              placeholder="Ingrese la fecha para el turno dd/mm/yyyy"
              onChange={({ target }) => setDate(target.value)}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>⏰ Horario </Form.Label>
            <select className='form-stle-inner' >
              <option value="">Seleccione un horario</option>
              <option value="">08:00</option>
              <option value="">08:30</option>
              <option value="">09:00</option>
              <option value="">09:30</option>
              <option value="">10:00</option>
              <option value="">10:30</option>
              <option value="">11:00</option>
              <option value="">11:30</option>
              <option value="">12:00</option>
              <option value="">12:30</option>
              <option value="">13:00</option>
              <option value="">17:00</option>
              <option value="">17:30</option>
              <option value="">18:00</option>
              <option value="">18:30</option>
              <option value="">19:00</option>
              <option value="">19:30</option>
              <option value="">20:00</option>
       
              
            </select>
 
           
          </Form.Group> */}

          <div className="text-center mt-4">
            <button className="form-style-btn ">Cargar 🐾</button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default TurnosCreate;
