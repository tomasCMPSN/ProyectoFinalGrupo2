import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import "./Turnos.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  validateNames,
  validateVet,
  validateDate,
} from "../../helpers/ValidateForms";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Time from "./Time";

const TurnosEdit = ({ DB, getApi }) => {
  // state
  const [turno, setTurno] = useState({});
  const [date, setDate] = useState("");

  const [turnos, setTurnos] = useState([]);
  const [horas, setHoras] = useState([]);

  const timePicker = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  //Parametros
  const { id } = useParams();
  // Use ref
  const petNameRef = useRef("");
  const vetRef = useRef("");
  const dateRef = useRef("");
  const timeRef = useRef("");
  // Navigate
  const navigate = useNavigate();

  useEffect(async () => {
    try {
      const res = await fetch(`${DB}/${id}`);
      const appointmentAppi = await res.json();
      setTurno(appointmentAppi);
      console.log(appointmentAppi);
      console.log(turno.time);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDateChange = async (e) => {
    // Traemos  la base de datos

    try {
      const res = await fetch(DB);
      const resultado = await res.json();

      setTurnos(resultado);
    } catch (error) {
      console.log(error);
    }

    // Filtramos de la db, las fechas que coincidan con el valor guardado en el state de fechas
    const busquedaFechas = turnos.filter(
      (fechas) => fechas.date === e.target.value
    );
    const buscarHoras = busquedaFechas.map((turno) => turno.time);
    const filtradoHoras = timePicker.filter(
      (hora) => !buscarHoras.includes(hora)
    );
    setHoras(filtradoHoras);

    console.log(filtradoHoras);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones

    if (
      !validateNames(petNameRef.current.value) ||
      !validateVet(vetRef.current.value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingreso algun dato incorrecto, por favor revise el formulario",
      });
      return;
    }

    const appUpdated = {
      petName: petNameRef.current.value,
      vet: vetRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
    };

    Swal.fire({
      title: "Esta seguro que quiere editar este turno?",
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
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(appUpdated),
          });
          if (res.status === 200) {
            Swal.fire(
              "Modificado!",
              "Su turno fue modificado correctamente",
              "success"
            );
            getApi();
            navigate("../../turnostable");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return (
    <section className="container mt-5 ">
      <article>
        <h1 className="form-style-title ">Editor de turnos 📝</h1>
      </article>

      <article className="d-flex justify-content-center mb-5 ">
        <Form className="mb-5 form_style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>🐶Nombre del paciente*</Form.Label>
            <input
              className="form-stle-inner"
              type="text"
              defaultValue={turno.petName}
              placeholder="Puki"
              ref={petNameRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>👩🏻‍⚕️Veterinario*</Form.Label>
            <select
              ref={vetRef}
              className="form-stle-inner"
              value={turno.vet}
              onChange={({ target }) =>
                setTurno({ ...turno, vet: target.value })
              }
            >
              <option value="">Seleccione un profesional </option>

              <option value="Dr Jorge Ignacio">Dr. Jorge Ignacio</option>
              <option value="Dra Marta Minujin">Dra. Marta Minujin </option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>📅 Fecha </Form.Label>
            <input
              type="date"
              ref={dateRef}
              className="form-stle-inner"
              defaultValue={turno.date}
              placeholder="Ingrese la fecha para el turno dd/mm/yyyy"
              onChange={handleDateChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>⏰ Horario </Form.Label>

            <select
              ref={timeRef}
              className="form-stle-inner"
           
            >
              <option value="">Seleccione una opcion</option>

              {horas.map((hora, index) => {
                return <Time hora={hora} key={index} />;
              })}
            </select>
          </Form.Group>

          <div className="text-center mt-4">
            <button className="form-style-btn ">Cargar 🐾</button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default TurnosEdit;
