import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import {
  validateNames,
  validateVet,
  validateDate,
} from "../../helpers/ValidateForms";
import "./Turnos.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import TurnoInput from "./TurnoInput";

const TurnosCreate = ({ DB, getApi }) => {
  // States

  const [petName, setPetName] = useState("");
  const [vet, setVet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fechas, setFechas]= useState([])
  // Ref
  const timeRef = useRef()

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

  // UseEffect

  useEffect(() => {
      
    timeRef.current.disabled = true
  
  }, []);

  // Funcion para consultar fechas

  const handleDateChange = async(e) =>{
    setDate(e.target.value);



      try {
        const res = await fetch(DB);
      const resultado = await res.json();
      console.log(resultado);

      setFechas(resultado)
  
      } catch (error) {
        console.log(error);
      }

      const busqueda = fechas.filter((turnos)=> turnos.date===e.target.value);
      console.log(busqueda);



      let horasBuscada =[]

   const buscarHoras = busqueda.map((turno)=>{ 
     
    horasBuscada = timePicker.filter((horas)=> horas !== turno.time )

   })
   console.log(horasBuscada)




    


        
      





    // Consulatr a la base de datos



    // Habilitar el input de horas
    timeRef.current.disabled = false


  }





  //Funcion para crear un turno
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar datos
    if (!validateNames(petName) || !validateVet(vet)) {
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
      }
    });
  };



 




  return (
    <section className="container mt-5 ">
      <article>
        <h1 className="form-style-title ">Administrador de turnos 📝</h1>
      </article>
      <article>
        <TurnoInput></TurnoInput>
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
              type="date"
              className="form-stle-inner"
              placeholder="Ingrese la fecha para el turno dd/mm/yyyy"
              onClick={handleDateChange}
           
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>⏰ Horario </Form.Label>
            <select
            id='time-setter'
            ref={timeRef}
              className="form-stle-inner"
              onChange={({ target }) => setTime(target.value)}
            >
              <option value="">Seleccione un horario</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
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
