import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  validateNames,
  validateVet,
  validateDate,
} from "../../helpers/ValidateForms";
import "./Turnos.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import Time from "./Time";

const TurnosCreate = ({ DB, getApi, DBP }) => {
  // States

  const [petName, setPetName] = useState("");
  const [vet, setVet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //State para trabajar fechas
  const [turnos, setTurnos] = useState([]);
  const [horas, setHoras] = useState([]);

  // State para dni
  const [dniBuscado, setDniBuscado] = useState("");
  const [datosP, setDatosP] = useState([]);

  // Ref
  const timeRef = useRef("");
  const martaRef = useRef("");
  const ignacioRef = useRef("");
  const vetRef = useRef("");
  const nameRef = useRef("");
  const dateRef = useRef("");

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
    dateRef.current.disabled = true;
    nameRef.current.disabled = true;
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

  // Funcio para buscar dni

  useEffect(async () => {
    try {
      const res = await fetch(DBP);
      const resultado = await res.json();
      setDatosP(resultado);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const buscarDni = datosP.filter((paciente) => paciente.dni === dniBuscado);

    console.log(buscarDni);
    console.log(dniBuscado);
    console.log(buscarDni.length);

    if (buscarDni.length === 1) {
      dateRef.current.disabled = false;
      nameRef.current.disabled = false;

      alert('Cliente encontrado. Ya puede asignarle un turno.')
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          "No encontramos ningun paciente con ese dni. Registrelo en el administrador de pacientes.",
      });
    }
  };

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
    } else {
      martaRef.current.disabled = false;
    }

    if (filtradovet2.length >= 8) {
      ignacioRef.current.disabled = true;
    } else {
      ignacioRef.current.disabled = false;
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
    // if (!validateNames(petName) || !validateVet(vet) || !validateDate(date)) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Ingreso algun dato incorrecto, por favor revise el formulario",
    //   });
    //   return;
    // }

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

          console.log(res);
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
        console.log(newAppointment.time);
      }
    });
  };

  return (
    <section className="container mt-5 ">
      <article className="d-flex align-items-center justify-content-between">
        <h1 >Administrador de turnos 📝</h1>
        <Link 
            to="/turnostable"
            className="btn-addback text-decoration-none text-center ms-5"
          >
            Volver a Turnos
          </Link>
        <hr />
      </article>
      <article>
        <p className='form-style-paragraph'>
          Para poder asignar turnos, el paciente debe estar registrado en
          nuestra pagina de adiministrador de pacientes. Ingrese el numero de DNI para buscarlo en la base de datos:
        </p>
      </article>

      <article >
        <Form onSubmit={handleSearchSubmit} className='d-flex my-5 justify-content-center'>
          <input
            className=" form-style-input-search"
            type="text"
            placeholder="Ingrese dni del dueño"
            onChange={(e) => setDniBuscado(e.target.value)}
          />
          <button className='form-style-btn-search'>🔍</button>
        </Form>
      </article>

      <article className="d-flex justify-content-center mb-5 ">
        <Form className="mb-5 form_style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>🐶 Nombre del paciente*</Form.Label>
            <input
              ref={nameRef}
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese nombre de la mascota"
              onChange={(e) => setPetName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>📅 Fecha </Form.Label>
            <input
              ref={dateRef}
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
                Dra. Marta Minujin
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
              <option value="seleccione">Seleccione una opcion</option>
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
