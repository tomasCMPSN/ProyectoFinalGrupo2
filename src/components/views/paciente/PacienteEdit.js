import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Breadcrumb } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateEmail,
  validateNumber,
  validatePaciente,
} from "../../helpers/ValidateForms";

const PacienteEdit = ({ DBP, getPatient }) => {

  const redirect = useNavigate();
  const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;

  const checkSession=()=>{
    if (!session) {
      redirect("/Login");
    }      
  }

  useEffect(()=>{
    checkSession();
  },[]);

  // state
  const [paciente, setPaciente] = useState({});

  //   Parametro
  const { id } = useParams();

  //   UseRef
  const pacienteRef = useRef("");
  const razaRef = useRef("");
  const duenioRef = useRef("");
  const dniRef = useRef("");
  const emailRef = useRef("");
  const pesoRef = useRef("");
  const telefonoRef = useRef("");
  const edadRef = useRef("");

  //   navigate
  const navigate = useNavigate();

  // useEffect
  useEffect(async () => {
      const res = await fetch(`${DBP}/${id}`);
      const patientApi = await res.json();
      setPaciente(patientApi);
  }, []);

  //   funcion para actulizar los datos
  const handleSubmit = (e) => {
    e.preventDefault();

    //   validaciones
    if (
      !validatePaciente(pacienteRef.current.value) ||
      !validatePaciente(paciente.especie) ||
      !validatePaciente(razaRef.current.value) ||
      !validatePaciente(duenioRef.current.value) ||
      !validateEmail(emailRef.current.value) ||
      !validateNumber(pesoRef.current.value) ||
      !validateNumber(telefonoRef.current.value) || !validateNumber(dniRef.current.value) ||
      !validateNumber(edadRef.current.value)
    ) {
      Swal.fire("Error", "Verificar los datos", "error");
      return;
    }

    const pacienteUpdate = {
      paciente: pacienteRef.current.value,
      especie: paciente.especie,
      raza: razaRef.current.value,
      duenio: duenioRef.current.value,
      dni: dniRef.current.value,
      email: emailRef.current.value,
      peso: pesoRef.current.value,
      telefono: telefonoRef.current.value,
      edad: edadRef.current.value
    }

    Swal.fire({
      title: "Esta seguro que quiere editar este paciente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#56ced6",
      cancelButtonColor: "#ffc872",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
         const res = await fetch(`${DBP}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(pacienteUpdate),
          });
          if (res.status === 200) {
            Swal.fire(
              "Modificado!",
              "Paciente modificado correctamente",
              "success"
            );
            getPatient();
            navigate("/paciente/table");
          }
      }
    });
  };

  return (
    <div>
      <Container >
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Administrador</Breadcrumb.Item>
        <Breadcrumb.Item href="/paciente/table">
          Pacientes
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Editar paciente</Breadcrumb.Item>
      </Breadcrumb>
     
      <article className="title-style-form">
        <h1 className="title-h1">Editar paciente</h1>
        <hr />
      </article>
        {/* Form Product */}
        <article className="d-flex justify-content-center mb-5 ">

        <Form className="mb-5 form_style" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='etiqueta'>🐶 Nombre Paciente*</Form.Label>            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.paciente}
              ref={pacienteRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='etiqueta'>🦄 Especie*</Form.Label>
            <Form.Select
              value={paciente.especie}
              onChange={({ target }) =>
                setPaciente({ ...paciente, especie: target.value })
              }
            >
              <option value="">Selecciona una opción</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Ave">Ave</option>
              <option value="Otros">Otros</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='etiqueta'>🐰 Raza*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.raza}
              ref={razaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className='etiqueta'>🔞 Edad*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.edad}
              ref={edadRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className='etiqueta'>⚖️ Peso*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gr"
              defaultValue={paciente.peso}
              ref={pesoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className='etiqueta'>👩🏽‍🎤 Dueño*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.duenio}
              ref={duenioRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className='etiqueta'>🆔 Dni*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.dni}
              ref={dniRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label className='etiqueta'>📱 Telefono*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.telefono}
              ref={telefonoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='etiqueta'>📩 Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.email}
              ref={emailRef}
            />
          </Form.Group>

          <div className="text-center">
            <button className="btn-carga">Guardar</button>
          </div>
        </Form>
        </article>
      </Container>
    </div>
  );
};

export default PacienteEdit;
