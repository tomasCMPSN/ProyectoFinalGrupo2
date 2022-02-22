import React , {useRef} from "react";
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


const TurnosEdit = ({ DB, getApi }) => {
  // state
  const [turno, setTurno] = useState({});
  //Parametros
  const { id } = useParams();
  // Use ref
  const petNameRef = useRef("");
  const vetRef = useRef("");
  const dateRef = useRef("");
  // Navigate
  const navigate = useNavigate()

  useEffect(async () => {
    try {
      const res = await fetch(`${DB}/${id}`);
      const appointmentAppi = await res.json();
      setTurno(appointmentAppi);
    
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones

    if (!validateNames(petNameRef.current.value) || !validateVet(vetRef.current.value) || !validateDate(dateRef.current.value)) {
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
      date: dateRef.current.value
    }


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
          const res = await fetch(`${DB}/${id}`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(appUpdated)

          });
          if (res.status === 200) {
            Swal.fire(
              "Modificado!",
              "Su turno fue modificado correctamente",
              "success"
            );
            getApi();
            navigate('../../turnostable')



            
            
          }
        } catch (error) {
          console.log(error);
        }
      }
    });


  }
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
              ref ={petNameRef}
              
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
             ref={dateRef}
              className="form-stle-inner"
              defaultValue={turno.date}
              placeholder="Ingrese la fecha para el turno dd/mm/yyyy"
            />
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
