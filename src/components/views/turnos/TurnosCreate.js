import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Breadcrumb } from "react-bootstrap";
import {
  validateNames,
  validateVet,
  validateDate,
  validateTime,
} from "../../helpers/ValidateForms";
import "./Turnos.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

import { FiArrowLeftCircle } from "react-icons/fi";
import Time from "./Time";

const TurnosCreate = ({ DB, getApi, DBP }) => {
  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;

  const checkSession = () => {
    if (!session) {
      redirect("/Login");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

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

  const [horasMarta, setHorasMarta] = useState([]);
  const [horasIgnacio, setHorasIgnacio] = useState([]);
  // Ref
  const timeRef = useRef("");
  const martaRef = useRef("");
  const ignacioRef = useRef("");
  const vetRef = useRef("");
  const nameRef = useRef("");
  const dateRef = useRef("");

  //Use navigate
  const navigate = useNavigate();

  // let horasMarta = []

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
      const res = await fetch(DB);
      const resultado = await res.json();
      // Guardamos la db en un state
      setTurnos(resultado);
  }, []);

  // Funcio para buscar dni

  useEffect(async () => {
      const res = await fetch(DBP);
      const resultado = await res.json();
      setDatosP(resultado);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const buscarDni = datosP.filter((paciente) => paciente.dni === dniBuscado);

    if (buscarDni.length === 1) {
      dateRef.current.disabled = false;
      nameRef.current.disabled = false;

      Swal.fire(
        "Paciente encontrado!",
        "Podes asignar un turno a este paciente",
        "success"
      );
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

    // Nuevo filtrado de veterianrios y horas

    const buscarVeterinario = busquedaFechas.filter((doc) => doc.vet === marta);
    const buscarVeterinario1 = buscarVeterinario.map((horas) => horas.time);
    setHorasMarta(buscarVeterinario1);
    const buscarVeterinarioI = busquedaFechas.filter(
      (doc) => doc.vet === ignacio
    );
    const buscarVeterinario2 = buscarVeterinarioI.map((horas) => horas.time);
    setHorasIgnacio(buscarVeterinario2);

    if (buscarVeterinario.length >= 8) {
      martaRef.current.disabled = true;
    } else {
      martaRef.current.disabled = false;
    }
    if (buscarVeterinarioI.length >= 8) {
      ignacioRef.current.disabled = true;
    } else {
      ignacioRef.current.disabled = false;
    }

    //  Habilitar el input de horas

    vetRef.current.disabled = false;
  };

  const handleVetChange = (e) => {
    if (e.target.value === marta) {
      const vet1filtrado = timePicker.filter(
        (hora) => !horasMarta.includes(hora)
      );
      setHoras(vet1filtrado);
    } else if (e.target.value === ignacio) {
      const vet2filtrado = timePicker.filter(
        (hora) => !horasIgnacio.includes(hora)
      );
      setHoras(vet2filtrado);
    }

    timeRef.current.disabled = false;
  };

  //Funcion para crear un turno
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (
      !validateNames(petName) ||
      !validateVet(vet) ||
      !validateDate(date) ||
      !validateTime(time)
    ) {
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
      }
    });
  };

  return (
    <section className="container  ">
     
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Administrador</Breadcrumb.Item>
        <Breadcrumb.Item href="/turnostable">
          Turnos
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Asignar turnos</Breadcrumb.Item>
      </Breadcrumb>
      <article className="botones-back">
        <Link to="/paciente/table" className="my-2 ">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Ir a pacientes</span>
          </button>
        </Link>
  
      </article>
      <article className="title-style-form">
        <h1 className="title-h1">Administrador de turnos</h1>
        <hr />
      </article>
      <article>
        <p className="form-style-paragraph">
          Para poder asignar turnos, el paciente debe estar registrado en
          nuestra pagina de adiministrador de pacientes. Ingrese el numero de
          DNI para buscarlo en la base de datos:
        </p>
      </article>

      <article>
        <Form
          onSubmit={handleSearchSubmit}
          className="d-flex my-5 justify-content-center"
        >
          <Form.Control
            className=" form-style-input-search"
            type="text"
            placeholder="Ingrese dni del dueño"
            onChange={(e) => setDniBuscado(e.target.value)}
          />
          <button className="form-style-btn-search">🔍</button>
        </Form>
   
      
      </article>

      <article className="d-flex justify-content-center mb-5 ">
        <Form className="mb-5 form_style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="etiqueta">
              🐶 Nombre del paciente*
            </Form.Label>
            <Form.Control
              ref={nameRef}
              className="form-stle-inner"
              type="text"
              placeholder="Ingrese nombre de la mascota"
              onChange={(e) => setPetName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="etiqueta">📅 Fecha </Form.Label>
            <Form.Control
              ref={dateRef}
              type="date"
              className="form-stle-inner"
              placeholder="Ingrese la fecha para el turno dd/mm/yyyy"
              onBlur={handleDateChange}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="etiqueta">👩🏻‍⚕️ Veterinario*</Form.Label>
            <Form.Select
              ref={vetRef}
              className="form-stle-inner"
              onChange={({ target }) => setVet(target.value)}
              onBlur={handleVetChange}
            >
              <option>Seleccione un profesional </option>

              <option ref={ignacioRef} value="Dr Jorge Ignacio">
                Dr. Jorge Ignacio
              </option>
              <option ref={martaRef} value="Dra Marta Minujin">
                Dra. Marta Minujin
              </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="etiqueta">⏰ Horario </Form.Label>

            <Form.Select
              ref={timeRef}
              className="form-stle-inner"
              onChange={({ target }) => setTime(target.value)}
            >
              <option value="seleccione">Seleccione una opcion</option>
              {horas.map((hora, index) => {
                return <Time hora={hora} key={index} />;
              })}
            </Form.Select>
          </Form.Group>

          <div className="text-center mt-4">
            <button className="btn-carga text-decoration-none ">
              Cargar 🐾
            </button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default TurnosCreate;
