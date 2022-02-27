import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  validateNames,
  validateVet,
  validateTime,
  validateDate,
} from "../../helpers/ValidateForms";
import "./Turnos.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Time from "./Time";

const TurnosCreate = ({ DB, getApi }) => {
  // States

  const [petName, setPetName] = useState("");
  const [vet, setVet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //State para trabajar fechas
  const [turnos, setTurnos] = useState([]);
  const [horas, setHoras] = useState([]);
  // Ref
  const timeRef = useRef();
  const martaRef = useRef();
  const ignacioRef = useRef();
  const vetRef = useRef();

  //Use navigate
  const navigate = useNavigate();

  // Arreglo de horarios

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

  // veterinarios
  const marta = "Dra Marta Minujin";
  const ignacio = "Dr Jorge Ignacio";

  // UseEffect

  useEffect(() => {
    timeRef.current.disabled = true;
    vetRef.current.disabled = true;
  }, []);

  useEffect(async () => {
    try {
      const res = await fetch(DB);
      const resultado = await res.json();
      // Guardamos la db en un state
      setTurnos(resultado);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDateChange = (e) => {
    // Realizamos filtrado de fecha
    const busquedaFechas = turnos.filter(
      (fechas) => fechas.date === e.target.value
    );
    

    // Buscamos por veterinario en esa fecha
    const buscarveterio = busquedaFechas.map((turno) => turno.vet);
    console.log(buscarveterio);

    const filtradovet1 = buscarveterio.filter((buscada) => {
      return buscada === marta;
    });
    console.log(filtradovet1);

    const filtradovet2 = buscarveterio.filter((buscado) => {
      return buscado === ignacio;
    });
    console.log(filtradovet2);

    if (filtradovet1.length >= 8) {
      martaRef.current.disabled = true;
    } else if (filtradovet2.length >= 8) {
      ignacioRef.current.disabled = true;
    }

    // Buscammos horas disponibles para ese dia
    const buscarHoras = busquedaFechas.map((turno) => turno.time);
    const filtradoHoras = timePicker.filter(
      (hora) => !buscarHoras.includes(hora)
    );

    setHoras(filtradoHoras);

    //  Habilitar el input de horas
    timeRef.current.disabled = false;
    vetRef.current.disabled = false;
  };

  //Funcion para crear un turno
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (!validateNames(petName) || !validateVet(vet) || !validateDate(date)  ) {
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
      time,
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
        console.log(newAppointment.time)
      }
    });
  };

  return (
    <section className="container mt-5 ">
      <article>
        <h1 className="form-style-title ">Administrador de turnos 📝</h1>
      </article>
     
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>📅 Fecha </Form.Label>
            <input
              type="date"
              className="form-stle-inner"
              placeholder="Ingrese la fecha para el turno dd/mm/yyyy"
              onBlur={handleDateChange}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>👩🏻‍⚕️ Veterinario*</Form.Label>
            <select
              ref={vetRef}
              className="form-stle-inner"
              onChange={({ target }) => setVet(target.value)}
            >
              <option>Seleccione un profesional </option>

              <option ref={ignacioRef} value="Dr Jorge Ignacio">
                Dr. Jorge Ignacio
              </option>
              <option ref={martaRef} value="Dra Marta Minujin">
                Dra. Marta Minujin{" "}
              </option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>⏰ Horario </Form.Label>

            <select
              ref={timeRef}
              className="form-stle-inner"
              onChange={({ target }) => setTime(target.value)}
            >

            
              
              <option value='s'  >Seleccione una opcion</option>
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

export default TurnosCreate;
