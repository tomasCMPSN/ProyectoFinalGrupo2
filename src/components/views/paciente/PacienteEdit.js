import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateEmail,
  validateNumber,
  validatePaciente,
} from "../../helpers/ValidateForms";

const PacienteEdit = ({ DBP, getPatient }) => {
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
    try {
      const res = await fetch(`${DBP}/${id}`);
      const patientApi = await res.json();

      setPaciente(patientApi);
    } catch (error) {
        console.log(error);
    }
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
        try {
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
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Ficha Paciente</h1>
          <hr />
          <Link
            to="/paciente/table"
            className="btn-addback text-decoration-none text-center"
          >
            Volver a Pacientes
          </Link>
        </div>
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Paciente*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.paciente}
              ref={pacienteRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Especie*</Form.Label>
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
            <Form.Label>Raza*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.raza}
              ref={razaRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Edad*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.edad}
              ref={edadRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Peso*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Gr"
              defaultValue={paciente.peso}
              ref={pesoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Dueño*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.duenio}
              ref={duenioRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Dni*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.dni}
              ref={dniRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.telefono}
              ref={telefonoRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              defaultValue={paciente.email}
              ref={emailRef}
            />
          </Form.Group>

          <div className="text-end">
            <button className="btn btn-addsave">Guardar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default PacienteEdit;
